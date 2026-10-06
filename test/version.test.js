const test = require('node:test');
const assert = require('node:assert');
const { isPatchUpdate } = require('../src/version');

test('4.17.20 to 4.17.21 is a patch update', () => {
  assert.strictEqual(isPatchUpdate('4.17.20', '4.17.21'), true);
});

test('4.17.21 to 4.18.0 is not a patch update', () => {
  assert.strictEqual(isPatchUpdate('4.17.21', '4.18.0'), false);
});