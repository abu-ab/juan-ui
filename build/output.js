// 输出
const output = [{
        file: 'lib/index.js',
        format: 'umd',
        name: 'juan',
        exports: "default",
        globals: {
            "vue": "vue"
        }
    },
    {
        file: 'lib/index.esm.js',
        format: 'es',
        name: 'juan',
        exports: "default",
        globals: {
            "vue": "vue"
        }
    },
    {
        file: 'lib/index.cjs.js',
        format: 'cjs',
        name: 'juan',
        exports: "default",
        globals: {
            "vue": "vue"
        }
    },
]
export default output