{ config, pkgs, ... }: 

{ 
  imports = [ ./hardware-configuration.nix ]; 

  # إعدادات الـ Bootloader للـ Dual Boot 
  boot.loader.systemd-boot.enable = true; 
  boot.loader.efi.canTouchEfiVariables = true; 
  boot.kernelParams = [ "nvidia_drm.fbdev=1" ]; 

  networking.hostName = "nixos"; 
  networking.networkmanager.enable = true; 
  hardware.bluetooth.enable = true; 
  services.power-profiles-daemon.enable = true; 
  services.upower.enable = true; 

  time.timeZone = "Africa/Algiers"; 

  nixpkgs.config.allowUnfree = true; 

  services.desktopManager.plasma6.enable = false; 

  services.displayManager = { 
    sddm.enable = true; 
    defaultSession = "niri"; 
    autoLogin = { 
      enable = true; 
      user = "dya"; 
    }; 
  }; 

  programs.niri.enable = true; 
  services.xserver.enable = true; 

  # keyboard 
  services.xserver.xkb = { 
    layout = "ara, fr"; 
    variant = ""; 
    options = "grp:alt_shift_toggle"; 
  }; 
  console.keyMap = "fr"; 

  xdg.portal = { 
    enable = true; 
    extraPortals = [ pkgs.xdg-desktop-portal-gnome ]; # متوافق تماماً مع Niri 
  }; 

  # nvidia 
  hardware.graphics.enable = true; 
  services.xserver.videoDrivers = [ "nvidia" ]; 
  hardware.nvidia = { 
    modesetting.enable = true; # نيري يدعم الـ modesetting بشكل أفضل مع nvidia 
    powerManagement.enable = false; 
    open = false; 
    nvidiaSettings = true; 
    package = config.boot.kernelPackages.nvidiaPackages.stable; 
  }; 

  # user 
  users.users.dya = { 
    isNormalUser = true; 
    description = "dya"; 
    extraGroups = [ "networkmanager" "wheel" "video" ]; 
  }; 

  environment.systemPackages = with pkgs; [ 
    alacritty 
    mako 
    rofi 
    firefox 
    git 
    neovim 
    vim 
    fuzzel 
    fish 
    starship 
    nautilus 
#   code-cursor
    xwayland 
    xwayland-satellite 
    noctalia-shell 
    brightnessctl 
    vscode 
    playerctl 
    kdePackages.dolphin 
    discord 
  ]; 

  qt.enable = true; 

  system.stateVersion = "24.05"; 

  fonts.packages = with pkgs; [ 
    noto-fonts 
    noto-fonts-color-emoji 
    material-symbols 
  ]; 
}
