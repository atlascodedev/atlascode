import { AnimationControls, useAnimation } from 'framer-motion';
import _ from 'lodash';
import React from 'react';

export const useOverridableAnimationControl = (
  customControls?: AnimationControls
) => {
  const [controls, setControls] = React.useState<AnimationControls>(
    useAnimation()
  );

  React.useEffect(() => {
    customControls ? setControls(customControls) : _.noop();
  }, [customControls]);

  return controls;
};

export default useOverridableAnimationControl;
