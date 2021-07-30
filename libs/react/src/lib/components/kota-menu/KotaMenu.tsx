import { Box } from '@material-ui/core';
import { AnimatePresence } from 'framer-motion';
import React from 'react';
import MotionBox from '../../utility/motion-box/MotionBox';
import KotaBurguer from '../kota-burguer/KotaBurguer';

export type KotaMenuItem =
  | string
  | { label: string; subItemsList: KotaMenuItem[] };

export interface KotaMenuProps {
  logo?: string;
  logoOpen?: string;
  open?: boolean;
  onOpen?: (...args: unknown[]) => void;
  onClose?: (...args: unknown[]) => void;
  menuItems: { label: string; action: (...args: unknown[]) => void };
}

export function KotaMenu({
  logo,
  logoOpen,
  open,
  onOpen,
  onClose,
  menuItems,
}: KotaMenuProps) {
  return (
    <Box sx={{ position: 'absolute' }}>
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
          <KotaBurguer
            colorOpen="#fff"
            fontSize={{ xs: '0.6rem', lg: '0.5rem' }}
            open={open}
          />
        </Box>
      </Box>

      <MotionBox
        sx={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100vh',
          zIndex: 50,
          backgroundColor: (theme) => theme.palette.primary.main,
          display: 'flex',
          flexDirection: 'column',
        }}
        initial="closed"
        animate={open ? 'open' : 'closed'}
        variants={{
          closed: {
            height: '0vh',
          },
          open: {
            height: '100vh',
          },
        }}
        transition={{
          type: 'spring',
          mass: 25,
          damping: 400,
          stiffness: 1200,
        }}
      >
        <MotionBox
          transition={{ staggerChildren: 0.5 }}
          sx={{
            height: '100%',
            width: '100%',
            alignItems: 'center',
            display: 'grid',
            justifyItems: 'center',
            gridTemplateColumns: '50% 50%',
            gridAutoFlow: 'row',
          }}
        >
          <Box>
            <KotaMenuItem />
            <KotaMenuItem />
            <KotaMenuItem />
            <KotaMenuItem />
            <KotaMenuItem />
            <KotaMenuItem />
            <KotaMenuItem />
          </Box>
        </MotionBox>
      </MotionBox>
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
      hello
    </MotionBox>
  );
};
