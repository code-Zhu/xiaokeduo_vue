<template>
  <div class="good-types">
    <div class="page-title">
      <p>商品类型</p>
      <span>商品类型是一系属性的组合，可以用来向顾客展示某些商品具有的特有的属性，比如服装类型的颜色，尺码；图书类型的作者，出版社等</span>
    </div>
    <div class="pannel">
      <el-row style="line-height:30px">
        <el-col :span="2">商品类型名称</el-col>
        <el-col :span="4">
          <el-input size="mini"></el-input>
        </el-col>
        <el-col :span="2" style="margin-left:10px;">
          <el-button type="primary" size="mini">查询</el-button>
        </el-col>
      </el-row>
    </div>
    <div class="pannel">
      <el-button size="small" type="success">添加新商品类型</el-button>
    </div>
    <div class="pannel table-header">
      <el-table :data="list" size="small" border>
        <el-table-column prop="type_name" label="商品类型名称" align="center"></el-table-column>
        <el-table-column prop="related_brand" label="关联品牌" align="center"></el-table-column>
        <el-table-column prop="remark" label="备注" align="center"></el-table-column>
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
          type_name: '测试类型',
          related_brand: '',
          remark: '测试备注'
        },
        {
          type_name: '测试类型',
          related_brand: '',
          remark: '测试备注'
        },
        {
          type_name: '测试类型',
          related_brand: '',
          remark: '测试备注'
        },
        {
          type_name: '苹果',
          related_brand: '',
          remark: '测试备注'
        }
      ]
    }
  }
}
</script>
