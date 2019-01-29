<template>
  <div>
    <p class="page-title">快递单模板</p>
    <div class="pannel">
      <el-button type="success" size="small">新建快递单模板</el-button>
      <el-button type="danger" size="small">批量删除</el-button>
    </div>
    <div class="pannel">
      <el-table :data="list" border>
        <el-table-column type="selection" align="center"></el-table-column>
        <el-table-column label="快递单模板名称" prop="name" align="center"></el-table-column>
        <el-table-column label="物流公司" prop="company" width="400" align="center"></el-table-column>
        <el-table-column label="是否启用" prop="open" width="160" align="center">
          <template slot-scope="scope">
            <i class="iconfont icon-true" v-if="scope.row.open" style="color:#0B5BA5"></i>
            <i class="iconfont icon-cuo" v-else style="color:#D9534F"></i>
          </template>
        </el-table-column>
        <el-table-column label="操作" width="150" align="center">
          <template slot-scope="scope">
            <div class="table-ctr">
              <span class="mini-btn" type="light">编辑</span>
              <span class="mini-btn" type="danger">删除</span>
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
          name: '圆通速递',
          company: '圆通速递',
          open: true
        },
        {
          name: '申通物流',
          company: '申通物流',
          open: true
        },
        {
          name: '邮局平邮',
          company: '邮局平邮',
          open: true
        },
        {
          name: '海航天天',
          company: '海航天天快递',
          open: true
        },
        {
          name: '顺丰快递',
          company: '顺丰',
          open: false
        }
      ]
    }
  }
}
</script>
<style lang="scss" scoped>

</style>
