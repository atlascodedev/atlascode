import { render } from '@testing-library/react';

import CollapsableMenuItem from './CollapsableMenuItem';

describe('CollapsableMenuItem', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<CollapsableMenuItem />);
    expect(baseElement).toBeTruthy();
  });
});
