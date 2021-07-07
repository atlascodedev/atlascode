import styled from '@emotion/styled';

/* eslint-disable-next-line */
export interface AtlasInputProps {}

const StyledAtlasInput = styled.div`
  color: pink;
`;

export function AtlasInput(props: AtlasInputProps) {
  return (
    <StyledAtlasInput>
      <h1>Welcome to AtlasInput!</h1>
    </StyledAtlasInput>
  );
}

export default AtlasInput;
