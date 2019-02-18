<template>
  <div>
    <p class="page-title">幸运大转盘</p>
    <div class="pannel">
      <el-button type="primary" size="small">新建幸运大转盘</el-button>
    </div>
    <div class="pannel">
      <tab/>
    </div>
  </div>
</template>
<script>
import tab from './components/Tab'
export default {
  components: {
    tab
  }
}
</script>
