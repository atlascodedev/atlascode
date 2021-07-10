import { createTheme, Theme, alpha, darken } from '@material-ui/core';

const outerTheme = createTheme({
  palette: {
    primary: {
      main: 'hsla(224, 24%, 30%, 1)',
    },
    secondary: {
      main: 'hsla(11, 87%, 59%, 1)',
    },
  },
});

const componentsTheme = (theme: Theme) => {
  return createTheme({
    ...theme,
    components: {
      MuiButton: {
        variants: [],
      },
    },
  });
};

export default componentsTheme(outerTheme);
