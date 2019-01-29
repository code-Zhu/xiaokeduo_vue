<template>
  <div class="order">
    <p class="page-title">订单设置</p>
    <el-form label-width="200px">
      <el-form-item label="拍下" required>
        <el-input v-model="data.payed" style="width: 110px" size="small"></el-input>
        <span>天没付款的订单自动关闭</span>
      </el-form-item>
      <el-form-item label="发货" required>
        <el-input v-model="data.sended" style="width: 110px" size="small"></el-input>
        <span>天后自动完成订单</span>
      </el-form-item>
      <el-form-item>
        <el-button type="success" size="small">保存</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
export default {
  data () {
    return {
      data: {
        payed: 3,
        sended: 7
      }
    }
  }
}
</script>
