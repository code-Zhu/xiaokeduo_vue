<template>
  <div>
    <p class="page-title">分销商等级管理</p>
    <div class="pannel">
      <el-button size="small" type="primary">添加分销商分等级</el-button>
    </div>
    <div class="pannel">
      <el-table :data="list" border>
        <el-table-column label="等级名称">
          <template slot-scope="scope">
            <span>{{scope.row.name}}</span>
            <span v-if="scope.row.default" style="color:#0094FF">(默认等级)</span>
          </template>
        </el-table-column>
        <el-table-column label="分销商人数" prop="number"></el-table-column>
        <el-table-column label="佣金满足点">
          <template slot-scope="scope"><span>￥{{scope.row.conditon}}</span></template>
        </el-table-column>
        <el-table-column label="成交店铺佣金奖励">
          <template slot-scope="scope"><span>￥{{scope.row.reward}}%</span></template>
        </el-table-column>
        <el-table-column label="上一级佣金奖励">
          <template slot-scope="scope"><span>{{scope.row.upper_1_reward}}%</span></template>
        </el-table-column>
        <el-table-column label="上二级佣金奖励">
          <template slot-scope="scope"><span>{{scope.row.upper_2_reward}}%</span></template>
        </el-table-column>
        <el-table-column label="操作" width="110">
          <template slot-scope="scope">
            <div class="table-ctr">
              <a href="javascript:;">编辑</a>
              <a href="javascript:;">删除</a>
            </div>
          </template>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      list: [
        {
          name: '初级茶客',
          number: 543,
          conditon: 0.00,
          reward: 6.00,
          upper_1_reward: 5.00,
          upper_2_reward: 1.00,
          default: false
        },
        {
          name: '中级茶粉',
          number: 7,
          conditon: 500.00,
          reward: 8.00,
          upper_1_reward: 7.00,
          upper_2_reward: 1.00,
          default: false
        },
        {
          name: '高级茶神',
          number: 12,
          conditon: 2000,
          reward: 10.00,
          upper_1_reward: 9.00,
          upper_2_reward: 1.00,
          default: false
        },
        {
          name: '22323',
          number: 0,
          conditon: 12123,
          reward: 22.00,
          upper_1_reward: 12.00,
          upper_2_reward: 1.00,
          default: true
        }
      ]
    }
  }
}
</script>
