import isBrowser from '../isBrowser';

export const isMobile = {
  Android: () => {
    return isBrowser && navigator.userAgent.match('/Android/i');
  },

  BlackBerry: () => {
    return isBrowser && navigator.userAgent.match('/BlackBerry/i');
  },

  iOS: () => {
    return isBrowser && navigator.userAgent.match('/iPhone|iPad|iPod/i');
  },

  Opera: () => {
    return isBrowser && navigator.userAgent.match('/Opera Mini/i');
  },

  Windows: () => {
    return (
      (isBrowser && navigator.userAgent.match('/IEMobile/i')) ||
      navigator.userAgent.match('/WPDesktop/i')
    );
  },

  any: () => {
    return (
      isBrowser &&
      (isMobile.Android() ||
        isMobile.BlackBerry() ||
        isMobile.iOS() ||
        isMobile.Opera() ||
        isMobile.Windows())
    );
  },
};

export default isMobile;
