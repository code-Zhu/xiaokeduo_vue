<template>
  <div class="recycle-station">
    <p class="page-title">订单回收站</p>
    <div class="pannel">
      <el-tabs v-model="tabsName" type="card">
        <el-tab-pane label="所有订单" name="1"></el-tab-pane>
      </el-tabs>
      <order-table :formStyle="'recycle'">
        <div slot="btn">
          <label>
            <input type="checkbox">
            <span>全选</span>
          </label>
          <el-button size="mini" type="primary">批量还原</el-button>
          <el-button size="mini" type="danger">彻底删除</el-button>
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
      tabsName: '1'
    }
  }
}
</script>
