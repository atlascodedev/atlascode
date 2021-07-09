import { Button, ButtonProps } from '@material-ui/core';
import { SystemCssProperties, Theme } from '@material-ui/system';

const roundedStyles: SystemCssProperties<Theme> = {
  color: 'primary.main',
};

/* eslint-disable-next-line */
export interface AtlasButtonProps extends ButtonProps {}

export function AtlasButton(props: AtlasButtonProps) {
  return <Button {...props}>hello world</Button>;
}

export default AtlasButton;
