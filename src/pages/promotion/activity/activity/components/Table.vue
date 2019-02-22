<template>
  <div>
    <div class="pannel pannel-content" style="margin-top:0">
      <b>商品名称：</b><el-input size="mini" style="width:100px"></el-input>
      <b style="margin-left: 30px">现价格区间：</b><el-input size="mini" style="width:100px"></el-input>至<el-input size="mini" style="width:100px"></el-input>
      <span class="mini-btn" type="primary">查询  </span>
    </div>
    <div class="pannel">
      <el-button size="mini" type="warning" v-if="tabName=='first'">批量暂停</el-button>
      <el-button size="mini" type="success" v-if="tabName=='first'">批量恢复</el-button>
      <el-button size="mini" type="danger" v-if="tabName=='first'">批量移除</el-button>
      <el-button size="mini" type="primary" v-if="tabName!=='first'">批量加入</el-button>
    </div>
    <div class="pannel">
      <el-table>
        <el-table-column type="selection" width="50" align="center"></el-table-column>
        <el-table-column prop="name" label="商品名称" align="center"></el-table-column>
        <el-table-column label="价格"></el-table-column>
      </el-table>
    </div>
  </div>
</template>
<script>
export default {
  props: ['tabName']
}
</script>
