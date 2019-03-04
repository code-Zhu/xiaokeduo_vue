<template>
  <div class="closed">
    <p class="page-title">已关闭的订单</p>
    <div class="pannel">
      <el-tabs v-model="tabsName" type="card">
        <el-tab-pane label="所有交易关闭" name="closed"></el-tab-pane>
        <el-tab-pane label="退货订单" name="1"></el-tab-pane>
      </el-tabs>
      <order-table>
        <span slot="btn">
          <el-button size="mini" type="danger">批量删除</el-button>
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
      tabsName: 'closed'
    }
  }
}
</script>
