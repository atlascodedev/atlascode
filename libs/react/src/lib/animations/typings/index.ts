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
  default: 'default',
  gentle: 'gentle',
  wobbly: 'wobbly',
  slow: 'slow',
  slower: 'slower',
  molasses: 'molasses',
  submerge: 'submerge',
  stiff: 'stiff',
} as const;

export type TransitionPreset =
  typeof TransitionPreset[keyof typeof TransitionPreset];

export const transitionPresetMap: Record<TransitionPreset, Transition> = {
  submerge: {
    type: 'spring',
    damping: 100 * 2,
    stiffness: 500 * 2,
    mass: 50,
  },
  default: {
    type: 'spring',
    mass: 1,
    stiffness: 170,
    damping: 26,
  },
  gentle: {
    type: 'spring',
    mass: 1,
    stiffness: 120,
    damping: 14,
  },
  molasses: {
    type: 'spring',
    mass: 1,
    stiffness: 280,
    damping: 120,
  },
  slow: {
    type: 'spring',
    mass: 1,
    stiffness: 280,
    damping: 60,
  },
  slower: {
    type: 'spring',
    mass: 1,
    stiffness: 280,
    damping: 60 * 3,
  },
  stiff: {
    type: 'spring',
    mass: 1,
    stiffness: 300,
    damping: 20,
  },
  wobbly: {
    type: 'spring',
    mass: 1,
    stiffness: 180,
    damping: 12,
  },
};
