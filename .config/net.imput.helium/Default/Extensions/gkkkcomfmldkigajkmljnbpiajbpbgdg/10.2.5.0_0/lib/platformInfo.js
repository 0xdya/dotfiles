"use strict";

const platformInfo = {};
twpConfig.onReady(function () {
  if (chrome.tabs) {
    twpConfig.set("originalUserAgent", navigator.userAgent);
  }
  let userAgent = "";
  if (twpConfig.get("originalUserAgent")) {
    userAgent = twpConfig.get("originalUserAgent");
  } else {
    userAgent = navigator.userAgent;
  }
  platformInfo.isMobile = {
    Android: userAgent.match(/Android/i),
    BlackBerry: userAgent.match(/BlackBerry/i),
    iOS: userAgent.match(/iPhone|iPad|iPod/i),
    Opera: userAgent.match(/Opera Mini/i),
    Windows: userAgent.match(/IEMobile/i) || userAgent.match(/WPDesktop/i)
  };
  platformInfo.isMobile.any = platformInfo.isMobile.Android || platformInfo.isMobile.BlackBerry || platformInfo.isMobile.iOS || platformInfo.isMobile.Opera || platformInfo.isMobile.Windows;
  platformInfo.isDesktop = {
    any: !platformInfo.isMobile.any
  };
  platformInfo.isFirefox = typeof browser !== "undefined"; //TODO: corrijir isso, pois o Chrome também tem browser definido a partir de v148
  platformInfo.isOpera = userAgent.match(/OPR/i);
  platformInfo.supportsCommandsUpdate = function () {
    var _globalThis$browser, _api$commands;
    const api = (_globalThis$browser = globalThis.browser) !== null && _globalThis$browser !== void 0 ? _globalThis$browser : globalThis.chrome;
    return typeof (api === null || api === void 0 || (_api$commands = api.commands) === null || _api$commands === void 0 ? void 0 : _api$commands.update) === "function";
  };
});
//# sourceMappingURL=https://raw.githubusercontent.com/FilipePS/TWP---Source-Maps/main/maps/10.2.5.0/platformInfo.js.map
