<template>
  <button
    :class="[
      'j-button',
      type ? 'j-button-' + type : '',
      {
        'is-display': display,
        'is-round': round
      }
    ]"
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
    const handleClick = (evt: MouseEvent) => {
      emit('click', evt);
    };
    return {
      handleClick
    };
  }
});
</script>

<style lang="less" scoped>
@import '../../theme/base.less';
.j-button {
  font-weight: 500;
  font-size: 14px;
  color: #fff;
  text-indent: 0.089em;
  letter-spacing: 0.089em;
  outline: 0;
  line-height: 1;
  margin: 0;
  padding: 12px 20px;
  border: 0;
  border-radius: 4px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  cursor: pointer;
  text-transform: uppercase;
  &:focus {
    outline: none;
  }
  &::after {
    content: '';
    display: block;
    position: absolute;
    top: -2px;
    left: -2px;
    right: -2px;
    bottom: -2spx;
    pointer-events: none;
    background-color: #888;
    background-repeat: no-repeat;
    background-position: 50%;
    opacity: 0;
    transition: all 0.3s;
  }
  &:active::after {
    opacity: 0.3;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    transition: 0s;
  }
}

.j-button-default {
  background-color: @yunshanlan !important;
  border-color: @yunshanlan !important;
}
.j-button-success {
  background-color: @maolv !important;
  border-color: @maolv !important;
}
.j-button-warning {
  background-color: @guhuang !important;
  border-color: @guhuang !important;
}
.j-button-danger {
  background-color: @danshuhong !important;
  border-color: @danshuhong !important;
}
</style>