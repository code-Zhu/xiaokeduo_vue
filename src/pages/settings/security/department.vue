<template>
  <div>
    <p class="page-title">部门管理</p>
    <div class="pannel">
      <el-button type="success" size="small">添加新部门</el-button>
    </div>
    <div class="pannel">
      <el-table :data="list" border size="small">
        <el-table-column label="部门名称" align="center" width="290">
          <template slot-scope="scope">
            <span>{{scope.row.name}}</span>
            <span v-if="scope.row.power === 5" style="color: #0000FF">(所有权限)</span>
          </template>
        </el-table-column>
        <el-table-column prop="remark" label="职能说明" align="center"></el-table-column>
        <el-table-column label="操作" align="center" width="200">
          <template slot-scope="scope">
            <div class="table-ctr">
              <a href="javascript:;" v-if="scope.row.power!=5">权限</a>
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
          name: '会员中心',
          remark: '所有会员',
          power: 0
        },
        {
          name: '供应商',
          remark: '产品提供商',
          power: 0
        },
        {
          name: '仓库',
          remark: '',
          power: 0
        },
        {
          name: '超级管理员',
          remark: '',
          power: 5
        }
      ]
    }
  }
}
</script>
