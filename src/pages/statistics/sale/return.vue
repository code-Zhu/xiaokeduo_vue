<template>
  <div>
    <p class="page-title">老顾客回头率</p>
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
    <p class="statistics-title">购买人数</p>
    <div class="list-box">
      <ul class="statistics-list">
        <li>
          <span>1</span>
          <p>总购买人数</p>
        </li>
        <li>
          <span>1</span>
          <p>老顾客数</p>
        </li>
        <li>
          <span>100.00%</span>
          <p>老顾客占比</p>
        </li>
      </ul>
    </div>
    <p class="statistics-title">新老顾客对比</p>
    <div class="chart-box">
      <ve-histogram :data="chartData"></ve-histogram>
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
        columns: ['date', '老会员', '新会员'],
        rows: [
          {date: '2019-02-08', '老会员': 1, '新会员': 0},
          {date: '2019-02-09', '老会员': 0, '新会员': 5},
          {date: '2019-02-10', '老会员': 0, '新会员': 0},
          {date: '2019-02-11', '老会员': 1, '新会员': 10},
          {date: '2019-02-12', '老会员': 0, '新会员': 5},
          {date: '2019-02-13', '老会员': 0, '新会员': 0},
          {date: '2019-02-14', '老会员': 0, '新会员': 0}
        ]
      }
    }
  }
}
</script>
