<template>
  <div>
    <p class="page-title">会员地区分布</p>
    <div class="pannel area-box">
      <div class="chart-box">
        <ve-map :data="chartData" :settings="chartSettings"></ve-map>
        <!-- <ve-heatmap :data="chartData" :settings="chartSettings"></ve-heatmap> -->
      </div>
      <div class="table-box">
        <p class="table-title">TOP10省份</p>
        <el-table :data="chartData.rows" size="small">
          <el-table-column prop="position" label="地区" align="center"></el-table-column>
          <el-table-column prop="memberCount" label="数量" align="center"></el-table-column>
        </el-table>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      chartSettings: {
        metrics: ['memberCount'],
        // geo: {
        //   itemStyle: {
        //     normal: {
        //       areaColor: '#ccc',
        //       borderColor: '#D7D7D7'
        //     },
        //     emphasis: {
        //       areaColor: '#fff000'
        //     }
        //   }
        // },
        labelMap: {
          'memberCount': '会员分部数'
        }
        // visualMap: {
        //   inRange: {
        //     color: ['#E0FFFF', '#006EDD']
        //   },
        //   textStyle: {
        //     color: '#fff'
        //   }
        // }
      },
      chartData: {
        columns: ['position', 'memberCount'],
        rows: [
          {'position': '其他', memberCount: 1000},
          {'position': '浙江', memberCount: 400},
          {'position': '江苏', memberCount: 800},
          {'position': '山西', memberCount: 200},
          {'position': '天津', memberCount: 100},
          {'position': '广东', memberCount: 300},
          {'position': '河北', memberCount: 800},
          {'position': '江西', memberCount: 700},
          {'position': '北京', memberCount: 300},
          {'position': '湖北', memberCount: 500}
        ]
      }
    }
  }
}
</script>
<style lang="scss" scoped>
.area-box{
  display: flex;
  justify-content: space-between;
  .chart-box{
    width: 790px;
    height: 450px;
    background-color: #F7F7F7;
    box-sizing: border-box;
    padding: 0 100px;
  }
  .table-box{
    width: 200px;
    .table-title{
      color: #777777;
      font-size: 18px;
      line-height: 38px;
      text-align: center;
    }
  }
}
</style>
