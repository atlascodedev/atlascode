import { Box, Button } from '@material-ui/core';
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
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onOpen?: (...args: any[]) => void;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onClose?: (...args: any[]) => void;
  menuItems: KotaMenuItem[];
}

export function KotaMenu(props: KotaMenuProps) {
  const [open, setOpen] = React.useState(false);

  const toggleOpen = () => {
    setOpen((prevState) => !prevState);
  };

  return (
    <Box
      sx={{
        position: 'fixed',
        top: '10%',
        width: '100%',
        display: 'flex',
        px: '60px',
        alignItems: 'center',
        zIndex: (theme) => theme.zIndex.appBar,
      }}
    >
      <Box
        sx={{
          flexGrow: 1,
        }}
      >
        Logo here
      </Box>

      <KotaBurguer open={open} onClick={toggleOpen} />
    </Box>
  );
}

export default KotaMenu;
