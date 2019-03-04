<template>
  <div>
    <el-table :data="list">
      <el-table-column v-if="tabName=='end'" type="selection" width="50" align="center"></el-table-column>
      <el-table-column label="活动名称" align="center">
        <template slot-scope="scope">
          <a href="javascript:;">{{scope.row.name}}</a>
        </template>
      </el-table-column>
      <el-table-column label="每人参与次数" align="center" sortable>
        <template slot-scope="scope">
          <span>每天参与{{scope.row.times}}次</span>
        </template>
      </el-table-column>
      <el-table-column prop="time" label="有效期" align="center" width="180"></el-table-column>
      <el-table-column prop="number" label="参与人数" align="center" sortable></el-table-column>
      <el-table-column prop="win" label="中奖人数" align="center" sortable></el-table-column>
      <el-table-column width="70">
        <template slot-scope="scope">
          <div class="icon-style">
            <i class="iconfont icon-ico"></i>
            <i class="iconfont icon-icon-link"></i>
          </div>
        </template>
      </el-table-column>
      <el-table-column label="操作" width="180" align="center">
        <template slot-scope="scope">
          <div>
            <span class="mini-btn" type="primary">中奖记录</span>
            <span class="mini-btn" type="primary">详情</span>
            <span v-if="tabName=='ing'" class="mini-btn" type="warning">结束</span>
            <span v-if="tabName=='end'" class="mini-btn" type="danger">删除</span>
          </div>
        </template>
      </el-table-column>
    </el-table>
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
  props: ['asideName', 'tabName'],
  data () {
    return {
      list: [
        {
          name: '测试抽奖游戏名',
          times: 1,
          time: '2019-02-17 16:00:00 至 2019-02-19 16:00:59',
          number: 2,
          win: 0
        }
      ]
    }
  },
  // watch: {
  //   tabName () {
  //     console.log(this.asideName, this.tabName)
  //   }
  // },
  mounted () { // 目前tab-item根据tabName来创建加载，此处应该可优化
    console.log(this.asideName, this.tabName)
  }
}
</script>

<style lang="scss" scoped>
.icon-style{
  i{
    cursor: pointer;
    color: #61D0B9;
    margin-right: 0;
    font-size: 18px;
    &:hover{
      background: #fff;
    }
  }
}
</style>
