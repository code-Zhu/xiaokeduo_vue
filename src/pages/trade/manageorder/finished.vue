<template>
  <div class="finished">
    <p class="page-title">交易成功的订单</p>
    <div class="pannel">
      <el-tabs v-model="tabsName" type="card">
        <el-tab-pane label="所有交易成功" name="finished"></el-tab-pane>
        <el-tab-pane label="货到付款订单" name="1"></el-tab-pane>
      </el-tabs>
      <order-table>
        <span slot="btn">
          <el-button size="mini" type="primary">打印快递单</el-button>
          <el-button size="mini" type="primary">打印发货单</el-button>
          <span>|</span>
          <el-button size="mini" type="primary">批量备注</el-button>
          <el-button size="mini" type="primary">导出Excel</el-button>
        </span>
      </order-table>
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
