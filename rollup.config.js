import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import babel from '@rollup/plugin-babel';
import json from '@rollup/plugin-json';
import { terser } from "rollup-plugin-terser";

export default {
    input: 'index.js',
    output: [
        {
            file: 'dist/bundle.cjs.js',
            format: 'cjs',
        },
        {
            file: 'dist/bundle.esm.js',
            format: 'esm',
        },
    ],
    plugins: [
        resolve({
            extensions: ['.js', '.jsx', '.json']
        }),
        commonjs(),
        babel({
            babelHelpers: 'bundled',
            exclude: 'node_modules/**',
            presets: ['@babel/preset-env', '@babel/preset-react'],
            extensions: ['.js', '.jsx']
        }),
        terser(),
        json()
    ],
    external: ['react', 'react-dom','react-redux','@reduxjs/toolkit']
};
