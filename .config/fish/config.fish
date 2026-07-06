if status is-interactive
# Commands to run in interactive sessions can go here
end

abbr -a b 'ddcutil setvcp 10'
abbr -a u 'sudo pacman -Syu'
abbr -a i 'sudo pacman -Sy'
abbr -a iy 'yay -Sy'
abbr -a d 'aria2c -x 16 -s 16'       # عشان تحمل بسرعة كبيرة
abbr -a s 'snapper -c root create -d "Snapshot"'
abbr -a sl 'snapper -c root list'
abbr -a f 'fastfetch'
abbr -a mc 'cd ~/mc-server && java -Xmx4G -Xms2G -jar fabric-server-mc.1.21.11-loader.0.19.3-launcher.1.1.1.jar nogui'
