<template>
  <div class="selectcategory">
    <div class="page-title">
      <p>商品标签管理</p>
      <span>定义商品所属的各个标签，如果在上架商品时给商品指定了某个标签，则商品详细页会显示该标签</span>
    </div>
    <div class="pannel">
      <el-button size="small" type="success" @click="dialogVisible = true">添加标签</el-button>
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
    <el-dialog title="添加商品标签" :visible.sync="dialogVisible"
      width="520px">
      <el-form class="form-box" label-width="95px" size="small">
        <el-form-item label="标签名称：" required>
          <el-input></el-input>
          <p class="tip">长度限制在10个字符以内</p>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button type="success" @click="dialogVisible = false" size="small">添加商品标签</el-button>
        <el-button @click="dialogVisible = false" size="small">关&nbsp;闭</el-button>
      </span>
    </el-dialog>
  </div>
</template>
<script>
export default {
  data () {
    return {
      dialogVisible: false,
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
