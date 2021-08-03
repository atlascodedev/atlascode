import { Menu, MenuProps } from '@material-ui/core';

/* eslint-disable-next-line */
export interface MuiRoundedMenuProps extends MenuProps {}

export function MuiRoundedMenu(props: MuiRoundedMenuProps) {
  return (
    <Menu
      {...props}
      sx={{
        '.MuiPaper-root': {
          borderRadius: '8px',
          minWidth: `175px`,
          marginTop: '15px',

          '.MuiList-root': {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          },
        },
      }}
    />
  );
}

export default MuiRoundedMenu;
