<template>
  <div>
    <div class="pannel pannel-content">
      <el-form inline size="mini">
        <el-form-item label="活动标题：">
          <el-input v-model="query.title"></el-input>
        </el-form-item>
        <el-form-item label="揭晓方式：">
          <el-select v-model="query.type">
            <el-option label="全部" value=""></el-option>
            <el-option label="满份开奖" value="1"></el-option>
            <el-option label="到期开奖" value="2"></el-option>
            <el-option label="到期满份开奖" value="3"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="状态：">
          <el-select v-model="query.status">
            <el-option label="全部" value=""></el-option>
            <el-option label="进行中" value="1"></el-option>
            <el-option label="未开始" value="2"></el-option>
            <el-option label="已结束" value="3"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="">
          <span class="mini-btn" type="primary">查询</span>
        </el-form-item>
        <el-form-item label="">
          <a href="javascript:;">清除条件</a>
        </el-form-item>
      </el-form>
    </div>
    <div class="pannel">
      <el-button size="mini" type="success">批量开始</el-button>
      <el-button size="mini" type="danger">批量删除</el-button>
    </div>
    <div class="pannel">
      <el-table size="mini" :data="list">
        <el-table-column type="selection" width="50" align="center"></el-table-column>
        <el-table-column prop="name" label="活动封面">
          <template slot-scope="scope">
            <img :src="scope.row.img" style="width: 128px;height:40px">
          </template>
        </el-table-column>
        <el-table-column prop="title" label="活动标题" width="150" align="center">
          <template slot-scope="scope">
            <a href="javascript:;">{{scope.row.title}}</a>
          </template>
        </el-table-column>
        <el-table-column prop="time" label="起止时间" align="center" width="150"></el-table-column>
        <el-table-column prop="type" label="揭晓方式"></el-table-column>
        <el-table-column label="满足份数">
          <template slot-scope="scope">
            <span>{{scope.row.condition}}</span>
            <p>已售：<span style="color: #ff0000">{{scope.row.saled}}</span></p>
          </template>
        </el-table-column>
        <el-table-column prop="status" label="状态" align="center">
          <template slot-scope="scope">
            <span v-if="scope.row.status==1">进行中</span>
            <span v-if="scope.row.status==2">未开始</span>
            <span v-if="scope.row.status==3">已结束</span>
          </template>
        </el-table-column>
        <el-table-column prop="status" label="开奖状态" align="center">
          <template slot-scope="scope">
            <div style="color: #FF6A00">
              <span v-if="scope.row.status==3">已退款</span>
              <span v-else>未开奖</span>
            </div>
          </template>
        </el-table-column>
        <el-table-column label="操作" width="180">
          <template slot-scope="scope">
            <div>
              <span class="mini-btn" type="primary">查看</span>
              <span class="mini-btn" type="primary" v-if="scope.row.status!==3">编辑</span>
              <span class="mini-btn" type="success" v-if="scope.row.status==2">开启</span>
              <span class="mini-btn" type="danger" v-if="scope.row.status!==1">删除</span>
              <span class="mini-btn" type="danger" v-if="scope.row.status==1">结束</span>
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
        type: '',
        status: ''
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
    margin-bottom: 5px
  }
}
</style>
