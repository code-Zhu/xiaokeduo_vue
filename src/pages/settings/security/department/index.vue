<template>
  <div>
    <p class="page-title">部门管理</p>
    <div class="pannel">
      <el-button type="success" size="small" @click="dialogVisible = true">添加新部门</el-button>
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
            <div>
              <router-link to="/settings/department/power/1" v-if="scope.row.power!=5">权限</router-link>
              <a href="javascript:;" @click="dialogVisible = true">编辑</a>
              <a href="javascript:;">删除</a>
            </div>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <el-dialog title="添加新部门" :visible.sync="dialogVisible"
      width="500px">
      <el-form class="form-box" label-width="100px" size="small" style="margin: 0 30px">
        <el-form-item label="部门名称：" required>
          <el-input></el-input>
          <p class="tip">部门名称不能为空,长度限制在60个字符以内</p>
        </el-form-item>
        <el-form-item label="所有权限：">
          <label>
            <input type="radio">
            <span>否</span>
          </label>
          <label>
            <input type="radio">
            <span>是</span>
          </label>
        </el-form-item>
        <el-form-item label="职能说明：">
          <el-input type="textarea" :rows="4"></el-input>
          <p class="tip">说明部门具备哪些职能，长度限制在100个字符以内</p>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button type="success" @click="dialogVisible = false" size="small">确&nbsp;定</el-button>
        <el-button @click="dialogVisible = false" size="small">关&nbsp;闭</el-button>
      </span>
    </el-dialog>
  </div>
</template>
<script>
export default {
  data () {
    return {
      dialogVisible: false,
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
