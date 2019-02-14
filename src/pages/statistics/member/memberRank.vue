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
      <el-table :data="list" size="small">
        <el-table-column label="排名" width="55" align="center">
          <template slot-scope="scope">
            <div class="img-box">
              <img :src="`./static/img/000${scope.$index+1}_.gif`" v-if="scope.$index<3">
              <span v-else>{{scope.$index+1}}</span>
            </div>
          </template>
        </el-table-column>
        <el-table-column label="会员头像" width="110" align="center">
          <template slot-scope="scope">
            <div class="img-box">
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
        <el-table-column label="注册日期" align="center">
          <template slot-scope="scope">
            <span class="red-text">{{scope.row.date}}</span>
          </template>
        </el-table-column>
        <el-table-column label="订单数" align="center">
          <template slot-scope="scope">
            <span class="red-text">{{scope.row.order}}</span>
          </template>
        </el-table-column>
        <el-table-column label="消费额" align="center">
          <template slot-scope="scope">
            <span class="red-text">￥{{scope.row.consume}}</span>
          </template>
        </el-table-column>
        <el-table-column label="客单价" align="center">
          <template slot-scope="scope">
            <span class="red-text">￥{{scope.row.price}}</span>
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
          avator: './static/img/user.png',
          wxName: 'im121',
          phone: '13912345678',
          username: 'hello',
          date: '2019-01-29',
          order: 3,
          consume: 528.00,
          price: 176.00
        },
        {
          avator: './static/img/user.png',
          wxName: 'im121',
          phone: '13912345678',
          username: 'hello',
          date: '2019-01-29',
          order: 3,
          consume: 528.00,
          price: 176.00
        },
        {
          avator: './static/img/user.png',
          wxName: 'im121',
          phone: '13912345678',
          username: 'hello',
          date: '2019-01-29',
          order: 3,
          consume: 528.00,
          price: 176.00
        },
        {
          avator: './static/img/user.png',
          wxName: 'im121',
          phone: '13912345678',
          username: 'hello',
          date: '2019-01-29',
          order: 3,
          consume: 528.00,
          price: 176.00
        }
      ]
    }
  }
}
</script>
