import { render } from '@testing-library/react';

import IconButtonCircle from './IconButtonCircle';

describe('IconButtonCircle', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<IconButtonCircle />);
    expect(baseElement).toBeTruthy();
  });
});
