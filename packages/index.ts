import "./themes/index"
import Button from './button/index';
import Table from './table/index';
import Icon from "./icon/index";
// 存储组件列表
const components = [Button,Table,Icon];

// 定义 install 方法，接收 Vue 作为参数。如果使用 use 注册插件，则所有的组件都将被注册
const install = function (Vue: any) {
  // if((install as any).installed) return
  // ;(install as any).installed = true
  // 遍历注册全局组件
  components.forEach((component: any) => {
    // 在ts的版本中需要使用component.extendOptions.name，具体原因可以自己log看一下
    Vue.component(component.name, component);
  });
};

// 判断是否是直接引入文件
if (typeof window !== 'undefined' && (window as any).Vue) {
  install((window as any).Vue);
}

export default {
  // 导出的对象必须具有 install，才能被 Vue.use() 方法安装
  install,
  // 以下是具体的组件列表
  ...components
};
