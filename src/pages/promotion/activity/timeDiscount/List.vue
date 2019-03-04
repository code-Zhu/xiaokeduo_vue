<template>
  <div>
    <!-- <div class="pannel">
      <el-button size="mini" type="danger">批量删除</el-button>
    </div> -->
    <div class="pannel">
      <el-table size="mini" :data="list">
        <!-- <el-table-column type="selection" width="50" align="center"></el-table-column> -->
        <el-table-column prop="name" label="活动名称" align="center"></el-table-column>
        <el-table-column prop="time" label="活动时间" align="center" width="150"></el-table-column>
        <el-table-column prop="obj" label="优惠对象" width="200" align="center">
          <template slot-scope="scope">
            <span>{{scope.row.obj.join(',')}}</span>
          </template>
        </el-table-column>
        <el-table-column label="活动商品" align="center" sortable>
          <template slot-scope="scope">
            <span>已加入{{scope.row.good_num}}</span>
          </template>
        </el-table-column>
        <!-- <el-table-column prop="status" label="活动状态" align="center">
          <template slot-scope="scope">
            <span v-if="scope.row.status==1">进行中</span>
            <span v-if="scope.row.status==2">未开始</span>
            <span v-if="scope.row.status==3">已结束</span>
          </template>
        </el-table-column> -->
        <el-table-column label="操作" align="center" width="80">
          <template slot-scope="scope">
            <div>
              <a href="javascript;;">编辑</a>
              <span>|</span>
              <a href="javascript;;">删除</a>
              <a href="javascript;;">修改商品</a>
              <a href="javascript;;" v-if="scope.row.status == 1 || scope.row.status == 3">暂停活动</a>
              <a href="javascript;;" v-if="scope.row.status == 0">恢复活动</a>
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
