<template>
  <HelloWorld msg="Hello Vue 3 + Vite" />
</template>

<script >
import HelloWorld from './components/HelloWorld.vue';
export default {
  components: {
    HelloWorld
  }
};
</script>

<style>
body {
  padding: 0;
  margin: 0;
  display: flex;
  justify-content: center;
  align-content: center;
  height: 100vh;
}
#app{
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
