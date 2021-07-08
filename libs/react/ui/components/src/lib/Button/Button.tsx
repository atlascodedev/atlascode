import React from 'react';
import { Button } from '@material-ui/core';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface ButtonProps {}

export const AtlasButton = (props: ButtonProps) => {
  return <Button variant="rounded">Hello world</Button>;
};

export default Button;
