<template>
  <div class="member-default">
    <div class="info-box">
      <base-info :styles="'left'" style="margin-right:20px" :data="base_info_data1"></base-info>
      <base-info :styles="'right'" :data="base_info_data2"></base-info>
    </div>
    <div class="pannel pannel-content">
      <ul class="survey">
        <li>
          <b>735</b>
          <p>分销商总数</p>
        </li>
        <li>
          <b>0</b>
          <p>昨日新增分销商数</p>
        </li>
        <li>
          <b>￥654256.24</b>
          <p>已提现佣金</p>
        </li>
        <li>
          <b>￥7357.00</b>
          <p>待提现佣金</p>
        </li>
      </ul>
    </div>
    <div class="pannel charts-box">
      <b class="animated fadeInDown">分销走势</b>
      <ve-line :data="chartData"></ve-line>
    </div>
  </div>
</template>
<script>
import baseInfo from '../vipMember/components/BaseInfo'
export default {
  components: {baseInfo},
  data () {
    return {
      base_info_data1: [
        {
          label: '今日分销金额',
          num: '￥0.00'
        },
        {
          label: '业绩占比',
          num: '0.00%'
        },
        {
          label: '今日分销订单数',
          num: '3'
        },
        {
          label: '产生佣金',
          num: '￥0.00'
        }
      ],
      base_info_data2: [
        {
          label: '昨日分销金额',
          num: '￥0.00'
        },
        {
          label: '业绩占比',
          num: '0.00%'
        },
        {
          label: '昨日分销订单数',
          num: '0'
        },
        {
          label: '产生佣金',
          num: '￥0.00'
        }
      ],
      chartData: {
        columns: ['时间', '新增分销商数', '分销金额', '分销佣金'],
        rows: [
          { '时间': '2019-01-25', '新增分销商数': 1, '分销金额': 0, '分销佣金': 0 },
          { '时间': '2019-01-26', '新增分销商数': 3, '分销金额': 0, '分销佣金': 0 },
          { '时间': '2019-01-27', '新增分销商数': 0, '分销金额': 0, '分销佣金': 0 },
          { '时间': '2019-01-28', '新增分销商数': 4, '分销金额': 0, '分销佣金': 1 },
          { '时间': '2019-01-29', '新增分销商数': 0, '分销金额': 0, '分销佣金': 0 },
          { '时间': '2019-01-30', '新增分销商数': 5, '分销金额': 0, '分销佣金': 1 },
          { '时间': '2019-01-31', '新增分销商数': 0, '分销金额': 0, '分销佣金': 0 }
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
.survey{
  display: flex;
  li{
    height: 80px;
    display: flex;
    flex: 1;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    b{
      color: #125ACB;
      font-size: 16px;
    }
    p{
      font-size: 18px;
      line-height: 40px;
    }
  }
  li+li{
    border-left: 1px solid #B9CACA;
  }
}
.charts-box{
  position: relative;
  border: 1px solid #ccc;
  padding: 10px;
  box-sizing: border-box;
  b{
    font-size: 18px;
    position: absolute;
  }
}
</style>
