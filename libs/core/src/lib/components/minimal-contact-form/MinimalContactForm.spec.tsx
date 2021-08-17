import { render } from '@testing-library/react';

import MinimalContactForm from './MinimalContactForm';

describe('MinimalContactForm', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<MinimalContactForm />);
    expect(baseElement).toBeTruthy();
  });
});
