import { render } from '@testing-library/react';

import KotaMenu from './KotaMenu';

describe('KotaMenu', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<KotaMenu />);
    expect(baseElement).toBeTruthy();
  });
});
