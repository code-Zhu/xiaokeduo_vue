<template>
  <div class="member-grade">
    <p class="page-title">会员等级管理</p>
    <div class="pannel">
      <el-button size="mini" type="primary">添加会员等级</el-button>
    </div>
    <div class="table-body">
      <el-table :data="list" border>
        <el-table-column label="等级名称" prop="name" align="center"></el-table-column>
        <el-table-column label="会员人数" prop="member" align="center"></el-table-column>
        <el-table-column label="满足交易额" align="center">
          <template slot-scope="scope">
            <span>￥{{scope.row.minConsume}}</span>
          </template>
        </el-table-column>
        <el-table-column label="满足交易次数" prop="times" align="center"></el-table-column>
        <el-table-column label="会员折扣" prop="discount" align="center"></el-table-column>
        <el-table-column label="操作" align="center" width="100">
          <template slot-scope="scope">
            <div class="table-ctr">
              <a href="javscript:;">编辑</a>
              <span>|</span>
              <a href="javscript:;">删除</a>
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
          name: '会员',
          member: 700,
          minConsume: 200,
          times: 1,
          discount: 95
        },
        {
          name: '金牌',
          member: 5,
          minConsume: 1000,
          times: 10,
          discount: 90
        },
        {
          name: '白金',
          member: 6,
          minConsume: 5000,
          times: 50,
          discount: 88
        }
      ]
    }
  }
}
</script>
