/* eslint-disable @typescript-eslint/ban-types */
import { Property } from 'csstype';
import { Transition, Variants } from 'framer-motion';
import { ResponsiveStyleValue } from '../../typings/styling';
import MotionBox from '../../utility/motion-box/MotionBox';

enum FadeDirection {
  left = 'left',
  right = 'right',
  top = 'top',
  bottom = 'bottom',
}

/* eslint-disable-next-line */
export interface FadeInListProps<T> {
  component: React.FC<T>;
  list?: T[];
  flexDirection?: 'row' | 'column';
  staggerChildren?: number;
  fadeDirection: FadeDirection;
  gap?: ResponsiveStyleValue<Property.Gap<string | number>>;
}

export function FadeInList<T extends {}>({
  component: Component,
  list = [],
  flexDirection: direction = 'column',
  staggerChildren = 0.25,
  fadeDirection = FadeDirection.top,
}: FadeInListProps<T>): JSX.Element {
  return (
    <MotionBox
      layout
      initial="hidden"
      animate="visible"
      transition={{
        staggerChildren: staggerChildren,
      }}
      sx={{ display: 'flex', flexDirection: direction, gap: '2rem' }}
    >
      {list.map((value, index) => {
        return (
          <MotionBox
            variants={variantMap[fadeDirection]}
            key={index}
            transition={{
              ...sluggish,
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
