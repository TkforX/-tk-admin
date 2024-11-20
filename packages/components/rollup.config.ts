/*
 * @Date: 2024-11-20 10:01:19
 * @LastEditors: kongaobo tkfor@foxmail.com
 * @LastEditTime: 2024-11-20 10:47:10
 */

import typescript from '@rollup/plugin-typescript';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import { terser } from 'rollup-plugin-terser';
import postcss from 'rollup-plugin-postcss';
import vue from '@rollup/plugin-vue';

export default {
    input: 'src/index.ts', // 入口文件
    output: [
        {
            file: 'dist/my-vue-library.esm.js',
            format: 'esm', // ESM 格式
        },
        {
            file: 'dist/my-vue-library.umd.js',
            format: 'umd', // UMD 格式
            name: 'MyVueLibrary',
            globals: {
                vue: 'Vue',
            },
        },
    ],
    plugins: [
        resolve(),
        commonjs(),
        vue(),
        typescript({
            tsconfig: './tsconfig.json', // 指定 tsconfig 文件
            declaration: true,
            declarationDir: 'dist/types', // 输出类型声明
        }),
        postcss({
            extract: true,
        }),
        terser(),
    ],
    external: ['vue'], // Vue 作为外部依赖
};
