<template>
  <div class="member-budget">
    <p class="page-title">收支明细</p>
    <div class="pannel pannel-content">
      <el-form :inline="true">
        <el-form-item label="会员用户名：">
          <el-input size="mini" v-model="query.username"></el-input>
        </el-form-item>
        <el-form-item label="流水号：">
          <el-input size="mini" v-model="query.num"></el-input>
        </el-form-item>
        <el-form-item label="交易类型：">
          <el-select size="mini" v-model="query.type" style="width:130px">
            <el-option label="---全部---" value=""></el-option>
            <el-option label="提现" value="1"></el-option>
            <el-option label="充值" value="2"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="交易方式：">
          <el-select size="mini" v-model="query.method" style="width:130px">
            <el-option label="---全部---" value=""></el-option>
            <el-option label="微信钱包" value="1"></el-option>
            <el-option label="支付宝" value="2"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="交易时间：" label-width="96px">
          <el-date-picker v-model="query.time"
            type="daterange" range-separator="至" size="mini"
            start-placeholder="开始日期" end-placeholder="结束日期">
          </el-date-picker>
        </el-form-item>
        <el-form-item>
          <span class="mini-btn" type="primary">查询</span>
        </el-form-item>
        <el-form-item label="快速查看">
          <span class="mini-btn" plain>最近7天</span>
          <span class="mini-btn" plain>最近一个月</span>
          <span class="mini-btn" type="primary">导出EXCEL</span>
        </el-form-item>
      </el-form>
    </div>
    <div class="pannel table-header">
      <span>余额总额：</span>
      <span>￥2232332.4</span>
      <span>可用余额：</span>
      <span>￥2232332.4</span>
      <span>冻结余额：</span>
      <span>￥3100.4</span>
    </div>
    <div class="table-body">
      <el-table :data="list">
        <el-table-column label="流水号" prop="num" width="150"></el-table-column>
        <el-table-column label="交易金额" sortable>
          <template slot-scope="scope">
            <span :style="{color: scope.row.sum>0?'#3BB134':'#FF0000'}">
              <span v-if="scope.row.sum>0">+</span>{{scope.row.sum}}
            </span>
          </template>
        </el-table-column>
        <el-table-column label="账户余额" sortable>
          <template slot-scope="scope">
            <span>￥{{scope.row.balance}}</span>
          </template>
        </el-table-column>
        <el-table-column label="交易类型" prop="type"></el-table-column>
        <el-table-column label="用户名">
          <template slot-scope="scope">
            <router-link to="/member/list/1">{{scope.row.username}}</router-link>
          </template>
        </el-table-column>
        <el-table-column label="交易方式" prop="method"></el-table-column>
        <el-table-column label="交易时间" prop="time" width="150" sortable></el-table-column>
        <el-table-column label="备注" prop="remark" width="140"></el-table-column>
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
        username: '',
        num: '',
        type: '',
        method: '',
        time: []
      },
      list: [
        {
          num: '190120101855855',
          sum: 69.90,
          balance: 69.90,
          type: '佣金转入',
          username: '12312a',
          method: '店铺佣金',
          time: '2019/1/20 10:18:55',
          remark: '佣金自动转入余额'
        },
        {
          num: '190120101855855',
          sum: -69.90,
          balance: 69.90,
          type: '佣金转入',
          username: '12312a',
          method: '店铺佣金',
          time: '2019/1/20 10:18:55',
          remark: '佣金自动转入余额'
        },
        {
          num: '190120101855855',
          sum: 69.90,
          balance: 69.90,
          type: '佣金转入',
          username: '12312a',
          method: '店铺佣金',
          time: '2019/1/20 10:18:55',
          remark: '佣金自动转入余额'
        },
        {
          num: '190120101855855',
          sum: -69.90,
          balance: 69.90,
          type: '佣金转入',
          username: '12312a',
          method: '店铺佣金',
          time: '2019/1/20 10:18:55',
          remark: '佣金自动转入余额'
        },
        {
          num: '190120101855855',
          sum: 69.90,
          balance: 69.90,
          type: '佣金转入',
          username: '12312a',
          method: '店铺佣金',
          time: '2019/1/20 10:18:55',
          remark: '佣金自动转入余额'
        },
        {
          num: '190120101855855',
          sum: 69.90,
          balance: 69.90,
          type: '佣金转入',
          username: '12312a',
          method: '店铺佣金',
          time: '2019/1/20 10:18:55',
          remark: '佣金自动转入余额'
        }
      ]
    }
  }
}
</script>
<style lang="scss" scoped>
.table-header{
  span:nth-child(2n){
    color: #ff0000;
    margin-right: 50px;
  }
}
</style>
