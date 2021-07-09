import { createTheme, ThemeOptions } from '@material-ui/core';

const theme: ThemeOptions = {
  palette: {
    primary: {
      main: 'hsla(224, 24%, 30%, 1)',
    },
    secondary: {
      main: 'hsla(11, 87%, 59%, 1)',
    },
  },
};

export default createTheme(theme);
