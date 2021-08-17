import { render } from '@testing-library/react';

import BlogLayoutV1 from './BlogLayoutV1';

describe('BlogLayoutV1', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<BlogLayoutV1 />);
    expect(baseElement).toBeTruthy();
  });
});
