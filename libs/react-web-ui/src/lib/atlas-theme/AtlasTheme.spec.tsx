import { render } from '@testing-library/react';

import AtlasTheme from './AtlasTheme';

describe('AtlasTheme', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<AtlasTheme />);
    expect(baseElement).toBeTruthy();
  });
});
