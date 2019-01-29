<template>
  <div class="finished">
    <p class="page-title">交易成功的订单</p>
    <div class="pannel">
      <el-tabs v-model="tabsName" type="card">
        <el-tab-pane label="所有交易成功" name="finished"></el-tab-pane>
        <el-tab-pane label="货到付款订单" name="1"></el-tab-pane>
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
      tabsName: 'finished'
    }
  }
}
</script>
