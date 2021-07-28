import { render } from '@testing-library/react';

import LoadingScreenContext from './LoadingScreenContext';

describe('LoadingScreenContext', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<LoadingScreenContext />);
    expect(baseElement).toBeTruthy();
  });
});
