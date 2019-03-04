<template>
  <div>
    <p class="page-title">分销商销售排行榜</p>
    <div class="pannel pannel-content">
      <el-form :inline="true">
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
      <el-table border :data="list" size="small">
        <el-table-column label="微信头像" width="110">
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
        <el-table-column label="用户名" prop="username"></el-table-column>
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
            <i style="color:#ff0000">￥{{scope.row.sale}}</i>
          </template>
        </el-table-column>
        <el-table-column label="订单数" align="center" prop="order" sortable></el-table-column>
        <el-table-column label="成交用户" align="center" prop="deal" sortable></el-table-column>
        <el-table-column label="客户单价" align="center" sortable>
          <template slot-scope="scope">
            <span>￥{{scope.row.each}}</span>
          </template>
        </el-table-column>
        <el-table-column label="佣金收入" align="center" sortable>
          <template slot-scope="scope">
            <i style="color:#ff0000">￥{{scope.row.commIn}}</i>
          </template>
        </el-table-column>
        <el-table-column label="操作">
          <template slot-scope="scope">
            <router-link to="/fenxiao/rank/1">查看详情</router-link>
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
        time: []
      },
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
        },
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
        },
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
        },
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
        },
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
        },
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
        },
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
        },
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
<style lang="scss" scoped>
.img-box{
  img {
    vertical-align: middle;
  }
  span{
    padding: 0 8px;
  }
}
</style>
