<template>
  <div>
    <div class="pannel">
      <el-button size="mini" type="danger">批量删除</el-button>
    </div>
    <div class="pannel">
      <el-table size="mini" :data="list">
        <el-table-column type="selection" width="50" align="center"></el-table-column>
        <el-table-column prop="name" label="活动名称" align="center"></el-table-column>
        <el-table-column prop="good_num" label="可兑换商品(件)" align="center" sortable></el-table-column>
        <el-table-column prop="send_num" label="可兑换商品发放总量" align="center" width="160" sortable></el-table-column>
        <el-table-column prop="sended" label="已兑换商品总数" align="center" sortable></el-table-column>
        <el-table-column prop="status" label="状态" align="center">
          <template slot-scope="scope">
            <span v-if="scope.row.status==1">进行中</span>
            <span v-if="scope.row.status==2">未开始</span>
            <span v-if="scope.row.status==3">已结束</span>
          </template>
        </el-table-column>
        <el-table-column label="操作" align="center" width="260">
          <template slot-scope="scope">
            <div class="table-ctr" style="justify-content: flex-start">
              <el-button size="mini" type="warning" :disabled="scope.row.status==3">修改商品</el-button>
              <el-button size="mini" type="primary">查看详情</el-button>
              <a href="javascript:;" v-if="scope.row.status!==3" style="margin-left: 10px">编辑</a>
              <a href="javascript:;" style="margin-left: 10px">删除</a>
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
