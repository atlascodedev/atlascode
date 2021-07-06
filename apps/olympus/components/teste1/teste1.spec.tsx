import { render } from '@testing-library/react';

import Teste1 from './teste1';

describe('Teste1', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Teste1 />);
    expect(baseElement).toBeTruthy();
  });
});
