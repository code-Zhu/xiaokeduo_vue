<template>
  <div class="sended">
    <p class="page-title">已发货订单</p>
    <div class="pannel">
      <el-tabs v-model="tabsName" type="card">
        <el-tab-pane label="所有已发货订单" name="sended"></el-tab-pane>
        <el-tab-pane label="货到付款订单" name="1"></el-tab-pane>
      </el-tabs>
      <order-table>
        <div slot="btn">
          <label>
            <input type="checkbox">
            <span>全选</span>
          </label>
          <el-button size="mini" type="primary">打印快递单</el-button>
          <el-button size="mini" type="primary">打印发货单</el-button>
          <span>|</span>
          <el-button size="mini" type="warning">批量确认收货</el-button>
          <el-button size="mini" type="primary">导出Excel</el-button>
        </div>
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
      tabsName: 'sended'
    }
  }
}
</script>
