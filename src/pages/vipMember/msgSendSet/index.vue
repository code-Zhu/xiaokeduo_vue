<template>
  <div>
    <p class="page-title">短信发送设置</p>
    <el-form label-width="180px" style="width:700px">
      <el-form-item>
        <span>第一次使用请先<a href="http://sms.kuaidiantong.cn/Login.aspx">点击这里</a>注册账号获取短信接口的AppKey和AppSecret</span>
      </el-form-item>
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
        <el-button type="success" size="small" style="width: 110px">测试发送</el-button>
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
