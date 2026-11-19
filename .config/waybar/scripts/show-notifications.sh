#!/bin/bash
#!/bin/bash
# عرض كل الإشعارات المخزنة في ملف log
if [ ! -f ~/.config/mako/notifications.log ] || [ ! -s ~/.config/mako/notifications.log ]; then
    notify-send "الإشعارات" "لا توجد إشعارات سابقة"
else
    # عرض آخر 20 إشعار (يمكنك تعديل الرقم)
    tail -n 20 ~/.config/mako/notifications.log | notify-send "آخر الإشعارات" - 
fi
