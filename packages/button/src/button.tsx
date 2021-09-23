import { defineComponent } from 'vue';

export default defineComponent({
  name: 'jButton',
  setup(props) {
    const buttonNode = (<button>12121</button>);
    return () => {
      return buttonNode;
    };
  }
});
