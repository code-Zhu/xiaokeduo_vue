<template>
  <div class="default">
    <div class="pannel pannel-top">
      <span class="log">log</span>
      <span class="name">茅台莓茶</span>
      <el-button size="mini" type="success" @click="$router.push('/goods/select_category')">发布商品</el-button>
      <el-button size="mini" type="primary">访问店铺</el-button>
    </div>
    <div class="pannel pannel-data">
      <el-tabs v-model="tab_name" type="card">
        <el-tab-pane label="店铺实时数据" name="first">
          <div class="tab-item">
            <ul class="list">
              <li>
                <p>待发货订单</p>
                <p>2</p>
              </li>
              <li>
                <p>今日订单数</p>
                <p>0</p>
                <p>昨日订单数：0</p>
              </li>
              <li>
                <p>今日成交额</p>
                <p>￥0.00</p>
                <p>昨日成交额:￥0.00</p>
              </li>
              <li>
                <p>售后订单</p>
                <p>0</p>
              </li>
              <li>
                <p>商品数：<router-link to="/goods/onsale_goods">5</router-link></p>
                <p>会员总数：<router-link to="/member/list">747</router-link></p>
                <p>分销商数：<router-link to="/fenxiao/list">725</router-link></p>
              </li>
            </ul>
          </div>
        </el-tab-pane>
      </el-tabs>
    </div>
    <div class="pannel">
      <p class="name">店铺经营趋势</p>
      <div class="pannel-content">
        <ve-line :data="chartData" height="280px"></ve-line>
      </div>
    </div>
    <div class="pannel pannel-rank">
      <ul class="list">
        <li class="title">
          <span>分销商佣金排名</span>
          <a href="#">近7天</a>
        </li>
        <li class="tb tb-header">
          <span>店铺名称</span>
          <span>销售订单数</span>
          <span>佣金</span>
          <span>排名</span>
        </li>
        <li class="tb tb-body" v-for="v in fenxiao_list" :key="v.id">
          <span>{{v.a}}</span>
          <span>{{v.b}}</span>
          <span>{{v.c}}</span>
          <span>{{v.d}}</span>
        </li>
      </ul>
      <ul class="list">
        <li class="title">
          <span>会员消费排名</span>
          <a href="#">近7天</a>
        </li>
        <li class="tb tb-header">
          <span>会员名</span>
          <span>购买订单数</span>
          <span>交易额</span>
          <span>排名</span>
        </li>
        <li class="tb tb-body" v-for="v in number_list" :key="v.id">
          <span>{{v.a}}</span>
          <span>{{v.b}}</span>
          <span>{{v.c}}</span>
          <span>{{v.d}}</span>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      tab_name: 'first',
      chartData: {
        columns: ['日期', '订单数', '新增分销商数', '新增会员数'],
        rows: [
          { '日期': '1/1', '订单数': 0, '新增分销商数': 0, '新增会员数': 0 },
          { '日期': '1/2', '订单数': 0, '新增分销商数': 0, '新增会员数': 0 },
          { '日期': '1/3', '订单数': 0, '新增分销商数': 0, '新增会员数': 0 },
          { '日期': '1/4', '订单数': 0, '新增分销商数': 500, '新增会员数': 500 },
          { '日期': '1/5', '订单数': 0, '新增分销商数': 0, '新增会员数': 0 },
          { '日期': '1/6', '订单数': 0, '新增分销商数': 0, '新增会员数': 0 }
        ]
      },
      fenxiao_list: [
        {
          a: '有云',
          b: 1,
          c: '192.65',
          d: '1'
        },
        {
          a: '茅岩莓茶_8286',
          b: 2,
          c: '192.65',
          d: '2'
        },
        {
          a: '141315',
          b: 0,
          c: '192.65',
          d: '3'
        }
      ],
      number_list: [
        {
          a: '158884455',
          b: 1,
          c: '160,000.000',
          d: 1
        },
        {
          a: 'lm123',
          b: 1,
          c: '160,000.000',
          d: 2
        },
        {
          a: 'GG',
          b: 1,
          c: '160,000.000',
          d: 3
        },
        {
          a: 'QQWWEE',
          b: 1,
          c: '160,000.000',
          d: 4
        },
        {
          a: 'admin',
          b: 1,
          c: '160,000.000',
          d: 5
        },
        {
          a: '158884455',
          b: 1,
          c: '160,000.000',
          d: 6
        },
        {
          a: '158884455',
          b: 1,
          c: '160,000.000',
          d: 7
        },
        {
          a: '158884455',
          b: 1,
          c: '160,000.000',
          d: 8
        },
        {
          a: '158884455',
          b: 1,
          c: '160,000.000',
          d: 9
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.default{
  p.name{
    font-size: 16px;
    font-weight: 600;
    margin: 30px 0 15px;
  }
  .pannel-top{
    display: flex;
    align-items: flex-end;
    .log{
      width: 80px;
      height: 80px;
      border: 1px solid #ddd;
    }
    .name{
      font-size: 16px;
      font-weight: 600;
      flex: 1;
      margin-left: 15px;
    }
  }
  .pannel-data{
    border: 1px solid #ddd;
    border-top-right-radius: 10px;
    border-top-left-radius: 10px;
    padding: 15px 10px;
    .tab-item{
      text-align: center;
      .list{
        display: flex;
        height: 146px;
        justify-content: space-between;
        li:not(:last-child){
          width: 188px;
          border: 1px solid #000;
          display: flex;
          flex-direction: column;
          p:first-child{
            font-size: 18px;
            line-height: 39px;
            border-bottom: 1px solid #000;
          }
          p:nth-child(2){
            font-size: 18px;
            color: #0077DD;
            font-weight: 600;
            flex: 1;
            line-height: 70px;
          }
          p:nth-child(3){
            line-height: 36px;
            border-top: 1px solid #000;
          }
        }
        li:last-child{
          width: 172px;
          padding: 0 10px;
          background-color: #F7F7F7;
          p{
            line-height: 46px;
            &:not(:last-child){
              border-bottom: 1px dashed #c6c6c6;
            }
          }
        }
      }
    }
  }
  .pannel-content{
    border: 1px solid #ddd;
    width: 100%;
    box-sizing: border-box;
    padding: 20px;
  }
  .pannel-rank{
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    .list{
      width: 498px;
      border: 1px solid #ddd;
      .title{
        background-color: #F2F8FC;
        display: flex;
        line-height: 47px;
        border-bottom: 1px solid #ddd;
        span{
          font-size: 18px;
          font-weight: 600;
          flex: 1;
          margin-left: 20px;
        }
        a{
          color: #FF0000;
          margin-right: 10px;
        }
      }
      li.tb{
        line-height: 36px;
        border-bottom: 1px solid  #ddd;
        display: flex;
        padding-left: 10px;
        &:last-child{
          border: none;
        }
        span:not(:last-child){
          flex: 1;
        }
        span:last-child{
          width: 50px;
        }
      }
      li.tb-header{
        font-weight: 600;
        background-color: #F2F8FC;
      }
    }
  }
}
</style>
