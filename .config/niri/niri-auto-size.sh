#!/usr/bin/env bash
#
# niri-auto-maximize.sh
#
# Hyprland-style "solo window = full width" behaviour for the niri
# scrollable-tiling Wayland compositor.
#
#   - A workspace with exactly ONE window forces that window's column
#     to SOLO_WIDTH (default: 100%).
#   - The moment a SECOND window appears on that workspace, the
#     previously-solo window is put back to NORMAL_WIDTH (default: 50%).
#     Every other window is left completely untouched, in line with
#     niri's own design principle that opening a window never resizes
#     existing ones.
#
# Changelog 1.1.0:
#   - Only reconcile workspaces that are currently *visible* (active on
#     some output). Previously, focusing a solo window on an inactive
#     workspace yanked the user to that workspace (workspace-switch
#     animation) and back -- the main source of the jarring animation.
#   - Also reconcile on WorkspaceActivated, so a workspace you switch
#     to gets its solo window maximized right away.
#   - Skip the focus-window call when the target window is already
#     focused (avoids useless IPC round-trips).
#
# Repository : https://github.com/<YOUR_USER>/niri-auto-maximize
# License    : MIT
#
set -uo pipefail

readonly SCRIPT_NAME="niri-auto-maximize"
readonly VERSION="1.1.0"

# ----------------------------------------------------------------------
# Configuration (override via environment variables, see README.md)
# ----------------------------------------------------------------------
SOLO_WIDTH="${NIRI_AUTOMAX_SOLO_WIDTH:-100%}"
NORMAL_WIDTH="${NIRI_AUTOMAX_NORMAL_WIDTH:-50%}"
LOG_LEVEL="${NIRI_AUTOMAX_LOG_LEVEL:-info}"           # error|warn|info|debug
RECONNECT_DELAY="${NIRI_AUTOMAX_RECONNECT_DELAY:-2}"  # seconds
SETTLE_DELAY="${NIRI_AUTOMAX_SETTLE_DELAY:-0}"        # workaround knob, seconds
LOCK_FILE="${NIRI_AUTOMAX_LOCK_FILE:-${XDG_RUNTIME_DIR:-/tmp}/${SCRIPT_NAME}.lock}"
# ----------------------------------------------------------------------

usage() {
    cat <<EOF
${SCRIPT_NAME} ${VERSION}
Hyprland-style "solo window = full width" behaviour for niri.

Usage:
  ${SCRIPT_NAME} [-h|--help] [-v|--version]

The script watches niri's IPC event stream. Whenever a workspace ends up
with exactly one window, that window's column is set to SOLO_WIDTH
(default 100%). As soon as a second window appears on that workspace, the
previously-solo window is restored to NORMAL_WIDTH (default 50%); every
other window is left untouched.

Environment variables:
  NIRI_AUTOMAX_SOLO_WIDTH       Width applied to a lone window   (default: 100%)
  NIRI_AUTOMAX_NORMAL_WIDTH     Width restored on the 2nd window (default: 50%)
  NIRI_AUTOMAX_LOG_LEVEL        error|warn|info|debug            (default: info)
  NIRI_AUTOMAX_RECONNECT_DELAY  Seconds before reconnecting the event
                                 stream after it drops             (default: 2)
  NIRI_AUTOMAX_SETTLE_DELAY     Extra sleep before each reconcile pass,
                                 only useful as a workaround         (default: 0)
  NIRI_AUTOMAX_LOCK_FILE        Path to the single-instance lock file

Repository: https://github.com/<YOUR_USER>/niri-auto-maximize
EOF
}

case "${1:-}" in
    -h | --help)
        usage
        exit 0
        ;;
    -v | --version)
        echo "${SCRIPT_NAME} ${VERSION}"
        exit 0
        ;;
esac

# ----------------------------------------------------------------------
# Logging
# ----------------------------------------------------------------------
declare -A LOG_LEVELS=([error]=0 [warn]=1 [info]=2 [debug]=3)
LOG_LEVEL_N="${LOG_LEVELS[$LOG_LEVEL]:-2}"

log() {
    local level="$1"
    shift
    local n="${LOG_LEVELS[$level]:-2}"
    ((n <= LOG_LEVEL_N)) || return 0
    printf '%(%H:%M:%S)T [%s] [%s] %s\n' -1 "$SCRIPT_NAME" "$level" "$*" >&2
}

# ----------------------------------------------------------------------
# Dependency checks
# ----------------------------------------------------------------------
for bin in niri jq flock; do
    if ! command -v "$bin" >/dev/null 2>&1; then
        echo "[${SCRIPT_NAME}] required dependency not found in PATH: ${bin}" >&2
        exit 1
    fi
done

# ----------------------------------------------------------------------
# Single-instance lock (avoid two copies fighting over window widths)
# ----------------------------------------------------------------------
exec 9>"$LOCK_FILE" || {
    echo "[${SCRIPT_NAME}] cannot open lock file: ${LOCK_FILE}" >&2
    exit 1
}
if ! flock -n 9; then
    echo "[${SCRIPT_NAME}] another instance is already running (lock: ${LOCK_FILE})" >&2
    exit 1
fi

# ----------------------------------------------------------------------
# State: workspace_id -> id of the window currently forced to SOLO_WIDTH
# ----------------------------------------------------------------------
declare -A solo_state=()

