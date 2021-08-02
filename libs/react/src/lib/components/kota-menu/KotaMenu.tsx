import { Box } from '@material-ui/core';
import { useAnimation } from 'framer-motion';
import _ from 'lodash';
import React from 'react';
import FadeInList from '../../animations/fade-in-list/FadeInList';
import ImageCrossfade from '../../animations/image-crossfade/ImageCrossfade';
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
  const itemsControl = useAnimation();

  React.useEffect(() => {
    if (open) {
      (async () => {
        await backdropControl.start('visible');
        await itemsControl.start('visible');
      })();
    } else {
      (async () => {
        await itemsControl.start('hidden');
        await backdropControl.start('hidden');
      })();
    }
  }, [open, backdropControl, itemsControl]);

  return (
    <Box sx={{ position: 'absolute', width: '100%' }}>
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
          width: '100%',
          height: { xs: '100vh', lg: '80vh' },
          backgroundColor: (theme) => theme.palette.primary.main,
          position: 'absolute',
          top: 0,
          left: 0,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          overflow: 'hidden',
        }}
      >
        <FadeInList
          customControl={itemsControl}
          component={KotaMenuItem}
          list={[1, 2, 3, 4]}
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
        fontSize: { xs: '4rem', lg: '7.8rem' },
        transition: 'color 0.5s',
        cursor: 'pointer',
        ':hover': {
          color: (theme) => theme.palette.secondary.main,
        },
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
      >
        <ImageCrossfade
          swap={open}
          fitContainer
          primaryImage={logo!}
          secondaryImage={logoOpen!}
        />
      </MotionBox>

      <Box
        sx={{ justifySelf: 'flex-end', gridRow: '1/3', alignSelf: 'center' }}
      >
        <KotaBurguer {...BurguerProps} open={open} />
      </Box>
    </Box>
  );
};
