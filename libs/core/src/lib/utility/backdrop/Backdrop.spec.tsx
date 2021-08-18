import { render } from '@testing-library/react';

import Backdrop from './Backdrop';

describe('Backdrop', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Backdrop />);
    expect(baseElement).toBeTruthy();
  });
});
