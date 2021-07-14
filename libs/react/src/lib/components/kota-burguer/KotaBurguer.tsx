import {
  useMotionValue,
  Variants,
  useAnimation,
  MotionConfig,
} from 'framer-motion';
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
      initial="initial"
      layout
      whileHover={!open ? { rowGap: '10px' } : undefined}
      animate={open ? 'open' : 'initial'}
    >
      <MotionConfig transition={{ times: [0, 0.3, 1] }}>
        <MotionBox
          component="span"
          variants={{
            open: {
              translateY: valueToCSSUnit(lineHeight, 'em'),
              rotate: ['0deg', '0deg', '45deg'],
            },
          }}
          sx={{
            ...lineStyleMemo(),
          }}
        ></MotionBox>
        <MotionBox
          component="span"
          variants={{
            open: {
              translateY: valueToCSSUnit(-lineHeight, 'em'),
              rotate: ['0deg', '0deg', '-45deg'],
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
            open: {
              translateY: valueToCSSUnit(-lineHeight * 3, 'em'),
              opacity: [1, 0, 0],
            },
          }}
        ></MotionBox>
      </MotionConfig>
    </MotionBox>
  );
}

export default KotaBurguer;
