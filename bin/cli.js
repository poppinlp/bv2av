#!/usr/bin/env node

const argv = require('minimist')(process.argv.slice(2));
const { getBvInfo } = require('../');

if (!argv.bv || argv.h || argv.help) {
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

const { bv, all } = argv;
(async () => {
  const info = await getBvInfo(bv);
  all ? console.log(JSON.stringify(info)) : console.log(info.avID);
})();
