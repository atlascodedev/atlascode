import { render } from '@testing-library/react';

import MinimalFormPicOverBlob from './MinimalFormPicOverBlob';

describe('MinimalFormPicOverBlob', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<MinimalFormPicOverBlob />);
    expect(baseElement).toBeTruthy();
  });
});
