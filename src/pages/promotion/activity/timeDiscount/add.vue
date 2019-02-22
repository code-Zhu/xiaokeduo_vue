<template>
  <div>
    <p class="page-title">添加限时折扣</p>
    <div class="pannel-content">
      <div>
        <b>基本信息：</b>
        <el-form class="form-box" label-width="200px" size="small">
          <el-form-item label="活动名称：" required>
            <el-input style="width: 200px"></el-input>
            <p class="tip">显示在商品详情的价格后面，长度在2-5字符之间</p>
          </el-form-item>
          <el-form-item label="活动时间：" required>
            <el-date-picker v-model="form.time"
              type="datetimerange" range-separator="至" value-format="yyyy-MM-dd HH:mm:ss"
              start-placeholder="开始日期" end-placeholder="结束日期">
            </el-date-picker>
          </el-form-item>
          <el-form-item label="活动备注：">
            <el-input style="width: 200px"></el-input>
            <p class="tip">活动备注仅在后台页面显示，30字以内</p>
          </el-form-item>
        </el-form>
      </div>
      <div>
        <b>活动设置：</b>
        <el-form class="form-box" label-width="200px" size="small">
          <el-form-item label="每人限购：" required>
            <el-input style="width: 200px"></el-input>
            <p class="tip">值为0则不限购</p>
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
        </el-form>
      </div>
      <div>
        <b>佣金设置：</b>
        <el-form class="form-box" label-width="200px" size="small">
          <el-form-item label="参与分佣：" required>
            <p>
              <label>
                <input type="radio">
                <span>分佣</span>
              </label>
            </p>
            <span>限时折扣：</span>
            <el-input style="width: 80px"></el-input>
            <span>折</span>
            <p class="tip">在商品销售佣金的基础上进行折扣计算(0&lt;折扣值&lt;=10)</p>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" size="small" @click="$router.push('/promotion/time_discount/add/good')">下一步，添加活动商品</el-button>
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
      form: {
        time: []
      }
    }
  }
}
</script>
