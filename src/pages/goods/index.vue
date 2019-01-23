<template>
  <div class="main page">
    <shop-aside></shop-aside>
    <div class="view-box">
      <router-view></router-view>
    </div>
  </div>
</template>
<script>
import shopAside from '../../components/Aside'
export default {
  components: {
    shopAside
  }
}
</script>
