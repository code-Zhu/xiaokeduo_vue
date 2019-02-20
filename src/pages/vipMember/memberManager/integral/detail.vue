<template>
  <div>
    <p class="page-title">会员积分明细</p>
    <div class="pannel pannel-content">
      <span>积分来源/用途：</span>
      <el-select v-model="query.type" size="mini">
        <el-option label="全部" value=""></el-option>
        <el-option label="购物送积分" value="1"></el-option>
        <el-option label="签到送积分" value="2"></el-option>
        <el-option label="抽奖送积分" value="3"></el-option>
      </el-select>
      <el-date-picker v-model="query.time"
        type="daterange" range-separator="至" size="mini"
        start-placeholder="开始日期" end-placeholder="结束日期">
      </el-date-picker>
      <span class="mini-btn" type="primary">搜索</span>
    </div>
    <div class="pannel table-footer">
      <el-pagination
        :page-size="10"
        layout="sizes, total, prev, next, jumper"
        :total="1000">
      </el-pagination>
    </div>
    <el-table :data="list" border>
      <el-table-column prop="origin" label="积分来源"></el-table-column>
      <el-table-column prop="time" label="日期"></el-table-column>
      <el-table-column prop="change" label="积分变化" align="center">
        <template slot-scope="scope">
          <i v-if="scope.row.change>0" style="color: #ff0000">{{scope.row.change}}</i>
          <i v-else style="color: #1CA47D">{{scope.row.change}}</i>
        </template>
      </el-table-column>
      <el-table-column prop="remark" label="备注" align="center"></el-table-column>
    </el-table>
  </div>
</template>
<script>
export default {
  data () {
    return {
      query: {
        type: '',
        time: []
      },
      list: [
        {
          origin: '(管理员)admin:手动调整积分',
          time: '2019/2/1 10:54:10',
          change: 100,
          remark: '测试备注信息'
        },
        {
          origin: '(管理员)admin:手动调整积分',
          time: '2019/2/1 10:54:10',
          change: -100,
          remark: '测试备注信息'
        }
      ]
    }
  }
}
</script>
