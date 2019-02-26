<template>
  <div class="login">
    <el-form style="width:300px">
      <el-form-item>
        <div>
          <img :src="'./static/img/login-title.png'" alt="">
        </div>
      </el-form-item>
      <el-form-item>
        <el-input placeholder="用户名"></el-input>
      </el-form-item>
      <el-form-item>
        <el-input placeholder="密码"></el-input>
      </el-form-item>
      <el-form-item>
        <div class="code">
          <el-input placeholder="验证码"></el-input>
          <span>aa5d</span>
        </div>
      </el-form-item>
      <el-form-item>
        <el-button type="success" style="width:100%" @click="$router.push('/shop/default')">点击登录</el-button>
      </el-form-item>
      <el-form-item>
        <div class="login-footer">
          <img :src="'./static/img/wfxqrcode.jpg'" alt="">
          <span>微信扫描左侧二维码，了解销客多产品最新升级动态</span>
        </div>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
export default {
}
</script>
<style lang="scss" scoped>
.login{
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  .code{
    display: flex;
    justify-content: space-between;
    span{
      box-sizing: border-box;
      width: 100px;
      margin-left: 30px;
      border: 1px solid #998099;
      height: 38px;
      line-height: 38px;

    }
  }
  .login-footer{
    display: flex;
    img{
      width: 85px;
      height: 85px;
      margin-right: 15px;
    }
    span{
      vertical-align: top;
      line-height: 30px;
    }
  }
}
</style>
