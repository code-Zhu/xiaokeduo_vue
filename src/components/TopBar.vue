<template>
  <div class="topbar">
    <div class="main">
      <div class="log">log</div>
      <ul class="bar-list">
        <li v-for="items in menuList" :key="items.id">
          <router-link href="#" v-for="v in items" :key="v.id"
            :class="{active: $route.path.includes(v.name)}" :to="v.path">{{v.label}}</router-link>
        </li>
      </ul>
      <div class="login-box" @click="handleShow">
        <span>admin(name)</span>
        <i class="el-icon-caret-bottom"></i>
        <ul class="function" v-show="login_show">
          <li>
            <router-link to="/settings/staff/1/info"><i class="iconfont icon-user"></i>个人信息</router-link>
          </li>
          <li>
            <router-link to="/settings/staff/1/password"><i class="iconfont icon-liebiao"></i>修改密码</router-link>
          </li>
          <li>
            <router-link to="/login"><i class="iconfont icon-tuichu"></i>退出</router-link>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
const barLists = require('../config/topBar.js')
export default {
  data () {
    return {
      menuList: [],
      login_show: false
    }
  },
  methods: {
    handleShow () {
      this.login_show = !this.login_show
    }
  },
  created () {
    this.menuList = barLists
  }
}
</script>

<style lang="scss" scoped>
.topbar{
  width: 100%;
  min-width: 1260px;
  background-color: #2B3643;
  margin: 0 auto 20px;
  color: #C6CFDA;
  box-shadow: 3px 3px 3px rgba(0,0,0,.2);
  .main{
    display: flex;
    padding-top: 30px;
    padding-bottom: 15px;
    .log{
      width: 200px;
    }
    .bar-list{
      flex: 1;
      li{
        border-left: 2px solid #ccc;
        padding-left: 20px;
        display: inline-block;
        a{
          color: #C6CFDA;
          font-weight: 600;
          margin-right: 20px;
          &:hover{
            color: #fff;
          }
          &.active{
            padding-bottom: 11px;
            color: #fff;
            border-bottom: 2px solid #1CA47D;
          }
        }
      }
    }
    .login-box{
      cursor: pointer;
      position: relative;
      .function{
        position: absolute;
        top: 20px;
        right: 0;
        width: 194px;
        background-color: #fff;
        color: #333;
        border: 1px solid #C9C9C9;
        border-radius: 5px;
        z-index: 10;
        li{
          padding: 3px 0;
        }
        li:last-child{
          border-top: 1px dashed #DDDDDD;
        }
        a{
          display: inline-block;
          box-sizing: border-box;
          width: 100%;
          line-height: 30px;
          padding: 0 20px;
          &:hover{
            background-color: #4477F3;
            color: #fff;
          }
        }
      }
    }
  }
}
</style>
