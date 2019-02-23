<template>
  <div>
    <p class="page-title">疯狂砸金蛋</p>
    <div class="pannel">
      <el-button type="primary" size="small" @click="$router.push('/promotion/game/add/egg')">新建疯狂砸金蛋</el-button>
    </div>
    <div class="pannel">
      <tab asideName="egg"/>
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
