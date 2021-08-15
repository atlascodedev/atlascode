import { render } from '@testing-library/react';

import BlogPreviewCard from './BlogPreviewCardV1';

describe('AtlasCode/Cards/Blog Preview Card', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<BlogPreviewCard />);
    expect(baseElement).toBeTruthy();
  });
});
