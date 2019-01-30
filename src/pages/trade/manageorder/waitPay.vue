<template>
  <div class="wait-pay">
    <p class="page-title">等待付款订单</p>
    <div class="pannel">
      <el-tabs v-model="tabsName" type="card">
        <el-tab-pane label="所有等待付款" name="wait_pay"></el-tab-pane>
      </el-tabs>
      <order-table>
        <div slot="btn">
          <label>
            <input type="checkbox">
            <span>全选</span>
          </label>
          <el-button size="mini" type="warning">批量确认付款</el-button>
          <el-button size="mini" type="danger">批量关闭订单</el-button>
          <span>|</span>
          <el-button size="mini" type="danger">批量删除</el-button>
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
      tabsName: 'wait_pay'
    }
  }
}
</script>
