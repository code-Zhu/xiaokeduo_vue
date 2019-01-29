<template>
  <div class="sended">
    <p class="page-title">已发货订单</p>
    <div class="pannel">
      <el-tabs v-model="tabsName" type="card">
        <el-tab-pane label="所有已发货订单" name="sended"></el-tab-pane>
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
      tabsName: 'sended'
    }
  }
}
</script>
