import { render } from '@testing-library/react';

import AlertContext from './AlertContext';

describe('AlertContext', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<AlertContext />);
    expect(baseElement).toBeTruthy();
  });
});
