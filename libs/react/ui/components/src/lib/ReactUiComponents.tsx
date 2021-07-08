import styled from '@emotion/styled';

/* eslint-disable-next-line */
export interface ReactUiComponentsProps {}

const StyledReactUiComponents = styled.div`
  color: pink;
`;

export function ReactUiComponents(props: ReactUiComponentsProps) {
  return (
    <StyledReactUiComponents>
      <h1>Welcome to react-ui-components!</h1>
    </StyledReactUiComponents>
  );
}

export default ReactUiComponents;
