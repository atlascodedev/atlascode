import { Box, Button, MenuItem } from '@material-ui/core';
import React from 'react';
import _ from 'lodash';
import { FaChevronUp } from 'react-icons/fa';
import MotionBox from '../../utility/motion-box/MotionBox';
import MuiRoundedMenu from '../mui-rounded-menu/MuiRoundedMenu';

type ModernCleanMenuItemProps = {
  label: string;
  action?: (...args: unknown[]) => void;
  subMenu?: Array<{
    label: string;
    action?: (...args: unknown[]) => void;
  }>;
};

/* eslint-disable-next-line */
export interface ModernCleanMenuProps {
  logo?: string;
  items: ModernCleanMenuItemProps[];
}

export function ModernCleanMenu({ logo, items }: ModernCleanMenuProps) {
  return (
    <Box
      sx={{
        width: '100%',
        position: 'fixed',
        top: 0,
        left: 0,
        px: '4rem',
        zIndex: 200,
        display: 'grid',
        transform: 'traslate3d(0px, 0px, 0px)',
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
          return <ModernCleanMenuItem {...value} key={index} />;
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

const ModernCleanMenuItem = ({
  label,
  action,
  subMenu = [],
}: ModernCleanMenuItemProps) => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(containerRef.current);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const containerRef = React.useRef(null);

  return (
    <Box
      component="div"
      sx={{
        display: 'flex',
        flexDirection: 'row',
        fontSize: '2rem',
        gap: '1.5rem',
      }}
    >
      <Box
        ref={containerRef}
        component="div"
        onClick={action}
        sx={{
          color: (theme) => theme.palette.primary.main,
          fontWeight: 700,
          fontSize: '1em',
          cursor: subMenu.length > 0 ? 'auto' : 'pointer',
        }}
      >
        {label}
      </Box>
      {subMenu && subMenu.length > 0 ? (
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <MotionBox
            initial="closed"
            animate={open ? 'open' : 'closed'}
            variants={{
              open: {
                rotate: '0deg',
              },
              closed: {
                rotate: '180deg',
              },
            }}
            sx={{ cursor: 'pointer', display: 'flex', alignItems: 'center' }}
            onClick={handleClick}
          >
            <FaChevronUp />
          </MotionBox>

          <MuiRoundedMenu
            anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
            transformOrigin={{ horizontal: 'center', vertical: 0 }}
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
          >
            {subMenu.map((value, index) => {
              return (
                <MenuItem key={index} onClick={value.action}>
                  {value.label}
                </MenuItem>
              );
            })}
          </MuiRoundedMenu>
        </Box>
      ) : null}
    </Box>
  );
};
