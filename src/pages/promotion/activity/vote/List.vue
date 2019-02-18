<template>
  <div>
    <div class="pannel pannel-content" style="margin-top: 0">
      <el-form inline size="mini">
        <el-form-item label="投票标题：">
          <el-input v-model="query.title" placeholder="投票标题"></el-input>
        </el-form-item>
        <el-form-item>
          <span class="mini-btn" type="primary">搜索</span>
        </el-form-item>
      </el-form>
    </div>
    <div class="pannel">
      <el-table :data="list">
        <el-table-column prop="title" label="投票标题" width="250"></el-table-column>
        <el-table-column prop="type" label="参与方式" align="center"></el-table-column>
        <el-table-column prop="time" label="有效期限" width="180" align="center"></el-table-column>
        <el-table-column prop="num" label="参与人数" align="center"></el-table-column>
        <el-table-column width="70">
          <template slot-scope="scope">
            <div class="icon-style">
              <i class="iconfont icon-ico"></i>
              <i class="iconfont icon-icon-link"></i>
            </div>
          </template>
        </el-table-column>
        <el-table-column label="操作" width="170">
          <template slot-scope="scope">
            <div>
              <span class="mini-btn" type="warning" size="mini" v-if="scope.row.status == 3">立即开始</span>
              <span class="mini-btn" type="light" size="mini" v-if="scope.row.status !== 3">查看投票</span>
              <span class="mini-btn" type="primary" size="mini" v-if="scope.row.status !== 2">编辑</span>
              <span class="mini-btn" type="warning" size="mini" v-if="scope.row.status == 1">结束</span>
              <span class="mini-btn" type="danger" size="mini" v-if="scope.row.status !== 1">删除</span>
              <!-- <span class="mini-btn" type="light" size="mini" v-if="scope.row.status !==3">编辑</span> -->
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
        title: ''
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
.icon-style{
  i{
    cursor: pointer;
    color: #61D0B9;
    margin-right: 0;
    font-size: 18px;
    &:hover{
      background: #fff;
    }
  }
}
</style>
