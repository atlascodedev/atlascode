import { render } from '@testing-library/react';

import OfferSlider from './OfferSlider';

describe('OfferSlider', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<OfferSlider />);
    expect(baseElement).toBeTruthy();
  });
});
