<template>
  <h1>{{ msg }}</h1>

  <p>
    <a href="https://vitejs.dev/guide/features.html" target="_blank"> Vite Documentation </a>
    |
    <a href="https://v3.vuejs.org/" target="_blank">Vue 3 Documentation</a>
  </p>

  <span>count is: {{ state.count }}</span>
  <p>
    Edit
    <code>components/HelloWorld.vue</code> to test hot module replacement.
  </p>
  <j-button @click="add">点击</j-button>
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
a {
  color: #42b983;
}
</style>
