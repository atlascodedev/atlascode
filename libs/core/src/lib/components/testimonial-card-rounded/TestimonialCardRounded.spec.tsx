import { render } from '@testing-library/react';

import TestimonialCardRounded from './TestimonialCardRounded';

describe('TestimonialCardRounded', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<TestimonialCardRounded />);
    expect(baseElement).toBeTruthy();
  });
});
