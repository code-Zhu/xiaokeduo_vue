<template>
  <div>
    <el-tabs type="card" v-model="tab" @tab-click="handleTabClick">
      <el-tab-pane label="账户余额" name="account_balance">
        <div class="pannel-content">
          <b>账户余额支付</b>
          <p>开通账户余额支付，所有会员在店铺的消费可以直接使用余额付款</p>
          <toggle-button v-model="switch1" :labels="{checked: '已开启', unchecked: '已关闭'}"
            :color="{checked: '#3AB400', unchecked: '#ccc'}"
            :width="100" :height="40" :font-size="14">
          </toggle-button>
        </div>
        <div class="pannel-content">
          <b>账户余额申请提现</b>
          <p>关闭账户余额申请提现功能，会员账户内的余额只能用于店铺消费</p>
          <toggle-button v-model="switch2" :labels="{checked: '已开启', unchecked: '已关闭'}"
            :color="{checked: '#3AB400', unchecked: '#ccc'}"
            :width="100" :height="40" :font-size="14">
          </toggle-button>
        </div>
      </el-tab-pane>
      <el-tab-pane label="微信支付" name="wpay">
        <div class="pannel pannel-content">
          <b>微信支付收款设置</b>
          <p>
            <span>还没开通微信支付？</span>
            <a target="_blank" href="https://mp.weixin.qq.com/cgi-bin/readtemplate?t=news/open-app-apply-guide_tmpl&lang=zh_CN">立即免费申请开通微信支付接口</a>
          </p>
          <p>微信支付只支持会员在微信客户端购买付款，如需支持客户在其他浏览器上购买，请设置其他收款方式。</p>
          <toggle-button v-model="switch5" :labels="{checked: '已开启', unchecked: '已关闭'}"
            :color="{checked: '#3AB400', unchecked: '#ccc'}"
            :width="100" :height="40" :font-size="14">
          </toggle-button>
        </div>
        <div class="pannel" v-if="switch5">
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
      <el-tab-pane label="线下支付" name="offline_pay">
        <div class="pannel-content">
          <b>线下支付收款设置</b>
          <p>线下支付提供：银行卡转账、支付宝转账或其他方式供您选择，请认真填写并核对相关信息，</p>
          <p>如若因手动填写错误而造成的一切损失，本平台概不负责！</p>
          <toggle-button v-model="switch2" :labels="{checked: '已开启', unchecked: '已关闭'}"
            :color="{checked: '#3AB400', unchecked: '#ccc'}"
            :width="100" :height="40" :font-size="14">
          </toggle-button>
        </div>
        <div v-if="switch2" class="pannel" style="width: 670px;margin-top: 20px;">
          <vue-ueditor-wrap v-model="richContent" :config="richConfig" style="width:100%"></vue-ueditor-wrap>
        </div>
      </el-tab-pane>
      <el-tab-pane label="货到付款" name="cod">
        <div class="pannel-content">
          <b>货到付款设置</b>
          <p>启用后买家可选择货到付款下单，您需自行通过合作快递安排配送和收款。</p>
          <toggle-button v-model="switch2" :labels="{checked: '已开启', unchecked: '已关闭'}"
            :color="{checked: '#3AB400', unchecked: '#ccc'}"
            :width="100" :height="40" :font-size="14">
          </toggle-button>
        </div>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>
<script>
const VueUeditorWrap = require('vue-ueditor-wrap')
export default {
  props: ['tabName'],
  components: {
    VueUeditorWrap
  },
  data () {
    return {
      tab: '',
      switch1: true,
      switch2: true,
      switch3: false,
      switch4: false,
      switch5: true,
      formDate: {
        appid: 'wxad21d572c8944fde',
        appSecret: 'bfe4c464a861b99435f99c6c6ffd4d46',
        mchid: '',
        key: ''
      },
      richContent: '请填写在线支付帮助内容',
      richConfig: {
        autoHeightEnabled: true,
        initialFrameHeight: 200, // 初始容器高度
        initialFrameWidth: '100%', // 初始容器宽度
        UEDITOR_HOME_URL: './static/UEditor/',
        serverUrl: 'http://35.201.165.105:8000/controller.php'// 上传文件接口
      }
    }
  },
  watch: {
    tabName () {
      this.tab = this.tabName
    }
  },
  methods: {
    handleTabClick (v) {
      if (v.name === 'wpay') {
        this.$router.push('/wechat/weixin_pay')
      } else {
        this.$router.push(`/settings/${v.name}`)
      }
    }
  },
  mounted () {
    this.tab = this.tabName
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
.form-box{
  width: 520px;
  margin-top: 10px;
}
</style>
