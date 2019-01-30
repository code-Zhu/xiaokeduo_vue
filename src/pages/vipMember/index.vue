<template>
  <div class="main page">
    <shop-aside :asides="list"></shop-aside>
    <div class="view-box">
      <router-view></router-view>
    </div>
  </div>
</template>
<script>
import shopAside from '../../components/Aside'
import asideList from '../../config/asides'
export default {
  components: {
    shopAside
  },
  data () {
    return {
      list: []
    }
  },
  created () {
    this.list = asideList.aside_member
  }
}
</script>
<style>
.el-form--inline .el-form-item{
  margin-bottom: 0;
}
</style>
