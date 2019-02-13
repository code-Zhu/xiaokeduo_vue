<template>
  <div class="step3">
    <div class="mobile-model">
      <div class="mobile-header">
        <i></i>
        <div class="mobile-title">店铺主页</div>
      </div>
      <div class="mobile-content">
        <div class="info-area">
          <p>基本信息区</p>
          <p>固定样式，显示商品主图、价格等信息</p>
        </div>
        <div class="text-content" v-html="content"></div>
      </div>
      <div class="mobile-footer">
        <i></i>
      </div>
    </div>
    <div class="right">
      <div class="edit-right-ctr">
        <vue-ueditor-wrap v-model="content" :config="myConfig" style="width:100%"></vue-ueditor-wrap>
      </div>
      <div class="pannel-content">
        <label>
          <input type="checkbox" name="outsiteImg" value="true">
          <span>下载站外图片</span>
          <p>勾选以后，如果商品详情中包含有站外图片，则会将图片下载保存到您店铺的图片库中，需要下载的图片越多，需要的时间越长，请慎重选择。</p>
        </label>
      </div>
    </div>
    <div class="submit-box-fixed">
      <el-button type="primary" size="small">上一步</el-button>
      <el-button type="success" size="small">保存</el-button>
      <el-button type="success" size="small">保存并预览</el-button>
    </div>
  </div>
</template>
<script>
const VueUeditorWrap = require('vue-ueditor-wrap')
export default {
  components: {VueUeditorWrap},
  data () {
    return {
      content: '',
      myConfig: {
        autoHeightEnabled: true,
        initialFrameHeight: 400, // 初始容器高度
        initialFrameWidth: '100%', // 初始容器宽度
        UEDITOR_HOME_URL: './static/UEditor/',
        serverUrl: 'http://35.201.165.105:8000/controller.php'// 上传文件接口
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.step3{
  display: flex;
  align-items: flex-start;
  position: relative;
  .mobile-content{
    .info-area{
      height: 100px;
      text-align: center;
      margin: -1px 13px 0;
      background-color: #E7E7E7;
      display: flex;
      flex-direction: column;
      justify-content: center;
      p{
        line-height: 20px;
      }
    }
    .text-content{
      min-height: 96px;
      max-height: 196px;
      border: 2px dashed#FF8182;
      margin: 0 13px;
      overflow-y: auto;
    }
  }
  .mobile-footer{
    border-top: none;
  }
  .right{
    width: 560px;
    margin-left: 20px;
  }
  .edit-right-ctr{
    min-height: 20px;
    position: relative;
    left: 0;
    width: 540px;
  }
}
</style>
