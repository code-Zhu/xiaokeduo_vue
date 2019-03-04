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
    <div class="pannel">
      <i class="iconfont icon-top red-text"></i>
      <b @click="isExport = !isExport">导出数据</b>
    </div>
    <div class="pannel animated bounceIn" v-if="isExport">
      <el-form size="mini" label-width="200px">
        <el-form-item label="请选择需要导出的信息：">
          <label>
            <input type="checkbox">
            <span>排名</span>
          </label>
          <label>
            <input type="checkbox">
            <span>手机号</span>
          </label>
          <label>
            <input type="checkbox">
            <span>用户名</span>
          </label>
          <label>
            <input type="checkbox">
            <span>注册日期</span>
          </label>
          <label>
            <input type="checkbox">
            <span>订单数</span>
          </label>
          <label>
            <input type="checkbox">
            <span>消费额</span>
          </label>
          <label>
            <input type="checkbox">
            <span>客单价</span>
          </label>
        </el-form-item>
        <el-form-item label="请选择导出格式：">
          <label>
            <input type="radio">
            <span>CSV格式</span>
          </label>
          <label>
            <input type="radio">
            <span>TXT格式</span>
          </label>
        </el-form-item>
      </el-form>
      <div class="table-footer">
        <el-button size="small" type="success">导出</el-button>
      </div>
    </div>
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
        <el-table-column label="销售量" align="center" sortable>
          <template slot-scope="scope">
            <span class="red-text">{{scope.row.sale_count}}</span>
          </template>
        </el-table-column>
        <el-table-column label="销售额" align="center" sortable>
          <template slot-scope="scope">
            <span class="red-text">{{scope.row.sum}}</span>
          </template>
        </el-table-column>
        <el-table-column label="访问次数" align="center" sortable>
          <template slot-scope="scope">
            <span class="red-text">{{scope.row.visited}}</span>
          </template>
        </el-table-column>
        <el-table-column label="购买人数" align="center" sortable>
          <template slot-scope="scope">
            <span class="red-text">{{scope.row.buy}}</span>
          </template>
        </el-table-column>
        <el-table-column label="转化率" align="center" sortable>
          <template slot-scope="scope">
            <span class="red-text">{{scope.row.conversion}}%</span>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <div class="pannel table-footer">
      <el-pagination
        :page-size="10"
        layout="sizes, total, prev, next, jumper"
        :total="1000">
      </el-pagination>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      isExport: false,
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
