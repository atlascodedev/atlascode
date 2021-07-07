import { render } from '@testing-library/react';

import AtlasInput from './AtlasInput';

describe('AtlasInput', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<AtlasInput />);
    expect(baseElement).toBeTruthy();
  });
});
