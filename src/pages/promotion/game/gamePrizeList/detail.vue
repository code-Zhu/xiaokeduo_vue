<template>
  <div>
    <p class="page-title">奖品详情</p>
    <div class="pannel pannel-part">
      <div class="top table">
        <b class="good-info">商品信息</b>
        <b class="act-name">活动名称</b>
        <b class="time">中奖时间</b>
        <b class="reciver">收货人</b>
        <b class="prize">奖品</b>
      </div>
      <div>
        <div v-for="(v, index) in 2" :key="index" class="table">
          <span class="good-info">商品信息</span>
          <span class="act-name">活动名称</span>
          <span class="time">中奖时间</span>
          <span class="reciver">收货人</span>
          <span class="prize">奖品</span>
        </div>
      </div>
      <div v-if="list.length<1" style="text-align:center">暂无数据</div>
    </div>
    <div class="pannel pannel-part">
      <div class="top"><b>收货信息</b></div>
      <div>
        <p>选择所在地：</p>
        <p>详细地址：</p>
        <p>收货人姓名：</p>
        <p>联系电话：</p>
      </div>
    </div>
    <div class="pannel pannel-part">
      <div class="top"><b>物流信息</b></div>
      <div>
        <p>物流公司：</p>
        <p>快递单号：</p>
      </div>
    </div>
    <div class="pannel pannel-part">
      <div class="top">当前状态：</div>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      list: []
    }
  }
}
</script>

<style lang="scss" scoped>
.pannel-part{
  font-size: 12px;
  .top{
    border: 1px solid #ddd;
    line-height: 34px;
    background-color: #F2F2F2;
    padding-left: 15px;
    &+div{
      line-height: 34px;
      padding-left: 15px;
      border: 1px solid #ddd;
      border-top: none;
    }
  }
  .table{
    display: flex;
    .good-info{
      flex: 1;
    }
    .act-name{
      width: 255px;
    }
    .time, .reciver, .prize{
      width: 127px;
      text-align: center;
    }
  }
}
</style>
