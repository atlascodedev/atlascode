import { render } from '@testing-library/react';

import TabPanel from './TabPanel';

describe('TabPanel', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<TabPanel />);
    expect(baseElement).toBeTruthy();
  });
});
