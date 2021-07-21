import { render } from '@testing-library/react';

import DefenseCardSection from './DefenseCardSection';

describe('DefenseCardSection', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<DefenseCardSection />);
    expect(baseElement).toBeTruthy();
  });
});
