<template>
  <div class="member-withdraw">
    <p class="page-title">提现申请列表</p>
    <div class="pannel pannel-content">
      <el-form :inline="true">
        <el-form-item label="用户名：">
          <el-input size="mini" v-model="query.username"></el-input>
        </el-form-item>
        <el-form-item label="申请日期：">
          <el-date-picker v-model="query.time"
            type="daterange" range-separator="至" size="mini"
            start-placeholder="开始日期" end-placeholder="结束日期">
          </el-date-picker>
        </el-form-item>
        <el-form-item>
          <span class="mini-btn" type="primary">搜索</span>
        </el-form-item>
        <el-form-item label="快速查看：">
          <span class="mini-btn" plain>近七天</span>
          <span class="mini-btn" plain>近一个月</span>
        </el-form-item>
      </el-form>
    </div>
    <div class="pannel table-btn">
      <el-button type="primary" size="mini">批量审核</el-button>
      <el-button type="primary" size="mini">批量驳回</el-button>
      <span>|</span>
      <el-button type="primary" size="mini">支付宝批量发放</el-button>
      <el-button type="primary" size="mini">微信支付批量发放</el-button>
    </div>
    <div class="table-body">
      <el-table :data="list" border>
        <el-table-column type="selection"></el-table-column>
        <el-table-column label="用户名">
          <template slot-scope="scope">
            <p>{{scope.row.username}}</p>
            <p>{{scope.row.phone}}</p>
          </template>
        </el-table-column>
        <el-table-column label="申请时间" prop="time" width="160" align="center"></el-table-column>
        <el-table-column label="提现金额" align="center">
          <template slot-scope="scope">
            <p style="color: #ff0000">￥{{scope.row.sum}}</p>
          </template>
        </el-table-column>
        <el-table-column label="账号类型" prop="type" align="center"></el-table-column>
        <el-table-column label="账号/卡号/OpenID" prop="id" width="150px" align="center"></el-table-column>
        <el-table-column label="收款人" prop="reciver" align="center"></el-table-column>
        <el-table-column label="操作" width="60">
          <template slot-scope="scope">
            <div class="table-ctr">
              <span class="mini-btn" type="primary" style="margin-bottom:5px">发放</span>
              <span class="mini-btn" plain>驳回</span>
            </div>
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
        username: '',
        time: []
      },
      list: [
        {
          username: '12sad',
          phone: '15812345678',
          time: '2018-12-17 17:11:10',
          sum: '1500',
          type: '支付宝',
          id: '12321@qq.com',
          reciver: '王先生'
        },
        {
          username: '12sad',
          phone: '15812345678',
          time: '2018-12-17 17:11:10',
          sum: '1600',
          type: '支付宝',
          id: '12321@qq.com',
          reciver: '王先生'
        }
      ]
    }
  }
}
</script>
