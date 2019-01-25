<template>
  <div class="good-brands">
    <div class="page-title">
      <p>品牌管理</p>
      <span>管理商品所属的各个品牌，如果在上架商品时给商品指定了品牌分类，则商品可以按品牌分类浏览</span>
    </div>
    <div class="pannel">
      <el-row style="line-height:30px">
        <el-col :span="2">品牌名称</el-col>
        <el-col :span="4">
          <el-input size="mini"></el-input>
        </el-col>
        <el-col :span="2" style="margin-left:10px;">
          <el-button type="primary" size="mini">查询</el-button>
        </el-col>
      </el-row>
    </div>
    <div class="pannel">
      <el-button size="small" type="success">添加新商品品牌</el-button>
      <el-button size="small" type="success">批量保存排序</el-button>
    </div>
    <div class="pannel table-header">
      <el-table :data="list" size="small" border>
        <el-table-column prop="brand_logo" label="品牌Logo" align="center">
          <template slot-scope="scope">
            <img :src="scope.row.brand_logo" height="40px">
          </template>
        </el-table-column>
        <el-table-column prop="brand_name" label="品牌名称" align="center"></el-table-column>
        <el-table-column prop="order" label="显示顺序" align="center">
          <template slot-scope="scope">
            <el-input v-model="scope.row.order" style="width: 60px" size="mini"></el-input>
          </template>
        </el-table-column>
        <el-table-column label="操作" align="center">
          <template slot-scope="scope">
            <div class="ctr">
              <a href="javascript:;">编辑</a>
              <a href="javascript:;">删除</a>
            </div>
          </template>
        </el-table-column>
      </el-table>
      <div class="table-footer">
        <el-pagination
          :page-size="10"
          layout="sizes, total, prev, next, jumper"
          :total="1000">
        </el-pagination>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      list: [
        {
          brand_logo: './static/img/none.gif',
          brand_name: '法国梧桐',
          order: 1
        }
      ]
    }
  }
}
</script>
