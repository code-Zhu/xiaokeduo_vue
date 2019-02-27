<template>
  <div class="shop-menu">
    <p class="page-title">美洽新接口配置</p>
    <div class="pannel form-box">
      <el-form label-width="180px">
        <el-form-item label="开启在线客服：">
          <toggle-button v-model="onLine" :labels="true" :color="{checked: '#0067CC', unchecked: '#EDEDED'}"
            width="80" height="30" font-size="16">
          </toggle-button>
        </el-form-item>
        <el-form-item label="企业ID：" v-show="onLine">
          <el-col :span="18">
            <el-input size="mini"></el-input>
          </el-col>
          <el-col :span="6">
            <a href="#">去美洽注册账号</a>
          </el-col>
          <p>
            <span>提供企业ID获取最佳美洽客服使用体验.</span>
            <a href="#"> 如何获取企业ID >></a>
          </p>
          <div>
            <el-button type="success" size="small">保存</el-button>
          </div>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      onLine: true
    }
  }
}
</script>
<style lang="scss" scoped>
.form-box{
  width: 600px;
}
</style>
