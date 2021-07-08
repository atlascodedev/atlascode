import styled from '@emotion/styled';
import { Button } from '@material-ui/core';

/* eslint-disable-next-line */
export interface AtlasButtonProps {}

const StyledAtlasButton = styled.div`
  color: pink;
`;

export function AtlasButton(props: AtlasButtonProps) {
  return <Button variant="rounded">hello world</Button>;
}

export default AtlasButton;
