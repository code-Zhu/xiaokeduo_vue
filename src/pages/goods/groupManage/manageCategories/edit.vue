<template>
  <div>
    <p class="page-title">编辑商品分类</p>
    <div>
      <el-form class="form-box" label-width="200px">
        <el-form-item label="分类名称" required>
          <el-input value="网络设备" style="width: 200px"></el-input>
        </el-form-item>
        <el-form-item label="商品编码前缀">
          <el-input style="width: 200px"></el-input>
          <p class="tip">填写以后，发布商品为您自动生成商品编码的时候可以加上此前缀，只能是字母、数字开头、</p>
          <p class="tip">可包含-(减号)、_(下划线)，长度5个字符以内</p>
        </el-form-item>
        <el-form-item>
          <el-button size="small" type="success">保存</el-button>
          <el-button size="small" type="primary">返回</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>
