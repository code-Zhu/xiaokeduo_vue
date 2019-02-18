<template>
  <div>
    <el-table>
      <el-table-column type="selection" width="50" align="center"></el-table-column>
      <el-table-column label="活动名称" align="center"></el-table-column>
      <el-table-column label="每人参与次数"></el-table-column>
      <el-table-column label="有效期" align="center"></el-table-column>
      <el-table-column label="参与人数" align="center"></el-table-column>
      <el-table-column label="中奖人数" align="center"></el-table-column>
      <el-table-column width="60">
        <template slot-scope="scope">
          <div class="icon-style">
            <i class="iconfont icon-ico"></i>
            <i class="iconfont icon-icon-link"></i>
          </div>
        </template>
      </el-table-column>
      <el-table-column label="操作" align="center"></el-table-column>
    </el-table>
  </div>
</template>
<style lang="scss" scoped>
.icon-style{
  i{
    cursor: pointer;
    color: #61D0B9;
    margin-right: 0;
    font-size: 18px;
    &:hover{
      background: #fff;
    }
  }
}
</style>
