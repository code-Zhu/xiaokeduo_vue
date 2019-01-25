<template>
  <div class="selectcategory">
    <div class="page-title">
      <p>商品标签管理</p>
      <span>定义商品所属的各个标签，如果在上架商品时给商品指定了某个标签，则商品详细页会显示该标签</span>
    </div>
    <div class="pannel">
      <el-button size="small" type="success">添加标签</el-button>
    </div>
    <div class="pannel table-header">
      <el-table :data="list" size="small" border>
        <el-table-column prop="tag_name" label="商品类型名称" align="center"></el-table-column>
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
          tag_name: '热卖'
        },
        {
          tag_name: '新品'
        }
      ]
    }
  }
}
</script>
