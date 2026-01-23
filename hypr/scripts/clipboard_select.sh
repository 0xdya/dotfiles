#!/bin/bash

mapfile -t items < <(cliphist list)

display_items=()
for item in "${items[@]}"; do
    display_items+=("$(echo "$item" | awk '{$1=""; sub(/^ /,""); print}')")
done

selected=$(printf "%s\n" "${display_items[@]}" | fuzzel --dmenu --prompt "Select clipboard item: ")

if [ -n "$selected" ]; then
    for i in "${!display_items[@]}"; do
        if [[ "${display_items[$i]}" == "$selected" ]]; then
            real_id=$(echo "${items[$i]}" | awk '{print $1}')
            break
        fi
    done

    cliphist decode "$real_id" | wl-copy
fi
