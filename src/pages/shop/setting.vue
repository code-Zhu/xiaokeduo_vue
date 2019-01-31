<template>
  <div class="shop-setting">
    <p class="page-title">店铺设置</p>
    <div class="pannel-content pannel">
      <div class="pannel-content-top">
        <p><b>开启首页浮动导航</b></p>
        <p>开启后，首页左侧会显示浮动导航</p>
        <el-switch v-model="switch_val1" active-color="#13ce66" inactive-color="#CCCCCC"></el-switch>
      </div>
    </div>
    <div class="pannel-content pannel">
      <div class="pannel-content-top">
        <p><b>底部文字链接</b></p>
        <p>关闭后，底部将不显示文字链接</p>
        <el-switch v-model="switch_val2" active-color="#13ce66" inactive-color="#CCCCCC"></el-switch>
      </div>
      <div class="form-box" v-show="switch_val2">
        <el-form label-width="160px">
          <el-form-item label="分销申请栏目名称：">
            <el-input></el-input>
          </el-form-item>
          <el-form-item label="栏目链接地址：">
            <el-input></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="success" size="mini">保存</el-button>
            <el-button type="warning" size="mini">恢复默认</el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>
    <div class="pannel-content pannel">
      <div class="pannel-content-top">
        <p><b>底部版权信息</b></p>
        <p>关闭后，底部将不显示版权信息文字</p>
        <el-switch v-model="switch_val3" active-color="#13ce66" inactive-color="#ccc"></el-switch>
      </div>
      <div class="form-box" v-show="switch_val3">
        <el-form label-width="160px">
          <el-form-item label="版本信息文字：">
            <el-input></el-input>
          </el-form-item>
          <el-form-item label="文字对应跳转链接：">
            <el-input></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="success" size="mini">保存</el-button>
            <el-button type="warning" size="mini">恢复默认</el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      switch_val1: true,
      switch_val2: true,
      switch_val3: true
    }
  }
}
</script>
