<template>
  <div>
    <p class="page-title">佣金明细</p>
    <div class="pannel pannel-content">
      <el-form :inline="true" label-width="100px">
        <el-form-item label="店铺名称：">
          <el-input size="mini" v-model="query.shopname"></el-input>
        </el-form-item>
        <el-form-item label="订单号：">
          <el-input size="mini" v-model="query.ordernum"></el-input>
        </el-form-item>
        <el-form-item label="时间范围：">
          <el-date-picker v-model="query.time" type="daterange" size="mini"
            range-separator="至" start-placeholder="开始日期" end-placeholder="结束日期">
          </el-date-picker>
        </el-form-item>
        <el-form-item>
          <span class="mini-btn" type="primary">查询</span>
          <span>快速查看</span>
          <span class="mini-btn" plain>最近7天</span>
          <span class="mini-btn" plain>最近一个月</span>
          <span class="mini-btn" type="primary">导出EXCEL</span>
        </el-form-item>
      </el-form>
    </div>
    <div class="pannel">
      <el-table :data="list" border>
        <el-table-column label="流水号">
          <template slot-scope="scope">
            <a href="javascript:;"></a>
            <router-link to="/trade/order_detail">{{scope.row.num}}</router-link>
          </template>
        </el-table-column>
        <el-table-column label="买家昵称" prop="buyerName"></el-table-column>
        <el-table-column label="时间" prop="time" sortable></el-table-column>
        <el-table-column label="类型" prop="type"></el-table-column>
        <el-table-column label="分佣店铺" prop="commShop"></el-table-column>
        <el-table-column label="佣金" sortable>
          <template slot-scope="scope">
            <span>￥{{scope.row.commission}}</span>
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
      query: {
        shopname: '',
        ordernum: '',
        time: []
      },
      list: [
        {
          num: '190120101627553',
          buyerName: '1231',
          time: '2019-01-20 10:18:55',
          type: '成交店铺',
          commShop: '茅台莓茶_8794',
          commission: 69
        },
        {
          num: '190120101627553',
          buyerName: 'aaa',
          time: '2019-01-20 10:18:55',
          type: '成交店铺',
          commShop: '茅台莓茶_8794',
          commission: 69
        },
        {
          num: '190120101627553',
          buyerName: 'adas',
          time: '2019-01-20 10:18:55',
          type: '成交店铺',
          commShop: '茅台莓茶_8794',
          commission: 69
        },
        {
          num: '190120101627553',
          buyerName: '',
          time: '2019-01-20 10:18:55',
          type: '成交店铺',
          commShop: '茅台莓茶_8794',
          commission: 69
        },
        {
          num: '190120101627553',
          buyerName: '',
          time: '2019-01-20 10:18:55',
          type: '成交店铺',
          commShop: '茅台莓茶_8794',
          commission: 69
        },
        {
          num: '190120101627553',
          buyerName: '',
          time: '2019-01-20 10:18:55',
          type: '成交店铺',
          commShop: '茅台莓茶_8794',
          commission: 69
        },
        {
          num: '190120101627553',
          buyerName: '',
          time: '2019-01-20 10:18:55',
          type: '成交店铺',
          commShop: '茅台莓茶_8794',
          commission: 69
        }
      ]
    }
  }
}
</script>
