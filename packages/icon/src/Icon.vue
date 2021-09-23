<template>
  <i :class="`juan-icon-${name}`"></i>
</template>

<script>
export default {
  name: 'jIcon',
  props: {
    name: {
      type: String
    }
  }
};
</script>

<style>
</style>