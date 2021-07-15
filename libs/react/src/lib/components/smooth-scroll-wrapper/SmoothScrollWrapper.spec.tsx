import { render } from '@testing-library/react';

import SmoothScrollWrapper from './SmoothScrollWrapper';

describe('SmoothScrollWrapper', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<SmoothScrollWrapper />);
    expect(baseElement).toBeTruthy();
  });
});
