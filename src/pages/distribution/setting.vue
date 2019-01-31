<template>
  <div>
    <p class="page-title">分销设置</p>
    <el-tabs v-model="tabsName" type="card">
      <el-tab-pane label="分销设置" name="first"></el-tab-pane>
    </el-tabs>
    <div class="pannel pannel-content">
      <b>开启三级分佣</b>
      <p>开启后，成交店铺和其上两级分销商都能获得相应的佣金</p>
      <p>关闭后，则只有成交店铺可获得相应的佣金</p>
      <el-switch v-model="switchValue1"
        active-color="#13ce66" inactive-color="#ccc">
      </el-switch>
    </div>
    <div class="pannel pannel-content">
      <b>分销商消费是否参与分佣</b>
      <p>关闭后，分销商自己购买不参与销售分佣，分销商的上三级获得销售佣金</p>
      <el-switch v-model="switchValue2"
        active-color="#13ce66" inactive-color="#ccc">
      </el-switch>
    </div>
    <div class="pannel pannel-content">
      <b>启用分销商店中店</b>
      <p>关闭后，分销商店铺不能编辑及使用店铺LOGO、店铺名称、店铺相关信息，统一使用主站店铺信息</p>
      <el-switch v-model="switchValue4"
        active-color="#13ce66" inactive-color="#ccc">
      </el-switch>
    </div>
    <div class="pannel pannel-content">
      <b>佣金自动转入余额</b>
      <p>开启后，分销商所获得佣金将直接转入账户余额;</p>
      <p>关闭后，分销商需要提交申请佣金转入余额;</p>
      <el-switch v-model="switchValue4"
        active-color="#13ce66" inactive-color="#ccc">
      </el-switch>
    </div>
    <div class="pannel pannel-content">
      <b>会员自动生成分销商</b>
      <p>开启后，会员达到分销条件后自动成为分销商，无需提交申请</p>
      <el-switch v-model="switchValue5"
        active-color="#13ce66" inactive-color="#ccc">
      </el-switch>
    </div>
    <div class="pannel pannel-content">
      <b>开启申请分销提醒</b>
      <p>开启后，普通用户在交易完成时如果满足有门槛的分销商申请条件，则会提示用户可以申请成为分销商</p>
      <el-switch v-model="switchValue6"
        active-color="#13ce66" inactive-color="#ccc">
      </el-switch>
    </div>
    <div class="pannel pannel-content">
      <b>分销商门槛条件</b>
      <p class="tip">关闭后，会员无门槛成为分销商</p>
      <el-switch v-model="switchValue7"
        active-color="#13ce66" inactive-color="#ccc">
      </el-switch>
      <div class="condition" v-if="switchValue7">
        <div>
          <label>
            <input type="checkbox" v-model="condition.type" value="recharge">
            <span>账户单次充值</span>
          </label>
          <el-input v-model="condition.rechargeValue" size="small" style="width: 110px"></el-input>
          <span>可成为分销商</span>
        </div>
        <p style="margin-left:24px">或</p>
        <div>
          <label>
            <input type="checkbox" v-model="condition.type" value="totalConsume">
            <span>累计消费额达到</span>
          </label>
          <el-input v-model="condition.totalConsume" size="small" style="width: 110px"></el-input>
          <span>元，可成为分销商</span>
        </div>
        <p style="margin-left:24px">或</p>
        <label>
          <input type="checkbox" v-model="condition.type" value="appoint">
          <span>购买指定商品可申请</span>
        </label>
        <div class="appoint">
          <el-form label-width="85px">
            <el-form-item label="生效时间：">
              <el-date-picker v-model="condition.appointTime" size="mini"
                type="daterange" range-separator="至" start-placeholder="开始日期" end-placeholder="结束日期">
              </el-date-picker>
            </el-form-item>
          </el-form>
          <ul class="appoint-list">
            <li v-for="(v, index) in condition.appoint_list" :key="index">
              <img :src="v.img">
              <p>{{v.label}}</p>
              <i class="el-icon-circle-close-outline"></i>
            </li>
            <li>
              <i class="el-icon-plus"></i>
            </li>
          </ul>
        </div>
        <el-button size="small" type="success">保存</el-button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      tabsName: 'first',
      switchValue1: true,
      switchValue2: true,
      switchValue3: true,
      switchValue4: true,
      switchValue5: true,
      switchValue6: true,
      switchValue7: false,
      condition: {
        type: [],
        rechargeValue: 100,
        totalConsume: 1,
        appointTime: [],
        appoint_list: [
          {
            img: './static/img/apple.jpg',
            label: '0投资'
          },
          {
            img: './static/img/none.gif',
            label: 'eqwqwe'
          }
        ]
      }
    }
  }
}
</script>
<style lang="scss" scoped>
.pannel-content{
  position: relative;
  line-height: 20px;
  b::before{
    content: '*';
    color: #ff0000;
  }
  .el-switch{
    position: absolute;
    right: 10px;
    top: 10px;
  }
  &:last-child{
    border: 1px solid #ddd;
    padding: 0;
    border-radius: 0;
    padding-top: 15px;
    b,p.tip{
      margin: 0 10px;
    }
    p.tip{
      font-size: 12px;
      color: #999;
      padding-bottom: 10px;
    }
    .condition{
      background: #fff;
      padding: 15px 0;
      padding-left: 90px;
    }
    .appoint{
      background-color: #F0F0F0;
      padding: 15px 10px;
      margin-bottom: 10px;
      .appoint-list{
        display: flex;
        li:not(:last-child){
          margin-right: 10px;
          position: relative;
          img{
            width: 60px;
            height: 60px;
          }
          i{
            font-size: 18px;
            position: absolute;
            right: -8px;
            top: -8px;
            cursor: pointer;
            display: none;
          }
          &:hover{
            i{
              display: block;
            }
          }
        }
        li:last-child{
          cursor: pointer;
          font-size: 36px;
          height: 56px;
          line-height: 56px;
          text-align: center;
          width: 56px;
          border: 2px dashed #999;
        }
      }
    }
  }
}
</style>
