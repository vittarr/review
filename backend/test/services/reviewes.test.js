const assert = require('assert');
const app = require('../../src/app');

describe('\'reviewes\' service', () => {
  it('registered the service', () => {
    const service = app.service('reviewes');

    assert.ok(service, 'Registered the service');
  });
});
