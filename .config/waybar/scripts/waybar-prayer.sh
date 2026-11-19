#!/bin/bash

# مدينتك
CITY="Algiers"
COUNTRY="Algeria"

# استدعاء API لمواقيت الصلاة
JSON=$(curl -s "http://api.aladhan.com/v1/timingsByCity?city=$CITY&country=$COUNTRY&method=2")

# استخراج الوقت الحالي
NOW=$(date +%s)

# استخراج جميع أوقات الصلاة بالثواني منذ Epoch
FAJR=$(date -d "$(echo $JSON | jq -r '.data.timings.Fajr')" +%s)
DHUHR=$(date -d "$(echo $JSON | jq -r '.data.timings.Dhuhr')" +%s)
ASR=$(date -d "$(echo $JSON | jq -r '.data.timings.Asr')" +%s)
MAGHRIB=$(date -d "$(echo $JSON | jq -r '.data.timings.Maghrib')" +%s)
ISHA=$(date -d "$(echo $JSON | jq -r '.data.timings.Isha')" +%s)

# تحديد الصلاة القادمة
declare -A PRAYERS=( ["Fajr"]=$FAJR ["Dhuhr"]=$DHUHR ["Asr"]=$ASR ["Maghrib"]=$MAGHRIB ["Isha"]=$ISHA )

NEXT_PRAYER="None"
for PRAYER in "${!PRAYERS[@]}"; do
    if [ $NOW -lt ${PRAYERS[$PRAYER]} ]; then
        NEXT_PRAYER=$PRAYER
        REMAINING=$(( ${PRAYERS[$PRAYER]} - NOW ))
        HOURS=$(( REMAINING/3600 ))
        MINUTES=$(( (REMAINING%3600)/60 ))
        break
    fi
done

# عرض الصلاة القادمة
echo "$NEXT_PRAYER: ${HOURS}h ${MINUTES}m"

# عند الضغط على Waybar يمكن عرض كل الأوقات
