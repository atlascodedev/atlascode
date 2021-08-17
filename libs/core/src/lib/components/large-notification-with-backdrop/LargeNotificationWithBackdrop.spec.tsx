import { render } from '@testing-library/react';

import LargeNotificationWithBackdrop from './LargeNotificationWithBackdrop';

describe('LargeNotificationWithBackdrop', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<LargeNotificationWithBackdrop />);
    expect(baseElement).toBeTruthy();
  });
});
