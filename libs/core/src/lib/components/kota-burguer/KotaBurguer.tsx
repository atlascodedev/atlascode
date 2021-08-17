import { Box, BoxProps } from '@material-ui/core';
import { Property } from 'csstype';
import { useAnimation, Variants } from 'framer-motion';
import React from 'react';
import { ResponsiveStyleValue } from '@material-ui/system';
import MotionBox from '../../animations/motion-box/MotionBox';

const DEFAULT_COLOR = '#5a5a5a';
const DEFAULT_HEIGHT = 1;
const DEFAULT_FONTSIZE = '10px';
// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface KotaBurguerProps {
  open?: boolean;
  onAnimationStart?: (...args: unknown[]) => void;
  onAnimationEnd?: (...args: unknown[]) => void;
  onClick?: (...args: unknown[]) => void;
  colorOpen?: string;
  colorClosed?: string;
  fontSize?: ResponsiveStyleValue<Property.FontSize<string>>;
}

export const KotaBurguer = ({
  open,
  onClick,
  onAnimationEnd,
  onAnimationStart,
  colorClosed = DEFAULT_COLOR,
  colorOpen = DEFAULT_COLOR,
  fontSize = DEFAULT_FONTSIZE,
}: KotaBurguerProps) => {
  const animationControls = useAnimation();

  React.useEffect(() => {
    if (open) {
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
    <Box sx={{ fontSize: fontSize }}>
      <MotionBox
        onClick={onClick}
        sx={{
          display: 'flex',
          flexDirection: 'column',
          width: '10em',
          height: 'auto',
          gap: '1em',
          alignItems: 'flex-end',
          cursor: 'pointer',
          position: 'relative',
        }}
        initial="closed"
        animate={animationControls}
      >
        <MotionBox
          sx={{
            ...(lineStyles(colorOpen, colorClosed, open) as Record<
              string,
              unknown
            >),
          }}
          variants={firstLineVariant}
        />
        <MotionBox
          sx={{
            ...(lineStyles(colorOpen, colorClosed, open) as Record<
              string,
              unknown
            >),
          }}
          variants={secondLineVariant}
        />
        <MotionBox
          sx={{
            ...(lineStyles(colorOpen, colorClosed, open) as Record<
              string,
              unknown
            >),
            width: '80%',
          }}
          variants={thirdLineVariant}
        />
      </MotionBox>
    </Box>
  );
};

export default KotaBurguer;

const lineStyles = (
  colorOpen?: string,
  colorClosed?: string,
  open?: boolean
): BoxProps['sx'] => {
  return {
    fontSize: 'inherit',
    width: '100%',
    height: `${DEFAULT_HEIGHT}em`,
    ...(colorOpen && open
      ? { backgroundColor: colorOpen }
      : colorClosed && !open
      ? { backgroundColor: colorClosed }
      : { backgroundColor: DEFAULT_COLOR }),
    position: 'relative',
    transition: 'background-color 0.5s',
  };
};

const firstLineVariant: Variants = {
  open: {
    y: `${DEFAULT_HEIGHT * 2}em`,
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
    y: `-${DEFAULT_HEIGHT * 2}em`,
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
