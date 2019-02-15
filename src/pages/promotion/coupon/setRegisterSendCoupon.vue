<template>
  <div>
    <p class="page-title">注册送优惠卷设置</p>
    <el-form class="form-box" size="mini" label-width="140px" style="margin-left: 120px">
      <el-form-item label="开启注册送优惠卷：">
        <el-switch v-model="form.switch"
          active-color="#005BCC" inactive-color="#ECECEC">
        </el-switch>
      </el-form-item>
      <el-form-item label="送优惠卷：" v-if="form.switch">
        <el-select v-model="form.name">
          <el-option value="" label="请选择优惠卷"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="活动期限：" v-if="form.switch">
        <el-date-picker v-model="form.time"
          type="daterange" range-separator="至"
          start-placeholder="开始日期" end-placeholder="结束日期">
        </el-date-picker>
        <p class="tip">活动的起始期限，只有在设置的期限所在时间内活动才有效</p>
      </el-form-item>
      <el-form-item label="" v-if="form.switch">
        <el-button size="small" type="success">保存</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
export default {
  data () {
    return {
      form: {
        switch: false,
        name: '',
        time: []
      }
    }
  }
}
</script>
