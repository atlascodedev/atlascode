import { render } from '@testing-library/react';

import HeroScreenWhiteDots from './HeroScreenWhiteDots';

describe('HeroScreenWhiteDots', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<HeroScreenWhiteDots />);
    expect(baseElement).toBeTruthy();
  });
});
