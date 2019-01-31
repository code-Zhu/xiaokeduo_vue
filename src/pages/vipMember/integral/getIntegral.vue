<template>
  <div class="integral">
    <p class="page-title">会员积分设置</p>
    <el-tabs type="border-card" v-model="tabsName" @tab-click="handleTabsClick">
      <el-tab-pane label="签到送积分" name="sign_integral">
        <el-form label-width="110px">
          <el-form-item label="是否开启">
            <el-switch v-model="signData.open"></el-switch>
          </el-form-item>
          <el-form-item label="签到一次奖励" required v-if="signData.open">
            <el-input size="small" v-model="signData.one_sign" style="width: 200px"></el-input>
            <span>分</span>
          </el-form-item>
          <el-form-item v-if="signData.open">
            <div style="margin-left:-106px">
              <label>
                <input type="checkbox" v-model="signData.series">
                <span>每连续签到</span>
              </label>
              <el-input size="small" style="width: 110px;margin-left:8px" v-model="signData.seriesDay" :disabled="!signData.series"></el-input>
              <span>天&nbsp;奖励</span>
              <el-input size="small" style="width: 110px" v-model="signData.seriesIntegral" :disabled="!signData.series"></el-input>
              <span>分</span>
            </div>
          </el-form-item>
        </el-form>
      </el-tab-pane>
      <el-tab-pane label="购物送积分" name="purchase_integral">
        <el-form label-width="110px">
          <el-form-item label="是否开启">
            <el-switch v-model="shopData.open"></el-switch>
          </el-form-item>
          <el-form-item label="购物成功每" v-if="shopData.open">
            <el-input size="small" v-model="shopData.each" style="width: 110px"></el-input>
            <span>元，奖励</span>
            <el-input size="small" v-model="shopData.eachIntegral" style="width: 110px"></el-input>
            <span>积分(不包含运费)</span>
          </el-form-item>
          <el-form-item v-if="shopData.open">
            <div style="margin-left:-106px">
              <label>
                <input type="checkbox" v-model="shopData.openfulfil">
                <span>单笔订单满</span>
              </label>
              <el-input size="small" style="width: 110px;margin-left:8px" v-model="shopData.fulfil" :disabled="!shopData.openfulfil"></el-input>
              <span>元，奖励</span>
              <el-input size="small" style="width: 110px" v-model="shopData.fulfilIntegral" :disabled="!shopData.openfulfil"></el-input>
              <span>积分</span>
            </div>
          </el-form-item>
        </el-form>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>
<script>
export default {
  data () {
    return {
      tabsName: 'sign_integral',
      signData: {
        open: true,
        one_sign: 10,
        series: false,
        seriesDay: 10,
        seriesIntegral: 10
      },
      shopData: {
        open: true,
        each: 10,
        eachIntegral: 1,
        openfulfil: false,
        fulfil: 100.00,
        fulfilIntegral: 1
      }
    }
  },
  methods: {
    handleTabsClick (v) {
      this.$router.push(`/member/${v.name}`)
    }
  },
  watch: {
    '$route': function () {
      this.tabsName = this.$route.name
    }
  }
}
</script>
