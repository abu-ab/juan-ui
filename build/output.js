import path from 'path'
// 输出
const output = [
    // {
    //     file: path.resolve('lib/index.js'),
    //     format: 'umd',
    //     name: 'juan',
    //     sourcemap: true
    // },
    {
        file: path.resolve('lib/index.esm.js'),
        format: 'es',
        name: 'juan',
        sourcemap: true
    },
    // {
    //     file: path.resolve('lib/index.cjs.js'),
    //     format: 'cjs',
    //     name: 'juan',
    //     sourcemap: true
    // },
]
export default output