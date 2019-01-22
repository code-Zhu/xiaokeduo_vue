<template>
  <div class="good-search-box">
    <div class="good-search">
      <span>商品搜索：请输入商品关键字</span>
      <i class="iconfont icon-search" style="float:right"></i>
    </div>
    <div class="edit-right-ctr" v-if="righEdit">
      <p>商品搜索模块可以加入到页面的任何位置，可以通过拖动或者点击上下箭头改变摆放位置。</p>
    </div>
  </div>
</template>
<script>
export default {
  props: ['righEdit']
}
</script>

<style lang="scss" scoped>
.good-search-box{
  padding: 0 10px;
  .good-search{
    border: 1px solid #DBDADA;
    height: 34px;
    line-height: 34px;
    color: #757575;
    padding-left: 15px;
    border-radius: 5px;
  }
}
</style>
