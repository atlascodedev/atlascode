import { render } from '@testing-library/react';

import Teste2 from './teste2';

describe('Teste2', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Teste2 />);
    expect(baseElement).toBeTruthy();
  });
});
