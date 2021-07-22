<template>
  <div>
    <span>{{ state }}</span>
    <button @click="add">点击</button>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
export default defineComponent({
  name: 'jButton',
  setup() {
    const state = ref(0);
    function add() {
      console.log(123);
      state.value = 66;
      console.log(state);
    }
    return {
      state,
      add
    };
  }
});
</script>

<style>
</style>