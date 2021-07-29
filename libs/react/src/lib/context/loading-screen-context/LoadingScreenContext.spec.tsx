import { render } from '@testing-library/react';

describe('LoadingScreenContext', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<LoadingScreenContext />);
    expect(baseElement).toBeTruthy();
  });
});
