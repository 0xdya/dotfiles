{ config, pkgs, lib, ... }:

{
  imports = [
    ./hardware-configuration.nix
    ./packages.nix
  ];

  # -----------------------
  # Boot
  # -----------------------
  boot.loader.systemd-boot.enable = true;
  boot.loader.efi.canTouchEfiVariables = true;
  boot.initrd.kernelModules = [ "nvidia" "nvidia_modeset" "nvidia_uvm" "nvidia_drm" ];
  boot.kernelParams = [
    "nvidia_drm.modeset=1"
    "nvidia_drm.fbdev=1"
    "nvidia.NVreg_PreserveVideoMemoryAllocations=1"
  ];

  hardware.graphics = {
    enable = true;
    enable32Bit = true;            # ← أضف هذا
    extraPackages = with pkgs; [
      nvidia-vaapi-driver
      libvdpau-va-gl
    ];
  };

  boot.loader.systemd-boot.windows = {
    "11" = {
      title = "Windows 11";
      efiDeviceHandle = "/dev/nvme0n1p1";
    };
  };

  # -----------------------
  # Network / DNS
  # -----------------------
  networking.hostName = "nixos";
  networking.networkmanager.enable = true;
  networking.nameservers = [ "1.1.1.1" "8.8.8.8" ];
  networking.firewall.allowedTCPPorts = [ 11434 ];

  time.timeZone = "Africa/Algiers";

  # -----------------------
  # Nix settings
  # -----------------------
  nix = {
    settings = {
      max-jobs = "auto";
      cores = 0;

      download-attempts = 10;
      stalled-download-timeout = 90;

      substituters = [
        "https://cache.nixos.org/"
        "https://nix-community.cachix.org"
      ];

      trusted-public-keys = [
        "cache.nixos.org-1:6NCHdD59X431o0gWypbMrAURkbJ16ZPMQFGspcDShjY="
        "nix-community.cachix.org-1:mB9FSh9qf2dCimDSUo8Zy7bkq5CX+/rkCWyvRCYg3Fs="
      ];

      auto-optimise-store = true;
    };

    gc = {
      automatic = true;
      dates = "weekly";
    };

    settings.experimental-features = [
      "nix-command"
      "flakes"
    ];
  };

  nixpkgs.config.allowUnfree = true;

  # -----------------------
  # User
  # -----------------------
  users.defaultUserShell = pkgs.fish;

  users.users.dya = {
    isNormalUser = true;
    description = "dya";
    shell = pkgs.fish;

    extraGroups = [
      "wheel"
      "networkmanager"
      "video"
      "i2c"
      "libvirtd"
      "ydotool"
      "docker"
    ];
  };

  # -----------------------
  # Shell
  # -----------------------
  programs.fish = {
    enable = true;

    shellAliases = {
      b = "ddcutil setvcp 10";
      wps = "QT_QPA_PLATFORM=xcb wpsoffice";
    };
  };

  # -----------------------
  # Filesystems
  # -----------------------
  fileSystems."/mnt/shared" = {
    device = "/dev/disk/by-uuid/03CFD0150A70DCDB";
    fsType = "ntfs-3g";

    options = [
      "rw"
      "uid=1000"
      "gid=100"
      "umask=0022"
      "nofail"
      "x-systemd.automount"
    ];
  };

  # -----------------------
  # Hardware
  # -----------------------
  hardware.bluetooth.enable = true;
  hardware.i2c.enable = true;

  services.power-profiles-daemon.enable = true;

  # -----------------------
  # NVIDIA (FIXED - no duplicates)
  # -----------------------
  services.xserver.videoDrivers = [ "nvidia" ];

  hardware.nvidia = {
    modesetting.enable = true;

    powerManagement.enable = false;
    powerManagement.finegrained = false;

    open = true;

    nvidiaSettings = true;

    package = config.boot.kernelPackages.nvidiaPackages.stable;
  };

  boot.kernelModules = [ "kvm-amd" ];

  # -----------------------
  # GPU / display env
  # -----------------------
  environment.sessionVariables = {
    NIXOS_OZONE_WL = "1";
    XCURSOR_THEME = "breeze_cursors";
    XCURSOR_SIZE = "24";

    GBM_BACKEND = "nvidia-drm";
    __GLX_VENDOR_LIBRARY_NAME = "nvidia";
    LIBVA_DRIVER_NAME = "nvidia";
    NVD_BACKEND = "direct";
    WLR_NO_HARDWARE_CURSORS = "1";
  };

  environment.variables = {
  # لإجبار فايرفوكس على استخدام Wayland
  MOZ_ENABLE_WAYLAND = "1";

  # لإجبار متصفحات الكروميوم (Chrome, Chromium, Brave) على استخدام Wayland
  NIXOS_OZONE_WL = "1";
 };

  services.udev.packages = [ pkgs.ddcutil ];

  # -----------------------
  # Fonts
  # -----------------------
  fonts.packages = with pkgs; [
    noto-fonts
    noto-fonts-color-emoji
    material-symbols
  ];

#  fonts.fontconfig.enable = false;

  system.stateVersion = "24.05";

  # -----------------------
  # Desktop (Wayland)
  # -----------------------
  services.xserver.enable = false;

  programs.xwayland.enable = true;
  programs.niri.enable = true;

services.displayManager = {
  defaultSession = "niri";

  autoLogin = {
    enable = false;
    user = "dya";
  };

  sddm = {
    enable = true;
    wayland.enable = true;
  };
};

services.desktopManager.plasma6.enable = true;

  xdg.portal = {
    enable = true;

    extraPortals = [
      pkgs.xdg-desktop-portal-gtk
    ];

    configPackages = [
      pkgs.niri
    ];
  };

  services.gnome.gnome-keyring.enable = true;
  security.pam.services.login.enableGnomeKeyring = true;

  services.flatpak.enable = true;
  services.gvfs.enable = true;
  services.udisks2.enable = true;

  programs.thunar.enable = true;

  programs.thunar.plugins = with pkgs; [
    thunar-archive-plugin
    thunar-volman
  ];

programs.obs-studio = {
  enable = true;

  plugins = with pkgs.obs-studio-plugins; [
    wlrobs
    obs-pipewire-audio-capture
  ];
}; 

  services.xserver.xkb = {
    layout = "ara,fr";
    variant = "";
    options = "grp:alt_shift_toggle";
  };

services.ollama = {
  enable = true;
  package = pkgs.ollama-cuda;
};

services.open-webui = {
  enable = true;
   port = 3000;
};

  console.keyMap = "fr";

  # -----------------------
  # Virtualization
  # -----------------------
  virtualisation.libvirtd.enable = true;
  networking.nftables.enable = true;
  virtualisation.libvirtd.qemu.vhostUserPackages = [
    pkgs.virtiofsd
  ];

  programs.ydotool.enable = true;


  # تفعيل خدمة Docker
  virtualisation.docker.enable = true;
}
