<template>
  <div>
    <div class="pannel pannel-content">
      <b>积分抵现</b>
      <p>开启以后，会员下单时可使用账户的积分来抵扣订单金额。</p>
      <el-switch v-model="switchValue"
        active-color="#3AB400" inactive-color="#ECECEC">
      </el-switch>
    </div>
    <div class="pannel" v-if="switchValue">
      <el-tabs value="first" type="card">
        <el-tab-pane label="设置规则" name="first">
          <el-form class="form-box" label-width="200px" size="small">
            <el-form-item label="抵现比例：" required>
              <span>每</span>
              <el-input v-model="form.rate" style="width: 110px"></el-input>
              <span>积分可抵扣1元</span>
              <p class="tip">在订单结算时，会员可直接用积分抵扣订单金额（到分）。该部分抵扣金额，由平台承担。</p>
              <p class="tip">当配置为0时，表示积分不能抵扣金额。</p>
            </el-form-item>
            <el-form-item label="单次最高抵现金额：" required>
              <el-input v-model="form.max" style="width: 110px"></el-input>
            </el-form-item>
            <el-form-item>
              <el-button type="success">保存</el-button>
            </el-form-item>
          </el-form>
        </el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      switchValue: true,
      form: {
        rate: '100',
        max: '100'
      }
    }
  }
}
</script>
<style lang="scss" scoped>
.pannel-content{
  position: relative;
  line-height: 20px;
  .el-switch{
    position: absolute;
    right: 10px;
    top: 10px;
  }
}
</style>
