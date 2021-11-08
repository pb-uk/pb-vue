// rollup.config.js

import camelCase from 'camelcase';
import css from 'rollup-plugin-import-css';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import replace from '@rollup/plugin-replace';
// import { terser } from 'rollup-plugin-terser';
import typescript from '@rollup/plugin-typescript';
import vue from 'rollup-plugin-vue';

import pkg from './package.json';

export default [
  // ESM build to be used with webpack/rollup.
  /*
  {
    input: 'src/index.js',
    output: {
      format: 'esm',
      file: 'dist/library.esm.js',
    },
    plugins: [vue()],
  },
  */
  // SSR build.
  /*
  {
    input: 'src/index.js',
    output: {
      format: 'cjs',
      file: 'dist/library.ssr.js',
    },
    plugins: [vue({ template: { optimizeSSR: true } })],
  },
  */
  // Browser build.
  {
    input: 'src/launch.js',
    output: {
      // file: `dist/${pkg.name}.min.js`,

      // banner,
      name: camelCase(pkg.name, { pascalCase: true }),
      file: pkg.browser,
      format: 'iife',
      esModule: false,
      sourcemap: true,
      // globals,
    },
    plugins: [
      typescript(),
      vue({ css: false, template: { isProduction: true } }),
      nodeResolve(),
      replace({
        preventAssignment: true,
        values: {
          'process.env.NODE_ENV': JSON.stringify('production'),
        },
      }),
      css(),
      // terser(),
    ],
  },
];
