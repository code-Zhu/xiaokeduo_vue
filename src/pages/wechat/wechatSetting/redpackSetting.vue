<template>
  <div>
    <p class="page-title">微信证书设置</p>
    <div class="pannel pannel-content">
      <b>提示</b>
      <p>还没开通微信支付？<a target="_blank" href="https://mp.weixin.qq.com/cgi-bin/readtemplate?t=news/open-app-apply-guide_tmpl&lang=zh_CN">立即免费申请开通微信支付接口</a></p>
      <p>设置好微信证书以后，才能使用微信红包和微信批量放款相关功能。</p>
      <toggle-button v-model="switch1" :labels="{checked: '已开启', unchecked: '已关闭'}"
        :color="{checked: '#3AB400', unchecked: '#ccc'}"
        :width="100" :height="40" :font-size="14">
      </toggle-button>
    </div>
    <div class="pannel"><el-button size="mini" type="success" @click="$router.push('/wechat/weixin_pay')">微信支付收款设置</el-button></div>
    <div class="pannel">
      <p>如已成功设置微信支付收款，请忽略以上提示，直接设置微信证书。</p>
      <el-form label-width="160px" class="form-box">
        <el-form-item label="微信证书：">
          <input type="file">
          <p class="tip">上传格式为*****.p12,如：apiclient_cert.p12</p>
        </el-form-item>
        <el-form-item label="证书密码：">
          <el-input size="small" style="width: 210px"></el-input>
        </el-form-item>
        <el-form-item label="">
          <el-button size="mini" type="success">保存</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      switch1: true
    }
  }
}
</script>

<style lang="scss" scoped>
.pannel-content{
  position: relative;
  line-height: 20px;
  .vue-js-switch{
    position: absolute;
    right: 10px;
    top: 10px;
  }
}
</style>
