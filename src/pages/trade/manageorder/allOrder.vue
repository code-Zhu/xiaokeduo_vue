<template>
  <div>
    <p class="page-title">订单管理</p>
    <div class="pannel">
      <el-tabs v-model="tabsName" type="card" @tab-click="handleTabsClick">
        <el-tab-pane label="所有订单" name="all_order"></el-tab-pane>
        <el-tab-pane label="等待付款" name="wait_pay"></el-tab-pane>
        <el-tab-pane label="待发货" name="wait_send"></el-tab-pane>
        <el-tab-pane label="已发货" name="sended"></el-tab-pane>
        <!-- <el-tab-pane label="退款中" name="finished"></el-tab-pane> -->
        <el-tab-pane label="交易成功" name="finished"></el-tab-pane>
        <el-tab-pane label="交易关闭" name="closed"></el-tab-pane>
      </el-tabs>
      <order-table>
        <div slot="btn">
          <label>
            <input type="checkbox">
            <span>全选</span>
          </label>
          <el-button size="mini" type="primary">批量备注</el-button>
          <el-button size="mini" type="danger">批量删除</el-button>
          <span>|</span>
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
      tabsName: 'all_order'
    }
  },
  methods: {
    handleTabsClick (v) {
      this.$router.push(`/trade/${v.name}`)
    }
  }
}
</script>
