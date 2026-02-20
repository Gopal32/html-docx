import resolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import json from '@rollup/plugin-json'
import { terser } from 'rollup-plugin-terser'

export default {
  input: 'src/index.js', // <-- change if your entry is different
  output: [
    {
      file: 'dist/advanced-html-to-docx.cjs.js',
      format: 'cjs',
      sourcemap: true
    },
    {
      file: 'dist/advanced-html-to-docx.esm.js',
      format: 'esm',
      sourcemap: true
    }
  ],
  plugins: [
    resolve(),
    commonjs(),
    json(),
    terser()
  ]
}