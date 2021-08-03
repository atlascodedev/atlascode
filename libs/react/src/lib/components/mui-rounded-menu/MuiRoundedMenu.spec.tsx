import { render } from '@testing-library/react';

import MuiRoundedMenu from './MuiRoundedMenu';

describe('MuiRoundedMenu', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<MuiRoundedMenu />);
    expect(baseElement).toBeTruthy();
  });
});
