<template>
  <div>
    <div class="page-title">
      <p>实物奖品发货管理</p>
      <span>商品奖品发货管理。积分和优惠券奖品会自动发放到中奖会员账户中</span>
    </div>
    <div class="pannel">
      <el-tabs v-model="tabName" type="card">
        <el-tab-pane label="所有奖品" name="first">
          <list :tabName="tabName"/>
        </el-tab-pane>
        <el-tab-pane label="待填写收货地址" name="second" lazy>
          <list :tabName="tabName"/>
        </el-tab-pane>
        <el-tab-pane label="待发货" name="third" lazy>
          <list :tabName="tabName"/>
        </el-tab-pane>
        <el-tab-pane label="已发货" name="fourth" lazy>
          <list :tabName="tabName"/>
        </el-tab-pane>
        <el-tab-pane label="已收货" name="five" lazy>
          <list :tabName="tabName"/>
        </el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>
<script>
import list from '../components/PrizeList'
export default {
  components: {
    list
  },
  data () {
    return {
      tabName: 'first'
    }
  }
}
</script>
<style lang="scss" scoped>
.pannel-content{
  .el-form-item--mini.el-form-item{
    margin-bottom: 5px
  }
}
</style>
