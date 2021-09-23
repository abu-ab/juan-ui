import Icon from './src/Icon.vue';

Icon.install = function (app) {
  app.component(app.name, Icon);
};

export default Icon;