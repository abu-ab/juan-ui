import './table.less';

import { defineComponent } from 'vue';

export default defineComponent({
  name: 'jTable',
  props: {
    headers: {
      type: Array as any,
      default: []
    },
    list: {
      type: Array as any,
      default: []
    }
  },

  setup(props, { emit, slots }) {
    const headerTitle = props.headers.map(res => {
      return res.value;
    });
    console.log(props.headers, props.list);
    return () => {
      return (
        <table class="table">
          <colgroup>
            <col class></col>
          </colgroup>
          <thead class="table-header">
            <tr>
              {props.headers.map(item => {
                console.log(item);
                return <th>{item.text}</th>;
              })}
            </tr>
          </thead>
          <tbody class="table-body">
            {props.list.map(item => {
              return (
                <tr>
                  {headerTitle.map(title => {
                    return <td>{item[title]}</td>;
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
      );
    };
  }
});
