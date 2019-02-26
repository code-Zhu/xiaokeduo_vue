<template>
  <div class="shop-menu">
    <p class="page-title">图文素材管理</p>
    <div class="pannel">
      <el-row>
        <el-col :span="6">
          <el-col :span="10">
            <el-button size="mini" type="success" @click="$router.push('/shop/articlesAddSingle')">新建单条图文</el-button>
          </el-col>
          <el-col :span="14">
            <el-button size="mini" type="success" @click="$router.push('/shop/articlesMultiple')">新建多条图文</el-button>
          </el-col>
        </el-col>
        <el-col :span="6">
          <el-input size="mini" placeholder="请输入内容"  prefix-icon="el-icon-search"></el-input>
        </el-col>
      </el-row>
    </div>
    <div class="pannel">
      <el-tabs type="card">
        <el-tab-pane label="所有素材">所有素材</el-tab-pane>
        <el-tab-pane label="分销商分享素材">分销商分享素材</el-tab-pane>
        <el-tab-pane label="单条图文">单条图文</el-tab-pane>
        <el-tab-pane label="多条图文">多条图文</el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>
