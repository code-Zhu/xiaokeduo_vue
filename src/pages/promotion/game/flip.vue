<template>
  <div>
    <p class="page-title">好运翻翻看</p>
    <div class="pannel">
      <el-button type="primary" size="small" @click="$router.push('/promotion/game/add/flip')">新建好运翻翻看</el-button>
    </div>
    <div class="pannel">
      <tab asideName="flip"/>
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
