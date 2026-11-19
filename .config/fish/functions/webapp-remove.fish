function webapp-remove --description "Remove a webapp created by webapp-install"
    set -l slug (string lower -- $argv[1] | string replace -ra '[^a-z0-9]+' '-' | string trim -c '-')
    rm -fv ~/.local/share/applications/webapp-$slug.desktop ~/.local/share/icons/webapps/$slug.png
    update-desktop-database ~/.local/share/applications 2>/dev/null
end

