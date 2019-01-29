<template>
  <div class="wait-pay">
    <p class="page-title">等待付款订单</p>
    <div class="pannel">
      <el-tabs v-model="tabsName" type="card">
        <el-tab-pane label="所有等待付款" name="wait_pay"></el-tab-pane>
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
      tabsName: 'wait_pay'
    }
  }
}
</script>
