<template>
  <div>
    <p class="page-title">大富翁</p>
    <div class="pannel">
      <el-button type="primary" size="small">新建大富翁</el-button>
    </div>
    <div class="pannel">
      <tab asideName="dfw"/>
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
