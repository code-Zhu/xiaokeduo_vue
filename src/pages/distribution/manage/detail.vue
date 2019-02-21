<template>
  <div>
    <p class="page-title">分销商详情</p>
    <div class="pannel">
      <p class="pannel-title">基本信息</p>
      <div class="pannel-content base-info">
        <div class="info-item">
          <div class="img-box">
            <img :src="'./static/img/user.png'">
            <p>个人头像</p>
          </div>
          <div>
            <p>
              <span>联系人：1111</span>
            </p>
            <p>
              <span>手机号码：1111</span>
            </p>
            <p>
              <span>用户名：12345678/9</span>
            </p>
            <p>
              <span>微信昵称：12345678/9</span>
            </p>
          </div>
        </div>
        <div class="info-item">
          <div class="img-box">
            <img :src="'./static/img/api.png'">
            <p>店铺二维码</p>
          </div>
          <div>
            <p>
              <span>店铺名：销客多_8804</span>
            </p>
            <p>
              <span>分销商等级：分公司</span>
            </p>
            <p>
              <span>店铺链接：http://47.93.12.216:10285/Default.aspx?ReferralId=8804</span>
            </p>
            <p>
              <span>申请时间：2019-02-12 15:42:42</span>
            </p>
          </div>
        </div>
        <div class="info-item">
          <a href="javascript:;">复制链接</a>
        </div>
      </div>
    </div>
    <div class="pannel">
      <p class="pannel-title">业绩</p>
      <ul class="score pannel-content">
        <li>
          <span>0</span>
          <p>成交单数</p>
        </li>
        <li>
          <span>￥0.00</span>
          <p>销售金额</p>
        </li>
        <li>
          <span>￥0.00</span>
          <p>佣金总额</p>
        </li>
        <li>
          <span>￥0.00</span>
          <p>可提现佣金余额</p>
        </li>
        <li>
          <span>￥0.00</span>
          <p>已提现佣金总额</p>
        </li>
      </ul>
    </div>
    <div class="pannel">
      <p class="pannel-title">提现记录</p>
      <el-table border>
        <el-table-column label="申请时间"></el-table-column>
        <el-table-column label="提现金额"></el-table-column>
        <el-table-column label="账号类型"></el-table-column>
        <el-table-column label="账号"></el-table-column>
        <el-table-column label="收款人"></el-table-column>
        <el-table-column label="支付日期"></el-table-column>
      </el-table>
    </div>
    <div class="pannel">
      <el-button type="primary" size="small">返回</el-button>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.pannel-title{
  font-size: 16px;
  line-height: 22px;
  padding-left: 15px;
  border-left: 2px solid #ff0000;
  margin: 15px 0;
}
.base-info{
  display: flex;
  justify-content: space-between;
  .info-item{
    display: flex;
    .img-box{
      width: 90px;
      height: 90px;
      text-align: center;
      margin-right: 10px;
      &+div{
        line-height: 30px;
      }
      img{
        width: 100%;
        height: 100%;
      }
    }
  }
}
.score{
  display: flex;
  // padding: 20px 0;
  height: 80px;
  li{
    width: 180px;
    height: 100%;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    font-size: 18px;
    font-weight: 600;
    &:not(:last-child){
      border-right: 1px solid #B9CACA;
    }
    span{
      color: #125ACB;
      &+p{
        color: #333;
        margin-top: 10px;
      }
    }
  }
}
</style>
