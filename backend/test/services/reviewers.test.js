const assert = require('assert');
const app = require('../../src/app');

describe('\'reviewers\' service', () => {
  it('registered the service', () => {
    const service = app.service('reviewers');

    assert.ok(service, 'Registered the service');
  });
});
