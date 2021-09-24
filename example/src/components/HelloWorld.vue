<template>
  <j-button @click="add" type="default">春眠不知晓</j-button>
  <j-button @click="add" class="ml-2" type="success">处处闻啼鸟</j-button>
  <j-button @click="add" class="ml-2" type="warning">夜来风雨声</j-button>
  <j-button @click="add" class="ml-2" type="danger">花落知多少</j-button>
  <!-- <j-icon name="send" class="icon"></j-icon> -->
</template>

<script>
import { reactive } from 'vue';
export default {
  props: {
    msg: String
  },
  setup() {
    const state = reactive({ count: 0 });
    function add() {
      console.log(1231);
      state.count++;
    }
    return {
      state,
      add
    };
  }
};
</script>

<style scoped>
.icon {
  font-size: 24px;
}
</style>