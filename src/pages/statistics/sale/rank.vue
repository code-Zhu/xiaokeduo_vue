<template>
  <div>
    <p class="page-title">商品销售排行榜</p>
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
    <p class="pannel">
      <i class="iconfont icon-top red-text"></i>
      <b>导出数据</b>
    </p>
    <div class="pannel">
      <el-table :data="list">
        <el-table-column label="排名" width="55" align="center">
          <template slot-scope="scope">
            <span>{{scope.$index+1}}</span>
          </template>
        </el-table-column>
        <el-table-column width="80" align="center">
          <template slot-scope="scope">
            <img :src="scope.row.img">
          </template>
        </el-table-column>
        <el-table-column prop="name" label="商品名称"></el-table-column>
        <el-table-column label="销售量" align="center">
          <template slot-scope="scope">
            <span class="red-text">{{scope.row.sale_count}}</span>
          </template>
        </el-table-column>
        <el-table-column label="销售额" align="center">
          <template slot-scope="scope">
            <span class="red-text">{{scope.row.sum}}</span>
          </template>
        </el-table-column>
        <el-table-column label="访问次数" align="center">
          <template slot-scope="scope">
            <span class="red-text">{{scope.row.visited}}</span>
          </template>
        </el-table-column>
        <el-table-column label="购买人数" align="center">
          <template slot-scope="scope">
            <span class="red-text">{{scope.row.buy}}</span>
          </template>
        </el-table-column>
        <el-table-column label="转化率" align="center">
          <template slot-scope="scope">
            <span class="red-text">{{scope.row.conversion}}%</span>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <div class="pannel table-footer">
      <el-pagination
        :page-size="10"
        layout="total, prev, next, jumper"
        :total="1000">
      </el-pagination>
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
      list: [
        {
          img: './static/img/nvr.jpg',
          name: '宇视NVR',
          sale_count: 3,
          sum: 528.00,
          visited: 4,
          buy: 1,
          conversion: 25.00
        }
      ]
    }
  }
}
</script>
