import { render } from '@testing-library/react';

import DefenseCard from './DefenseCard';

describe('DefenseCard', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<DefenseCard />);
    expect(baseElement).toBeTruthy();
  });
});
