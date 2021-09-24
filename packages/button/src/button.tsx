import './button.less';

import { defineComponent } from 'vue';

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
  setup(props, { emit, slots }) {
    const handleClick = (evt: MouseEvent) => {
      emit('click', evt);
    };

    return () => {
      return (
        <div>
          <button
            class={[
              'j-button',
              props.type ? 'j-button-' + props.type : '',
              {
                'is-display': props.display,
                'is-round': props.round
              }
            ]}
          >
            <span>{slots.default?.()}</span>
          </button>
        </div>
      );
    };
  }
});
