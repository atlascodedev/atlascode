import { Box, ButtonBase } from '@material-ui/core';
import { IconType } from 'react-icons';
import { AtlasCSSVariant } from '../../utility/atlas-theme-provider/theme-utilities';
import React from 'react';

/* eslint-disable-next-line */
export interface IconButtonCircleProps {
  icon: IconType;
  color?: 'primary' | 'secondary';
  variant: 'contained' | 'outlined';
  size?: IconButtonSizeVariant;
  elevation?: boolean;
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
}: IconButtonCircleProps) {
  const variants = React.useMemo(() => {
    return getVariant(size, color, elevation);
  }, [size, color, elevation]);

  return (
    <Box component={ButtonBase} sx={{ ...variants[variant] }}>
      <Box className={'Atlas-IconButtonRound-icon'} component={Icon} />
    </Box>
  );
}

export default IconButtonCircle;
