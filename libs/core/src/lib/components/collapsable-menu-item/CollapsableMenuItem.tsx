import { Box, BoxProps, MenuItem } from '@material-ui/core';
import { Property } from 'csstype';
import { FaChevronUp } from 'react-icons/fa';
import MuiRoundedMenu from '../mui-rounded-menu/MuiRoundedMenu';
import React from 'react';
import _ from 'lodash';
import { MotionBox } from '@atlascode/react-web-animations';
import { ResponsiveStyleValue } from '@material-ui/system';

/* eslint-disable-next-line */
export interface CollapsableMenuItemProps {
  color?: 'primary' | 'secondary' | ResponsiveStyleValue<Property.Color>;
  onClick?: (...args: unknown[]) => void;
  fontSize?: ResponsiveStyleValue<Property.FontSize<string>>;
  label: string;
  subMenu?: Array<{
    label: string;
    action?: (...args: unknown[]) => void;
  }>;
}

export function CollapsableMenuItem({
  color = 'primary',
  fontSize = '1.5rem',
  onClick,
  label,
  subMenu,
}: CollapsableMenuItemProps) {
  const containerRef = React.useRef<HTMLElement>(null);
  const [open, setOpen] = React.useState<boolean>(false);
  const handleClose = () => {
    setOpen(false);
  };
  const handleOpen = () => {
    setOpen(true);
  };

  const handleClick = React.useCallback(() => {
    if (subMenu && subMenu.length > 0) {
      handleOpen();
    } else if (!_.isUndefined(onClick) && !subMenu) {
      onClick();
    } else {
      _.noop();
    }
  }, [onClick, subMenu]);

  return (
    <Box
      sx={{
        display: 'flex',
        fontSize: fontSize,
        flexDirection: 'row',
        gap: '1em',
      }}
    >
      <Box
        onClick={handleClick}
        ref={containerRef}
        sx={{
          fontSize: '2rem',
          color: (theme) => theme.palette.primary.main,
          fontWeight: 700,
          cursor: 'pointer',
        }}
      >
        {label}
      </Box>
      {subMenu && subMenu.length > 0 ? (
        <Box sx={{ display: 'flex' }}>
          <MotionBox
            sx={{ cursor: 'pointer', display: 'flex', alignItems: 'center' }}
            initial="closed"
            animate={open ? 'open' : 'closed'}
            variants={{
              open: { rotate: '0deg' },
              closed: { rotate: '180deg' },
            }}
            onClick={handleOpen}
          >
            <FaChevronUp />
          </MotionBox>

          <MuiRoundedMenu
            minWidth={containerRef.current?.offsetWidth || 0}
            anchorEl={containerRef.current}
            open={open}
            anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
            transformOrigin={{ horizontal: 'center', vertical: 0 }}
            onClose={handleClose}
          >
            {subMenu.map((subMenuItem, index) => {
              return (
                <MenuItem onClick={subMenuItem.action} key={index}>
                  {subMenuItem.label}
                </MenuItem>
              );
            })}
          </MuiRoundedMenu>
        </Box>
      ) : null}
    </Box>
  );
}

export default CollapsableMenuItem;
