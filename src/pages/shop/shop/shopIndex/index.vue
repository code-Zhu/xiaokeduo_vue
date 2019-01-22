<template>
  <div class="shop-index">
    <p class="page-title">店铺主页</p>
    <div class="pannel">
      <p class="pannel-title">当前使用的模板</p>
      <div class="pannel-content">
        <div class="model-show"></div>
        <div class="right">
          <span class="qr-code">二维码</span>
          <div class="right-item">
            <p>手机扫描此二维码，可直接在手机上访问店铺</p>
            <el-button type="primary" size="mini">预览</el-button>
          </div>
          <div class="right-item">
            <p>店铺网址：</p>
            <p>http://47.93.12.216:10285/default.aspx</p>
            <el-button type="primary" size="mini">复制网址</el-button>
          </div>
          <div class="right-item" style="margin-top:40px">
            <p>模板名称：美颜美妆</p>
          </div>
          <div class="right-item">
            <el-button type="primary" size="mini"
              @click="$router.push('/shop/shop_index/shop_edit')">编辑模板</el-button>
          </div>
        </div>
      </div>
    </div>
    <div class="pannel">
      <p class="pannel-title">可选用的模板</p>
      <ul class="model-list">
        <li v-for="v in 17" :key="v">
          <div class="img-box">
            <div class="btn">
              <el-button type="primary" size="mini">编辑</el-button>
              <el-button type="success" size="mini">使用模板</el-button>
            </div>
          </div>
          <p><i class="el-icon-arrow-up"></i></p>
          <p>潮流韩风</p>
        </li>
      </ul>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.pannel-title{
  padding-left: 10px;
  border-left: 2px solid #FF3300;
  font-size: 16px;
  line-height: 22px;
  margin-bottom: 15px;
}
.pannel{
  .pannel-content{
    display: flex;
    .model-show{
      width: 193px;
      height: 314px;
      border: 1px solid #333;
      margin-right: 45px;
    }
    .right{
      display: flex;
      flex-direction: column;
      width: 450px;
      .qr-code{
        width: 90px;
        height: 90px;
        background-color: #fff;
      }
      .right-item{
        margin-top: 15px;
        display: flex;
        flex-direction: column;
        flex-wrap: wrap;
        align-content: space-between;
        height: 30px;
        .el-button{
          width: 83px
        }
      }
    }
  }
  .model-list{
    display: flex;
    flex-wrap: wrap;
    li{
      margin: 10px 14px;
      .img-box{
        width: 176px;
        height: 296px;
        border: 1px solid #999;
        position: relative;
        .btn{
          width: 100%;
          text-align: center;
          position: absolute;
          top: 100px;
          opacity: 0;
          transition: all .5s ease;
        }
      }
      &:hover{
        .img-box{
          .btn{
            display: block;
            top: 50%;
            margin-top: -20px;
            opacity: 1;
          }
        }
      }
      p{
        text-align: center;
        line-height: 20px;
        i{
          font-size: 16px;
          font-weight: 600;
        }
      }
    }
  }
}
</style>
