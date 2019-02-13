<template>
  <div id="app">
    <top-bar></top-bar>
    <router-view/>
  </div>
</template>

<script>
import topBar from './components/TopBar.vue'
export default {
  components: {
    topBar
  },
  name: 'App'
}
</script>

<style lang='scss'>
#app {
  font-family: 'Microsoft YaHei', Helvetica, Arial, sans-serif;
  color: #333;
  font-size: 14px;
}
.main{
  width: 1260px;
  margin: 0 auto;
}
.page{
  display: flex;
  align-items: flex-start;
  .view-box{
    flex: 1;
    margin-left: 20px;
    .page-title{
      color: #777;
      font-size: 20px;
      border-bottom: 2px solid #1CA47D;
      padding-bottom: 10px;
      margin-bottom: 20px;
      span{
        color: #999;
        font-size: 14px;
        line-height: 26px;
      }
    }
  }
  .pannel{
    margin-bottom: 15px;
  }
  .pannel-content{
    background-color: #F7F7F7;
    border-radius: 10px;
    padding: 15px;
    margin-top: 20px;
  }
  .pannel-content-top{
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    align-content: space-between;
    height: 50px;
    p{
      margin-bottom: 10px;
    }
  }
}
.table-header{
  margin: 10px 0;
}
.table-ctr{
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around
}
.table-footer{
  margin-top: 20px;
  text-align: right
}
.edit-item-dom{
  position: relative;
}
.edit-right-ctr{
  position: absolute;
  width: 458px;
  border: 1px solid #ccc;
  padding: 10px;
  border-radius: 8px;
  background-color: #f8f8f8;
  z-index: 2;
  left: 350px;
  top: 0;
  cursor: default;
  &::before,&::after{
    position: absolute;
    font-family: simsun;
    content: "◆";
    top: 8px;
    left: -11px;
    display: block;
    width: 9px;
    height: 18px;
    font-size: 24px;
    color: #F8F8F8;
    z-index: 10;
  }
  &::after{
    color: #ccc;
    z-index: 9;
    left: -12px;
  }
  .ctr-form-item{
    display: flex;
    line-height: 34px;
    span.btn{
      cursor: pointer;
      background-color: #009DD9;
      color: #fff;
      padding: 2px 10px;
      border-radius: 5px;
      height: 20px;
      line-height: 20px;
      margin-top: 5px;
      margin-left: 10px;
    }
  }
}
.form-box{
  .tip{
    font-size: 12px;
    color: #737373;
    line-height: 20px;
  }
}
.mini-btn{
  display: inline-block;
  box-sizing: border-box;
  text-align: center;
  padding: 0 6px;
  line-height: 24px;
  background-color: #CFCFCF;
  color: #fff;
  border-radius: 3px;
  font-size: 12px;
  cursor: pointer;
  &[plain]{
    background-color: #fff;
    color: #000;
    border: 1px solid #ADADAD;
    &:hover{
      background-color: #E6E6E6;
    }
  }
  &[type=primary]{
    background-color: #337AB7;
    &:hover{
      background-color: #286090;
    }
  }
  &[type=success]{
    background-color: #5CB85C;
    &:hover{
      background-color: #449D44
    }
  }
  &[type=light]{
    background-color: #5BC0DE;
    &:hover{
      background-color: #31B0D5;
    }
  }
  &[type=danger]{
    background-color: #D9534F;
    &:hover{
      background-color: #C9302C;
    }
  }
}
.mobile-model{
  width: 346px;
  display: flex;
  flex-direction: column;
  border: 1px solid #ccc;
  border-radius: 10px;
  .mobile-header{
    width: 320px;
    height: 112px;
    margin: 0 auto;
    padding-top: 10px;
    &>i{
      display: block;
      width: 98px;
      height: 34px;
      margin: 0 auto 13px;
      background: url('./assets/img/modules.png') no-repeat 0 -74px;
    }
    .mobile-title{
      height: 34px;
      padding-top: 32px;
      background: url('./assets/img/modules.png') no-repeat 0 0;
      color: #fff;
      font-size: 18px;
      text-align: center;
      overflow: hidden;
      cursor: pointer;
    }
  }
  .mobile-content{
    flex: 1;
    display: flex;
    flex-direction: column;
    background-color: #F9F9F9;
  }
  .mobile-footer{
    border-top: 1px solid #ccc;
    &>i{
      display: block;
      margin: 10px auto;
      width: 62px;
      height: 62px;
      background: url('./assets/img/modules.png') no-repeat -253px -70px;
    }
  }
}
.submit-box-fixed{
  width: 100%;
  position: fixed;
  z-index: 3;
  left: 0;
  bottom: 0;
  height: 55px;
  line-height: 55px;
  background-color: rgba(43,54,67,0.8);
  text-align: center;
}
</style>
