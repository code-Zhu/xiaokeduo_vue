<template>
  <div>
    <p class="page-title">物流公司</p>
    <div class="pannel">
      <el-form :inline="true" size="mini">
        <el-form-item label="公司名称：">
          <el-input></el-input>
        </el-form-item>
        <el-form-item label="快递100Code：">
          <el-input></el-input>
        </el-form-item>
        <el-form-item label="淘宝Code：">
          <el-input></el-input>
        </el-form-item>
        <el-form-item>
          <span class="mini-btn" type="primary">查询</span>
        </el-form-item>
      </el-form>
    </div>
    <div class="pannel">
      <el-button size="small" type="success" @click="dialogVisible=true">添加物流公司</el-button>
    </div>
    <div class="pannel">
      <el-table :data="list" border>
        <el-table-column prop="name" label="物流公司" align="center"></el-table-column>
        <el-table-column prop="_100Code" label="快递100Code" align="center"></el-table-column>
        <el-table-column prop="_taoCode" label="淘宝Code" align="center"></el-table-column>
        <el-table-column label="操作" align="center" width="100">
          <template slot-scope="scope">
            <div class="table-ctr">
              <a href="javascript:;" @click="dialogVisible=true">编辑</a>
              <a href="javascript:;">删除</a>
            </div>
          </template>
        </el-table-column>
      </el-table>
      <div class="pannel table-footer">
        <el-pagination
          :page-size="10"
          layout="sizes, total, prev, next, jumper"
          :total="1000">
        </el-pagination>
      </div>
    </div>
    <el-dialog title="添加物流公司" :visible.sync="dialogVisible"
      width="500px">
      <el-form label-width="120px" size="small" style="margin: 0 30px">
        <el-form-item label="公司名称：">
          <el-input></el-input>
        </el-form-item>
        <el-form-item label="快递100Code：">
          <el-input></el-input>
        </el-form-item>
        <el-form-item label="淘宝Code：">
          <el-input></el-input>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button type="success" @click="dialogVisible = false" size="small">确&nbsp;定</el-button>
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
          name: '申通物流',
          _100Code: 'shentong',
          _taoCode: 'STO'
        }
      ]
    }
  }
}
</script>
