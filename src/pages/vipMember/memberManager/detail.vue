<template>
  <div>
    <p class="page-title">会员详情</p>
    <div class="pannel">
      <p class="title">
        <span>基本信息</span>
        <router-link to="/member/detail/edit/1">编辑用户信息</router-link>
      </p>
      <div class="pannel-content base-info">
        <img :src="'./static/img/user.png'" style="width:90px;height:90px">
        <ul>
          <li>
            <span>用户名：</span>
            <span>aaa111</span>
          </li>
          <li>
            <span>会员等级：</span>
            <span>白金</span>
          </li>
          <li>
            <span>手机号码：</span>
            <span>15849388087</span>
          </li>
          <li>
            <span>注册时间：</span>
            <span>2019/2/1 10:45:24</span>
          </li>
          <li>
            <span>微信昵称：</span>
            <span>aaaaaa11</span>
          </li>
          <li>
            <span>真实姓名：</span>
            <span>123123</span>
          </li>
          <li>
            <span>上级店铺：</span>
            <span>茅岩莓茶_8797</span>
          </li>
          <li>
            <span>详细地址：</span>
            <span>江西省新余市分宜县sdafadf</span>
          </li>
          <li>
            <span>QQ：</span>
            <span></span>
          </li>
          <li>
            <span>微信OpenId：</span>
            <span></span>
          </li>
        </ul>
      </div>
    </div>
    <div class="pannel">
      <p class="title">账户信息</p>
      <ul class="account-info">
        <li>
          <b>1</b>
          <p>成交订单数</p>
        </li>
        <li>
          <b>￥310.00</b>
          <p>总消费额</p>
        </li>
        <li>
          <span>
            <b>￥800.00</b>
            <i class="iconfont icon-recode" @click="dialogVisible=true"></i>
          </span>
          <p>账户余额</p>
        </li>
        <li>
          <b>￥0.00</b>
          <p>冻结金额</p>
        </li>
      </ul>
    </div>
    <div class="pannel">
      <p class="title">消费明细</p>
      <el-tabs value="first" type="card" @tab-click="handleClick">
        <el-tab-pane label="订单消费明细" name="first">
          <div class="pannel">
            <span>交易时间：</span>
            <el-date-picker v-model="time1" size="mini"
              type="daterange" range-separator="~"
              start-placeholder="开始日期" end-placeholder="结束日期">
            </el-date-picker>
            <span class="mini-btn" type="primary">查询</span>
          </div>
          <el-table :data="list1" border size="small">
            <el-table-column prop="trade" label="交易号" empty-text="--"></el-table-column>
            <el-table-column prop="order" label="订单号"></el-table-column>
            <el-table-column prop="reciver" label="收货人"></el-table-column>
            <el-table-column label="实付金额">
              <template slot-scope="scope">
                <span>￥{{scope.row.pay}}</span>
              </template>
            </el-table-column>
            <el-table-column prop="type" label="支付方式"></el-table-column>
            <el-table-column prop="time" label="订单完成时间"></el-table-column>
            <el-table-column prop="remark" label="备注"></el-table-column>
          </el-table>
          <div class="pannel table-footer">
            <el-pagination
              :page-size="10"
              layout="total, prev, next, jumper"
              :total="1000">
            </el-pagination>
          </div>
        </el-tab-pane>
        <el-tab-pane label="余额收支明细" name="second">
          <div class="pannel">
            <span>交易时间：</span>
            <el-date-picker v-model="time2" size="mini"
              type="daterange" range-separator="~"
              start-placeholder="开始日期" end-placeholder="结束日期">
            </el-date-picker>
            <span class="mini-btn" type="primary">查询</span>
          </div>
          <el-table :data="list2" border size="small">
            <el-table-column prop="order" label="流水号"></el-table-column>
            <el-table-column label="交易金额">
              <template slot-scope="scope">
                <span style="color: #3BB134" v-if="scope.row.num>0">+￥{{scope.row.num}}</span>
                <span style="color: #ff0000" v-else>-￥{{scope.row.num*-1}}</span>
              </template>
            </el-table-column>
            <el-table-column label="账户余额">
              <template slot-scope="scope">
                <span>￥{{scope.row.balance}}</span>
              </template>
            </el-table-column>
            <el-table-column prop="type" label="交易类型"></el-table-column>
            <el-table-column prop="method" label="交易方式"></el-table-column>
            <el-table-column prop="time" label="交易时间"></el-table-column>
            <el-table-column prop="remark" label="备注"></el-table-column>
          </el-table>
          <div class="pannel table-footer">
            <el-pagination
              :page-size="10"
              layout="total, prev, next, jumper"
              :total="1000">
            </el-pagination>
          </div>
        </el-tab-pane>
      </el-tabs>
      <el-button type="primary" size="small" @click="$router.go(-1)">返回</el-button>
    </div>
    <el-dialog title="调整余额" :visible.sync="dialogVisible"
      width="400px">
      <el-form class="form-box" label-width="100px" size="small" style="margin:0 40px">
        <el-form-item label="账户余额：">
          <span>￥0.00</span>
        </el-form-item>
        <el-form-item label="调整金额：" required>
          <el-input placeholder="0.00"></el-input>
          <p class="tip">正数增加余额，负数减少余额</p>
        </el-form-item>
        <el-form-item label="调整备注：" required>
          <el-input type="textarea" placeholder="余额调整备注说明" :rows="3"></el-input>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button type="primary" @click="dialogVisible = false" size="small">确定修改</el-button>
        <el-button @click="dialogVisible = false" size="small">关&nbsp;闭</el-button>
      </span>
    </el-dialog>
  </div>
</template>
<script>
export default {
  data () {
    return {
      dialogVisible: false,
      time1: [],
      time2: [],
      list1: [
        {
          trade: '',
          order: '190201105715683',
          reciver: '123123',
          pay: '310',
          type: '线下支付',
          time: '2019-02-01',
          remark: 'adasdaf'
        }
      ],
      list2: [
        {
          order: '190201105715683',
          num: 800,
          balance: '310',
          type: '店铺调整',
          method: '余额',
          time: '2019-02-01',
          remark: '11'
        },
        {
          order: '190201105715683',
          num: -800,
          balance: '310',
          type: '店铺调整',
          method: '余额',
          time: '2019-02-01',
          remark: '11'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
p.title{
  font-size: 16px;
  line-height: 16px;
  padding-left: 15px;
  border-left: 2px solid #ff0000;
  margin: 30px 0;
  a{
    font-size: 14px;
    margin-left: 30px
  }
}
.base-info{
  line-height: 30px;
  height: 150px;
  display: flex;
  ul{
    margin-left: 50px;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    li{
      width: 300px;
      span:first-child{
        text-align: right;
        display: inline-block;
        width: 95px;
      }
    }
  }
}
.account-info{
  display: flex;
  background-color: #F7F7F7;
  height: 80px;
  padding: 20px 0;
  text-align: center;
  li{
    width: 240px;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    font-size: 18px;
    &:not(:last-child){
      border-right: 1px solid #B9CACA;
    }
    b{
      color: #125ACB;
    }
    p{
      font-weight: 600;
      font-size: 18px;
      margin-top: 10px;
    }
    i{
      color: #8E8E8E;
      font-size: 24px;
      cursor: pointer;
    }
  }
}
</style>
