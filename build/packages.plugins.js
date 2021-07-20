const resolve = require('rollup-plugin-node-resolve') // 告诉 Rollup 如何查找外部模块
const json = require('rollup-plugin-json')
const vue = require('rollup-plugin-vue') // 处理vue文件
const babel = require('rollup-plugin-babel') // rollup 的 babel 插件，ES6转ES5
const commonjs = require('rollup-plugin-commonjs') // 将CommonJS模块转换为 ES2015 供 Rollup 处理
const postcss = require('rollup-plugin-postcss')

const { terser } = require('rollup-plugin-terser')

const isProd = process.env.NODE_ENV == 'production'

// 通用的插件
const basePlugins = [
  resolve(),
  json(),
  vue(),
  babel({
    exclude: 'node_modules/**', // 防止打包node_modules下的文件
    runtimeHelpers: true, // 使plugin-transform-runtime生效
  }),
  commonjs(),
  postcss(),
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
