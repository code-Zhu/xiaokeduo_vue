<template>
  <div class="selectcategory">
    <p class="page-title" v-if="step===1">上架新商品</p>
    <p class="page-title" v-if="step===2">编辑商品信息</p>
    <p class="page-title" v-if="step===3">编辑商品详情</p>
    <div class="pannel step-header">
      <a href="javascript:;" :class="{finished: step>0}" @click="step = 1">1.选择商品分类</a>
      <a href="javascript:;" :class="{finished: step>1}" @click="step = 2">2.编辑商品信息</a>
      <a href="javascript:;" :class="{finished: step>2}" @click="step = 3">3.编辑商品详情</a>
    </div>
    <div class="pannel step-content">
      <step1 @EventGetData="getStep1" v-if="step === 1"/>
      <step2 v-if="step === 2"/>
      <step3 v-if="step === 3"/>
    </div>
    <div class="pannel step-footer">
      <p v-show="step===1">你当前选择的是：{{selectStr}}</p>
      <p>
        <el-button v-if="step===1" type="success" size="mini" :disabled="!this.continue" @click="nextStep">已选好分类，进入下一步&gt;&gt;&gt;</el-button>
        <el-button v-if="step===2" type="success" size="mini" :disabled="!this.continue" @click="nextStep">下一步，编辑商品详情</el-button>
      </p>
    </div>
  </div>
</template>
<script>
const Step1 = () => import('./components/Step1')
const Step2 = () => import('./components/Step2')
const Step3 = () => import('./components/Step3')
export default {
  components: {
    Step1, Step2, Step3
  },
  data () {
    return {
      step: 1,
      continue: false,
      selectStr: ''
    }
  },
  methods: {
    getStep1 ($e) {
      this.continue = $e.continue
      this.selectStr = $e.continue ? $e.str.join('>>') : $e.str[0]
    },
    nextStep () {
      this.step++
    }
  },
  created () {
    this.step = Number(this.$route.params.step || 1)
  }
}
</script>
<style lang="scss" scoped>
.step-header{
  display: flex;
  a{
    padding: 10px 15px;
    &.finished{
      color: #555;
      border-bottom: 2px solid #1CA47D;
    }
  }
}
.step-content{
  margin: 10px 0;
}
.step-footer{
  p:first-child{
    padding: 0 15px;
    font-size: 16px;
    color: #31708F;
    line-height: 40px;
    background-color: #D9EDF7;
    border-radius: 4px;
    border: 1px solid #BCE8F1;
    margin-bottom: 20px;
  }
  p~p{
    text-align: center;
  }
}
</style>
