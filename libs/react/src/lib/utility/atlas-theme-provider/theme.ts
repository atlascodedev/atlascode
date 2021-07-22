import { createTheme, Theme } from '@material-ui/core';
import {
  kotaSecondary,
  kotaPrimary,
  kotaInvertedPrimary,
  kotaInvertedSecondary,
} from './button-variants';
import { fabOutlinedPrimary, fabOutlinedSecondary } from './fab-variants';

export const defaultTheme = createTheme({
  palette: {
    primary: {
      main: '#283046',
    },
    secondary: {
      main: '#F15D3C',
    },
  },
});

export const componentsTheme = (theme: Theme) => {
  return createTheme({
    components: {
      MuiFab: {
        variants: [fabOutlinedPrimary(theme), fabOutlinedSecondary(theme)],
      },

      MuiButton: {
        variants: [
          kotaPrimary(theme),
          kotaSecondary(theme),
          kotaInvertedPrimary(theme),
          kotaInvertedSecondary(theme),
        ],
      },
    },
  });
};

export default defaultTheme;
