<template>
  <el-tabs v-model="tabName" type="card">
    <el-tab-pane label="活动中" name="ing">
      <my-table v-if="tabName == 'ing'" :asideName="asideName" :tabName="tabName"/>
    </el-tab-pane>
    <el-tab-pane label="已结束" name="end">
      <my-table v-if="tabName == 'end'" :asideName="asideName" :tabName="tabName"/>
    </el-tab-pane>
  </el-tabs>
</template>
<script>
import myTable from './Table'
export default {
  props: ['asideName'],
  components: {myTable},
  data () {
    return {
      tabName: 'ing'
    }
  }
}
</script>
