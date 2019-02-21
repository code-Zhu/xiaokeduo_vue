<template>
  <div>
    <p class="page-title">{{id?'编辑会员等级':'添加会员等级'}}</p>
    <div class="pannel">
      <p class="title">基本信息</p>
      <el-form class="form-box" size="small" label-width="160px">
        <el-form-item label="会员等级名称：" required>
          <el-input class="_150px"></el-input>
        </el-form-item>
        <el-form-item label="会员折扣：" required>
          <span>现价×</span>
          <el-input style="width:90px"></el-input>
          <span>%</span>
          <p class="tip">输入90表示打9折，100%表示不打折.</p>
        </el-form-item>
        <el-form-item label="设为默认：" required>
          <el-switch v-model="switchValue"
            active-color="#0058CC" inactive-color="#F3F3F3">
          </el-switch>
        </el-form-item>
      </el-form>
    </div>
    <div class="pannel">
      <p class="title">自动升级</p>
      <el-form size="small" label-width="160px">
        <el-form-item label="满足交易额：" required>
          <el-input class="_150px"></el-input>
          <span>元</span>
        </el-form-item>
        <el-form-item label="">
          <span>或</span>
        </el-form-item>
        <el-form-item label="满足交易次数：" required>
          <el-input class="_150px"></el-input>
        </el-form-item>
        <el-form-item label="" >
          <el-button type="success">确定</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      switchValue: false
    }
  },
  computed: {
    id () {
      return this.$route.params.id
    }
  }
}
</script>

<style lang="scss" scoped>
._150px{width: 150px}
p.title{
  font-size: 16px;
  line-height: 16px;
  padding-left: 15px;
  border-left: 2px solid #ff0000;
  margin: 30px 0;
}
</style>
