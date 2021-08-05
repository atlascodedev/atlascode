import { Box, Button } from '@material-ui/core';
import React from 'react';
import _ from 'lodash';
import CollapsableMenuItem, {
  CollapsableMenuItemProps,
} from '../collapsable-menu-item/CollapsableMenuItem';

/* eslint-disable-next-line */
export interface ModernCleanMenuProps {
  logo?: string;
  items: CollapsableMenuItemProps[];
}

export function ModernCleanMenu({ logo, items }: ModernCleanMenuProps) {
  return (
    <Box
      sx={{
        width: '100%',
        top: 0,
        left: 0,
        px: '4rem',
        zIndex: 200,
        display: 'grid',
        gridTemplateRows: '1fr',
        gridTemplateColumns: '0.2fr 1fr 0.3fr',
        py: '4rem',
        alignItems: 'center',
      }}
    >
      <Box sx={{ width: 'auto', height: '8rem' }}>
        <Box
          src={logo}
          component="img"
          sx={{ width: '100%', height: '100%', objectFit: 'contain' }}
        />
      </Box>

      <Box
        sx={{
          width: '100%',
          display: 'flex',
          px: '4rem',
          gap: '8rem',
          justifyContent: 'center',
        }}
      >
        {items.map((value, index) => {
          return <CollapsableMenuItem {...value} key={index} />;
        })}
      </Box>

      <Box sx={{ width: '100%', height: 'auto' }}>
        <Button
          sx={{ fontSize: '1.2rem' }}
          size="small"
          variant="kota"
          color="primary"
        >
          Call to action here
        </Button>
      </Box>
    </Box>
  );
}

export default ModernCleanMenu;
