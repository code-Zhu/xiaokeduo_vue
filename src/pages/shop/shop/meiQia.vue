<template>
  <div class="shop-menu">
    <p class="page-title">美洽新接口配置</p>
    <div class="pannel form-box">
      <el-form label-width="180px">
        <el-form-item label="开启在线客服：">
          <toggle-button v-model="onLine" :labels="{checked: '已开启', unchecked: '已关闭'}"
            :color="{checked: '#3AB400', unchecked: '#ccc'}" :width="100" :height="35" :font-size="14">
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
            <el-button type="success" size="mini">保存</el-button>
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
