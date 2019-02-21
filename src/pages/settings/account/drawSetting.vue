<template>
  <div>
    <p class="page-title">提现设置</p>
    <div class="pannel">
      <el-form class="form-box" size="small" label-width="150px">
        <el-form-item label="提现支付账户：" required>
          <label>
            <input v-model="form.account_list" type="checkbox" value="wx">
            <span>微信支付</span>
          </label>
          <label>
            <input v-model="form.account_list" type="checkbox" value="xx">
            <span>线下转账</span>
          </label>
          <label>
            <input v-model="form.account_list" type="checkbox" value="wxhb">
            <span>微信红包</span>
          </label>
          <p class="tip">如需使用支付宝或微信支付自动转账，请先设置好支付宝和微信支付的账号信息；线下转账方式是分销商提现</p>
          <p class="tip">时，填写自己的收款帐户信息，管理员再根据信息手工转账</p>
        </el-form-item>
        <el-form-item label="微信支付批量转账：">
          <el-switch v-model="form.wxpays"
            active-color="#0064CC" inactive-color="#F1F1F1">
          </el-switch>
          <p class="tip">开启以后，可以实现微信支付批量发放提现，自动转账。</p>
        </el-form-item>
        <el-form-item label="姓名校验类型：">
          <label>
            <input v-model="form.nameCheck" type="radio" value="1">
            <span>校验真实姓名</span>
          </label>
          <label>
            <input v-model="form.nameCheck" type="radio" value="2">
            <span>仅当用户是实名用户时校验真实姓名</span>
          </label>
          <label>
            <input v-model="form.nameCheck" type="radio" value="3">
            <span>不校验真实姓名</span>
          </label>
        </el-form-item>
        <el-form-item label="单次最低提现金额：" required>
          <el-input v-model="form.minDraw" style="width: 110px"></el-input>
          <p class="tip">设置分销商佣金提现、会员帐户余额提现的最低金额，单元：元</p>
        </el-form-item>
        <el-form-item label="">
          <el-button type="success">保存</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      form: {
        account_list: [],
        wxpays: true,
        nameCheck: 1,
        minDraw: 2
      }
    }
  }
}
</script>
