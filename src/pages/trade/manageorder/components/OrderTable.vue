<template>
  <div class="order-table-box">
    <div class="pannel-content">
      <el-form :inline="true">
        <el-form-item label="订单号：" label-width="85px">
          <el-input size="mini" v-model="query.orderNumber"></el-input>
        </el-form-item>
        <el-form-item label="快递单号：" label-width="110px">
          <el-input size="mini" v-model="query.expressNumber"></el-input>
        </el-form-item>
        <el-form-item label="成交时间：">
          <el-date-picker v-model="query.dealTime" type="daterange" size="mini" style="width:330px"
            range-separator="至" start-placeholder="开始日期" end-placeholder="结束日期">
          </el-date-picker>
        </el-form-item>
        <el-form-item label="收货人：" label-width="85px">
          <el-input size="mini" v-model="query.receiver" placeholder="姓名/手机号"></el-input>
        </el-form-item>
        <el-form-item label="收货人地区：" label-width="110px">
          <area-select :level="2" type="text" v-model="query.receiverArea" :data="pcaa" size="small"
            :placeholders="['-请选择省-', '-请选择市-', '-请选择区-']"></area-select>
        </el-form-item>
        <el-form-item label="商品名称：" label-width="85px">
          <el-input size="mini" v-model="query.goodName"></el-input>
        </el-form-item>
        <el-form-item label="分销店铺名称：">
          <el-input size="mini" v-model="query.shopName"></el-input>
        </el-form-item>
        <el-form-item label="买家昵称：">
          <el-input size="mini" v-model="query.buyerName"></el-input>
        </el-form-item>
        <el-form-item>
          <span class="mini-btn" type="primary">查询</span>
          <a href="javascript:;">清除条件</a>
        </el-form-item>
      </el-form>
    </div>
    <div class="pannel order-table">
      <div class="pannel order-table-btn">
        <label>
          <input type="checkbox">
          <span>全选</span>
        </label>
        <el-button size="mini" type="primary">批量备注</el-button>
        <el-button size="mini" type="danger">批量删除</el-button>
        <span>|</span>
        <el-button size="mini" type="primary">导出Excel</el-button>
      </div>
      <div class="order-table-header">
        <b>商品信息</b>
        <b>单价</b>
        <b>数量</b>
        <b>售后</b>
        <b>实付金额</b>
        <b>收货人</b>
        <b>订单来源</b>
        <b>操作</b>
      </div>
      <ul class="order-table-body">
        <li class="order-table-item" v-for="(v, index) in tableList" :key="index">
          <p class="order-table-item-header">
            <label>
              <input type="checkbox">
              <span>订单编号：{{v.orderNumber}}</span>
            </label>
            <span>{{v.time}}</span>
            <span>买家：{{v.buyer}}</span>
            <i class="iconfont icon-biaoji"></i>
          </p>
          <div class="order-table-item-body">
            <div>
              <img :src="v.img" alt="">
              <a href="javascript:;">{{v.name}}</a>
            </div>
            <span class="order-table-item-column">￥{{v.price}}</span>
            <span class="order-table-item-column">{{v.number}}</span>
            <span class="order-table-item-column" style="color: #FF0000">{{v.afterSale}}</span>
            <div class="order-table-item-column fact-pay">
              <p>{{v.factPay}}</p>
              <p>（含运费￥0.00）</p>
            </div>
            <div class="order-table-item-column reciver">
              <p>{{v.reciver}}</p>
              <p>{{v.phone}}</p>
            </div>
            <span class="order-table-item-column">{{v.source}}</span>
            <div class="order-table-item-column">
              <el-button type="primary" size="mini">查看详情</el-button>
            </div>
          </div>
        </li>
      </ul>
    </div>
    <div class="table-footer">
      <el-pagination
        :page-size="10"
        layout="sizes, total, prev, next, jumper"
        :total="1000">
      </el-pagination>
    </div>
  </div>
