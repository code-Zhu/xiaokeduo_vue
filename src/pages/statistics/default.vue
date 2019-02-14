<template>
  <div>
    <p class="page-title">经营简报</p>
    <div class="pannel pannel-content">
      <span>操作时间：</span>
      <el-date-picker
        v-model="query.time" type="daterange" size="mini"
        range-separator="至" start-placeholder="开始日期" end-placeholder="结束日期">
      </el-date-picker>
      <span class="mini-btn" type="primary">查询</span>
      <span>查询日期</span>
      <span class="mini-btn" plain>最近7天</span>
      <span class="mini-btn" plain>最近1个月</span>
    </div>
    <p class="pannel table-name">经营情况</p>
    <div class="pannel">
      <el-table :data="list1" border size="small">
        <el-table-column label="客单价" align="center">
          <template slot-scope="scope">
            <span>￥{{scope.row.price}}</span>
          </template>
        </el-table-column>
        <el-table-column label="订单数" prop="order" align="center"></el-table-column>
        <el-table-column label="购买人数" prop="sales" align="center"></el-table-column>
        <el-table-column label="订单金额" align="center">
          <template slot-scope="scope">
            <span>￥{{scope.row.sum}}</span>
          </template>
        </el-table-column>
      </el-table>
      <div class="chart-box">
        <ve-line :data="chartData1"></ve-line>
      </div>
    </div>
    <p class="pannel table-name">会员情况</p>
    <div class="pannel">
      <el-table :data="list2" border size="small">
        <el-table-column label="新增会员数" prop="member" align="center"></el-table-column>
        <el-table-column label="新增分销商数" prop="fenxiao" align="center"></el-table-column>
      </el-table>
      <div class="chart-box">
        <ve-line :data="chartData2"></ve-line>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      query: {
        time: []
      },
      list1: [
        {
          price: 528.00,
          order: 3,
          sales: 1,
          sum: 528.00
        }
      ],
      chartData1: {
        columns: ['date', '订单数', '订单金额'],
        rows: [
          {date: '2019-02-08', '订单数': 0, '订单金额': 0},
          {date: '2019-02-09', '订单数': 0, '订单金额': 0},
          {date: '2019-02-10', '订单数': 528, '订单金额': 0},
          {date: '2019-02-11', '订单数': 0, '订单金额': 10},
          {date: '2019-02-12', '订单数': 0, '订单金额': 0},
          {date: '2019-02-13', '订单数': 0, '订单金额': 0},
          {date: '2019-02-14', '订单数': 0, '订单金额': 0}
        ]
      },
      list2: [
        {
          member: 2,
          fenxiao: 2
        }
      ],
      chartData2: {
        columns: ['date', '新增会员数', '新增分销商'],
        rows: [
          {date: '2019-02-08', '新增会员数': 1, '新增分销商': 0},
          {date: '2019-02-09', '新增会员数': 0, '新增分销商': 5},
          {date: '2019-02-10', '新增会员数': 0, '新增分销商': 0},
          {date: '2019-02-11', '新增会员数': 1, '新增分销商': 10},
          {date: '2019-02-12', '新增会员数': 0, '新增分销商': 5},
          {date: '2019-02-13', '新增会员数': 0, '新增分销商': 0},
          {date: '2019-02-14', '新增会员数': 0, '新增分销商': 0}
        ]
      }
    }
  }
}
</script>
<style lang="scss" scoped>
.table-name{
  line-height: 30px;
  background-color: #F2F2F2;
  font-size: 16px;
  padding-left: 10px
}
.chart-box{
  border: 1px solid #ccc;
  padding-top: 15px;
  margin-top: 20px;
}
</style>
