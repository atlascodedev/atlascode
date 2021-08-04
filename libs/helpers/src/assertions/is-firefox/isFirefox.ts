import isBrowser from '../isBrowser';

export const isFirefox = () => {
  if (isBrowser) {
    return navigator.userAgent.toLocaleLowerCase().indexOf('firefox') > -1;
  } else {
    return false;
  }
};

export default isFirefox;
