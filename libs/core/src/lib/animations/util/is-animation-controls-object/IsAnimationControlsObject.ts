import _ from 'lodash';

function keysIntersection(keys: string[]) {
  const animationObjectMembers = ['subscribe', 'start', 'set', 'stop', 'mount'];

  const intersection = _.difference(animationObjectMembers, keys);

  return intersection.length <= 0;
}

export function isAnimationControlsObject(animationControlObject: unknown) {
  if (
    animationControlObject &&
    typeof animationControlObject === 'object' &&
    Object.keys(animationControlObject).length === 5
  ) {
    const objectKeyList = Object.keys(animationControlObject).map(
      (key, index) => {
        return key;
      }
    );
    const objectValueList = Object.values(animationControlObject).map(
      (value, index) => {
        return typeof value === 'function';
      }
    );

    const valueListLength = objectValueList.length;
    const removeAllFalse = _.compact(objectValueList);

    return (
      valueListLength === removeAllFalse.length &&
      keysIntersection(objectKeyList)
    );
  } else {
    throw new Error(
      'Argument value does not match required signature. Please make sure you are providing an Animation Control Object'
    );
  }
}

export default isAnimationControlsObject;
