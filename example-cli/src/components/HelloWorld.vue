<template>
  <div class="hello">
    <h1>{{ state }}</h1>
    <button @click="add">+</button>
    <jButton />
  </div>
</template>

<script>
import { ref } from "vue"
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  setup(){
    const state = ref(0);
    function add (){
      state.value++;
    }
    return {
      state,
      add
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
