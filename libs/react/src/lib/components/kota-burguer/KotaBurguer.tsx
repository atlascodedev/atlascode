import { Variants } from 'framer-motion';
import React from 'react';
import { AtlasCSSVariant } from '../../utility/atlas-theme-provider/theme-utilities';
import MotionBox from '../../utility/motion-box/MotionBox';

/* eslint-disable-next-line */
export interface KotaBurguerProps {
  colorClosed?: string;
  colorOpen?: string;
}

export function KotaBurguer({
  colorClosed = 'rgb(135, 135, 135)',
  colorOpen = colorClosed,
}: KotaBurguerProps) {
  const [open, setOpen] = React.useState(false);

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
        transformOrigin: 'center',
      } as AtlasCSSVariant);
  }, [colorClosed, colorOpen, open]);

  return (
    <MotionBox
      layout
      onClick={() => setOpen((prevState) => !prevState)}
      sx={{
        backgroundColor: 'transparent',
        width: '3.4em',
        height: 'auto',
        cursor: 'pointer',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
      }}
      initial="closed"
      animate={open ? 'open' : 'closed'}
      whileHover={open ? { scale: 1.1 } : { rowGap: '10px' }}
      whileTap={open ? { scale: 0.9 } : { rowGap: '15px' }}
      variants={{
        open: {
          rowGap: '0px',
        },
        closed: {
          rowGap: '7px',
        },
        hoverClosed: {
          rowGap: '10px',
        },
      }}
    >
      <MotionBox
        animate={
          open ? { rotate: '45deg', position: 'absolute' } : { rotate: '0deg' }
        }
        component="span"
        sx={{
          ...lineStyleMemo(),
        }}
      ></MotionBox>
      <MotionBox
        animate={
          open ? { rotate: '-45deg', position: 'absolute' } : { rotate: '0deg' }
        }
        component="span"
        sx={{
          ...lineStyleMemo(),
        }}
      ></MotionBox>
      <MotionBox
        animate={open ? { opacity: 0 } : { opacity: 1 }}
        component="span"
        sx={{
          ...lineStyleMemo(),
          width: '60%',
          marginLeft: 'auto',
        }}
      ></MotionBox>
    </MotionBox>
  );
}

export default KotaBurguer;

const lineStyles: AtlasCSSVariant = {
  display: 'inline-block',
  cursor: 'pointer',
  userSelect: 'none',
  width: '100%',
  height: '0.3em',
  backgroundColor: 'rgb(135, 135, 135)',
  position: 'relative',
  transformOrigin: 'center',
};
