<template>
  <div>
    <p class="page-title">优惠卷商品选择</p>
    <div class="pannel">
      <el-tabs v-model="tabName" type="card">
        <el-tab-pane label="已加入" name="first">
          <my-table :tabName="tabName"/>
        </el-tab-pane>
        <el-tab-pane label="出售中" name="second">
          <my-table :tabName="tabName"/>
        </el-tab-pane>
        <el-tab-pane label="仓库中" name="third">
          <my-table :tabName="tabName"/>
        </el-tab-pane>
      </el-tabs>
    </div>
    <div class="submit-box-fixed">
      <el-button type="primary" size="small">完成</el-button>
    </div>
  </div>
</template>
<script>
import myTable from './components/Table'
export default {
  components: {myTable},
  data () {
    return {
      tabName: 'second'
    }
  }
}
</script>
