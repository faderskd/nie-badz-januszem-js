const assert = require('assert');

import {user, printJanusz} from '../src/es6-modules-example/exporting';

describe('ES6 modules', function() {
  it('should import user object', function() {
    assert.deepEqual(user, {username: 'Janusz'});

    printJanusz();
  });
});
