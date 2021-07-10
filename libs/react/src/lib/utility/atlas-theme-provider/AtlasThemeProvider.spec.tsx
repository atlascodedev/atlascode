import { render } from '@testing-library/react';

import AtlasThemeProvider from './AtlasThemeProvider';

describe('AtlasThemeProvider', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<AtlasThemeProvider />);
    expect(baseElement).toBeTruthy();
  });
});
