import { render } from '@testing-library/react';

import FadeInListVertical from './FadeInListVertical';

describe('FadeInListVertical', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<FadeInListVertical />);
    expect(baseElement).toBeTruthy();
  });
});
