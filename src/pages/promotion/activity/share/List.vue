<template>
  <div>
    <div class="pannel">
      <el-button size="mini" type="danger">批量删除</el-button>
    </div>
    <div class="pannel">
      <el-table size="mini" :data="list">
        <el-table-column type="selection" width="50" align="center"></el-table-column>
        <el-table-column prop="name" label="活动名称" align="center"></el-table-column>
        <el-table-column prop="condition" label="发券需订单金额满" align="center"></el-table-column>
        <el-table-column prop="send_num" label="发券满额送券" align="center"></el-table-column>
        <el-table-column prop="time" label="有效期" align="center" width="280"></el-table-column>
        <el-table-column label="操作" align="center" width="160">
          <template slot-scope="scope">
            <div class="table-ctr">
              <el-button size="mini" type="warning">编辑</el-button>
              <el-button size="mini" type="danger">删除</el-button>
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
