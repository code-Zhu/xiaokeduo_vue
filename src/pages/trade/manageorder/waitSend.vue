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
      <order-table>
        <span slot="btn">
          <el-button size="mini" plain type="primary">指定物流</el-button>
          <el-button size="mini" type="primary">打印快递单</el-button>
          <el-button size="mini" type="primary">打印发货单</el-button>
          <el-button size="mini" type="success">批量发货</el-button>
          <span>|</span>
          <el-button size="mini" type="primary">批量备注</el-button>
          <el-button size="mini" type="danger">批量删除</el-button>
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
      tabsName: 'wait_send'
    }
  }
}
</script>
