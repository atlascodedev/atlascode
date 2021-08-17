import { render } from '@testing-library/react';

import StandardFooter from './StandardFooter';

describe('StandardFooter', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<StandardFooter />);
    expect(baseElement).toBeTruthy();
  });
});
