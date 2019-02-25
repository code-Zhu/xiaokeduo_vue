<template>
  <div>
    <p class="page-title">编辑管理员信息</p>
    <el-tabs :value="tabName" type="card">
      <el-tab-pane name="info" label="基本信息">
        <el-form class="form-box" label-width="160px" style="margin-right:400px">
          <el-form-item label="用户名：">
            <span>admin</span>
          </el-form-item>
          <el-form-item label="所属部门：" required>
            <el-select value="" :disabled="true">
              <el-option label="超级管理员" value=""></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="邮件地址" required>
            <el-input></el-input>
            <p class="tip">请输入正确电子邮件，长度在1-256个字符以内</p>
          </el-form-item>
          <el-form-item label="注册日期">
            <span>2016-05-03 18:47:53</span>
          </el-form-item>
          <el-form-item>
            <el-button type="success" size="small">保存</el-button>
          </el-form-item>
        </el-form>
      </el-tab-pane>
      <el-tab-pane name="password" label="修改密码">
        <el-form class="form-box" label-width="160px" style="margin-right:400px">
          <el-form-item label="用户名：">
            <span>admin</span>
          </el-form-item>
          <el-form-item label="旧密码：" required>
            <el-input></el-input>
          </el-form-item>
          <el-form-item label="新密码：" required>
            <el-input></el-input>
            <p class="tip">密码不能为空，长度在6-20个字符之间</p>
          </el-form-item>
          <el-form-item label="确认密码：" required>
            <el-input></el-input>
            <p class="tip">请输入确认密码</p>
          </el-form-item>
          <el-form-item>
            <el-button type="success" size="small">保存</el-button>
          </el-form-item>
        </el-form>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>
<script>
export default {
  computed: {
    tabName () {
      return this.$route.params.tabname || 'info'
    }
  }
}
</script>
