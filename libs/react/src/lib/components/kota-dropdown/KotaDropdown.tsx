import { useAnimation, useCycle, useSpring } from 'framer-motion';
import React from 'react';
import { AtlasCSSVariant } from '../../utility/atlas-theme-provider/theme-utilities';
import MotionBox from '../../utility/motion-box/MotionBox';

/* eslint-disable-next-line */
export interface KotaDropdownProps {
  active: boolean;
  sx?: AtlasCSSVariant;
  color?: 'primary' | 'secondary';
}

export function KotaDropdown({
  active,
  sx,
  color = 'primary',
}: KotaDropdownProps) {
  const animate = useAnimation();

  React.useEffect(() => {
    if (active) {
      animate.start('open');
    } else {
      animate.start('closed');
    }
  }, [active, animate]);

  return (
    <MotionBox
      sx={{
        backgroundColor: (theme) => theme.palette[color].main,
        color: (theme) => theme.palette[color].contrastText,
        width: '100vw',
        position: 'fixed',
      }}
      animate={animate}
      variants={{
        closed: {
          height: '0px',
          transition: {
            type: 'spring',
            stiffness: 200,
            damping: 30,
            mass: 0.2,
          },
        },
        open: {
          height: '100vh',
          transition: {
            type: 'spring',
            stiffness: 300,
            damping: 40,
            mass: 0.7,
          },
        },
      }}
    ></MotionBox>
  );
}

export default KotaDropdown;
