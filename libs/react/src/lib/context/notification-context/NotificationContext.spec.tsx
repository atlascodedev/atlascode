import { render } from '@testing-library/react';

import NotificationContext from './NotificationContext';

describe('NotificationContext', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<NotificationContext />);
    expect(baseElement).toBeTruthy();
  });
});
