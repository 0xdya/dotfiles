if status is-interactive
# Commands to run in interactive sessions can go here
end

#  التحكم فسطوع الشاشة
abbr -a b 'ddcutil setvcp 10'
#  التحديث
abbr -a u 'sudo pacman -Syu'
#  التحميل
abbr -a i 'sudo pacman -Sy'
abbr -a iy 'yay -Sy'
abbr -a d 'aria2c -x 16 -s 16 ""'
abbr -a dy 'yt-dlp -f best ""'
#  نسخ احتياطي
abbr -a s 'snapper -c root create -d "Snapshot"'
abbr -a sl 'snapper -c root list'
#  زيادات
abbr -a f 'fastfetch'
abbr -a t 'sudo btop'
abbr -a mc 'cd ~/mc-server && java -Xms2G -Xmx6G -XX:+UseG1GC -XX:+ParallelRefProcEnabled -XX:MaxGCPauseMillis=200 -XX:+UnlockExperimentalVMOptions -XX:+DisableExplicitGC -XX:+AlwaysPreTouch -jar fabric-server-mc.1.21.11-loader.0.19.3-launcher.1.1.1.jar nogui'