# Resize a window: niri's actions operate on the *focused* column, so we
# must focus the target window first (unless it is already focused).
resize_window() {
    local id="$1" width="$2" already_focused="${3:-false}"
    if [[ "$already_focused" != "true" ]]; then
        if ! niri msg action focus-window --id "$id" >/dev/null 2>&1; then
            log warn "window ${id} vanished before it could be resized"
            return 1
        fi
    fi
    if ! niri msg action set-column-width "$width" >/dev/null 2>&1; then
        log warn "failed to set column width '${width}' for window ${id}"
        return 1
    fi
    return 0
}

# Reconcile desired state (solo window -> SOLO_WIDTH, everything else
# untouched) against niri's actual current state. Safe to call as often
# as needed: it only acts on workspaces whose status actually changed.
reconcile() {
    ((SETTLE_DELAY == 0)) 2>/dev/null || sleep "$SETTLE_DELAY"

    local windows_json
    if ! windows_json=$(niri msg -j windows 2>/dev/null); then
        log warn "could not query 'niri msg -j windows'; will retry on the next event"
        return
    fi
    jq -e . >/dev/null 2>&1 <<<"$windows_json" || {
        log warn "niri returned invalid JSON for 'windows'; skipping this pass"
        return
    }

    # IMPORTANT: only ever touch workspaces that are *visible* right now.
    # Focusing a window on an inactive workspace would switch to it (and
    # back), which is exactly the jarring animation this script tries to
    # avoid. Inactive workspaces are reconciled later, when the user
    # switches to them (WorkspaceActivated event).
    local active_workspaces
    if ! active_workspaces=$(niri msg -j workspaces 2>/dev/null \
            | jq -r '[.[] | select(.is_active == true) | .id] | join(" ")'); then
        log warn "could not query 'niri msg -j workspaces'; will retry on the next event"
        return
    fi

    local focused_before
    focused_before=$(jq -r '([.[] | select(.is_focused == true)] | first).id // empty' <<<"$windows_json")

    local -A current_solo=()
    local ws count wid
    while IFS=$'\t' read -r ws count wid; do
        [[ -n "$ws" ]] || continue
        [[ " ${active_workspaces} " == *" ${ws} "* ]] || continue
        [[ "$count" -eq 1 ]] && current_solo["$ws"]="$wid"
    done < <(jq -r '
        [.[] | select(.workspace_id != null)]
        | group_by(.workspace_id)
        | .[]
        | "\(.[0].workspace_id)\t\(length)\t\(.[0].id)"
    ' <<<"$windows_json")

    local changed=0 ws_id win_id

    # Workspaces that just became solo (or are solo but not yet applied).
    for ws_id in "${!current_solo[@]}"; do
        win_id="${current_solo[$ws_id]}"
        if [[ "${solo_state[$ws_id]:-}" != "$win_id" ]]; then
            log info "workspace ${ws_id}: window ${win_id} is alone -> ${SOLO_WIDTH}"
            if [[ "$win_id" == "$focused_before" ]]; then
                resize_window "$win_id" "$SOLO_WIDTH" true && {
                    solo_state["$ws_id"]="$win_id"
                    changed=1
                }
            else
                resize_window "$win_id" "$SOLO_WIDTH" && {
                    solo_state["$ws_id"]="$win_id"
                    changed=1
                }
            fi
        fi
    done

    # Workspaces that used to have a solo window but no longer do.
    for ws_id in "${!solo_state[@]}"; do
        if [[ -z "${current_solo[$ws_id]:-}" ]]; then
            win_id="${solo_state[$ws_id]}"
            if jq -e --arg id "$win_id" 'any(.[]; (.id | tostring) == $id)' <<<"$windows_json" >/dev/null; then
                log info "workspace ${ws_id}: no longer alone -> restoring window ${win_id} to ${NORMAL_WIDTH}"
                resize_window "$win_id" "$NORMAL_WIDTH" && changed=1
            fi
            unset 'solo_state[$ws_id]'
        fi
    done

    # We had to steal focus to resize columns; give it back so the user
    # never notices we were here.
    if ((changed == 1)) && [[ -n "$focused_before" ]]; then
        niri msg action focus-window --id "$focused_before" >/dev/null 2>&1 || true
    fi
}

cleanup() {
    log info "stopping (signal received)"
    exit 0
}
trap cleanup INT TERM

log info "starting ${SCRIPT_NAME} ${VERSION} (solo=${SOLO_WIDTH}, normal=${NORMAL_WIDTH})"

# Fix up whatever state niri is already in before we saw a single event
# (e.g. the script was (re)started in the middle of a session).
reconcile

while true; do
    log info "connecting to the niri event stream..."
    while IFS= read -r line; do
        [[ -n "$line" ]] || continue

        if ! jq -e . >/dev/null 2>&1 <<<"$line"; then
            log warn "ignoring invalid JSON line from the event stream"
            continue
        fi

        event_type=$(jq -r 'keys_unsorted[0] // empty' <<<"$line")
        case "$event_type" in
            WindowOpenedOrChanged | WindowClosed | WindowsChanged | WorkspaceActivated)
                reconcile
                ;;
            *) : ;;
        esac
    done < <(niri msg -j event-stream)

    log warn "event stream ended (niri restarting?) — reconnecting in ${RECONNECT_DELAY}s"
    sleep "$RECONNECT_DELAY"
done
