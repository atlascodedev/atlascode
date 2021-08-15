import { render } from '@testing-library/react';

import SwiperReactWrapper from './SwiperReactWrapper';

describe('SwiperReactWrapper', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<SwiperReactWrapper />);
    expect(baseElement).toBeTruthy();
  });
});
