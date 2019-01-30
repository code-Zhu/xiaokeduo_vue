<template>
  <div class="member-list">
    <p class="page-title">会员列表</p>
    <el-tabs v-model="tabsName" type="card" @tab-click="handleTabsClick">
      <el-tab-pane label="所有会员" name="all"></el-tab-pane>
      <el-tab-pane label="新会员" name="new"></el-tab-pane>
      <el-tab-pane label="活跃会员" name="lazy"></el-tab-pane>
      <el-tab-pane label="沉睡会员" name="active"></el-tab-pane>
    </el-tabs>
    <div class="pannel pannel-content">
      <el-form :inline="true" label-width="85px">
        <el-form-item label="昵称：">
          <el-input size="mini" v-model="query.name"></el-input>
        </el-form-item>
        <el-form-item label="手机号码：">
          <el-input size="mini" v-model="query.name"></el-input>
        </el-form-item>
        <el-form-item label="所属上级：">
          <el-input size="mini" v-model="query.superior"></el-input>
        </el-form-item>
        <el-form-item label="用户名：">
          <el-input size="mini" v-model="query.username"></el-input>
        </el-form-item>
        <el-form-item label="会员等级：">
          <el-select size="mini" v-model="query.grade" style="width: 178px">
            <el-option label="全部" value=""></el-option>
            <el-option label="白金" value="1"></el-option>
            <el-option label="黄金" value="2"></el-option>
            <el-option label="会员" value="3"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="会员状态：">
          <el-select size="mini" v-model="query.status" style="width: 178px">
            <el-option label="全部" value=""></el-option>
            <el-option label="白金" value="1"></el-option>
            <el-option label="黄金" value="2"></el-option>
            <el-option label="会员" value="3"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item>
          <span class="mini-btn" type="primary">搜索</span>
          <a href="javascript:;">清除条件</a>
        </el-form-item>
      </el-form>
    </div>
    <div class="pannel">
      <el-button size="mini" type="primary">批量设置上级</el-button>
      <el-button size="mini" type="primary">批量设置等级</el-button>
      <el-button size="mini" type="primary">批量设置分组</el-button>
      <el-button size="mini" type="danger">批量删除</el-button>
      <el-button size="mini" type="primary">设置密码</el-button>
      <el-button size="mini" type="primary">批量设为分销商</el-button>
    </div>
    <div class="pannel table-body">
      <el-table :data="list" border="">
        <el-table-column type="selection" align="center"></el-table-column>
        <el-table-column label="头像" align="center">
          <template slot-scope="scope">
            <img :src="scope.row.avator" width="60" height="60">
          </template>
        </el-table-column>
        <el-table-column label="昵称/手机" align="center" width="120">
          <template slot-scope="scope">
            <p>{{scope.row.name}}</p>
            <p style="color:#808080">{{scope.row.phone || '未绑定手机'}}</p>
          </template>
        </el-table-column>
        <el-table-column label="用户名" prop="username" align="center"></el-table-column>
        <el-table-column label="会员等级" prop="grade" align="center"></el-table-column>
        <el-table-column label="上级" prop="superior" align="center"></el-table-column>
        <el-table-column label="订单数/消费额" align="center" width="120">
          <template slot-scope="scope">
            <div style="color:#ff0000">
              <a href="javascript:;">{{scope.row.orderNum}}</a>
              <p>{{scope.row.consume}}</p>
            </div>
          </template>
        </el-table-column>
        <el-table-column label="账户余额" prop="balance" align="center">
          <template slot-scope="scope">
            <div style="color:#ff0000">
              <p>{{scope.row.balance}}</p>
            </div>
          </template>
        </el-table-column>
        <el-table-column label="注册时间" prop="time" align="center" width="110"></el-table-column>
        <el-table-column label="操作" align="center">
          <template slot-scope="scope">
            <div class="table-ctr">
              <a href="javascript:;">详情</a>
              <span>|</span>
              <a href="javascript:;">删除</a>
              <a href="javascript:;">设置等级</a>
              <a href="javascript:;">设置分组</a>
              <a href="javascript:;">调整积分</a>
              <a href="javascript:;">调整余额</a>
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
  data () {
    return {
      tabsName: 'all',
      query: {
        name: '',
        phone: '',
        superior: '',
        username: '',
        grade: '',
        status: ''
      },
      list: [
        {
          avator: './static/img/user.png',
          name: 'zxc',
          phone: '',
          username: 'zxc12345',
          grade: '会员',
          superior: '主店',
          orderNum: 0,
          consume: 0,
          balance: 0,
          time: '2019-01-29 23:18:58'
        },
        {
          avator: './static/img/user.png',
          name: 'zxc',
          phone: '13712345678',
          username: 'zxc12345',
          grade: '会员',
          superior: '主店',
          orderNum: 0,
          consume: 0,
          balance: 0,
          time: '2019-01-29 23:18:58'
        },
        {
          avator: './static/img/user.png',
          name: 'zxc',
          phone: '13712345678',
          username: 'zxc12345',
          grade: '会员',
          superior: '主店',
          orderNum: 0,
          consume: 0,
          balance: 0,
          time: '2019-01-29 23:18:58'
        },
        {
          avator: './static/img/user.png',
          name: 'zxc',
          phone: '13712345678',
          username: 'zxc12345',
          grade: '会员',
          superior: '主店',
          orderNum: 0,
          consume: 0,
          balance: 0,
          time: '2019-01-29 23:18:58'
        },
        {
          avator: './static/img/user.png',
          name: 'zxc',
          phone: '13712345678',
          username: 'zxc12345',
          grade: '会员',
          superior: '主店',
          orderNum: 0,
          consume: 0,
          balance: 0,
          time: '2019-01-29 23:18:58'
        },
        {
          avator: './static/img/user.png',
          name: 'zxc',
          phone: '13712345678',
          username: 'zxc12345',
          grade: '会员',
          superior: '主店',
          orderNum: 0,
          consume: 0,
          balance: 0,
          time: '2019-01-29 23:18:58'
        },
        {
          avator: './static/img/user.png',
          name: 'zxc',
          phone: '13712345678',
          username: 'zxc12345',
          grade: '会员',
          superior: '主店',
          orderNum: 0,
          consume: 0,
          balance: 0,
          time: '2019-01-29 23:18:58'
        }
      ]
    }
  },
  methods: {
    handleTabsClick () {
      this.$message('正在请求数据')
    }
  }
}
</script>
