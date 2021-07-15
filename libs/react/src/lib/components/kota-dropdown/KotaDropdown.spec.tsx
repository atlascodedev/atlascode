import { render } from '@testing-library/react';

import KotaDropdown from './KotaDropdown';

describe('KotaDropdown', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<KotaDropdown />);
    expect(baseElement).toBeTruthy();
  });
});
