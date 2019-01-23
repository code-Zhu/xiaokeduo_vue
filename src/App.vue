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
      p:first-child{
        font-weight: 600;
      }
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
}
</style>
