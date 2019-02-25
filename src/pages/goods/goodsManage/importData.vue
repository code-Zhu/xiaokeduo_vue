<template>
  <div class="selectcategory">
    <p class="page-title">从{{tab_name}}数据包导入</p>
    <div class="pannel">
      <el-tabs v-model="tab_name" type="card">
        <el-tab-pane name="淘宝" label="从淘宝数据包导入">
          <data-form :type="tab_name"></data-form>
        </el-tab-pane>
        <el-tab-pane name="拍拍" label="从拍拍数据包导入">
          <data-form :type="tab_name"></data-form>
        </el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>
<script>
import DataForm from './components/Form'
export default {
  components: {DataForm},
  data () {
    return {
      tab_name: '淘宝'
    }
  }
}
</script>
