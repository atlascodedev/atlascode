import { Box } from '@material-ui/core';
import React from 'react';
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
  menuItems: KotaMenuItem[];
}

export function KotaMenu(props: KotaMenuProps) {
  const [open, setOpen] = React.useState(false);

  const toggleOpen = () => {
    setOpen((prevState) => !prevState);
  };

  return <KotaBurguer open={open} onClick={toggleOpen} />;
}

export default KotaMenu;
