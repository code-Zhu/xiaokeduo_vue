<template>
  <div>
    <p class="page-title">订单管理</p>
    <div class="pannel">
      <order-table></order-table>
    </div>
  </div>
</template>
<script>
const orderTable = () => import('./components/OrderTable')
export default {
  components: {
    orderTable
  },
  data () {
    return {}
  }
}
</script>
<style lang="scss" scoped>

</style>
