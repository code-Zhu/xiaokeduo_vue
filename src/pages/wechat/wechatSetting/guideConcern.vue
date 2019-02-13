<template>
  <div>
    <p class="page-title">引导关注</p>
    <div class="pannel pannel-content">
      <b>强制关注公众号</b>
      <p>会员必须关注公众号才能进入店铺</p>
      <el-switch v-model="switch1"
        active-color="#13ce66" inactive-color="#ccc">
      </el-switch>
    </div>
    <div class="pannel pannel-content">
      <b>开启引导关注</b>
      <p>开启后，会引导用户关注公众号</p>
      <el-switch v-model="switch2"
        active-color="#13ce66" inactive-color="#ccc">
      </el-switch>
    </div>
    <div class="pannel pannel-content">
      <b>自动弹出/跳转</b>
      <p>开启后，自动弹出公众号二维码或者跳转到关注引导页面</p>
      <el-switch v-model="switch3"
        active-color="#13ce66" inactive-color="#ccc">
      </el-switch>
    </div>
    <div class="pannel pannel-content">
      <b>关注方式</b>
      <p>选择"跳转到提醒关注页面"需要制作提醒关注页面</p>
      <div>
        <label>
          <input v-model="concernType.step" type="radio" value="qrcode">
          <span>弹出公众号二维码</span>
        </label>
        <div>
          <span>关注引导语：</span>
          <el-input v-model="concernType.content" size="small" style="width: 310px" placeholder="长按识别二维码，获取最新优惠资讯"></el-input>
        </div>
      </div>
      <div>
        <label>
          <input v-model="concernType.step" type="radio" value="concernPage">
          <span>跳转至提醒关注页面</span>
        </label>
        <div>
          <span>页面地址：</span>
          <el-input v-model="concernType.content" size="small" style="width: 310px" placeholder="以http://开头"></el-input>
        </div>
        <div class="tip">
          <p>未关注公众号时，引导至此页面</p>
          <a href="javascript:;">如何制作引导页面</a>
        </div>
        <el-button size="small" type="success" style="margin: 20px 100px 0;">保存</el-button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      switch1: true,
      switch2: true,
      switch3: false,
      concernType: {
        step: 'qrcode',
        content: ''
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.pannel-content{
  position: relative;
  line-height: 20px;
  .el-switch{
    position: absolute;
    right: 10px;
    top: 10px;
  }
  &:last-child{
    border: 1px solid #ccc;
    label{
      line-height: 34px;
    }
    label+div{
      margin-left: 80px;
      span{
        display: inline-block;
        width: 90px;
        text-align: right;
      }
    }
    .tip{
      margin-top: 10px;
      width: 312px;
      display: flex;
      justify-content: space-between;
      font-size: 12px;
      margin-left: 170px;
      p{
        color: #999
      }
    }
  }
}
</style>
