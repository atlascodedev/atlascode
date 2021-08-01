import { Box } from '@material-ui/core';
import { useAnimation } from 'framer-motion';
import _ from 'lodash';
import React from 'react';
import FadeInList from '../../animations/fade-in-list/FadeInList';
import { transitionPresetMap } from '../../animations/typings';
import MotionBox from '../../utility/motion-box/MotionBox';
import KotaBurguer, { KotaBurguerProps } from '../kota-burguer/KotaBurguer';

interface ControlledAnimation {
  onAnimationStart?: (...args: unknown[]) => void;
  onAnimationEnd?: (...args: unknown[]) => void;
}

export interface KotaMenuProps extends ControlledAnimation {
  MenuBarProps: KotaMenuBarProps;
  open?: boolean;
  onOpen?: (...args: unknown[]) => void;
  onClose?: (...args: unknown[]) => void;
  menuItems: { label: string; action: (...args: unknown[]) => void };
}

export function KotaMenu({
  onOpen,
  onClose,
  menuItems,
  MenuBarProps,
  onAnimationEnd,
  onAnimationStart,
  open,
}: KotaMenuProps) {
  const backdropControl = useAnimation();

  const [itemsVisibility, setItemsVisibility] = React.useState<boolean>(false);

  React.useEffect(() => {
    if (open) {
      (async () => {
        await backdropControl.start('visible');
        setItemsVisibility(true);
      })();
    } else {
      (async () => {
        setItemsVisibility(false);
        await backdropControl.start('hidden');
      })();
    }
  }, [open, backdropControl]);

  return (
    <Box sx={{ position: 'absolute' }}>
      <MotionBox
        initial="hidden"
        animate={backdropControl}
        variants={{
          hidden: {
            height: '0vh',
          },
          visible: {
            height: '100vh',
          },
        }}
        transition={transitionPresetMap['slow']}
        sx={{
          width: '100vw',
          height: { xs: '100vh', lg: '80vh' },
          backgroundColor: (theme) => theme.palette.primary.main,
          position: 'absolute',
          top: 0,
          left: 0,
        }}
      >
        <FadeInList
          animateIn={itemsVisibility}
          component={KotaMenuItem}
          list={[1, 2, 3, 4, 5, 6, 7, 8]}
        />
      </MotionBox>
      <KotaMenuBar {...MenuBarProps} open={open} />
    </Box>
  );
}

export default KotaMenu;

const KotaMenuItem = () => {
  return (
    <MotionBox
      sx={{
        color: (theme) => theme.palette.primary.contrastText,
        fontWeight: 800,
        fontSize: '4.8rem',
      }}
    >
      Hello world
    </MotionBox>
  );
};

export interface KotaMenuBarProps {
  open?: boolean;
  logo?: string;
  logoOpen?: string;
  BurguerProps: KotaBurguerProps;
}

const KotaMenuBar = ({
  open,
  logo,
  logoOpen,
  BurguerProps,
}: KotaMenuBarProps) => {
  return (
    <Box
      sx={{
        width: '100%',
        position: 'fixed',
        top: '5%',
        px: '4rem',
        left: 0,
        zIndex: 100,
        display: 'grid',
        transform: 'translate3D(0px, 0px, 0px)',
        gridTemplateRows: '1fr',
      }}
    >
      <MotionBox
        sx={{
          width: '8rem',
          height: '8rem',
          gridRow: '1/3',
          position: 'relative',
        }}
        layout
        initial="closed"
        animate={open ? 'open' : 'closed'}
      >
        <MotionBox
          variants={{
            closed: {
              opacity: 1,
              zIndex: 5,
            },
            open: {
              opacity: 0,
              zIndex: -1,
            },
          }}
        >
          <Box
            component="img"
            sx={{
              width: '100%',
              height: '100%',
              objectFit: 'contain',
              position: 'absolute',
            }}
            src={logo}
          />
        </MotionBox>

        <MotionBox
          variants={{
            closed: {
              opacity: 0,
              zIndex: -1,
            },
            open: {
              opacity: 1,
              zIndex: 5,
            },
          }}
        >
          <Box
            sx={{
              width: '100%',
              height: '100%',
              objectFit: 'contain',
              position: 'absolute',
            }}
            src={logoOpen}
            component="img"
          />
        </MotionBox>
      </MotionBox>

      <Box
        sx={{ justifySelf: 'flex-end', gridRow: '1/3', alignSelf: 'center' }}
      >
        <KotaBurguer {...BurguerProps} open={open} />
      </Box>
    </Box>
  );
};
