import { render } from '@testing-library/react';

import SwiperSliderWrapper from './SwiperSliderWrapper';

describe('SwiperSliderWrapper', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<SwiperSliderWrapper />);
    expect(baseElement).toBeTruthy();
  });
});
