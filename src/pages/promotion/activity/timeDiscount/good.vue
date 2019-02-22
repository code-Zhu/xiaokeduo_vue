<template>
  <div>
    <p class="page-title">限时折扣>添加活动商品</p>
    <el-tabs v-model="tabName" type="card">
      <el-tab-pane label="添加活动商品" name="1">
        <div class="pannel pannel-content">
          <span>商品名称：</span>
          <el-input style="width: 200px" size="mini"></el-input>
          <span>商品分类：</span>
          <el-select value="" size="mini">
            <el-option label="请选择商品分类" value=""></el-option>
          </el-select>
          <span class="mini-btn" type="primary">查询</span>
        </div>
        <div class="pannel-content">
          <div class="pannel">
            <label><input type="checkbox"><span>隐藏该页其他活动商品</span></label>
            <label><input type="checkbox"><span>隐藏该页本活动商品</span></label>
          </div>
          <el-table>
            <el-table-column type="selection" width="50"></el-table-column>
            <el-table-column label="商品名称" align="center" width="350"></el-table-column>
            <el-table-column label="已参与活动" align="center"></el-table-column>
            <el-table-column label="剩余库存"></el-table-column>
            <el-table-column label="价格"></el-table-column>
            <el-table-column label="折扣信息" align="center"></el-table-column>
          </el-table>
        </div>
      </el-tab-pane>
      <el-tab-pane label="已选活动商品" name="2">
        <div class="pannel pannel-content">
          <span>商品名称：</span>
          <el-input style="width: 200px" size="mini"></el-input>
          <span>商品分类：</span>
          <el-select value="" size="mini">
            <el-option label="请选择商品分类" value=""></el-option>
          </el-select>
          <span class="mini-btn" type="primary">查询</span>
        </div>
        <div class="pannel-content">
          <div class="pannel">
            <span class="mini-btn" type="primary">移出活动</span>
            <span class="mini-btn" type="primary">暂停</span>
            <span class="mini-btn" type="primary">重启</span>
          </div>
          <el-table>
            <el-table-column type="selection" width="50"></el-table-column>
            <el-table-column label="商品名称" align="center" width="350"></el-table-column>
            <el-table-column label="价格" align="center"></el-table-column>
            <el-table-column label="折扣信息" align="center"></el-table-column>
            <el-table-column label="状态"></el-table-column>
            <el-table-column label="操作"></el-table-column>
          </el-table>
        </div>
      </el-tab-pane>
    </el-tabs>
    <div class="submit-box-fixed">
      <div class="box">
        <div>
          <el-button size="small" type="primary">已选0</el-button>
          <el-input size="mini" style="width: 50px"></el-input>
          <span>折或减</span>
          <el-input size="mini" style="width: 50px"></el-input>
          <el-button size="small" type="primary">批量设置</el-button>
          <el-button size="small" type="primary">去角</el-button>
          <el-button size="small" type="primary">去角分</el-button>
        </div>
        <div>
          <el-button size="small" type="primary" v-if="tabName==1">加入活动</el-button>
          <el-button size="small" type="primary">确定</el-button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      tabName: '1'
    }
  }
}
</script>

<style lang="scss" scoped>
.pannel-content{
  margin-top: 0;
}
.submit-box-fixed .box{
  width: 1000px;
  margin-left: 550px;
  color: #fff;
  display: flex;
  justify-content: space-between;
}
</style>
