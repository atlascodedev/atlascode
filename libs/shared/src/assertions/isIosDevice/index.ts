import isBrowser from "../isBrowser";

const isIosDevice =
  isBrowser &&
  window.navigator &&
  window.navigator.platform &&
  /iP(ad|hone|od)/.test(window.navigator.platform);

export default isIosDevice;
