<template>
  <div class="selectcategory">
    <p class="page-title">批量导出商品</p>
    <div class="pannel">
      <el-tabs v-model="tab_name" type="card">
        <el-tab-pane name="淘宝" label="导出为淘宝数据包">
          <data-table :type="tab_name"></data-table>
        </el-tab-pane>
        <el-tab-pane name="拍拍" label="导出为拍拍数据包">
          <data-table :type="tab_name"></data-table>
        </el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>
<script>
import DataTable from './components/ExportTable'
export default {
  components: {DataTable},
  data () {
    return {
      tab_name: '淘宝'
    }
  }
}
</script>
