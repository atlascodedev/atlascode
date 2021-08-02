import { render } from '@testing-library/react';

import ImageCrossfade from './ImageCrossfade';

describe('ImageCrossfade', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ImageCrossfade />);
    expect(baseElement).toBeTruthy();
  });
});
