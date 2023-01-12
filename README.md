# 搭建目录和环境

## 搭建目录
```
|____packages
| |____compiler-core
| |____runtime-dom
| |____vue
| | |____src
| | | |____index.ts
| |____shared
| |____reactivity
| |____runtime-core
| |____compiler-dom
|____package.json
|____rollup.config.js
|____.prettierrc
|____tsconfig.json
```

## 添加.prettierrc

```JSON
{
    "semi": true,
    "singleQuote": true,
    "arrowParens": "avoid",
    "tabWidth": 4,
    "printWidth": 80,
    "trailingComma": "none"
}
```

想让prettier生效
1.vscode打开prettier插件
2.`.vscode/settings.json` 开启保存自动格式化
```JSON
{
    "editor.formatOnSave": true
}
```
3.右键配置，使用..来格式化，选择prettier即可生效


## 添加rollup来处理打包
```bash
npm i -D
rullup 
@rollup/plugin-node-resolve
@rollup/plugin-commonjs
@rollup/plugin-typescript
tslib
typescript
```

### 编写打包配置

1.入口 `input: 'packages/vue/src/index.ts'`
2.出口 `file: './packages/vue/dist/vue.js'`
3.插件 
> @rollup/plugin-node-resolve 模块导入路径补全
> @rollup/plugin-commonjs 转commonjs为ESM
> @rollup/plugin-typescript 处理ts

```js
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
```
执行 `npm run build` 打包
```JSON
"scripts": {
    "build": "rollup -c"
},
```
