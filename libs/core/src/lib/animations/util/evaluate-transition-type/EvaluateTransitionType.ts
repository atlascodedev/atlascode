import { Transition } from 'framer-motion';
import { transitionPresetMap, TransitionPreset } from '../../types';

export const evaluateTransitionType = (
  transition: TransitionPreset | Transition
) => {
  if (
    typeof transition === 'string' &&
    Object.keys(TransitionPreset).includes(transition)
  ) {
    return transitionPresetMap[transition];
  } else {
    return transition;
  }
};
