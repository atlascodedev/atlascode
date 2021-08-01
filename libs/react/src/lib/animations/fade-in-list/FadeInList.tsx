/* eslint-disable @typescript-eslint/ban-types */
import { Property } from 'csstype';
import { useAnimation, Variants } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ResponsiveStyleValue } from '../../typings/styling';
import MotionBox from '../../utility/motion-box/MotionBox';
import React from 'react';
import _ from 'lodash';
import {
  AnimationDirection,
  TransitionPreset,
  transitionPresetMap,
} from '../typings';

const DISPLACEMENT_AMOUNT_DEFAULT = 100;

/* eslint-disable-next-line */
export interface FadeInListProps<T> {
  component: React.FC<T>;
  list?: T[];
  flexDirection?: 'row' | 'column';
  staggerChildren?: number;
  fadeDirection?: AnimationDirection;
  displacementAmount?: number;
  gap?: ResponsiveStyleValue<Property.Gap<string | number>>;
  animateIn?: 'scroll' | boolean;
  triggerOnce?: boolean;
  transition?: TransitionPreset;
  onAnimationStart?: (...args: unknown[]) => void;
  onAnimationEnd?: (...args: unknown[]) => void;
}

export function FadeInList<T extends {}>({
  component: Component,
  list = [],
  flexDirection: direction = 'column',
  staggerChildren = 0.25,
  fadeDirection = 'top',
  animateIn = true,
  triggerOnce,
  gap,
  displacementAmount = 100,
  transition = 'default',
  onAnimationEnd = _.noop,
  onAnimationStart = _.noop,
}: FadeInListProps<T>): JSX.Element | null {
  const animationsControl = useAnimation();
  const { ref, inView, entry } = useInView({ triggerOnce: triggerOnce });

  React.useEffect(() => {
    if (typeof animateIn === 'boolean') {
      if (animateIn) {
        (async () => {
          await animationsControl.start('visible');
        })();
      } else {
        (async () => {
          await animationsControl.start('hidden');
        })();
      }
    } else if (animateIn === 'scroll') {
      if (inView) {
        animationsControl.start('visible');
      } else {
        animationsControl.start('hidden');
      }
    } else {
      _.noop();
    }
  }, [inView, animateIn, animationsControl]);

  return (
    <MotionBox
      ref={ref}
      layout
      initial="hidden"
      animate={animationsControl}
      transition={{
        staggerChildren: staggerChildren,
      }}
      sx={{ display: 'flex', flexDirection: direction, gap: gap }}
    >
      {list.map((value, index) => {
        return (
          <MotionBox
            variants={variantMap(displacementAmount)[fadeDirection]}
            key={index}
            transition={{
              ...transitionPresetMap[transition],
            }}
          >
            <Component {...value} />
          </MotionBox>
        );
      })}
    </MotionBox>
  );
}

export default FadeInList;

const variantMap = (
  displacement = DISPLACEMENT_AMOUNT_DEFAULT
): Record<AnimationDirection, Variants> => {
  return {
    left: {
      hidden: {
        x: -displacement,
        opacity: 0,
      },
      visible: {
        x: 0,
        opacity: 1,
      },
    },
    right: {
      hidden: {
        x: displacement,
        opacity: 0,
      },
      visible: {
        opacity: 1,
        x: 0,
      },
    },
    bottom: {
      hidden: {
        y: displacement,
        opacity: 0,
      },
      visible: {
        y: 0,
        opacity: 1,
      },
    },
    top: {
      hidden: {
        y: -displacement,
        opacity: 0,
      },
      visible: {
        y: 0,
        opacity: 1,
      },
    },
  };
};
