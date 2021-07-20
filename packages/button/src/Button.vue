<template>
  <div>
    <span>{{ state }}</span>
    <button @click="add">点击</button>
  </div>
</template>

<script>
import { ref } from 'vue';
export default {
  name: 'jButton',
  setup() {
    const state = ref(0);
    function add() {
      state.value++;
    }
    return {
      state,
      add
    };
  }
};
</script>

<style>
</style>