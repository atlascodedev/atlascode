import styled from '@emotion/styled';
import { Button } from '@material-ui/core';

/* eslint-disable-next-line */
export interface DefaultThemedButtonProps {}

export function DefaultThemedButton(props: DefaultThemedButtonProps) {
  return (
    <Button variant="roundedOutline" color="secondary">
      Hello world
    </Button>
  );
}

export default DefaultThemedButton;
