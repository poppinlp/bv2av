const assert = require('assert').strict;
const argv = require('minimist')(process.argv.slice(2));
const { getBvInfo } = require('../');

assert.notStrictEqual(argv.bv, undefined, 'Must input bv code!');
assert.strictEqual(typeof argv.bv, 'string', 'BV code must be a string!');

const { bv, all } = argv;
(async () => {
  const info = await getBvInfo(bv);
  all ? console.log(JSON.stringify(info)) : console.log(info.avID);
})();
