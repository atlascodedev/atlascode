import { render } from '@testing-library/react';

import MotionBox from './MotionBox';

describe('MotionBox', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<MotionBox />);
    expect(baseElement).toBeTruthy();
  });
});
