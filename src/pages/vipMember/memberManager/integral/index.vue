<template>
  <div class="member-integral">
    <p class="page-title">会员积分查询</p>
    <div class="pannel pannel-content">
      <el-form :inline="true" label-position="85px">
        <el-form-item label="昵称：">
          <el-input size="mini" v-model="query.name"></el-input>
        </el-form-item>
        <el-form-item label="手机号码：">
          <el-input size="mini" v-model="query.phone"></el-input>
        </el-form-item>
        <el-form-item>
          <a href="javascript:;">清除条件</a>
        </el-form-item><br>
        <el-form-item label="姓名：">
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
        <el-form-item>
          <span class="mini-btn" type="primary">搜索</span>
        </el-form-item>
      </el-form>
    </div>
    <div class="table-body">
      <el-table :data="list" border>
        <el-table-column label="昵称" prop="name"></el-table-column>
        <el-table-column label="姓名">
          <template slot-scope="scope">
            {{scope.row.username || '未设置'}}
          </template>
        </el-table-column>
        <el-table-column label="微信OpenID">
          <template slot-scope="scope">
            {{scope.row.wxid || '未绑定'}}
          </template>
        </el-table-column>
        <el-table-column label="手机">
          <template slot-scope="scope">
            {{scope.row.phone || '未绑定手机'}}
          </template>
        </el-table-column>
        <el-table-column label="会员等级" prop="grade" align="center"></el-table-column>
        <el-table-column label="会员可用积分" prop="integral" align="center"></el-table-column>
        <el-table-column align="center">
          <template slot-scope="scope">
            <router-link to="/member/integral/1">积分明细</router-link>
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
      query: {
        name: '',
        phone: '',
        username: '',
        grade: ''
      },
      list: [
        {
          name: 'wqeq',
          username: 'gg',
          wxid: '',
          phone: '13712345678',
          grade: '会员',
          integral: '0'
        },
        {
          name: 'wqeq',
          username: '',
          wxid: '',
          phone: '',
          grade: '会员',
          integral: '0'
        },
        {
          name: 'wqeq',
          username: 'gg',
          wxid: '',
          phone: '13712345678',
          grade: '会员',
          integral: '0'
        },
        {
          name: 'wqeq',
          username: '',
          wxid: '',
          phone: '',
          grade: '会员',
          integral: '0'
        }
      ]
    }
  }
}
</script>
