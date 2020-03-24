import json from '@rollup/plugin-json';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';

export default {
  input: 'lib/index.js',
  output: [
    {
      file: 'lib/index.iife.js',
      format: 'iife',
    },
  ],
  // plugins: [json(), resolve(), commonjs()],
};
