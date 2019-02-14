<template>
  <div>
    <p class="page-title">会员增长统计</p>
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
    <div class="pannel">
      <div class="chart-box">
        <ve-line :data="chartData"></ve-line>
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
      chartData: {
        columns: ['date', '新增会员数'],
        rows: [
          {date: '2019-02-08', '新增会员数': 1},
          {date: '2019-02-09', '新增会员数': 0},
          {date: '2019-02-10', '新增会员数': 0},
          {date: '2019-02-11', '新增会员数': 0},
          {date: '2019-02-12', '新增会员数': 5},
          {date: '2019-02-13', '新增会员数': 0},
          {date: '2019-02-14', '新增会员数': 0}
        ]
      }
    }
  }
}
</script>
