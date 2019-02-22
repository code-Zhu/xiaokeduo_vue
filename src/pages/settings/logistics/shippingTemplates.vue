<template>
  <div>
    <p class="page-title">运费模板</p>
    <div class="pannel">
      <el-button size="small" type="danger">批量删除</el-button>
      <el-button size="small" type="success" @click="$router.push('/settings/shipping_templates/add')">新建运费模板</el-button>
    </div>
  </div>
</template>
