export interface AtlasPaletteVariatons {
  main: string;
  light: string;
  dark: string;
  contrastText: string;
}

export interface AtlasPalette {
  primary: AtlasPaletteVariatons;
  secondary: AtlasPaletteVariatons;
}

export const defaultThemePalette: AtlasPalette = {
  primary: {
    main: 'hsla(224, 24%, 30%, 1)',
    dark: 'hsla(224, 28%, 20%, 1)',
    light: 'hsla(224, 28%, 40%, 1)',
    contrastText: '#fff',
  },
  secondary: {
    main: 'hsla(11, 87%, 59%, 1)',
    dark: 'hsla(11, 87%, 49%, 1)',
    light: 'hsla(11, 87%, 39%, 1)',
    contrastText: '#fff',
  },
};

export default defaultThemePalette;
