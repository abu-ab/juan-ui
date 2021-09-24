// // 导入组件，组件必须声明 name
// // import Button from './src/Button.vue';
// import Button from './src/button';

// // 为组件提供 install 安装方法，供按需引入
// // app为组件实例
// Button.install = function (app) {
//   app.component(Button.name, Button);
//   return app;
// };

// // 默认导出组件
// export default Button;
export { default as jButton } from './src/button'
