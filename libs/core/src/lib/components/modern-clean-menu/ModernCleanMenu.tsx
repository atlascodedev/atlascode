import { Box, Button } from '@material-ui/core';
import React from 'react';
import _ from 'lodash';
import CollapsableMenuItem, {
  CollapsableMenuItemProps,
} from '../collapsable-menu-item/CollapsableMenuItem';
import AtlasButton, { AtlasButtonProps } from '../button/Button';

/* eslint-disable-next-line */
export interface ModernCleanMenuProps {
  logo?: string;
  items: CollapsableMenuItemProps[];
  onLogoClick?: (...args: unknown[]) => void;
  ButtonProps?: AtlasButtonProps;
}

export function ModernCleanMenu({
  logo,
  items,
  ButtonProps: CTAButton,
  onLogoClick,
}: ModernCleanMenuProps) {
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
        py: '2rem',
        pb: '1.5rem',
        bgcolor: '#F6F9FB',
        boxShadow: '0px 2px 5px rgba(0, 0, 0, 0.15)',
        alignItems: 'center',
      }}
    >
      <Box sx={{ width: 'auto', height: '6rem', cursor: 'pointer' }}>
        <Box
          onClick={onLogoClick}
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

      {CTAButton && (
        <Box sx={{ width: '100%', height: 'auto' }}>
          <AtlasButton
            sx={{ fontSize: '1.2rem' }}
            variant="kota"
            color="primary"
            {...CTAButton}
          />
        </Box>
      )}
    </Box>
  );
}

export default ModernCleanMenu;
