<template>
  <div>
    <p class="page-title">创建公告</p>
    <div class="pannel" style="display: flex;align-items:flex-start">
      <div class="mobile-model">
        <div class="mobile-header">
          <i></i>
          <div class="mobile-title">标题</div>
        </div>
        <div class="mobile-content">
          <div class="base-info">
            <span>基本信息区</span>
          </div>
          <div class="content" v-html="data.content"></div>
        </div>
        <div class="mobile-footer">
          <i></i>
        </div>
      </div>
      <div class="right-box">
        <div class="pannel pannel-content">
          <b class="title">标题：</b>
          <el-input v-model="data.title" size="small"></el-input>
        </div>
        <div class="pannel">
          <b class="title">正文内容：</b>
          <vue-ueditor-wrap v-model="data.content" :config="myConfig" style="width:100%"></vue-ueditor-wrap>
        </div>
        <div class="pannel pannel-content" style="background-color: #fff">
          <b class="title">公告对象：</b>
          <div>
            <label>
              <input v-model="data.obj" type="radio" value="1">
              <span>所有用户</span>
            </label>
            <label>
              <input v-model="data.obj" type="radio" value="2">
              <span>分销商</span>
            </label>
          </div>
        </div>
        <div class="submit-box-fixed">
          <el-button type="success" size="small">保存</el-button>
          <el-button type="success" size="small">保存并预览</el-button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
const VueUeditorWrap = require('vue-ueditor-wrap')
export default {
  components: {
    VueUeditorWrap
  },
  data () {
    return {
      myConfig: {
        autoHeightEnabled: true,
        initialFrameHeight: 220, // 初始容器高度
        initialFrameWidth: '100%', // 初始容器宽度
        UEDITOR_HOME_URL: './static/UEditor/',
        serverUrl: 'http://35.201.165.105:8000/controller.php'// 上传文件接口
      },
      data: {
        title: '',
        content: '',
        obj: ''
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.mobile-content{
  .base-info{
    margin: -1px 13px 0;
    line-height: 80px;
    background: #E7E7E7;
    text-align: center;
  }
  .content{
    margin: 0 13px;
    min-height: 96px;
    border: 2px dashed #FF8182;
  }
}
.right-box{
  flex: 1;
  margin-left: 25px;
  .pannel-content{
    border: 1px solid #ccc;
    margin-top: 0;
  }
  b.title{
    line-height: 26px;
  }
}
</style>
