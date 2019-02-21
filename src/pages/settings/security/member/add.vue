<template>
  <div>
    <p class="page-title">增加管理员</p>
    <el-form label-width="200px" style="margin-right: 400px" size="small">
      <el-form-item label="用户名：" required>
        <el-input></el-input>
      </el-form-item>
      <el-form-item label="密码：" required>
        <el-input></el-input>
      </el-form-item>
      <el-form-item label="确认密码：" required>
        <el-input></el-input>
      </el-form-item>
      <el-form-item label="邮箱地址：" required>
        <el-input></el-input>
      </el-form-item>
      <el-form-item label="所属于部门：" required>
        <el-select>
          <el-option label="会员中心" value=""></el-option>
        </el-select>
      </el-form-item>
      <el-form-item>
        <el-button type="success" size="small">添加</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
