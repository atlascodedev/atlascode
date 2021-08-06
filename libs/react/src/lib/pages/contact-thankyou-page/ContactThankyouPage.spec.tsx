import { render } from '@testing-library/react';

import ContactThankyouPage from './ContactThankyouPage';

describe('ContactThankyouPage', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ContactThankyouPage />);
    expect(baseElement).toBeTruthy();
  });
});
