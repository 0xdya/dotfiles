#!/bin/bash
app=$(hyprctl activewindow -j | jq -r '.class')
if [ -n "$app" ]; then
    echo "$app"
else
    echo ""
fi
