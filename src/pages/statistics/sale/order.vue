<template>
  <div>
    <p class="page-title">订单统计</p>
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
    <p class="statistics-title">所有订单</p>
    <div class="list-box">
      <ul class="statistics-list">
        <li>
          <span>3</span>
          <p>订单总数</p>
        </li>
        <li>
          <span>￥528.00</span>
          <p>订单总金额</p>
        </li>
      </ul>
    </div>
    <p class="statistics-title">分销订单</p>
    <div class="list-box">
      <ul class="statistics-list">
        <li>
          <span>3</span>
          <p>分销订单数</p>
        </li>
        <li>
          <span>￥528.00</span>
          <p>分销订单金额</p>
        </li>
        <li>
          <span>100.00%</span>
          <p>分销业绩占比</p>
        </li>
        <li>
          <span>￥0.00</span>
          <p>产生佣金</p>
        </li>
      </ul>
    </div>
    <p class="statistics-title">分销业绩</p>
    <div class="pannel table-top">
      <el-select size="mini" v-model="top">
        <el-option value="Top10">Top10</el-option>
        <el-option value="Top20">Top20</el-option>
        <el-option value="Top50">Top50</el-option>
        <el-option value="Top100">Top100</el-option>
      </el-select>
    </div>
    <div class="pannel">
      <el-table :data="list" size="small">
        <el-table-column label="微信头像" width="110" align="center">
          <template slot-scope="scope">
            <div class="img-box">
              <img :src="`./static/img/000${scope.$index+1}_.gif`" v-if="scope.$index<3">
              <span v-else>{{scope.$index+1}}</span>
              <img :src="scope.row.avator" style="width:60px;height:60px;">
            </div>
          </template>
        </el-table-column>
        <el-table-column label="微信昵称/手机" width="120">
          <template slot-scope="scope">
            <div>
              <p>{{scope.row.wxName}}</p>
              <p>{{scope.row.phone}}</p>
            </div>
          </template>
        </el-table-column>
        <el-table-column label="用户名">
          <template slot-scope="scope">
            <span class="red-text">{{scope.row.username}}</span>
          </template>
        </el-table-column>
        <el-table-column label="店名/联系人"  width="120">
          <template slot-scope="scope">
            <div>
              <p>{{scope.row.shopname}}</p>
              <p>{{scope.row.linkman}}</p>
            </div>
          </template>
        </el-table-column>
        <el-table-column label="销售额" align="center" sortable>
          <template slot-scope="scope">
            <span class="red-text">￥{{scope.row.sale}}</span>
          </template>
        </el-table-column>
        <el-table-column label="订单数" align="center" sortable>
          <template slot-scope="scope">
            <span class="red-text">{{scope.row.order}}</span>
          </template>
        </el-table-column>
        <el-table-column label="成交用户" align="center" sortable>
          <template slot-scope="scope">
            <span class="red-text">{{scope.row.deal}}</span>
          </template>
        </el-table-column>
        <el-table-column label="客户单价" align="center" sortable>
          <template slot-scope="scope">
            <span class="red-text">￥{{scope.row.each}}</span>
          </template>
        </el-table-column>
        <el-table-column label="佣金收入" align="center" sortable>
          <template slot-scope="scope">
            <span class="red-text">￥{{scope.row.commIn}}</span>
          </template>
        </el-table-column>
        <el-table-column label="操作">
          <template slot-scope="scope">
            <a href="javascript:;" @click="test(scope)">查看详情</a>
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
      top: 'Top10',
      list: [
        {
          avator: './static/img/user.png',
          wxName: 'im121',
          phone: '13912345678',
          username: 'hello',
          shopname: '销客多_8066',
          linkman: '江安',
          sale: 88009,
          order: 2,
          deal: 1,
          each: 8978.9,
          commIn: 6898.00
        }
      ]
    }
  }
}
</script>
