import { sharedAssertions } from './shared-assertions';

describe('sharedAssertions', () => {
  it('should work', () => {
    expect(sharedAssertions()).toEqual('shared-assertions');
  });
});
