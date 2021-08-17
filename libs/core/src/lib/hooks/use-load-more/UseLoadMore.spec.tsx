import { render } from '@testing-library/react';

import UseLoadMore from './UseLoadMore';

describe('UseLoadMore', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<UseLoadMore />);
    expect(baseElement).toBeTruthy();
  });
});
