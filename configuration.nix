{ config, pkgs, ... }:

{
  imports = [ ./hardware-configuration.nix ];

  # Boot
  boot.loader.systemd-boot.enable = true;
  boot.loader.efi.canTouchEfiVariables = true;
  boot.kernelParams = [ "nvidia_drm.fbdev=1" ];

  networking.hostName = "nixos";
  networking.networkmanager.enable = true;

  hardware.bluetooth.enable = true;

  services.power-profiles-daemon.enable = true;
  services.upower.enable = false;

  time.timeZone = "Africa/Algiers";

  nixpkgs.config.allowUnfree = true;

  # X11 مطلوب لـ SDDM وبعض البرامج
  services.xserver.enable = true;

  # SDDM مع اختيار الجلسة
  services.displayManager = {
    sddm.enable = true;

    # لا تدخل تلقائياً
    autoLogin.enable = false;
  };

  # Niri
  programs.niri.enable = true;

  # Hyprland
#  programs.hyprland = {
#    enable = true;
#    xwayland.enable = true;
#  };

  # لوحة المفاتيح
  services.xserver.xkb = {
    layout = "ara,fr";
    variant = "";
    options = "grp:alt_shift_toggle";
  };

  console.keyMap = "fr";

  # Portal
  xdg.portal = {
    enable = true;
    extraPortals = [
     #pkgs.xdg-desktop-portal-gnome
      pkgs.xdg-desktop-portal-gtk
    ];
  configPackages = [ pkgs.niri ];
  };

  # NVIDIA
  hardware.graphics.enable = true;

  services.xserver.videoDrivers = [ "nvidia" ];

  hardware.nvidia = {
    modesetting.enable = true;
    powerManagement.enable = false;
    open = false;
    nvidiaSettings = true;
    package = config.boot.kernelPackages.nvidiaPackages.stable;
  };

  # المستخدم
  users.users.dya = {
    isNormalUser = true;
    description = "dya";
    shell = pkgs.fish;

    extraGroups = [
      "wheel"
      "networkmanager"
      "video"
      "i2c"
    ];
  };

  hardware.i2c.enable = true;
  services.udev.packages = [ pkgs.ddcutil ];

  environment.sessionVariables = {
  NIXOS_OZONE_WL = "1";
  WLR_NO_HARDWARE_CURSORS = "1"; 
  };

  # البرامج
  environment.systemPackages = with pkgs; [
#   alacritty
    kitty
    firefox
    git
    neovim
    vim
    fish
    starship
    fuzzel
    #rofi
    mako

    nautilus
    #kdePackages.dolphin

    #xwayland
    #xwayland-satellite

    noctalia-shell

    ddcutil
    brightnessctl
    playerctl

    #code-cursor
    vscode
    discord

    # Hyprland extras
    #waybar
    #hyprpaper
    #hyprlock
    #hypridle
  ];

  qt.enable = true;

# program
# programs.kitty = {
#  enable = true;
# };

programs.fish = {
  enable = true;
  
  shellAliases = {
    b = "ddcutil setvcp 10";
  };
};

  fonts.packages = with pkgs; [
    noto-fonts
    noto-fonts-color-emoji
    material-symbols
  ];

  system.stateVersion = "24.05";
}
