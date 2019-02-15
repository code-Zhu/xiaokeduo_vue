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
      <el-button size="small" type="success">添加物流公司</el-button>
    </div>
    <div class="pannel">
      <el-table :data="list" border>
        <el-table-column prop="name" label="物流公司" align="center"></el-table-column>
        <el-table-column prop="_100Code" label="快递100Code" align="center"></el-table-column>
        <el-table-column prop="_taoCode" label="淘宝Code" align="center"></el-table-column>
        <el-table-column label="操作" align="center" width="100">
          <template slot-scope="scope">
            <div class="table-ctr">
              <a href="javascript:;">编辑</a>
              <a href="javascript:;">删除</a>
            </div>
          </template>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
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
