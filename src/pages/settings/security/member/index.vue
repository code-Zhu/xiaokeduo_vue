<template>
  <div>
    <p class="page-title">人员管理</p>
    <div class="pannel">
      <span>用户名：</span>
      <el-input v-model="query.name" size="mini" style="width: 180px"></el-input>
      <el-select v-model="query.department" size="mini">
        <el-option value="">全部</el-option>
        <el-option value="0">会员中心</el-option>
        <el-option value="1">供应商</el-option>
        <el-option value="2">仓库</el-option>
        <el-option value="3">超级管理员</el-option>
      </el-select>
      <span class="mini-btn" type="primary">查询</span>
    </div>
    <div class="pannel">
      <el-button size="small" type="success" @click="$router.push('/settings/staff/add')">添加管理员</el-button>
    </div>
    <div class="pannel">
      <el-table :data="list" border>
        <el-table-column prop="name" label="用户名" align="center"></el-table-column>
        <el-table-column prop="email" label="邮件地址" align="center"></el-table-column>
        <el-table-column prop="time" label="创建时间" align="center"></el-table-column>
        <el-table-column label="操作" align="center" width="100">
          <template slot-scope="scope">
            <div class="table-ctr">
              <router-link to="/settings/staff/1">编辑</router-link>
              <a href="javascript:;">删除</a>
            </div>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <div class="pannel table-footer">
      <el-pagination
        :page-size="10"
        layout="total, prev, next, jumper"
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
        name: '',
        department: ''
      },
      list: [
        {
          name: 'admin',
          email: 'admin@hishop.com',
          time: '2016-05-03 18:47:53'
        }
      ]
    }
  }
}
</script>
