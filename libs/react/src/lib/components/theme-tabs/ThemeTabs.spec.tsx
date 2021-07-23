import { render } from '@testing-library/react';

import ThemeTabs from './ThemeTabs';

describe('ThemeTabs', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ThemeTabs />);
    expect(baseElement).toBeTruthy();
  });
});
