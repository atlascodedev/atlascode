import { render } from '@testing-library/react';

import LatestBlogPosts from './LatestBlogPosts';

describe('LatestBlogPosts', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<LatestBlogPosts />);
    expect(baseElement).toBeTruthy();
  });
});
