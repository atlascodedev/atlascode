import { render } from '@testing-library/react';

import NeonButton from './NeonButton';

describe('NeonButton', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<NeonButton />);
    expect(baseElement).toBeTruthy();
  });
});
