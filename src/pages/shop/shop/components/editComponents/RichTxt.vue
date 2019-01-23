<template>
  <div class="rich-txt-box">
    <div class="rich-txt" v-html="content"></div>
    <div class="edit-right-ctr" v-if="righEdit">
      <div class="ctr-form">
        <div class="ctr-form-item">
          <vue-ueditor-wrap v-model="content" :config="myConfig" style="width:100%"></vue-ueditor-wrap>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
const VueUeditorWrap = require('vue-ueditor-wrap')
export default {
  props: ['righEdit'],
  components: {
    VueUeditorWrap
  },
  data () {
    return {
      content: '',
      myConfig: {
        autoHeightEnabled: true,
        initialFrameHeight: 500, // 初始容器高度
        initialFrameWidth: '100%', // 初始容器宽度
        UEDITOR_HOME_URL: './static/UEditor/',
        serverUrl: 'http://35.201.165.105:8000/controller.php'// 上传文件接口
      }
    }
  },
  mounted () {
  }
}
</script>

<style lang="scss" scoped>
.rich-txt-box{
  .rich-txt{
    min-height: 20px;
    line-height: 20px;
    width: 100%;
    overflow: hidden;
  }
  .edit-right-ctr{
    .ctr-form{
      .ctr-form-item{
        line-height: 100%!important;
      }
    }
  }
}
</style>
