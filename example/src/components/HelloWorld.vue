<template>
  <!-- <j-button @click="add" type="default">春眠不知晓</j-button>
  <j-button @click="add" class="ml-2" type="success">处处闻啼鸟</j-button>
  <j-button @click="add" class="ml-2" type="warning">夜来风雨声</j-button>
  <j-button @click="add" class="ml-2" type="danger">花落知多少</j-button> -->
  <!-- <j-icon name="send" class="icon"></j-icon> -->
  <j-table :headers="headers" :list="list"></j-table>
</template>

<script>
import { reactive } from 'vue';
export default {
  props: {
    msg: String
  },
  setup() {
    const state = reactive({ count: 0 });
    const headers = [
      {
        text: '有效时间',
        value: 'limitTime',
        sortable: false,
        align: 'left'
      },
      {
        text: '活动名称',
        value: 'name',
        sortable: false,
        align: 'left'
      },
      {
        text: '活动状态',
        value: 'statusStr',
        sortable: false,
        align: 'left'
      },
      {
        text: '操作',
        width: '160',
        value: 'options',
        sortable: false,
        align: 'left'
      }
    ];
    const list = [
      {
        id: 1,
        name: '12',
        limitTime: '1213',
        statusStr: '1',
        options: '12'
      },
      {
        id: 2,
        name: '12',
        limitTime: '1213',
        statusStr: '1',
        options: '12'
      },
      {
        id: 3,
        limitTime: '1213',
        name: '12',
        statusStr: '2323',
        options: '12'
      },
      {
        id: 4,
        name: '12',
        limitTime: '1213',
        statusStr: '1',
        options: '12'
      }
    ];
    function add() {
      console.log(1231);
      state.count++;
    }
    return {
      state,
      add,
      headers,
      list
    };
  }
};
</script>

<style scoped>
.icon {
  font-size: 24px;
}
</style>