<template>
  <div>
    <p class="page-title">提现记录</p>
    <div class="pannel pannel-content">
      <el-form :inline="true" label-width="100px">
        <el-form-item label="店铺名称：">
          <el-input size="mini" v-model="query.shopname"></el-input>
        </el-form-item>
        <el-form-item label="支付日期：">
          <el-date-picker v-model="query.time" type="daterange" size="mini"
            range-separator="至" start-placeholder="开始日期" end-placeholder="结束日期">
          </el-date-picker>
        </el-form-item>
        <el-form-item>
          <span class="mini-btn" type="primary">查询</span>
          <span>快速查看</span>
          <span class="mini-btn" plain>最近7天</span>
          <span class="mini-btn" plain>最近一个月</span>
        </el-form-item>
      </el-form>
    </div>
    <div class="pannel">
      <el-table :data="list" border>
        <el-table-column label="分销商店铺" prop="shopname"></el-table-column>
        <el-table-column label="申请日期" prop="applytime" width="160"></el-table-column>
        <el-table-column label="提现金额">
          <template slot-scope="scope">
            <span>￥{{scope.row.withdraw}}</span>
          </template>
        </el-table-column>
        <el-table-column label="账号类型" prop="type"></el-table-column>
        <el-table-column label="账号" prop="number"></el-table-column>
        <el-table-column label="收款人" prop="reciver"></el-table-column>
        <el-table-column label="支付日期" prop="paytime" width="160"></el-table-column>
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
        time: []
      },
      list: [
        {
          shopname: '茅台莓茶_8794',
          applytime: '2019-01-20 10:18:55',
          withdraw: 66,
          type: '转入余额',
          number: '佣金转余额',
          reciver: 'asdasda',
          paytime: '2019-01-20 10:18:55'
        },
        {
          shopname: '茅台莓茶_8794',
          applytime: '2019-01-20 10:18:55',
          withdraw: 66,
          type: '转入余额',
          number: '佣金转余额',
          reciver: 'asdasda',
          paytime: '2019-01-20 10:18:55'
        },
        {
          shopname: '茅台莓茶_8794',
          applytime: '2019-01-20 10:18:55',
          withdraw: 66,
          type: '转入余额',
          number: '佣金转余额',
          reciver: 'asdasda',
          paytime: '2019-01-20 10:18:55'
        },
        {
          shopname: '茅台莓茶_8794',
          applytime: '2019-01-20 10:18:55',
          withdraw: 66,
          type: '转入余额',
          number: '佣金转余额',
          reciver: 'asdasda',
          paytime: '2019-01-20 10:18:55'
        },
        {
          shopname: '茅台莓茶_8794',
          applytime: '2019-01-20 10:18:55',
          withdraw: 66,
          type: '转入余额',
          number: '佣金转余额',
          reciver: 'asdasda',
          paytime: '2019-01-20 10:18:55'
        },
        {
          shopname: '茅台莓茶_8794',
          applytime: '2019-01-20 10:18:55',
          withdraw: 66,
          type: '转入余额',
          number: '佣金转余额',
          reciver: 'asdasda',
          paytime: '2019-01-20 10:18:55'
        },
        {
          shopname: '茅台莓茶_8794',
          applytime: '2019-01-20 10:18:55',
          withdraw: 66,
          type: '转入余额',
          number: '佣金转余额',
          reciver: 'asdasda',
          paytime: '2019-01-20 10:18:55'
        },
        {
          shopname: '茅台莓茶_8794',
          applytime: '2019-01-20 10:18:55',
          withdraw: 66,
          type: '转入余额',
          number: '佣金转余额',
          reciver: 'asdasda',
          paytime: '2019-01-20 10:18:55'
        },
        {
          shopname: '茅台莓茶_8794',
          applytime: '2019-01-20 10:18:55',
          withdraw: 66,
          type: '转入余额',
          number: '佣金转余额',
          reciver: 'asdasda',
          paytime: '2019-01-20 10:18:55'
        },
        {
          shopname: '茅台莓茶_8794',
          applytime: '2019-01-20 10:18:55',
          withdraw: 66,
          type: '转入余额',
          number: '佣金转余额',
          reciver: 'asdasda',
          paytime: '2019-01-20 10:18:55'
        }
      ]
    }
  }
}
</script>
