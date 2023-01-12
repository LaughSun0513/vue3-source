import resolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import typescript from '@rollup/plugin-typescript'

export default [
    {
        input: 'packages/vue/src/index.ts',
        output: [
            {
                sourcemap: true,
                file: './packages/vue/dist/vue.js',
                format: 'iife',
                name: 'Vue'
            }
        ],
        plugins: [
            resolve(), // 模块导入路径补全
            commonjs(), // 转commonjs为ESM
            typescript({
                sourceMap: true
            })
        ]
    }
]