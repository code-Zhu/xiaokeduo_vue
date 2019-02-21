<template>
  <div>
    <p class="page-title">分销商佣金明细</p>
    <p>当前分销商：销客多_8804</p>
    <div class="pannel pannel-content">
      <div class="pannel">
        <span>时间范围：</span>
        <el-date-picker v-model="time" size="mini"
          type="daterange" range-separator="至"
          start-placeholder="开始日期" end-placeholder="结束日期">
        </el-date-picker>
        <span class="mini-btn" type="primary">查询</span>
        <span>快速查看</span>
        <span class="mini-btn" plain>最近7天</span>
        <span class="mini-btn" plain>最近一个月</span>
      </div>
      <div class="pannel">
        <span>佣金总额：</span>
        <span class="num">￥0.00</span>
        <span>店铺销售佣金：</span>
        <span class="num">￥0.00</span>
        <span>下一级销售佣金：</span>
        <span class="num">￥0.00</span>
        <span>下二级销售佣金：</span>
        <span class="num">￥0.00</span>
        <span>其他佣金：</span>
        <span class="num">￥0.00</span>
      </div>
    </div>
    <el-tabs type="card">
      <el-tab-pane label="店铺销售佣金">
        <el-table border size="mini">
          <el-table-column label="成交店铺"></el-table-column>
          <el-table-column label="分佣时间"></el-table-column>
          <el-table-column label="订单号"></el-table-column>
          <el-table-column label="订单金额"></el-table-column>
          <el-table-column label="佣金"></el-table-column>
        </el-table>
      </el-tab-pane>
      <el-tab-pane label="下一级销售佣金">
        <el-table border size="mini">
          <el-table-column label="成交店铺"></el-table-column>
          <el-table-column label="订单数量"></el-table-column>
          <el-table-column label="订单总金额"></el-table-column>
          <el-table-column label="佣金总金额"></el-table-column>
          <el-table-column label="查看明细"></el-table-column>
        </el-table>
      </el-tab-pane>
      <el-tab-pane label="下二级售佣金">
        <el-table border size="mini">
          <el-table-column label="成交店铺"></el-table-column>
          <el-table-column label="订单数量"></el-table-column>
          <el-table-column label="订单总金额"></el-table-column>
          <el-table-column label="佣金总金额"></el-table-column>
          <el-table-column label="查看明细"></el-table-column>
        </el-table>
      </el-tab-pane>
      <el-tab-pane label="其他佣金">
        <el-table border size="mini">
          <el-table-column label="佣金来源"></el-table-column>
          <el-table-column label="佣金说明"></el-table-column>
          <el-table-column label="分佣时间"></el-table-column>
          <el-table-column label="佣金"></el-table-column>
        </el-table>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>
<script>
export default {
  data () {
    return {
      time: []
    }
  }
}
</script>
<style>
.num{
  color: #ff0000;
  margin-right: 20px;
}
</style>
