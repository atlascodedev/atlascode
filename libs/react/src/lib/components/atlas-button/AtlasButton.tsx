import React from 'react';
import { Button, ButtonProps } from '@material-ui/core';

export type RoundedButtonProps = Omit<
  ButtonProps,
  'variant' | 'color' | 'children'
>;

/* eslint-disable-next-line */
export interface AtlasButtonProps extends RoundedButtonProps {
  color?: 'primary' | 'secondary';
  variant?: 'outlined' | 'contained';
  compact?: boolean;
  children?: React.ReactNode;
}

export function AtlasButton({
  color = 'primary',
  variant = 'contained',
  children,
  disableElevation = false,
  compact = false,
  ...props
}: AtlasButtonProps) {
  return (
    <Button color="secondary" variant="roundedOutline">
      Hello world
    </Button>
  );
}

export default AtlasButton;
