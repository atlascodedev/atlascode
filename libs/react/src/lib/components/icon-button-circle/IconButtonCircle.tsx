import { Box, ButtonBase, SvgIconTypeMap } from '@material-ui/core';
import { IconType } from 'react-icons';
import { AtlasCSSVariant } from '../../utility/atlas-theme-provider/theme-utilities';
import React from 'react';
import { OverridableComponent } from '@material-ui/core/OverridableComponent';

/* eslint-disable-next-line */
export interface IconButtonCircleProps {
  // eslint-disable-next-line @typescript-eslint/ban-types
  icon: IconType | OverridableComponent<SvgIconTypeMap<{}, 'svg'>>;
  color?: 'primary' | 'secondary';
  variant?: 'contained' | 'outlined';
  size?: IconButtonSizeVariant;
  elevation?: boolean;
  href?: string;
}

export type IconButtonSizeVariant = 'small' | 'medium' | 'large';

export type IconButtonColorVariant = 'primary' | 'secondary';

export type VariantTypeMap<T extends string> = {
  [Key in T]: AtlasCSSVariant;
};

const defaultStyles = (
  size: IconButtonSizeVariant = 'small'
): AtlasCSSVariant => {
  return {
    borderRadius: '50%',
    width: size === 'small' ? '4rem' : size === 'medium' ? '5.5rem' : '6.5rem',
    height: size === 'small' ? '4rem' : size === 'medium' ? '5.5rem' : '6.5rem',
    fontSize:
      size === 'small' ? '2rem' : size === 'medium' ? '2.75rem' : '3.25rem',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  };
};

const getVariant = (
  size: IconButtonSizeVariant = 'small',
  color: 'primary' | 'secondary',
  elevation?: boolean
): VariantTypeMap<'contained' | 'outlined'> => {
  return {
    contained: {
      ...defaultStyles(size),
      backgroundColor: (theme) => theme.palette.background.paper,
      boxShadow: (theme) => (elevation ? theme.shadows[3] : theme.shadows[0]),

      '& .Atlas-IconButtonRound-icon': {
        color: (theme) => theme.palette[color].main,
      },
    },
    outlined: {
      ...defaultStyles(size),
      backgroundColor: 'transparent',
      border: (theme) => `1.5px solid ${theme.palette[color].main}`,
      boxShadow: (theme) => (elevation ? theme.shadows[3] : theme.shadows[0]),

      '& .Atlas-IconButtonRound-icon': {
        color: (theme) => theme.palette[color].main,
      },
    },
  };
};

export function IconButtonCircle({
  icon: Icon,
  color = 'primary',
  variant = 'contained',
  size = 'small',
  elevation = true,
  href,
}: IconButtonCircleProps) {
  const variants = React.useMemo(() => {
    return getVariant(size, color, elevation);
  }, [size, color, elevation]);

  return (
    <Box component={ButtonBase} sx={{ ...variants[variant] }}>
      {href ? (
        <Box
          component="a"
          sx={{
            p: 0,
            m: 0,
            textDecoration: 'none',
            height: 'fit-content',
            display: 'flex',
            alignItems: 'center',
          }}
          href={href}
          target="_blank"
          rel="noreferrer"
        >
          <Box className={'Atlas-IconButtonRound-icon'} component={Icon} />
        </Box>
      ) : (
        <Box className={'Atlas-IconButtonRound-icon'} component={Icon} />
      )}
    </Box>
  );
}

export default IconButtonCircle;
