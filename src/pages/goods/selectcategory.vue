<template>
  <div class="selectcategory">
    <p class="page-title">上架新商品</p>
    <div class="pannel step-header">
      <a href="javascript:;" :class="{finished: step>0}">1.选择商品分类</a>
      <a href="javascript:;" :class="{finished: step>1}">2.编辑商品信息</a>
      <a href="javascript:;" :class="{finished: step>2}">3.编辑商品详情</a>
    </div>
    <div class="pannel step-content">
      <step1 @EventGetData="getStep1"/>
    </div>
    <div class="pannel step-footer">
      <p>你当前选择的是：</p>
      <p>
        <el-button type="success" size="mini">已选好分类，进入下一步</el-button>
      </p>
    </div>
  </div>
</template>
<script>
const Step1 = () => import('./components/Step1')
export default {
  components: {
    Step1
  },
  data () {
    return {
      step: 1,
      step1Date: null
    }
  },
  methods: {
    getStep1 ($e) {
      console.log($e)
    }
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
