<template>
  <div class="member-default">
    <p class="page-title">店铺会员概况</p>
    <div class="info-box">
      <base-info :styles="'left'" style="margin-right:20px" :data="base_info_data1"></base-info>
      <base-info :styles="'right'" :data="base_info_data2"></base-info>
    </div>
    <div class="pannel member-total">
      <p>会员总数 <span>757</span></p>
      <p></p>
      <i class="el-icon-caret-bottom"></i>
    </div>
    <div class="pannel charts-box">
      <div class="charts-item">
        <b class="charts-title animated bounceInDown">分组数据</b>
        <ve-pie :data="chartData1"></ve-pie>
      </div>
      <div class="charts-item">
        <b class="charts-title animated bounceInDown">会员分布地区(前9名)</b>
        <ve-bar :data="chartData2"></ve-bar>
      </div>
    </div>
  </div>
</template>
<script>
import 'animate.css'
import baseInfo from './components/BaseInfo'
export default {
  components: {baseInfo},
  data () {
    return {
      base_info_data1: [
        {
          label: '活跃会员数',
          num: '20'
        },
        {
          label: '休眠会员数',
          num: '3'
        },
        {
          label: '成交会员',
          num: '23'
        },
        {
          label: '昨日新增',
          num: '0'
        }
      ],
      base_info_data2: [
        {
          label: '收藏会员数',
          num: '2'
        },
        {
          label: '加入购物车会员数',
          num: '0'
        },
        {
          label: '潜在会员',
          num: '729'
        },
        {
          label: '昨日新增',
          num: '2'
        }
      ],
      chartData1: {
        columns: ['会员', '人数'],
        rows: [
          { '会员': '会员', '人数': 400 },
          { '会员': '金牌', '人数': 300 },
          { '会员': '白金', '人数': 57 }
        ]
      },
      chartData2: {
        columns: ['区域', '区域统计'],
        rows: [
          {'区域': '河北', '区域统计': 5},
          {'区域': '北京', '区域统计': 5},
          {'区域': '湖北', '区域统计': 7},
          {'区域': '广东', '区域统计': 10},
          {'区域': '天津', '区域统计': 10},
          {'区域': '山西', '区域统计': 20},
          {'区域': '江苏', '区域统计': 100},
          {'区域': '浙江', '区域统计': 200},
          {'区域': '其他', '区域统计': 400}
        ]
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.info-box{
  display: flex;
  justify-content: center;
  margin: 40px 0;
}
.member-total{
  width: 340px;
  text-align: center;
  margin: 0 auto;
  p:first-child{
    font-size: 18px;
    span{
      color: #3366D6;
    }
  }
  p:nth-child(2){
    background-color: #DEDED9;
    height: 10px;
    border-radius: 10px;
    margin-top: 20px;
  }
  i{
    font-size: 80px;
    color: #DEDED9;
    margin-top: -25px;
  }
}
.charts-box{
  display: flex;
  box-sizing: border-box;
  .charts-item{
    width: 50%;
    border: 1px solid #797979;
    margin-right: 10px;
    padding: 10px;
    &:last-child{
      margin-right: 0;
      margin-left: 10px;
    }
    .charts-title{
      font-size: 20px;
      float: left;
    }
  }
}
</style>
