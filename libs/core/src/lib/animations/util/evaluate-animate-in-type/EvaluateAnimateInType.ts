import _ from 'lodash';

export const evaluateAnimateInType = (
  animateIn: boolean | 'scroll',
  observerTrigger: boolean,
  callbackIn: (...args: unknown[]) => void,
  callbackOut: (...args: unknown[]) => void
) => {
  if (typeof animateIn === 'boolean') {
    if (animateIn) {
      callbackIn();
    } else {
      callbackOut();
    }
  } else if (typeof animateIn === 'string' && animateIn === 'scroll') {
    if (observerTrigger) {
      callbackIn();
    } else {
      callbackOut();
    }
  } else {
    _.noop();
  }
};

export default evaluateAnimateInType;
