<template>
  <div>
    <p class="page-title">设置收款账号</p>
    <div class="pannel">
      <tabs :tabName="'wpay'"/>
    </div>
  </div>
</template>
<script>
import Tabs from '../../settings/account/components/Tabs'
export default {
  components: {Tabs},
  data () {
    return {
    }
  }
}
</script>
