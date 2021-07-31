import { Transition } from 'framer-motion';

export const AnimationDirection = {
  top: 'top',
  bottom: 'bottom',
  left: 'left',
  right: 'right',
} as const;

export type AnimationDirection =
  typeof AnimationDirection[keyof typeof AnimationDirection];

export const TransitionPreset = {
  default: 'DEFAULT',
  gentle: 'GENTLE',
  wobbly: 'WOBBLY',
  slow: 'SLOW',
  molasses: 'MOLASSES',
  stiff: 'STIFF',
} as const;

export type TransitionPreset =
  typeof TransitionPreset[keyof typeof TransitionPreset];

export const transitionPresetMap: Record<TransitionPreset, Transition> = {
  DEFAULT: {
    mass: 1,
    stiffness: 170,
    damping: 26,
  },
  GENTLE: {
    mass: 1,
    stiffness: 120,
    damping: 14,
  },
  MOLASSES: {
    mass: 1,
    stiffness: 280,
    damping: 120,
  },
  SLOW: {
    mass: 1,
    stiffness: 280,
    damping: 60,
  },
  STIFF: {
    mass: 1,
    stiffness: 210,
    damping: 20,
  },
  WOBBLY: {
    mass: 1,
    stiffness: 180,
    damping: 12,
  },
};
