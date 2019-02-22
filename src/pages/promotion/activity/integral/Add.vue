<template>
  <div>
    <p class="page-title">添加积分兑换活动</p>
    <el-form class="form-box" size="small" label-width="300px">
      <el-form-item label="活动名称：" required>
        <el-input style="width: 200px"></el-input>
      </el-form-item>
      <el-form-item label="活动封面：" required>
        <label class="img-box">
          <input type="file" class="hide">
          <span>选择封面</span>
        </label>
        <p class="tip">建议尺寸：618 x 200 像素，小于300KB，支持jpg、gif、png格式</p>
      </el-form-item>
      <el-form-item label="适用会员：" required>
        <div>
          <label>
            <input type="checkbox">
            <span>全部会员</span>
          </label>
        </div>
        <div>
          <label>
            <input type="checkbox">
            <span>代理商</span>
          </label>
          <label>
            <input type="checkbox">
            <span>合伙人</span>
          </label>
          <label>
            <input type="checkbox">
            <span>创客</span>
          </label>
        </div>
        <div>
          <label>
            <input type="checkbox">
            <span>新会员</span>
          </label>
          <label>
            <input type="checkbox">
            <span>活跃会员</span>
          </label>
          <label>
            <input type="checkbox">
            <span>沉睡会员</span>
          </label>
        </div>
      </el-form-item>
      <el-form-item label="有效期：" required>
        <el-date-picker v-model="form1.time"
          type="datetimerange" range-separator="至" value-format="yyyy-MM-dd HH:mm:ss"
          start-placeholder="开始日期" end-placeholder="结束日期">
        </el-date-picker>
      </el-form-item>
      <el-form-item>
        <el-button type="success" @click="$router.push('/promotion/integral_list/add/goods')">下一步，选择宝贝</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
export default {
  data () {
    return {
      form1: {
        time: []
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.form-box{
  .img-box{
    display: inline-block;
    width: 74px;
    height: 74px;
    border: 1px solid #A19C9C;
    text-align: center;
    line-height: 74px;
  }
}
</style>
