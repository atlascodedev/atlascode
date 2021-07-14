import { MotionConfig, useAnimation } from 'framer-motion';
import { noop } from 'lodash';
import React from 'react';
import { AtlasCSSVariant } from '../../utility/atlas-theme-provider/theme-utilities';
import MotionBox from '../../utility/motion-box/MotionBox';

/* eslint-disable-next-line */
export interface KotaBurguerProps {
  colorClosed?: string;
  colorOpen?: string;
  onClick?: (...args: unknown[]) => void;
  open: boolean;
}

const lineHeight = 0.3;

const valueToCSSUnit = (
  value: number,
  unitType: 'em' | 'rem' | 'px' | '%' = 'px'
) => {
  return `${value}${unitType}`;
};

export function KotaBurguer({
  colorClosed = 'rgb(135, 135, 135)',
  colorOpen = colorClosed,
  open,
  onClick,
}: KotaBurguerProps) {
  const lineAnimationControl = useAnimation();

  const lineStyleMemo = React.useMemo(() => {
    return () =>
      ({
        display: 'inline-block',
        cursor: 'pointer',
        userSelect: 'none',
        width: '100%',
        height: '0.3em',
        backgroundColor: open ? colorOpen : colorClosed,
        position: 'relative',
        transformOrigin: '50% 50%',
      } as AtlasCSSVariant);
  }, [colorClosed, colorOpen, open]);

  const animationSequence = React.useCallback(async () => {
    await lineAnimationControl.start('translate');
    await lineAnimationControl.start('rotate');
  }, [lineAnimationControl]);

  React.useEffect(() => {
    if (open) {
      animationSequence();
    } else {
      lineAnimationControl.start('initial');
    }
  }, [open, animationSequence, lineAnimationControl]);

  return (
    <MotionBox
      onClick={onClick}
      sx={{
        backgroundColor: 'transparent',
        width: '3.4em',
        height: 'auto',
        cursor: 'pointer',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-end',
        justifyContent: 'center',
        position: 'relative',
        rowGap: '5px',
      }}
      layout
      animate={lineAnimationControl}
    >
      <MotionConfig
        transition={{
          type: 'spring',
          damping: 25,
          stiffness: 300,
        }}
      >
        <MotionBox
          component="span"
          variants={{
            initial: {
              rotate: '0deg',
              translateY: '0px',
            },
            translate: {
              translateY: valueToCSSUnit(lineHeight, 'em'),
            },
            rotate: {
              rotate: '45deg',
            },
          }}
          sx={{
            ...lineStyleMemo(),
          }}
        ></MotionBox>
        <MotionBox
          component="span"
          variants={{
            initial: {
              rotate: '0deg',
              translateY: '0px',
            },
            translate: {
              translateY: valueToCSSUnit(-lineHeight, 'em'),
            },
            rotate: {
              rotate: '-45deg',
            },
          }}
          sx={{
            ...lineStyleMemo(),
          }}
        ></MotionBox>
        <MotionBox
          component="span"
          sx={{
            ...lineStyleMemo(),
            width: '60%',
          }}
          variants={{
            initial: {
              translateY: '0px',
              opacity: 1,
            },
            translate: {
              translateY: valueToCSSUnit(-lineHeight * 3, 'em'),
              opacity: 0,
            },
          }}
        ></MotionBox>
      </MotionConfig>
    </MotionBox>
  );
}

export default KotaBurguer;
