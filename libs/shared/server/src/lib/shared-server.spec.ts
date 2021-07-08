import { sharedServer } from './shared-server';

describe('sharedServer', () => {
  it('should work', () => {
    expect(sharedServer()).toEqual('shared-server');
  });
});
