<template>
  <div>
    <p class="page-title">设置收款账号</p>
    <div class="pannel">
      <tabs :tabName="'offline_pay'"/>
    </div>
  </div>
</template>
<script>
import Tabs from './components/Tabs'
export default {
  components: {Tabs},
  data () {
    return {
    }
  }
}
</script>
