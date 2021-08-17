import { render } from '@testing-library/react';

import SmoothScrollbarLayout from './SmoothScrollbarLayout';

describe('SmoothScrollbarLayout', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<SmoothScrollbarLayout />);
    expect(baseElement).toBeTruthy();
  });
});