</template>
<script>
import pcaa from 'area-data/pcaa'
export default {
  data () {
    return {
      pcaa,
      query: {
        orderNumber: '',
        expressNumber: '',
        dealTime: [],
        receiver: '',
        receiverArea: [],
        goodName: '',
        shopName: '',
        buyerName: ''
      },
      tableList: [
        {
          img: './static/img/none.gif',
          name: '测试苹果',
          orderNumber: '190121163525990',
          time: '2019-01-21 16:35:25',
          buyer: 'aaaaa',
          price: '9.50',
          number: '1',
          afterSale: '已关闭',
          factPay: '9.50',
          reciver: 'aaa',
          phone: '',
          source: 'admin'
        },
        {
          img: './static/img/none.gif',
          name: '测试苹果',
          orderNumber: '190121163525990',
          time: '2019-01-21 16:35:25',
          buyer: 'aaaaa',
          price: '9.50',
          number: '1',
          afterSale: '已关闭',
          factPay: '9.50',
          reciver: 'aaa',
          phone: '',
          source: 'admin'
        },
        {
          img: './static/img/none.gif',
          name: '测试苹果',
          orderNumber: '190121163525990',
          time: '2019-01-21 16:35:25',
          buyer: 'aaaaa',
          price: '9.50',
          number: '1',
          afterSale: '已关闭',
          factPay: '9.50',
          reciver: 'aaa',
          phone: '',
          source: 'admin'
        },
        {
          img: './static/img/apple.jpg',
          name: '测试苹果',
          orderNumber: '190121163525990',
          time: '2019-01-21 16:35:25',
          buyer: 'aaaaa',
          price: '9.50',
          number: '1',
          afterSale: '已关闭',
          factPay: '9.50',
          reciver: 'aaa',
          phone: '',
          source: 'admin'
        },
        {
          img: './static/img/none.gif',
          name: '测试苹果',
          orderNumber: '190121163525990',
          time: '2019-01-21 16:35:25',
          buyer: 'aaaaa',
          price: '9.50',
          number: '1',
          afterSale: '已关闭',
          factPay: '9.50',
          reciver: 'aaa',
          phone: '',
          source: 'admin'
        },
        {
          img: './static/img/apple.jpg',
          name: '测试苹果',
          orderNumber: '190121163525990',
          time: '2019-01-21 16:35:25',
          buyer: 'aaaaa',
          price: '9.50',
          number: '1',
          afterSale: '已关闭',
          factPay: '9.50',
          reciver: 'aaa',
          phone: '',
          source: 'admin'
        },
        {
          img: './static/img/none.gif',
          name: '测试苹果',
          orderNumber: '190121163525990',
          time: '2019-01-21 16:35:25',
          buyer: 'aaaaa',
          price: '9.50',
          number: '1',
          afterSale: '已关闭',
          factPay: '9.50',
          reciver: 'aaa',
          phone: '',
          source: 'admin'
        },
        {
          img: './static/img/apple.jpg',
          name: '测试苹果',
          orderNumber: '190121163525990',
          time: '2019-01-21 16:35:25',
          buyer: 'aaaaa',
          price: '9.50',
          number: '1',
          afterSale: '已关闭',
          factPay: '9.50',
          reciver: 'aaa',
          phone: '',
          source: 'admin'
        },
        {
          img: './static/img/none.gif',
          name: '测试苹果',
          orderNumber: '190121163525990',
          time: '2019-01-21 16:35:25',
          buyer: 'aaaaa',
          price: '9.50',
          number: '1',
          afterSale: '已关闭',
          factPay: '9.50',
          reciver: 'aaa',
          phone: '',
          source: 'admin'
        },
        {
          img: './static/img/apple.jpg',
          name: '测试苹果',
          orderNumber: '190121163525990',
          time: '2019-01-21 16:35:25',
          buyer: 'aaaaa',
          price: '9.50',
          number: '1',
          afterSale: '已关闭',
          factPay: '9.50',
          reciver: 'aaa',
          phone: '',
          source: 'admin'
        }
      ]
    }
  }
}
</script>
<style lang="scss">
.area-select{
  height: 28px;
  padding-top: 0;
  margin-left: 0;
  margin-right: 10px;
}
.area-select-wrap{
  margin-top: 5px;
}
.area-select .area-selected-trigger{
  padding: 0 20px 7px 12px;
  line-height: 30px;
}
.el-form--inline .el-form-item{
  margin-bottom: 0;
}
.order-table{
  .order-table-btn{
    margin-top: 10px;
  }
  .order-table-header{
    line-height: 30px;
    border-bottom: 2px solid #5C98D2;
    text-align: center;
    display: flex;
    margin-bottom: 10px;
    b{
      width: 110px;
      &:first-child{
        flex: 1;
      }
    }
  }
  .order-table-item{
    border: 1px solid #D7D7D7;
    margin-bottom: 20px;
    .order-table-item-header{
      display: flex;
      line-height: 30px;
      background-color: #F2F8FC;
      border-bottom: 1px solid #D7D7D7;
      label{
        margin-right: 40px
      }
      span{
        margin-right: 40px;
      }
      i{
        flex: 1;
        text-align: right;
        cursor: pointer;
      }
    }
    .order-table-item-body{
      height: 95px;
      display: flex;
      &>:first-child{
        flex: 1;
        padding-left: 5px;
        margin-top: 15px;
        img{
          width: 62px;
          height: 62px;
          border: 1px solid #CDCDCD;
        }
        a{
          vertical-align: top;
          font-size: 12px;
        }
      }
      .order-table-item-column{
        width: 110px;
        text-align: center;
        line-height: 95px;
        &.reciver,&.fact-pay{
          padding-top: 24px;
          line-height: 20px;
        }
        &.fact-pay{
          border-left: 1px solid #D7D7D7;
          p:last-child{
            font-size: 12px;
            color: #999
          }
        }
      }
    }
  }
}
</style>
