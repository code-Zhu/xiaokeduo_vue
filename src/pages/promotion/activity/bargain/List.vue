<template>
  <div>
    <div class="pannel pannel-content" style="margin-top: 0">
      <el-form inline size="mini">
        <el-form-item label="活动标题：">
          <el-input v-model="query.title"></el-input>
        </el-form-item>
        <el-form-item label="商品名称：">
          <el-input v-model="query.name"></el-input>
        </el-form-item>
        <el-form-item>
          <span class="mini-btn" type="primary">搜索</span>
        </el-form-item>
        <el-form-item>
          <a href="javascript:;">清除条件</a>
        </el-form-item>
      </el-form>
    </div>
    <div class="pannel">
      <el-button size="mini" type="danger">批量删除</el-button>
    </div>
    <div class="pannel">
      <el-table :data="list">
        <el-table-column type="selection"></el-table-column>
        <el-table-column label="商品名称" width="250">
          <template slot-scope="scope">
            <div>
              <img :src="scope.row.img" style="width:60px;height:60px;">
              <a href="javascript:;" style="vertical-align: top;">{{scope.row.name}}</a>
            </div>
          </template>
        </el-table-column>
        <el-table-column label="初始价格" align="center">
          <template slot-scope="scope">
            <span>￥{{scope.row.defaultValue}}</span>
          </template>
        </el-table-column>
        <el-table-column label="商品低价" align="center">
          <template slot-scope="scope">
            <span>￥{{scope.row.min}}</span>
          </template>
        </el-table-column>
        <el-table-column prop="time" label="活动时间" width="180"></el-table-column>
        <el-table-column prop="total" label="活动库存" align="center"></el-table-column>
        <el-table-column prop="deal" label="成交数量" align="center"></el-table-column>
        <el-table-column label="活动状态">
          <template slot-scope="scope">
            <span v-if="scope.row.status == 1">进行中</span>
            <span v-if="scope.row.status == 2">未开始</span>
            <span v-if="scope.row.status == 3">已结束</span>
          </template>
        </el-table-column>
        <el-table-column label="操作" width="80">
          <template slot-scope="scope">
            <div>
              <span class="mini-btn" type="warning" size="mini">查看</span>
              <span class="mini-btn" type="danger" size="mini" v-if="scope.row.status !==1">删除</span>
              <span class="mini-btn" type="light" size="mini" v-if="scope.row.status !==3">编辑</span>
            </div>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <div class="pannel table-footer">
      <el-pagination
        :page-size="10"
        layout="sizes, total, prev, next, jumper"
        :total="1000">
      </el-pagination>
    </div>
  </div>
</template>
<script>
export default {
  props: ['list'],
  data () {
    return {
      query: {
        title: '',
        name: ''
      }
      // list: [
      //   {
      //     name: '测试进行中的活动',
      //     good_num: 1,
      //     send_num: 0,
      //     sended: 0,
      //     status: 1
      //   },
      //   {
      //     name: '测试未开始的活动',
      //     good_num: 1,
      //     send_num: 0,
      //     sended: 0,
      //     status: 2
      //   },
      //   {
      //     name: '测试已结束的活动',
      //     good_num: 1,
      //     send_num: 0,
      //     sended: 0,
      //     status: 3
      //   }
      // ]
    }
  }
}
</script>
<style lang="scss" scoped>
.pannel-content{
  .el-form-item--mini.el-form-item{
    margin-bottom: 0
  }
}
.mini-btn+.mini-btn{
  margin-top: 5px;
}
</style>
