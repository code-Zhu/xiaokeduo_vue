<template>
  <el-tabs v-model="tabName" type="card">
    <el-tab-pane label="活动中" name="first">
      <my-table/>
    </el-tab-pane>
    <el-tab-pane label="已结束" name="second">
      <my-table/>
    </el-tab-pane>
  </el-tabs>
</template>
<script>
import myTable from './Table'
export default {
  components: {myTable},
  data () {
    return {
      tabName: 'first'
    }
  }
}
</script>
