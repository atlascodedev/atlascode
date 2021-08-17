import { render } from '@testing-library/react';

import ContactFormDialog from './ContactFormDialog';

describe('ContactFormDialog', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ContactFormDialog />);
    expect(baseElement).toBeTruthy();
  });
});
