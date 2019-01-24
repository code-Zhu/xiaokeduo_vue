<template>
  <div class="selectcategory">
    <p class="page-title">数据包导入</p>
    <div class="pannel">
      <el-tabs type="border-card">
        <el-tab-pane label="导出为淘宝数据包">
          <data-form :type="'淘宝'"></data-form>
        </el-tab-pane>
        <el-tab-pane label="导出为拍拍数据包">
          <data-form :type="'拍拍'"></data-form>
        </el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>
<script>
import DataForm from './components/Form'
export default {
  components: {DataForm}
}
</script>
