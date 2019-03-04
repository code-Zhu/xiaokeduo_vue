<template>
  <div class="shop-config">
    <p class="page-title">店铺信息</p>
    <div class="pannel form-box">
      <el-form label-width="170px" class="form-box">
        <el-form-item label="店铺LOGO：">
          <input type="file" style="display:none" id="shop_logo" @change="upload">
          <label for="shop_logo" class="shop_logo">
            <span>logo</span>
            <span>修改</span>
          </label>
          <p class="tip">建议尺寸：200 x 200 像素</p>
          <p class="tip">小于120KB，支持.jpg、.gif、.png格式</p>
        </el-form-item>
        <el-form-item label="店铺名称：">
          <el-input></el-input>
        </el-form-item>
        <el-form-item label="联系电话：">
          <el-input></el-input>
          <p class="tip">支持输入手机号码或座机号码</p>
        </el-form-item>
        <el-form-item label="店铺介绍：">
          <el-input type="textarea" :autosize="{ minRows: 4}"></el-input>
          <p class="tip">微信分享店铺给好友时会显示这里的文案</p>
        </el-form-item>
        <el-form-item>
          <el-button type="success" size="mini">保存</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
    }
  },
  methods: {
    upload ($e) {
      let file = new FormData()
      file.append('file', $e.target.files[0]) // 上传该对象
    }
  }
}
</script>

<style lang="scss" scoped>
.form-box{
  width: 500px;
  .shop_logo{
    cursor: pointer;
    display: flex;
    align-items: flex-end;
    line-height: 14px;
    span:first-child{
      width: 74px;
      height: 74px;
      border: 1px solid #A19C9C;
      margin-right: 10px;
    }
  }
}
</style>
