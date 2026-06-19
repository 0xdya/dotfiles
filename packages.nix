{ pkgs, ... }:

{
  environment.systemPackages = with pkgs; [

    # Terminal
    kitty
    fish
    starship
    fastfetch

    # Browser
    firefox-esr
    chromium

    # Development
    git
    wget
    vscode

    # Wayland
    fuzzel
    mako
    wev
    rofi

    # File Manager
    nautilus

    # Monitor Control
    ddcutil
    brightnessctl
    playerctl

    # Apps
    zettlr
    obsidian

    # Desktop
    noctalia-shell

    # theme
    kdePackages.breeze

    # VM
    virt-manager
    qemu_kvm
    pkgs.OVMF
    spice-gtk
  ];

  virtualisation.libvirtd.qemu.package = pkgs.qemu_kvm;
}
