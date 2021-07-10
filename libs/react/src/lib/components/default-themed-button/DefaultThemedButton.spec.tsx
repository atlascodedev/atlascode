import { render } from '@testing-library/react';

import DefaultThemedButton from './DefaultThemedButton';

describe('DefaultThemedButton', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<DefaultThemedButton />);
    expect(baseElement).toBeTruthy();
  });
});
