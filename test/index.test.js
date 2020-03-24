const assert = require('assert').strict;
const { bv2av } = require('../');

// TODO

(async () => {
  const avID = await bv2av('BV1KE411c7yC');
  assert.equal(avID, 'av98491347', 'AV ID not correct!');
  console.log('Test OK!');
})();
