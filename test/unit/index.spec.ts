// test/unit/index.js
import { expect } from 'chai';

import { version } from '../../src/index';

describe('The source entry point', function () {
  it('should have the same version as package.json', function () {
    expect(version).to.equal('0.0.0-dev');
  });
});
