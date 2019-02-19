<template>
  <div style="margin-bottom: 500px">
    <p class="page-title">新增单条图文</p>
    <div class="pannel">
      <el-button size="mini" type="success" @click="$router.go(-1)">&lt;&lt;&nbsp;返回图文管理</el-button>
    </div>
    <div class="pannel" style="display: flex;align-items:flex-start">
      <div class="mobile-model">
        <div class="mobile-header">
          <i></i>
          <div class="mobile-title">店铺主页</div>
        </div>
        <div class="mobile-content">
          <span class="time">2月19日</span>
          <p class="title"><b>{{data.title || '单条图文标题'}}</b></p>
          <div class="img-box">
            <span v-if="data.img==''">封面图片</span>
            <!-- <img :src="data.img" alt=""> -->
          </div>
          <p class="intr">{{data.intr}}</p>
          <p class="read">
            <b>阅读原文</b>
            <span>></span>
          </p>
        </div>
        <div class="mobile-footer">
          <i></i>
        </div>
      </div>
      <div class="right">
        <div class="edit-right-ctr">
          <el-form size="small" class="form-box">
            <el-form-item label="标题：" required>
              <el-input v-model="data.title" placeholder="单图文标题"></el-input>
              <p class="tip">建议不多于30个字</p>
            </el-form-item>
            <el-form-item label="封面：" required>
              <label class="input-file">
                <input value="data.img" type="file" accept="image/png, image/jpeg, image/gif" class="hide">
                <span>选择图片</span>
              </label>
              <span class="tip">建议尺寸：600×346像素，小于200KB，支持.jpg、.gif、.png格式</span>
            </el-form-item>
            <el-form-item label="链接：">
              <span>查看全文</span>
              <el-input v-if="data.url !== ''"></el-input>
            </el-form-item>
            <el-form-item label="摘要：">
              <el-input v-model="data.intr" type="textarea" :rows="5" placeholder="请输入摘要内容"></el-input>
            </el-form-item>
            <el-form-item>
              <span>正文：</span>
              <vue-ueditor-wrap v-model="data.content" :config="myConfig" style="width:100%"></vue-ueditor-wrap>
            </el-form-item>
            <el-form-item label="分销商分享素材：">
              <label>
                <input v-model="data.share" type="checkbox">
                <span>是</span>
              </label>
            </el-form-item>
          </el-form>
        </div>
      </div>
    </div>
    <div class="submit-box-fixed">
      <el-button type="success" size="small">保存</el-button>
      <el-button type="success" size="small">保存并预览</el-button>
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
        initialFrameHeight: 200, // 初始容器高度
        initialFrameWidth: '100%', // 初始容器宽度
        UEDITOR_HOME_URL: './static/UEditor/',
        serverUrl: 'http://35.201.165.105:8000/controller.php'// 上传文件接口
      },
      data: {
        title: '',
        img: '',
        url: '',
        intr: '',
        content: '',
        share: false
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.mobile-footer{
  border-top: none;
}
.mobile-content{
  margin: -1px 13px 0;
  background-color: #fff;
  .time{
    font-size: 12px;
    color: #777;
  }
  .title{
    color: #777;
    font-size: 20px;
    line-height: 30px;
  }
  .intr{
    color: #777;
    font-size: 12px;
  }
  .img-box{
    width: 100%;
    background-color: #E8E8E8;
    min-height: 144px;
    color: #C0C0C0;
    text-align: center;
    margin: 10px 0;
    span{
      line-height: 146px;
    }
  }
  .read{
    padding: 10px 0;
    margin-top: 10px;
    border-top: 1px solid #ECECEC;
    display: flex;
    justify-content: space-between;
    b{
      font-size: 20px;
      color: #000;
    }
  }
}
.right{
  position: relative;
  margin-left: 25px;
  .edit-right-ctr{
    width: 600px;
    left: 0;
  }
}
.form-box{
  .input-file{
    text-align: center;
    color: #fff;
    background-color: #0BA29B;
    border-radius: 5px;
    padding: 7px 10px;
    cursor: pointer;
    &:hover{
      background-color: #3071A9;
    }
  }
}
</style>
