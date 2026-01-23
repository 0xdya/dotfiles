# #!/bin/bash
# # ملف لحفظ وعرض تاريخ الحافظة على Wayland

# HISTORY_FILE="$HOME/.config/clipboard/history.txt"
# MAX_ENTRIES=50

# # قراءة النص من الحافظة الحالية
# CURRENT=$(wl-paste)

# # إضافة النص الجديد إلى الملف إذا لم يكن مكرر
# if [[ -n "$CURRENT" ]]; then
#     grep -Fxv "$CURRENT" "$HISTORY_FILE" 2>/dev/null > "$HISTORY_FILE.tmp"
#     mv "$HISTORY_FILE.tmp" "$HISTORY_FILE"
#     echo "$CURRENT" >> "$HISTORY_FILE"
# fi

# # إنشاء ملف مؤقت للعرض
# TMP_FILE=$(mktemp)
# tac "$HISTORY_FILE" > "$TMP_FILE"

# # عرض القائمة باستخدام tofi للاختيار
# CHOSEN=$(tofi -c "$TMP_FILE" --prompt "Clipboard History: ")

# # حذف الملف المؤقت
# rm "$TMP_FILE"

# # نسخ النص المختار مرة أخرى للحافظة
# if [[ -n "$CHOSEN" ]]; then
#     echo "$CHOSEN" | wl-copy
# fi

# # الاحتفاظ فقط بعدد MAX_ENTRIES
# tail -n $MAX_ENTRIES "$HISTORY_FILE" > "$HISTORY_FILE.tmp" && mv "$HISTORY_FILE.tmp" "$HISTORY_FILE"
