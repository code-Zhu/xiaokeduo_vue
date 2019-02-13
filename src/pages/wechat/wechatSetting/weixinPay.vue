<template>
  <div>
    <p class="page-title">设置收款账号</p>
    <el-tabs type="border-card" v-model="tabsName">
      <el-tab-pane label="账户余额支付"></el-tab-pane>
      <el-tab-pane label="微信支付" name="wpay">
        <div class="pannel pannel-content">
          <b>微信支付收款设置</b>
          <p>
            <span>还没开通微信支付？</span>
            <a target="_blank" href="https://mp.weixin.qq.com/cgi-bin/readtemplate?t=news/open-app-apply-guide_tmpl&lang=zh_CN">立即免费申请开通微信支付接口</a>
          </p>
          <p>微信支付只支持会员在微信客户端购买付款，如需支持客户在其他浏览器上购买，请设置其他收款方式。</p>
          <el-switch v-model="switch1"
            active-color="#13ce66" inactive-color="#ccc">
          </el-switch>
        </div>
        <div class="pannel">
          <el-form class="form-box" label-width="140px">
            <el-form-item label="公众号AppId：">
              <el-input size="small" v-model="formDate.appid"></el-input>
              <p class="tip">微信公众号身份的唯一标识</p>
            </el-form-item>
            <el-form-item label="公众号AppSecret：">
              <el-input size="small" v-model="formDate.appSecret"></el-input>
              <p class="tip">审核后在公众平台开启开发模式后可查看</p>
            </el-form-item>
            <el-form-item label="商户号MCH_ID：">
              <el-input size="small" v-model="formDate.mchid"></el-input>
              <p class="tip">微信支付商户号，审核通过后，在微信发送的邮件中查看。</p>
            </el-form-item>
            <el-form-item label="Key：">
              <el-input size="small" v-model="formDate.key"></el-input>
              <p class="tip">商户支付密钥Key。</p>
            </el-form-item>
            <el-form-item label="">
              <el-button size="small" type="success">保存</el-button>
            </el-form-item>
          </el-form>
        </div>
      </el-tab-pane>
      <el-tab-pane label="线下支付"></el-tab-pane>
      <el-tab-pane label="货到付款"></el-tab-pane>
    </el-tabs>
  </div>
</template>
<script>
export default {
  data () {
    return {
      tabsName: 'wpay',
      switch1: true,
      formDate: {
        appid: 'wxad21d572c8944fde',
        appSecret: 'bfe4c464a861b99435f99c6c6ffd4d46',
        mchid: '',
        key: ''
      }
    }
  }
}
</script>
<style lang="scss" scoped>
.pannel-content{
  margin: 0;
  line-height: 20px;
  position: relative;
  .el-switch{
    position: absolute;
    right: 10px;
    top: 10px;
  }
}
.form-box{
  width: 520px;
  margin-top: 10px;
}
</style>
