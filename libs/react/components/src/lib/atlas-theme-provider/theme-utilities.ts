import { ComponentsPropsList, ThemeOptions } from '@material-ui/core';
import { CSSInterpolation } from '@material-ui/system';
import _ from 'lodash';
import defaultThemePalette, { AtlasPalette } from './default-palette';

export type ComponentsVariantSingle = {
  [Name in keyof ComponentsPropsList]?: {
    props: Partial<ComponentsPropsList[Name]>;
    style: CSSInterpolation;
  };
};

export const createComponentVariant = <T extends keyof ComponentsPropsList>(
  component: T,
  props: Partial<ComponentsPropsList[T]>,
  style: CSSInterpolation
): ComponentsVariantSingle[T] => {
  return {
    props: props,
    style: style,
  };
};

export const getPaletteColor = <
  T extends keyof AtlasPalette,
  R extends keyof AtlasPalette[T]
>(
  paletteVariaton: T,
  paletteInnerVariation: R,
  defaultPalette: AtlasPalette = defaultThemePalette,
  paletteOverride: AtlasPalette | ThemeOptions['palette'] = {}
) => {
  const path = `${paletteVariaton}.${paletteInnerVariation}`;

  const defaultThemeValue = _.get(defaultPalette, path);

  return _.get(paletteOverride, path, defaultThemeValue);
};
