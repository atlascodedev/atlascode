import { render } from '@testing-library/react';

import SmoothScrollbarContext from './SmoothScrollbarContext';

describe('SmoothScrollbarContext', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<SmoothScrollbarContext />);
    expect(baseElement).toBeTruthy();
  });
});
