const typescript = require("rollup-plugin-typescript2")
const resolve = require('rollup-plugin-node-resolve') // 告诉Rollup 如何查找外部模块
const json = require('rollup-plugin-json') //读取json文件
const vue = require('rollup-plugin-vue') // 处理vue文件
const babel = require('rollup-plugin-babel') // rollup 的babel插件 es6 转es5
const commonjs = require('rollup-plugin-commonjs') // 将commonjs模块转换为es2015供rollup处理
const postcss = require('rollup-plugin-postcss')
const less = require("rollup-plugin-less");
// const cssnano = require('cssnano ') //压缩css

const {
    terser
} = require('rollup-plugin-terser')

import path from 'path'

const isProd = process.env.NODE_ENV == 'production'
const extensions = [
    ".js",
    '.ts',
    '.tsx'
]
// 通用插件

const basePlugins = [
    resolve({
        extensions
    }),
    json(),
    vue({
        css: false
    }),
    typescript({
        tsconfig: path.resolve(__dirname, 'tsconfig.json')
    }),
    babel({
        exclude: 'node_modules/**', //防止打包
        extensions,
        runtimeHelpers: true // 使plugin-transform-runtime生效
    }),
    commonjs(),
    postcss({
        // plugins: [cssnano]
        extract: 'theme/index.css' // css输出路径
    })
]

// 开发环境需要使用的插件
const devPlugins = []
// 生产环境需要使用的插件
const prodPlugins = [
    terser({
        // output: {
        //   ascii_only: true, // 仅输出ascii字符
        // },
        compress: {
            pure_funcs: ['console.log'], // 去掉console.log函数
        },
    }),
]
let plugins = [...basePlugins].concat(isProd ? prodPlugins : devPlugins)

export default plugins