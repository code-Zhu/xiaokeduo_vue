<template>
  <div>
    <p class="page-title">短信发送设置</p>
    <div class="pannel" style="width: 800px;margin:0 auto">
      <span>第一次使用请先<a href="http://sms.kuaidiantong.cn/Login.aspx">点击这里</a>注册账号获取短信接口的AppKey和AppSecret</span>
    </div>
    <el-form label-width="100px" style="width:500px">
      <el-form-item label="AppKey：">
        <el-input size="small" type="text" v-model="data.appKey"></el-input>
      </el-form-item>
      <el-form-item label="AppSecret：">
        <el-input size="small" type="text" v-model="data.appSecret"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="success" size="small" style="width: 110px">保存</el-button>
      </el-form-item>
      <el-form-item label="接收手机号：">
        <el-input size="small" type="text" v-model="data.phone"></el-input>
      </el-form-item>
      <el-form-item label="测试内容：">
        <el-input size="small" type="text" v-model="data.content"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="success" size="small" style="width: 110px">测试发生</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
export default {
  data () {
    return {
      data: {
        appKey: '',
        appSecret: '',
        phone: '',
        content: ''
      }
    }
  }
}
</script>
