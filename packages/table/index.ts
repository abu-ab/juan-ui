// 导入组件，组件必须声明 name
import Table from './src/Table.vue';

// 为组件提供 install 安装方法，供按需引入
// app为组件实例
Table.install = function (app) {
  app.component(Table.name, Table);
};

// 默认导出组件
export default Table;
