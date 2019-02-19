<template>
  <div>
    <p class="page-title">刮刮乐</p>
    <div class="pannel">
      <el-button type="primary" size="small">新建刮刮乐</el-button>
    </div>
    <div class="pannel">
      <tab asideName="ggl"/>
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
