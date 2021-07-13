import { render } from '@testing-library/react';

import KotaBurguer from './KotaBurguer';

describe('KotaBurguer', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<KotaBurguer open={false} />);
    expect(baseElement).toBeTruthy();
  });
});
