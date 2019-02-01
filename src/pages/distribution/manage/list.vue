<template>
  <div>
    <p class="page-title">分销商管理</p>
    <el-tabs type="border-card">
      <el-tab-pane label="分销商列表">
        <list-table/>
      </el-tab-pane>
      <el-tab-pane label="已冻结">
        <list-table :type="'frozen'"/>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>
<script>
import listTable from './components/ListTable'
export default {
  components: {
    listTable
  },
  data () {
    return {
    }
  }
}
</script>
