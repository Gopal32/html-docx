const { nodeResolve } = require('@rollup/plugin-node-resolve')
const commonjs = require('@rollup/plugin-commonjs')
const json = require('@rollup/plugin-json')

module.exports = {
  input: 'src/index.js',
  external: [
    ...Object.keys(require('./package.json').dependencies || {}),
    ...require('module').builtinModules
  ],
  output: [
    {
      file: 'dist/advanced-html-to-docx.cjs.js',
      format: 'cjs',
      sourcemap: false,
      exports: 'auto'
    },
    {
      file: 'dist/advanced-html-to-docx.esm.js',
      format: 'esm',
      sourcemap: false
    }
  ],
  plugins: [
    nodeResolve({ preferBuiltins: true }),
    commonjs(),
    json()
  ]
}