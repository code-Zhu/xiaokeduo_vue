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
            <el-option label="正常" value="1"></el-option>
            <el-option label="潜在会员" value="2"></el-option>
            <el-option label="已删除" value="3"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item>
          <span class="mini-btn" type="primary">搜索</span>
          <a href="javascript:;">清除条件</a>
        </el-form-item>
      </el-form>
    </div>
    <div class="pannel">
      <el-button size="mini" type="primary" @click="dialogVisible4=true">批量设置上级</el-button>
      <el-button size="mini" type="primary" @click="dialogVisible1=true">批量设置等级</el-button>
      <el-button size="mini" type="primary">批量设置分组</el-button>
      <el-button size="mini" type="danger">批量删除</el-button>
      <el-button size="mini" type="primary" @click="dialogVisible5=true">设置密码</el-button>
      <el-button size="mini" type="primary">批量设为分销商</el-button>
      <el-button size="mini" type="primary">导出Excel</el-button>
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
        <el-table-column label="订单数/消费额" align="center" width="140" sortable>
          <template slot-scope="scope">
            <div style="color:#ff0000">
              <router-link to="/trade/all_order">{{scope.row.orderNum}}</router-link>
              <p>{{scope.row.consume}}</p>
            </div>
          </template>
        </el-table-column>
        <el-table-column label="账户余额" prop="balance" align="center" sortable>
          <template slot-scope="scope">
            <div style="color:#ff0000">
              <p>{{scope.row.balance}}</p>
            </div>
          </template>
        </el-table-column>
        <el-table-column label="注册时间" prop="time" align="center" width="110" sortable></el-table-column>
        <el-table-column label="操作" align="center">
          <template slot-scope="scope">
            <div class="table-ctr">
              <router-link to="/member/list/1">详情</router-link>
              <span>|</span>
              <a href="javascript:;">删除</a>
              <a href="javascript:;" @click="dialogVisible1 = true">设置等级</a>
              <!-- <a href="javascript:;">设置分组</a> -->
              <a href="javascript:;" @click="dialogVisible2 = true">调整积分</a>
              <a href="javascript:;" @click="dialogVisible3 = true">调整余额</a>
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
    <el-dialog title="设置等级" :visible.sync="dialogVisible1"
      width="400px">
      <el-form label-width="110px" size="small">
        <el-form-item label="请选择等级：" required>
          <el-select>
            <el-option label="金牌" value="1"></el-option>
            <el-option label="银牌" value="2"></el-option>
            <el-option label="会员" value="3"></el-option>
          </el-select>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button type="primary" @click="dialogVisible1 = false" size="small">确定修改</el-button>
        <el-button @click="dialogVisible1 = false" size="small">关&nbsp;闭</el-button>
      </span>
    </el-dialog>
    <el-dialog title="调整积分" :visible.sync="dialogVisible2"
      width="400px">
      <el-form label-width="100px" size="small" style="margin:0 40px">
        <el-form-item label="现有积分：">
          <span>0</span>
        </el-form-item>
        <el-form-item label="调整积分：" required>
          <el-input placeholder="正数加积分，负数减积分"></el-input>
        </el-form-item>
        <el-form-item label="调整备注：" required>
          <el-input placeholder="积分调整说明"></el-input>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button type="primary" @click="dialogVisible2 = false" size="small">确定修改</el-button>
        <el-button @click="dialogVisible2 = false" size="small">关&nbsp;闭</el-button>
      </span>
    </el-dialog>
    <el-dialog title="调整余额" :visible.sync="dialogVisible3"
      width="400px">
      <el-form label-width="100px" size="small" style="margin:0 40px">
        <el-form-item label="账户余额：">
          <span>￥0.00</span>
        </el-form-item>
        <el-form-item label="调整金额：" required>
          <el-input placeholder="0.00"></el-input>
        </el-form-item>
        <el-form-item label="调整备注：" required>
          <el-input type="textarea" placeholder="余额调整备注说明" :rows="3"></el-input>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button type="primary" @click="dialogVisible3 = false" size="small">确定修改</el-button>
        <el-button @click="dialogVisible3 = false" size="small">关&nbsp;闭</el-button>
      </span>
    </el-dialog>
    <el-dialog title="修改会员上级" :visible.sync="dialogVisible4"
      width="480px">
      <el-form label-width="100px" size="small" style="margin:0 40px">
        <el-form-item label="店铺名：">
          <el-input style="width: 215px"></el-input>
          <span class="mini-btn" type="primary">搜索</span>
        </el-form-item>
        <el-form-item label="请选择：" required>
          <el-select>
            <el-option label="销客多_8046" value="1"></el-option>
            <el-option label="测试上级" value="2"></el-option>
          </el-select>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button type="primary" @click="dialogVisible4 = false" size="small">确定修改</el-button>
        <el-button @click="dialogVisible4 = false" size="small">关&nbsp;闭</el-button>
      </span>
    </el-dialog>
    <el-dialog title="批量重置密码-默认：88888888" :visible.sync="dialogVisible5"
      width="400px">
      <el-form label-width="100px" size="small" style="margin:0 40px">
        <el-form-item label="新密码：" required>
          <el-input></el-input>
        </el-form-item>
        <el-form-item label="确认密码：" required>
          <el-input></el-input>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button type="primary" @click="dialogVisible5 = false" size="small">确定修改</el-button>
        <el-button @click="dialogVisible5 = false" size="small">关&nbsp;闭</el-button>
      </span>
    </el-dialog>
  </div>
</template>
<script>
export default {
  data () {
    return {
      dialogVisible1: false,
      dialogVisible2: false,
      dialogVisible3: false,
      dialogVisible4: false,
      dialogVisible5: false,
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
