<template>
  <div>
    <div class="pannel table-footer">
      <el-button type="primary" size="small" @click="$router.go(-1)">返回</el-button>
    </div>
    <div class="pannel pannel-content">
      <span>时间范围：</span>
      <el-date-picker v-model="query.time" size="mini"
        type="daterange" range-separator="至"
        start-placeholder="开始日期" end-placeholder="结束日期">
      </el-date-picker>
      <span class="mini-btn" type="primary">查询</span>
      <span>快速查看</span>
      <span class="mini-btn" plain>最近7天</span>
      <span class="mini-btn" plain>最近一个月</span>
    </div>
    <div class="pannel current-data">
      <el-tabs type="card">
        <el-tab-pane label="店铺实时数据">
          <ul class="data-list">
            <li>
              <p>销售额</p>
              <span><b>￥400.00</b></span>
            </li>
            <li>
              <p>订单数</p>
              <span><b>4</b></span>
            </li>
            <li>
              <p>成交用户数</p>
              <span><b>1</b></span>
            </li>
            <li>
              <p>客户单价</p>
              <span><b>400.00</b></span>
            </li>
            <li>
              <p>佣金收入</p>
              <span><b>￥60.00</b></span>
            </li>
          </ul>
        </el-tab-pane>
      </el-tabs>
    </div>
    <div class="pannel">
      <el-tabs type="card">
        <el-tab-pane label="一级分店">
          <shop-table :list="list"/>
        </el-tab-pane>
        <el-tab-pane label="二级分店" lazy>
          <shop-table :list="list"/>
        </el-tab-pane>
      </el-tabs>
      <div class="pannel table-footer">
        <el-pagination
          :page-size="10"
          layout="total, prev, next, jumper"
          :total="1000">
        </el-pagination>
      </div>
    </div>
  </div>
</template>
<script>
import shopTable from './components/Table'
export default {
  components: {shopTable},
  data () {
    return {
      query: {
        time: []
      },
      list: [
        {
          avatar: './static/img/user.png',
          wxname: 'asda123',
          username: '124710298',
          shopName: 'aidfhq',
          saleNum: 0.00,
          order: 0,
          dealNum: 0,
          singlePrice: 0,
          income: 0
        },
        {
          avatar: './static/img/user.png',
          wxname: 'asda123',
          username: '124710298',
          shopName: 'aidfhq',
          saleNum: 0.00,
          order: 0,
          dealNum: 0,
          singlePrice: 0,
          income: 0
        },
        {
          avatar: './static/img/user.png',
          wxname: 'asda123',
          username: '124710298',
          shopName: 'aidfhq',
          saleNum: 0.00,
          order: 0,
          dealNum: 0,
          singlePrice: 0,
          income: 0
        },
        {
          avatar: './static/img/user.png',
          wxname: 'asda123',
          username: '124710298',
          shopName: 'aidfhq',
          saleNum: 0.00,
          order: 0,
          dealNum: 0,
          singlePrice: 0,
          income: 0
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.current-data{
  border: 1px solid #c6c6c6;
  padding: 15px;
  border-top-right-radius: 7px;
  border-top-left-radius: 7px;
  ul{
    display: flex;
    justify-content: space-between;
    li{
      width: 188px;
      height: 148px;
      border: 1px solid #909090;
      display: flex;
      flex-direction: column;
      font-size: 18px;
      text-align: center;
      p{
        border-bottom: 1px solid #909090;
        line-height: 40px;
      }
      span{
        flex: 1;
        color: #3366CC;
        line-height: 107px;
      }
    }
  }
}
</style>
