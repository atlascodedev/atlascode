import styled from '@emotion/styled';

/* eslint-disable-next-line */
export interface AtlasButtonProps {}

const StyledAtlasButton = styled.div`
  color: pink;
`;

export function AtlasButton(props: AtlasButtonProps) {
  return (
    <StyledAtlasButton>
      <h1>Welcome to AtlasButton!</h1>
    </StyledAtlasButton>
  );
}

export default AtlasButton;
