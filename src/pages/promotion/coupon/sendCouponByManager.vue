<template>
  <div>
    <p class="page-title">优惠卷手动发放</p>
    <el-form label-width="100px" size="mini" class="form-box" style="margin-left: 70px">
      <el-form-item label="选择优惠卷：">
        <el-select v-model="form.couponName">
          <el-option value="" label="请选择优惠卷"></el-option>
        </el-select>
        <p class="tip">还剩10张</p>
        <p class="tip">有效期：2019-02-15 14:40:00 到 2019-02-16 14:40:59</p>
      </el-form-item>
      <el-form-item label="发放范围：">
        <div>
          <label>
            <input v-model="form.range" type="radio" value="1">
            <span>指定条件发放</span>
          </label>
          <label>
            <input v-model="form.range" type="radio" value="2">
            <span>指定微信昵称发放</span>
          </label>
          <label>
            <input v-model="form.range" type="radio" value="3">
            <span>指定用户名发放</span>
          </label>
        </div>
        <div class="condition">
          <span class="type" v-if="form.range==1">请指定发放条件</span>
          <span class="type" v-if="form.range==2">请指定会员微信昵称</span>
          <span class="type" v-if="form.range==3">请指定会员用户名</span>
        </div>
      </el-form-item>
      <el-form-item label="">
        <el-button size="small" type="primary">确定发送</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
export default {
  data () {
    return {
      form: {
        couponName: '',
        range: '1'
      }
    }
  }
}
</script>
<style lang="scss" scoped>
.condition{
  width: 500px;
  min-height: 180px;
  margin-top: 15px;
  box-sizing: border-box;
  border: 1px solid #ccc;
  border-radius: 6px;
  position: relative;
  .type{
    position: absolute;
    top: -15px;
    left: 20px;
    background-color: #fff;
    padding: 0 10px
  }
}
</style>
