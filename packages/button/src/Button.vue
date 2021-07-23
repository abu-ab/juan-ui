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
      console.log("12321")
      state.value += 1;
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