<template>
  <div class="wait-send">
    <p class="page-title">等待发货</p>
    <div class="pannel">
      <el-tabs v-model="tabsName" type="card">
        <el-tab-pane label="所有等待发货" name="wait_send"></el-tab-pane>
        <el-tab-pane label="货到付款订单" name="1"></el-tab-pane>
        <el-tab-pane label="退款中" name="2"></el-tab-pane>
        <el-tab-pane label="未打印快递单" name="3"></el-tab-pane>
        <el-tab-pane label="已打印快递单" name="4"></el-tab-pane>
      </el-tabs>
      <order-table></order-table>
    </div>
  </div>
</template>
<script>
const orderTable = () => import('./components/OrderTable')
export default {
  components: {
    orderTable
  },
  data () {
    return {
      tabsName: 'wait_send'
    }
  }
}
</script>
