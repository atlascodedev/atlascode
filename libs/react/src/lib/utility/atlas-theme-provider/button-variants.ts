import { ComponentsVariantSingle } from './theme-utilities';
import { Theme } from '@material-ui/core';
import theme from './theme';

export const roundedButtonPrimary: ComponentsVariantSingle['MuiButton'] = {
  props: {
    variant: 'rounded',
  },
  style: {},
};

const withAtlasTheme = <T extends keyof ComponentsVariantSingle>(
  component: T,
  foo: (theme: Theme) => ComponentsVariantSingle[T]
) => {
  return foo(theme);
};

export const testMeNOW = withAtlasTheme('MuiButton', (theme) => {
  return {
    props: {
      variant: 'kota',
    },
    style: {
      color: 'fff',
      backgroundColor: theme.palette.primary.main,
    },
  };
});
