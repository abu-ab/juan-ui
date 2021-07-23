import plugins from '../build/packages.plugins';
const path = require('path');
const fs = require('fs');

// __dirname 表示当前执行脚本所在的目录 , __filename 表示当前正在执行的脚本的文件名

// 获取当前文件夹下所有子文件夹名称
let componentFileNames = []; // 'cd-button', 'edit-table'
const files = fs.readdirSync(path.join(__dirname, '/packages'));
console.log(files)
files.forEach((file) => {
  const stat = fs.lstatSync(path.join(__dirname, `/packages/${file}`));
  // 判断是否是文件夹
  if (stat.isDirectory()) {
    componentFileNames.push(file);
  }
});

// 单个组件分别打包配置
const packagesConfig = componentFileNames.map(item => {
  return {
    input: `packages/${item}/index.ts`,
    output: [
      {
        file: `lib/${item}.js`,
        format: 'cjs',
        name: `${item}`,
        exports: 'auto'
      }
    ],
    plugins, // 输出
    external: ['vue'] // 外部依赖
  };
});
console.log(packagesConfig)
export default packagesConfig;
