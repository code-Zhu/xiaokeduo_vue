<template>
  <div class="selectcategory">
    <p class="page-title">批量导出商品</p>
    <div class="pannel">
      <el-tabs v-model="tab_name" type="border-card">
        <el-tab-pane name="淘宝" label="导出为淘宝数据包">
          <!-- <data-form :type="tab_name"></data-form> -->
        </el-tab-pane>
        <el-tab-pane name="拍拍" label="导出为拍拍数据包">
          <!-- <data-form :type="tab_name"></data-form> -->
        </el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>
