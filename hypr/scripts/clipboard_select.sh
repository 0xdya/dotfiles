#!/bin/bash

mapfile -t items < <(cliphist list)

display_items=()
counter=1
for item in "${items[@]}"; do
    text=$(echo "$item" | awk '{$1=""; sub(/^ /,""); print}')
    display_items+=("$counter. $text")
    ((counter++))
done

selected=$(printf "%s\n" "${display_items[@]}" | fuzzel --dmenu --prompt "Select clipboard item: " --width 30 --lines 20)

if [ -n "$selected" ]; then
    # استخراج الرقم من الاختيار
    selected_num=$(echo "$selected" | awk -F. '{print $1}')
    
    # الحصول على العنصر الأصلي
    real_id=$(echo "${items[$((selected_num-1))]}" | awk '{print $1}')
    
    cliphist decode "$real_id" | wl-copy
fi