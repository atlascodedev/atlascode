import { render } from '@testing-library/react';

import UseSmoothScrollbar from './UseSmoothScrollbar';

describe('UseSmoothScrollbar', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<UseSmoothScrollbar />);
    expect(baseElement).toBeTruthy();
  });
});
