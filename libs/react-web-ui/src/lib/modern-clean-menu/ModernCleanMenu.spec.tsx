import { render } from '@testing-library/react';

import ModernCleanMenu from './ModernCleanMenu';

describe('ModernCleanMenu', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ModernCleanMenu />);
    expect(baseElement).toBeTruthy();
  });
});
