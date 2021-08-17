import { render } from '@testing-library/react';

import NewsLetterInput from './NewsletterInput';

describe('NewsletterInput', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<NewsLetterInput />);
    expect(baseElement).toBeTruthy();
  });
});
