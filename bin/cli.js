#!/usr/bin/env node

const assert = require('assert');
const argv = require('minimist')(process.argv.slice(2));
const { getBvInfo } = require('../');

if (!argv.length || argv.h || argv.help) {
  console.log(`
Usage
  $ bv2av [<args>]
Options
  --bv          The bv code
  --all         Get all bv infomations
  -h,--help     Show help
Samples
  $ bv2av --bv=xxxxxx -all
  `);
  return;
}

return;

assert.notStrictEqual(argv.bv, undefined, 'Must input bv code!');
assert.strictEqual(typeof argv.bv, 'string', 'BV code must be a string!');

const { bv, all } = argv;
(async () => {
  const info = await getBvInfo(bv);
  all ? console.log(JSON.stringify(info)) : console.log(info.avID);
})();
