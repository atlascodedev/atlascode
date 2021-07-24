import { createTheme, Theme } from '@material-ui/core';
import {
  kotaSecondary,
  kotaPrimary,
  kotaInvertedPrimary,
  kotaInvertedSecondary,
  roundedPrimary,
  roundedSecondary,
} from './button-variants';
import { fabOutlinedPrimary, fabOutlinedSecondary } from './fab-variants';

/**
 * Theme object that will be passed by default. If at any stage the developer decides to use a custom theme, said custom theme is merged with the default one.
 *
 * If one wishes to extend the default theme beyond what is already available by default from Material UI, one should also introduce said extensions via Typescript's module
 * augmentation and then implement initial values through this object.
 */
export const defaultTheme = createTheme({
  palette: {
    primary: {
      main: '#283046',
    },
    secondary: {
      main: '#F15D3C',
    },
  },
  customShadow: {
    light: '0px 4.01194px 4.01194px rgba(0, 0, 0, 0.1)',
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
          roundedPrimary(theme),
          roundedSecondary(theme),
        ],
      },
    },
  });
};

export default defaultTheme;
