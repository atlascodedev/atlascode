import { render } from '@testing-library/react';

import ReactUiComponents from './ReactUiComponents';

describe('ReactUiComponents', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ReactUiComponents />);
    expect(baseElement).toBeTruthy();
  });
});
