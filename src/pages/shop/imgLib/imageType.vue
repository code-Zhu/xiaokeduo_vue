<template>
  <div class="shop-menu">
    <p class="page-title">图片分组管理</p>
    <div class="pannel">
      <el-table :data="list" border size="small">
        <el-table-column label="分组名称">
          <template slot-scope="scope">
            <el-input v-model="scope.row.name"></el-input>
          </template>
        </el-table-column>
        <el-table-column label="排序">
          <template slot-scope="scope">
            <div class="table-order">
              <i class="el-icon-caret-bottom" @click="changeOrder({type: 'down', row: scope})"></i>
              <i class="el-icon-caret-top" @click="changeOrder({type: 'up', row: scope})"></i>
            </div>
          </template>
        </el-table-column>
        <el-table-column label="操作" width="80">
          <template slot-scope="scope">
            <div class="ctr">
              <a href="#">删除</a>
            </div>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <div>
      <el-button size="small" type="primary">批量保存</el-button>
      <el-button size="small" type="success" @click="dialogVisible=true">添加分组</el-button>
    </div>
    <el-dialog title="添加图片分组" :visible.sync="dialogVisible"
      width="520px">
      <el-form class="form-box" label-width="85px" size="small">
        <el-form-item label="分组名称：">
          <el-input></el-input>
          <p class="tip">长度限制在10个字符以内</p>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button type="success" @click="dialogVisible = false" size="small">保&nbsp;存</el-button>
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
          name: '食品'
        },
        {
          name: '其他'
        },
        {
          name: '未命名'
        },
        {
          name: '食品'
        },
        {
          name: '食品'
        },
        {
          name: '食品'
        },
        {
          name: '食品'
        },
        {
          name: '其他'
        },
        {
          name: '未命名'
        },
        {
          name: '食品'
        },
        {
          name: '食品'
        },
        {
          name: '食品'
        }
      ]
    }
  },
  methods: {
    changeOrder (data) {
      if (data.type === 'up') {
        console.log('升序')
        console.log(data.row)
        data.row.$index = 1
      }
      if (data.type === 'down') {
        console.log('降序')
        console.log(data.row)
      }
    }
  }
}
</script>
<style lang="scss" scoped>
.table-order{
  i{
    color: #009A0B;
    cursor: pointer;
    font-size: 16px!important;
    &+i{
      color: #DF2626;
    }
  }
}
</style>
