import styled from '@emotion/styled';

/* eslint-disable-next-line */
export interface Teste2Props {}

const StyledTeste2 = styled.div`
  color: pink;
`;

export function Teste2(props: Teste2Props) {
  return (
    <StyledTeste2>
      <h1>Welcome to teste2!</h1>
    </StyledTeste2>
  );
}

export default Teste2;
