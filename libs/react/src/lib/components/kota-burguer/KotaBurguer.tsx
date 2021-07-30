import { Box } from '@material-ui/core';
import { useAnimation, Variants } from 'framer-motion';
import React from 'react';
import { AtlasCSSVariant } from '../../utility/atlas-theme-provider/theme-utilities';
import MotionBox from '../../utility/motion-box/MotionBox';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface KotaBurguerProps {
  open?: boolean;
  onAnimationStart?: (...args: unknown[]) => void;
  onAnimationEnd?: (...args: unknown[]) => void;
  onClick?: (...args: unknown[]) => void;
}

export const KotaBurguer = ({
  open,
  onClick,
  onAnimationEnd,
  onAnimationStart,
}: KotaBurguerProps) => {
  const animationControls = useAnimation();

  const animationSequence = async () => {
    await animationControls.start('open');
    await animationControls.start('rotate');
  };

  React.useEffect(() => {
    if (!open) {
      (async () => {
        await animationControls.start('open');
        await animationControls.start('rotate');
      })();
    } else {
      (async () => {
        await animationControls.start('closed');
      })();
    }
  }, [open, animationControls]);

  return (
    <MotionBox
      onClick={onClick}
      sx={{
        display: 'flex',
        flexDirection: 'column',
        width: '10rem',
        height: 'auto',
        gap: '1rem',
        alignItems: 'flex-end',
        cursor: 'pointer',
        position: 'relative',
      }}
      initial="closed"
      animate={animationControls}
    >
      <MotionBox
        sx={{
          ...lineStyles,
        }}
        variants={firstLineVariant}
      />
      <MotionBox
        sx={{
          ...lineStyles,
        }}
        variants={secondLineVariant}
      />
      <MotionBox
        sx={{
          ...lineStyles,
          width: '80%',
        }}
        variants={thirdLineVariant}
      />
    </MotionBox>
  );
};

export default KotaBurguer;

const lineStyles: AtlasCSSVariant = {
  width: '100%',
  height: '1rem',
  backgroundColor: '#5a5a5a',
  position: 'relative',
};

const firstLineVariant: Variants = {
  open: {
    y: '2rem',
  },
  closed: {
    y: '0em',
    rotate: '0deg',
  },
  rotate: {
    rotate: '-45deg',
  },
};

const secondLineVariant: Variants = {
  open: {
    y: 0,
  },
  closed: {
    y: 0,
    rotate: '0deg',
  },
  rotate: {
    rotate: '45deg',
  },
};

const thirdLineVariant: Variants = {
  open: {
    y: '-2rem',
  },
  closed: {
    y: '0em',
    opacity: 1,
  },
  rotate: {
    opacity: 0,
    transition: {
      duration: 0.01,
    },
  },
};
