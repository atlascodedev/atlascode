import { render } from '@testing-library/react';

import GnosisLoader from './GnosisLoader';

describe('GnosisLoader', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<GnosisLoader />);
    expect(baseElement).toBeTruthy();
  });
});
