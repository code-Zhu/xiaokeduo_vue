<template>
  <div class="good-brands">
    <div class="page-title">
      <p>{{$route.params.id ? '修改': '添加'}}品牌分类</p>
      <span>管理商品所属的各个品牌，如果在上架商品时给商品指定了品牌分类，则商品可以按品牌分类浏览</span>
    </div>
    <el-form class="form-box" size="small" label-width="100px">
      <el-form-item label="品牌名称" required>
        <el-input class="_230px"></el-input>
      </el-form-item>
      <el-form-item label="品牌Logo" required>
        <label class="logo">
          <i class="iconfont icon-add"></i>
          <input type="file" class="hide" accept="image/png, image/jpeg, image/gif">
        </label>
        <p class="tip">建议尺寸：650 x 200 像素，小于300KB，支持.jpg、.gif、.png格式</p>
      </el-form-item>
      <el-form-item label="品牌官方地址">
        <el-input></el-input>
        <p class="tip">品牌官方网站的网址必须以http://开头，长度限制在100个字符以内</p>
      </el-form-item>
      <el-form-item label="搜索关键字">
        <el-input class="_230px"></el-input>
      </el-form-item>
      <el-form-item label="关键字描述">
        <el-input class="_230px"></el-input>
      </el-form-item>
      <el-form-item label="品牌介绍" required>
        <vue-ueditor-wrap v-model="form.content" :config="myConfig" style="width:100%"></vue-ueditor-wrap>
      </el-form-item>
      <el-form-item label="关联商品类型">
        <label>
          <input type="checkbox">
          <span>服装</span>
        </label>
      </el-form-item>
      <el-form-item label="">
        <el-button type="primary" size="small">保存</el-button>
      </el-form-item>
    </el-form>
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
      form: {
        content: ''
      }
    }
  }
}
</script>

<style lang="scss">
._230px{width:230px}
.good-brands{
  .el-form-item--small .el-form-item__content, .el-form-item--small .el-form-item__label{
    line-height: 20px;
  }
  .form-box{
    width: 700px;
    margin-left: 70px;
    .logo{
      display: inline-block;
      width: 88px;
      height: 88px;
      border: 1px solid #ccc;
      text-align: center;
      line-height: 88px;
      color: #ccc;
    }
  }
}
</style>
