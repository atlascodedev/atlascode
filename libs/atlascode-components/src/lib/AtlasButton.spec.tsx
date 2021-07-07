import { render } from '@testing-library/react';

import AtlasButton from './AtlasButton';

describe('AtlasButton', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<AtlasButton />);
    expect(baseElement).toBeTruthy();
  });
});
