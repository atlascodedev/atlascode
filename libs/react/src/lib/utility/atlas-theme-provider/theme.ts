import { createTheme, Theme } from '@material-ui/core';

const outerTheme = createTheme({
  palette: {
    primary: {
      main: '#283047',
    },
    secondary: {
      main: '#F15D3C',
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
