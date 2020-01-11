const assert = require('assert');

const {printJanusz, user} = require('../src/nodejs-modules-example/exporting');

describe('Node modules', function() {
  it('should import user object', function() {
    assert.deepEqual(user, {username: 'Janusz'});

    printJanusz();
  });
});
