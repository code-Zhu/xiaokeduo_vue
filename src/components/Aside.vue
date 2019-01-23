<template>
  <div class="aside-box">
    <ul class="aside-list">
      <li v-for="list in asides" :key="list.id">
        <p class="title" v-if="list.title">
          <i :class="`iconfont ${list.icon}`"></i>
          <span>{{list.label}}</span>
        </p>
        <ul class="list-second">
          <li v-for="v in list.list" :key="v.id">
            <router-link href="#" :class="{active: $route.path.includes(v.path)}"
              :to="v.path">{{v.label}}</router-link>
          </li>
        </ul>
      </li>
    </ul>
  </div>
</template>
<script>
// import asideList from '../config/asides'
export default {
  props: ['asides'],
  data () {
    return {
      // asides: []
    }
  },
  created () {
    // this.asides = asideList.aside_shop
  }
}
</script>
<style lang="scss" scoped>
.aside-box{
  background-color: #364150;
  padding: 10px;
  border-radius: 5px;
  a{
    display: inline-block;
    color: #B4BCC8;
    width: 130px;
    line-height: 30px;
    padding-left: 50px;
    &.active,&:hover{
      background-color: #3E4B5C;
      color: #fff;
    }
    &.active{
      border-left: 5px solid #1CAF9A;
    }
  }
  .aside-list{
    .title{
      margin-left: 20px;
      color: #A0A0A0;
      line-height: 35px;
    }
  }
}
</style>
