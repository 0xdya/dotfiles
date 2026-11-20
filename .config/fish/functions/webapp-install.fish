function webapp-install --description "Turn a website into a desktop app"
    if test (count $argv) -lt 2
        echo "usage: webapp-install NAME URL [ICON_URL_OR_PATH]"
        return 1
    end

    set -l name $argv[1]
    set -l url $argv[2]
    if not string match -qr '^https?://' -- $url
        set url https://$url
    end

    set -l browser chromium
    set -q WEBAPP_BROWSER; and set browser $WEBAPP_BROWSER

    set -l slug (string lower -- $name | string replace -ra '[^a-z0-9]+' '-' | string trim -c '-')
    set -l host (string replace -r '^https?://([^/]+).*' '$1' -- $url)
    set -l origin (string replace -r '^(https?://[^/]+).*' '$1' -- $url)
    set -l icondir ~/.local/share/icons/webapps
    set -l icon $icondir/$slug.png
    set -l desktop ~/.local/share/applications/webapp-$slug.desktop
    mkdir -p $icondir ~/.local/share/applications

    # ---- collect icon candidates ----
    set -l candidates
    if test (count $argv) -ge 3
        set candidates $argv[3]
    else
        set -l html (curl -fsSL -m 10 -A 'Mozilla/5.0' $url 2>/dev/null | string collect)
        set -l links (string match -rai '<link[^>]+>' -- $html)
        for kind in apple-touch-icon icon
            for l in $links
                if string match -qri "rel=[\"'][^\"']*$kind" -- $l; and string match -qr 'href=' -- $l
                    set -l href (string replace -r '.*href=["\']([^"\']+)["\'].*' '$1' -- $l)
                    switch $href
                        case '//*'
                            set href https:$href
                        case '/*'
                            set href $origin$href
                        case 'http*'
                        case '*'
                            set href $origin/$href
                    end
                    set -a candidates $href
                end
            end
        end
        set -a candidates $origin/favicon.ico "https://www.google.com/s2/favicons?domain=$host&sz=128"
    end

    # ---- download + convert to PNG ----
    set -l tmp (mktemp)
    set -l ok 0
    for c in $candidates
        if test -f "$c"
            cp "$c" $tmp
        else if not curl -fsSL -m 10 -A 'Mozilla/5.0' -o $tmp "$c" 2>/dev/null
            continue
        end
        if command -q magick
            if magick "$tmp"'[0]' -background none -resize 256x256 PNG32:$icon 2>/dev/null
                set ok 1
                break
            end
        else if string match -q 'image/png' (file -b --mime-type $tmp)
            cp $tmp $icon
            set ok 1
            break
        end
    end
    rm -f $tmp

    if test $ok -eq 1
        echo "icon: $icon"
    else
        echo "no icon found, using generic one"
        set icon web-browser
    end

    # ---- write .desktop file ----
    set -l safe_url (string replace -a '%' '%%' -- $url)
    printf '%s\n' \
        '[Desktop Entry]' \
        'Version=1.0' \
        'Type=Application' \
        "Name=$name" \
        "Exec=$browser --app=\"$safe_url\" --ozone-platform=wayland" \
        "Icon=$icon" \
        'Categories=Network;' \
        'StartupNotify=true' \
        > $desktop

    update-desktop-database ~/.local/share/applications 2>/dev/null
    echo "created: $desktop"
end
