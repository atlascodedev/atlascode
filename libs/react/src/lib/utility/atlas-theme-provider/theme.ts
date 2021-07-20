import { createTheme, Theme } from '@material-ui/core';
import { kotaSecondary, kotaPrimary } from './button-variants';

export const defaultTheme = createTheme({
  palette: {
    primary: {
      main: '#283047',
    },
    secondary: {
      main: '#F15D3C',
    },
  },
});

export const componentsTheme = (theme: Theme) => {
  return createTheme({
    components: {
      MuiButton: {
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        variants: [kotaPrimary(theme), kotaSecondary(theme)],
      },
    },
  });
};

export default defaultTheme;
