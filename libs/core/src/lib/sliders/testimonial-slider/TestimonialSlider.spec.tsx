import { render } from '@testing-library/react';

import TestimonialSlider from './TestimonialSlider';

describe('TestimonialSlider', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<TestimonialSlider />);
    expect(baseElement).toBeTruthy();
  });
});
