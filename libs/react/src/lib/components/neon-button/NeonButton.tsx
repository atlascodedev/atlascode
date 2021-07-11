import { Box, Button, ButtonProps } from '@material-ui/core';
import { AtlasCSSVariant } from '../../utility/atlas-theme-provider/theme-utilities';
import React from 'react';

type NeonButtonExtension = Omit<ButtonProps, 'variant' | 'color'>;

/* eslint-disable-next-line */
export interface NeonButtonProps extends NeonButtonExtension {
  color: 'primary' | 'secondary';
  children?: React.ReactNode;
  elevated?: boolean;
  rounded?: boolean;
}

export function NeonButton({
  color = 'primary',
  elevated,
  rounded,
  ...props
}: NeonButtonProps) {
  const defaultStyle = React.useMemo(() => {
    return () => {
      return {
        default: {
          fontWeight: '600',
          borderRadius: (rounded && '12px') || '0px',
          position: 'relative',
          display: 'inline-block',
          padding: '10px 20px',
          color: (theme) => theme.palette[color].main,
          textTransform: 'uppercase',
          textDecoration: 'none',
          overflow: 'hidden',
          transition: '0.2s',
          transitionTimingFunction: 'ease-in-out',

          ':hover': {
            color: (theme) => theme.palette[color].contrastText,
            background: (theme) => theme.palette[color].main,
            boxShadow: (theme) => {
              return (
                (elevated &&
                  `0 0 10px ${theme.palette[color].main}, 0 0 40px ${theme.palette[color].main}, 0 0 80px ${theme.palette[color].main}`) ||
                'none'
              );
            },
            transitionDelay: '1s',
          },
          span: {
            position: 'absolute',
            display: 'block',
          },

          'span:nth-child(1)': {
            top: 0,
            left: '-100%',
            width: '100%',
            height: '2px',
            background: (theme) =>
              `linear-gradient(90dg, transparent, ${theme.palette[color].main})`,
          },

          ':hover span:nth-child(1)': {
            left: '100%',
            transition: '1s',
          },

          'span:nth-child(3)': {
            bottom: 0,
            right: '-100%',
            width: '100%',
            height: '2px',
            background: (theme) =>
              `linear-gradient(270deg, transparent, ${theme.palette[color].main})`,
          },

          ':hover span:nth-child(3)': {
            right: '100%',
            transition: '1s',
            transitionDelay: '0.5s',
          },

          'span:nth-child(2)': {
            top: '-100%',
            right: 0,
            width: '2px',
            height: '100%',
            background: (theme) =>
              `linear-gradient(180deg, transparent, ${theme.palette[color].main})`,
          },

          ':hover span:nth-child(2)': {
            top: '100%',
            transition: '1s',
            transitionDelay: '0.25s',
          },

          'span:nth-child(4)': {
            bottom: '-100%',
            left: 0,
            width: '2px',
            height: '100%',
            background: (theme) =>
              `linear-gradient(360deg, transparent, ${theme.palette[color].main})`,
          },

          ':hover span:nth-child(4)': {
            bottom: '100%',
            transition: '1s',
            transitionDelay: '0.75s',
          },
        },
      } as Record<string, AtlasCSSVariant>;
    };
  }, [color, elevated, rounded]);

  return (
    <Box
      component={Button}
      sx={{
        ...defaultStyle()['default'],
      }}
      {...props}
    >
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      {props.children}
    </Box>
  );
}

export default NeonButton;
