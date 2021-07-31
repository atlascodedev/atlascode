/* eslint-disable @typescript-eslint/ban-types */
import { Property } from 'csstype';
import { Transition, useAnimation, Variants } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ResponsiveStyleValue } from '../../typings/styling';
import MotionBox from '../../utility/motion-box/MotionBox';
import React from 'react';
import _ from 'lodash';
import { evaluateTransitionType } from '../util/evaluate-transition-type/EvaluateTransitionType';
import { AnimationDirection, TransitionPreset } from '../typings';

const DISPLACEMENT_AMOUNT_DEFAULT = 100;

/* eslint-disable-next-line */
export interface FadeInListProps<T> {
  component: React.FC<T>;
  list?: T[];
  flexDirection?: 'row' | 'column';
  staggerChildren?: number;
  fadeDirection: AnimationDirection;
  displacementAmount?: number;
  gap?: ResponsiveStyleValue<Property.Gap<string | number>>;
  animateIn?: 'scroll' | boolean;
  triggerOnce?: boolean;
  repeat?: boolean;
  transition?: TransitionPreset | Transition;
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
  repeat,
  displacementAmount = 100,
  transition = 'DEFAULT',
}: FadeInListProps<T>): JSX.Element | null {
  const animationsControl = useAnimation();
  const { ref, inView, entry } = useInView({ triggerOnce: triggerOnce });

  React.useEffect(() => {
    if (animateIn === 'scroll' && inView) {
      (async () => {
        await animationsControl.start('visible');
      })();
    } else if (typeof animateIn === 'boolean' && animateIn) {
      (async () => {
        await animationsControl.start('visible');
      })();
    } else if (typeof animateIn !== 'boolean') {
      throw new Error(
        'animateIn property must be of type BOOLEAN or string literal SCROLL'
      );
    } else {
      _.noop();
    }
  }, [animateIn, inView, animationsControl]);

  return (
    <MotionBox
      ref={ref}
      layout
      initial="hidden"
      animate="visible"
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
              ...(evaluateTransitionType(transition) as Record<
                string,
                unknown
              >),
              ...(repeat ? { repeat: Infinity, repeatType: 'loop' } : {}),
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
