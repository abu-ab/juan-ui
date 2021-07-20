import output from "./build/output"
import plugins from "./build/plugins"
import packagesConfig from "./packages/packages.config"

const config = [{
        input: 'packages/index.js', //输入
        output, // 输出
        plugins, // 插件
        external: ['vue'],
    },
    ...packagesConfig,
]
export default config