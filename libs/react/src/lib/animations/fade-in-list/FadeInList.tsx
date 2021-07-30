/* eslint-disable @typescript-eslint/ban-types */
import { Property } from 'csstype';
import {
  HTMLMotionProps,
  Transition,
  useAnimation,
  Variants,
} from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ResponsiveStyleValue } from '../../typings/styling';
import MotionBox from '../../utility/motion-box/MotionBox';
import React from 'react';
import _ from 'lodash';

enum FadeDirection {
  Left = 'left',
  right = 'right',
  Top = 'top',
  Bottom = 'bottom',
}

type MotionComponentWrapperProps = Pick<HTMLMotionProps<'div'>, 'transition'>;

/* eslint-disable-next-line */
export interface FadeInListProps<T> {
  component: React.FC<T>;
  list?: T[];
  flexDirection?: 'row' | 'column';
  staggerChildren?: number;
  fadeDirection: FadeDirection;
  gap?: ResponsiveStyleValue<Property.Gap<string | number>>;
  animateIn?: 'scroll' | boolean;
  triggerOnce?: boolean;
  repeat?: boolean;
}

export function FadeInList<T extends {}>({
  component: Component,
  list = [],
  flexDirection: direction = 'column',
  staggerChildren = 0.25,
  fadeDirection = FadeDirection.Top,
  animateIn = true,
  triggerOnce,
  gap,
  repeat,
}: FadeInListProps<T>): JSX.Element | null {
  const animationsControl = useAnimation();
  const { ref, inView, entry } = useInView({ triggerOnce: triggerOnce });

  React.useEffect(() => {
    if (animateIn === 'scroll' && inView) {
      (async () => {
        animationsControl.start('visible');
      })();
    } else if (typeof animateIn === 'boolean' && animateIn) {
      animationsControl.start('visible');
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
            variants={variantMap[fadeDirection]}
            key={index}
            transition={{
              ...sluggish,
              ...(repeat ? { repeat: Infinity, repeatType: 'mirror' } : {}),
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

const sluggish: Transition = {
  type: 'spring',
  mass: 25,
  damping: 800,
  stiffness: 1000,
};

const variantMap: Record<FadeDirection, Variants> = {
  left: {
    hidden: {
      x: -50,
      opacity: 0,
    },
    visible: {
      x: 0,
      opacity: 1,
    },
  },
  right: {
    hidden: {
      x: 50,
      opacity: 0,
    },
    visible: {
      opacity: 1,
      x: 0,
    },
  },
  bottom: {
    hidden: {
      y: 50,
      opacity: 0,
    },
    visible: {
      y: 0,
      opacity: 1,
    },
  },
  top: {
    hidden: {
      y: -50,
      opacity: 0,
    },
    visible: {
      y: 0,
      opacity: 1,
    },
  },
};
