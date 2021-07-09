export interface AtlasPaletteVariatons {
  main: string;
  light: string;
  dark: string;
  contrastText: string;
}

export interface AtlasPalette {
  primary: Partial<AtlasPaletteVariatons>;
  secondary: Partial<AtlasPaletteVariatons>;
}

export const defaultThemePalette: AtlasPalette = {
  primary: {
    main: 'hsla(224, 24%, 30%, 1)',
  },
  secondary: {
    main: 'hsla(11, 87%, 59%, 1)',
  },
};

export default defaultThemePalette;
