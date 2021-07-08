import { sharedBrowser } from './shared-browser';

describe('sharedBrowser', () => {
  it('should work', () => {
    expect(sharedBrowser()).toEqual('shared-browser');
  });
});
