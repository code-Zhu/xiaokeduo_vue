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
    this.list = asideList.aside_statistics
  }
}
</script>
<style lang="scss">
.red-text{
  color: #ff0000;
}
.statistics-title{
  line-height: 20px;
  font-size: 16px;
  border-left: 2px solid #ff0000;
  padding-left: 15px;
  margin: 15px 0;
}
.list-box{
  display: inline-block;
  .statistics-list{
    height: 110px;
    background-color: #F2F2F2;
    padding: 10px 0;
    display: flex;
    box-sizing: border-box;
    font-size: 18px;
    text-align: center;
    li{
      width: 245px;
      line-height: 40px;
      span{
        color: #3366CC;
      }
      &:not(:last-child){
        border-right: 1px dashed #ccc;
      }
    }
  }
}
.img-box{
  img {
    vertical-align: middle;
  }
  span{
    padding: 0 8px;
  }
}
</style>
