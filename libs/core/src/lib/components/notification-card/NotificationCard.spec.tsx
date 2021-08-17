import { render } from '@testing-library/react';

import NotificationCard from './NotificationCard';

describe('NotificationCard', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<NotificationCard />);
    expect(baseElement).toBeTruthy();
  });
});
