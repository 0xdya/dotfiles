{ pkgs, ... }:

{
  environment.systemPackages = with pkgs; [

    # Terminal
    kitty
    fish
    starship
    fastfetch
    btop
    tree

    # Browser
    firefox-esr
    chromium
    google-chrome
    #zen-browser

    # Development
    git
    wget
    vscode
    zed-editor-fhs
    code-cursor
    #docker

    # Wayland
    fuzzel
    #mako
    wev
    rofi
    swaynotificationcenter
    libnotify
    bibata-cursors

    # File Manager
    nautilus

    # Monitor Control
    ddcutil
    #brightnessctl
    playerctl

    # Apps
    zettlr
    obsidian
    obs-studio
    telegram-desktop
    #warehouse
    libreoffice
    ydotool


    # Desktop
    noctalia-shell

    # theme
    kdePackages.breeze

    # VM
    virt-manager
    qemu_kvm
    pkgs.OVMF
    spice-gtk


   #AI
   #ollama
  ];

  virtualisation.libvirtd.qemu.package = pkgs.qemu_kvm;
}
