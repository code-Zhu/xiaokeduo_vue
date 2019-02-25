<template>
  <div class="member-withdraw">
    <p class="page-title">提现申请列表</p>
    <div class="pannel pannel-content">
      <el-form :inline="true">
        <el-form-item label="用户名：">
          <el-input size="mini" v-model="query.username"></el-input>
        </el-form-item>
        <el-form-item label="申请日期：">
          <el-date-picker v-model="query.time"
            type="daterange" range-separator="至" size="mini"
            start-placeholder="开始日期" end-placeholder="结束日期">
          </el-date-picker>
        </el-form-item>
        <el-form-item>
          <span class="mini-btn" type="primary">搜索</span>
        </el-form-item>
        <el-form-item label="快速查看：">
          <span class="mini-btn" plain>近七天</span>
          <span class="mini-btn" plain>近一个月</span>
        </el-form-item>
      </el-form>
    </div>
    <div class="pannel table-btn">
      <el-button type="primary" size="mini" @click="dialogVisible3 = true">批量审核</el-button>
      <el-button type="primary" size="mini" @click="dialogVisible4 = true">批量驳回</el-button>
      <span>|</span>
      <el-button type="primary" size="mini">支付宝批量发放</el-button>
      <el-button type="primary" size="mini">微信支付批量发放</el-button>
    </div>
    <div class="table-body">
      <el-table :data="list" border>
        <el-table-column type="selection"></el-table-column>
        <el-table-column label="用户名">
          <template slot-scope="scope">
            <p>{{scope.row.username}}</p>
            <p>{{scope.row.phone}}</p>
          </template>
        </el-table-column>
        <el-table-column label="申请时间" prop="time" width="160" align="center"></el-table-column>
        <el-table-column label="提现金额" align="center">
          <template slot-scope="scope">
            <p style="color: #ff0000">￥{{scope.row.sum}}</p>
          </template>
        </el-table-column>
        <el-table-column label="账号类型" prop="type" align="center"></el-table-column>
        <el-table-column label="账号/卡号/OpenID" prop="id" width="150px" align="center"></el-table-column>
        <el-table-column label="收款人" prop="reciver" align="center"></el-table-column>
        <el-table-column label="操作" width="60">
          <template slot-scope="scope">
            <div class="table-ctr">
              <span class="mini-btn" type="light" style="margin-bottom:5px" @click="dialogVisible1=true">发放</span>
              <span class="mini-btn" plain @click="dialogVisible2=true">驳回</span>
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
    <el-dialog title="提现支付-支付宝提现" :visible.sync="dialogVisible1"
      width="400px">
      <el-form label-width="130px" size="small">
        <el-form-item label="申请日期：">
          <span>2018-12-17 17:11:10</span>
        </el-form-item>
        <el-form-item label="申请金额：" required>
          <span>1500.00</span>
        </el-form-item>
        <el-form-item label="收款账号：" required>
          <span>18888888888</span>
        </el-form-item>
        <el-form-item label="收款人：" required>
          <span>王先生</span>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button type="primary" @click="dialogVisible1 = false" size="small">立即支付</el-button>
        <el-button @click="dialogVisible1= false" size="small">关&nbsp;闭</el-button>
      </span>
    </el-dialog>
    <el-dialog title="申请驳回" :visible.sync="dialogVisible2"
      width="500px">
      <el-form class="form-box" label-width="95px" size="small">
        <el-form-item label="驳回理由：" required>
          <el-input type="textarea" :rows="4"></el-input>
          <p class="tip">驳回理由必需填写</p>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button type="primary" @click="dialogVisible2 = false" size="small">确&nbsp;定</el-button>
        <el-button @click="dialogVisible2= false" size="small">关&nbsp;闭</el-button>
      </span>
    </el-dialog>
    <el-dialog title="批量审核" :visible.sync="dialogVisible3"
      width="500px">
        <span class="verify">
          <span>￥1600.00</span>
          <span>1212123</span>
        </span>
      <span slot="footer" class="dialog-footer">
        <el-button type="primary" @click="dialogVisible3 = false" size="small">确定审核</el-button>
        <el-button @click="dialogVisible3= false" size="small">关&nbsp;闭</el-button>
      </span>
    </el-dialog>
    <el-dialog title="批量驳回" :visible.sync="dialogVisible4"
      width="500px">
      <el-form size="small" label-width="90px">
        <el-form-item label="驳回理由" required>
          <el-input type="textarea" :rows="3"></el-input>
        </el-form-item>
      </el-form>
        <span class="verify">
          <span>￥1600.00</span>
          <span>1212123</span>
        </span>
      <span slot="footer" class="dialog-footer">
        <el-button type="primary" @click="dialogVisible4 = false" size="small">确定驳回</el-button>
        <el-button @click="dialogVisible4 = false" size="small">关&nbsp;闭</el-button>
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
      query: {
        username: '',
        time: []
      },
      list: [
        {
          username: '12sad',
          phone: '15812345678',
          time: '2018-12-17 17:11:10',
          sum: '1500',
          type: '支付宝',
          id: '12321@qq.com',
          reciver: '王先生'
        },
        {
          username: '12sad',
          phone: '15812345678',
          time: '2018-12-17 17:11:10',
          sum: '1600',
          type: '支付宝',
          id: '12321@qq.com',
          reciver: '王先生'
        }
      ]
    }
  }
}
</script>
<style lang="scss" scoped>
.verify{
  border: 1px solid #E5E5E5;
  padding: 3px 10px;
  :first-child{
    color: #D95E0B;
    margin-right: 20px;
  }
}
</style>
