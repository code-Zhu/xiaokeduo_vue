<template>
  <div>
    <p class="page-title">订单详情</p>
    <div>
      <ul class="list-status">
        <li>
          <div>
            <span>1.买家下单</span>
          </div>
          <p>2019-02-10 18:14:22</p>
        </li>
        <li>
          <div>
            <span>2.买家付款</span>
          </div>
          <p>2019-02-10 18:14:22</p>
        </li>
        <li>
          <div>
            <span>3.发货</span>
          </div>
          <p>2019-02-10 18:14:22</p>
        </li>
        <li>
          <div>
            <span>4.买家确认收货</span>
          </div>
          <p>2019-02-10 18:14:22</p>
        </li>
      </ul>
    </div>
    <div class="pannel pannel-content list-pannel">
      <b>当前订单状态：已关闭</b>
      <span class="tip">关闭原因：到期自动关闭</span>
      <p>订单号：190215015015188(盛付通手机网页支付流水号：190215015015149)</p>
      <el-button size="small" type="primary" @click="dialogVisible=true">备注</el-button>
    </div>
    <el-tabs type="card">
      <el-tab-pane label="订单信息">
        <div class="pannel pannel-content" style="margin-top:0">
          <b>买家信息</b>
          <div class="buy-info">
            <div class="item">
              <span>姓名：</span>
              <span>测试姓名</span>
            </div>
            <div class="item">
              <span>手机号：</span>
              <span>18112341234</span>
            </div>
            <div class="item">
              <span>用户名：</span>
              <span>admin</span>
            </div>
            <div class="item">
              <span>所在地区：</span>
              <span>江西省，新余市，渝水区</span>
            </div>
            <div class="item">
              <span>收货时段：</span>
              <span>周一至周五</span>
            </div>
            <div class="item">
              <span>微信昵称：</span>
              <span></span>
            </div>
            <div class="item">
              <span>付款方式：</span>
              <span>待支付￥746.00</span>
            </div>
            <div class="item">
              <span>买家留言：</span>
              <span></span>
            </div>
          </div>
        </div>
        <div class="pannel">
          <el-table :data="list" border size="small">
            <el-table-column label="商品信息">
              <template slot-scope="scope">
                <img :src="scope.row.img" style="width:60px;height:60px">
                <a href="javascript:;" style="vertical-align:top;">{{scope.row.name}}</a>
              </template>
            </el-table-column>
            <el-table-column label="单价" align="center">
              <template slot-scope="scope">￥{{scope.row.price}}</template>
            </el-table-column>
            <el-table-column prop="num" label="数量" align="center"></el-table-column>
            <el-table-column prop="afterSale" label="售后" align="center"></el-table-column>
            <el-table-column prop="discount" label="涨价或优惠" align="center">
            </el-table-column>
            <el-table-column label="小计" align="center">
              <template slot-scope="scope">￥{{scope.row.total}}</template>
            </el-table-column>
            <el-table-column prop="origin" label="订单来源" align="center"></el-table-column>
            <el-table-column prop="discountType" label="优惠" width="150" align="center"></el-table-column>
          </el-table>
        </div>
        <div class="pannel table-footer">
          <span>实收款：</span>
          <span class="_red">￥746.00 含运费 ￥0.00</span>
        </div>
        <div class="pannel commision">
          <p class="top">佣金信息</p>
          <div class="column">
            <span>上二级分销商：</span>
            <span>-</span>
          </div>
          <div>
            <span>上一级分销商：</span>
            <span>-</span>
          </div>
          <div>
            <span>成交店铺：</span>
            <span>销客多_8053</span>
            <span class="_red">￥0.00</span>
            <span style="margin-left:200px">佣金总额：<span class="_red">￥0.00</span></span>
          </div>
        </div>
      </el-tab-pane>
      <el-tab-pane label="收货和物流信息">
        <div class="pannel-content express">
          <div>
            <span>收货地址：</span>
            <span>江西省 新余市 分宜县sdafadf，123123，15849388087</span>
          </div>
          <div>
            <span>配送方式：</span>
            <span>EMS</span>
          </div>
          <div>
            <span>物流公司：</span>
            <span>中通快递</span>
          </div>
          <div>
            <span>快递单号：</span>
            <span>4664</span>
          </div>
          <div>
            <span>快递单物流信息：</span>
            <span style="color:#CC6600">单号不正确，请检查相关单号。</span>
          </div>
          <div>
            <span></span>
            <a href="javascript:;">查看物流</a>
          </div>
        </div>
      </el-tab-pane>
    </el-tabs>
    <el-dialog title="修改备注" :visible.sync="dialogVisible"
      width="520px">
      <el-form class="form-box" label-width="85px" size="small" style="margin:0 40px">
        <el-form-item label="标志：" required>
          <label>
            <input type="radio">
            <i style="color: #309930" class="iconfont icon-true"></i>
          </label>
          <label>
            <input type="radio">
            <i style="color: #CB1E02" class="iconfont icon-gantanhao"></i>
          </label>
          <label>
            <input type="radio">
            <i style="color: #CB1E02" class="iconfont icon-biaoji"></i>
          </label>
          <label>
            <input type="radio">
            <i style="color: #309930" class="iconfont icon-biaoji"></i>
          </label>
          <label>
            <input type="radio">
            <i style="color: #FFC500" class="iconfont icon-biaoji"></i>
          </label>
          <label>
            <input type="radio">
            <i style="color: #ABABAB" class="iconfont icon-biaoji"></i>
          </label>
        </el-form-item>
        <el-form-item label="备注：" required>
          <el-input type="textarea" :rows="2"></el-input>
          <p class="tip">(备注信息仅后台可见)</p>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button type="success" @click="dialogVisible = false" size="small">保&nbsp;存</el-button>
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
      list: [
        {
          img: './static/img/none.gif',
          name: '衣服',
          price: 836,
          num: 1,
          afterSale: '',
          discount: '-￥90',
          total: 746,
          origin: '销客多_8053',
          discountType: '管理员调价减:￥90.00'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
._red{
  color: #ff0000;
}
.list-pannel{
  border: 1px solid #ccc;
  line-height: 30px;
  b{
    font-size: 16px;
    &+span{
      font-size: 12px;
      color: #666;
    }
  }
}
.list-status{
  display: flex;
  text-align: center;
  li{
    flex: 1;
    >div{
      font-size: 16px;
      background-color: #FFE7BB;
      color: #FE6728;
      margin-bottom: 10px;
      height: 25px;
      line-height: 25px;
      position: relative;
      overflow: hidden;
    }
    &:not(:last-child){
      >div{
        &::after{
          content: '>';
          position: absolute;
          color: #fff;
          font-size: 64px;
          top: -5px;
          right: -10px;
        }
      }
    }
  }
}
.buy-info{
  display: flex;
  flex-wrap: wrap;
  font-size: 12px;
  .item{
    line-height: 30px;
    width: 330px;
    span:first-child{
      display: inline-block;
      width: 110px;
      text-align: right;
    }
  }
}
.commision{
  border: 1px solid #ccc;
  line-height: 30px;
  padding-bottom: 10px;
  .top{
    background-color: #E4E4E4;
    border-bottom: 1px solid #ccc;
    font-size: 16px;
    padding-left: 10px;
    &~div{
      margin-left: 70px;
    }
  }
}
.express{
  margin-top: 0;
  div{
    line-height: 30px;
    span:first-child{
      display: inline-block;
      width: 170px;
      padding: 0 15px;
      text-align: right;
    }
  }
}
</style>
