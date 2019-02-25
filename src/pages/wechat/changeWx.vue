<template>
  <div>
    <p class="page-title">绑定微信公众号</p>
    <div class="pannel-content pannel pannel-change">
      <i class="el-icon-warning"></i>
      <div>
        <b>重要提示</b>
        <p>后期只有在所有使用微信授权登录的会员关联绑定系统用户名以后，您才能更换绑定其他微信公众号，请谨慎操作！</p>
        <a href="javascript:;">查看操作指南</a>
      </div>
    </div>
    <div class="pannel step">
      <p>
        <b>第一步：</b>
      </p>
      <p>复制以下信息至 <a href="http://mp.weixin.qq.com/">微信公众平台</a> ->开发者中心->服务器配置中，并提交！</p>
      <el-form label-width="150px" size="mini">
        <el-form-item label="Url：">
          <div info>
            <span>http://47.93.12.216/api/wx.ashx</span>
            <el-button>复制</el-button>
          </div>
        </el-form-item>
        <el-form-item label="Token：">
          <div info>
            <span>956E836616083926</span>
            <el-button>复制</el-button>
          </div>
        </el-form-item>
      </el-form>
    </div>
    <div class="pannel step">
      <p>
        <b>第二步：</b>
      </p>
      <p>在 <a href="http://mp.weixin.qq.com/">微信公众平台</a>开启自定义菜单，将开发者中心->开发者ID中的AppId和Appsecret复制到下方对应的输入框，并保存！</p>
      <el-form class="form-box" label-width="150px" size="mini">
        <el-form-item label="AppId：">
          <el-input></el-input>
          <p class="tip">微信公众号身份的唯一标识</p>
        </el-form-item>
        <el-form-item label="AppSecret：">
          <el-input></el-input>
          <p class="tip">审核后在公众平台开启开发模式后可查看</p>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.pannel-change{
  display: flex;
  i{
    font-size: 34px;
  }
  div{
    line-height: 20px;
    color: #ff0000;
    margin-left: 20px;
  }
}
.step{
  >:first-child{
    font-size: 18px;
    border-bottom: 1px solid #CDCDCD;
    line-height: 36px;
    margin-bottom: 15px;
  }
  >:nth-child(2){
    margin-left: 50px;
    margin-bottom: 20px;
  }
  .el-form{
    width: 500px;
  }
  [info]{
    display: flex;
    justify-content: space-between;
  }
}
</style>
