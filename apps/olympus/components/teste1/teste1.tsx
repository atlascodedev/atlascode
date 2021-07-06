import styled from '@emotion/styled';

/* eslint-disable-next-line */
export interface Teste1Props {}

const StyledTeste1 = styled.div`
  color: pink;
`;

export function Teste1(props: Teste1Props) {
  return (
    <StyledTeste1>
      <h1>Welcome to teste1!</h1>
    </StyledTeste1>
  );
}

export default Teste1;
