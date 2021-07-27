<template>
  <button
    :class="[
      'j-button',
      type ? 'j-button-' + type : '',
      {
        'is-display': display,
        'is-rouund': display
      }
    ]"
    @click="handleClick"
  >
    <span><slot></slot></span>
  </button>
</template>

<script lang="ts">
import { defineComponent, inject, ref } from 'vue';
import type { PropType } from 'vue';

type buttonType = PropType<
  'primary' | 'success' | 'warning' | 'danger' | 'info' | 'text' | 'default'
>;
type buttonSize = PropType<'default' | 'large' | 'small'>;

interface buttonProps {
  type: buttonType;
  size: buttonSize;
  display: boolean;
  round: boolean;
  color: string;
}

export default defineComponent({
  name: 'jButton',
  props: {
    type: {
      type: String as buttonType,
      default: 'default',
      validator: (val: string) => {
        return ['default', 'primary', 'success', 'warning', 'danger', 'info', 'text'].includes(val);
      }
    },
    size: {
      type: String as buttonSize,
      default: 'default',
      validator: (val: string) => {
        return ['default', 'large', 'small'].includes(val);
      }
    },
    color: {
      type: String,
      default: '#fff'
    },
    round: Boolean,
    display: Boolean
  },

  setup(props, { emit }) {
    // const handleClick = (evt: MouseEvent) => {
    //   emit('click', evt)
    // }
    // return {
    //   handleClick
    // };
  }
});
</script>

<style lang="less" scoped>
.j-button {
  font-weight: 500;
  font-size: 14px;
  color: #fff;
  outline: 0;
  line-height: 1;
  margin: 0;
  padding: 12px 20px;
  border: 0;
  display: inline-block;
  text-align: center;
  position: relative;
  cursor: pointer;
}
.j-button-default {
  background-color: #1867c0 !important;
  border-color: #1867c0 !important;
}
</style>