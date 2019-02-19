<template>
  <div>
    <p class="page-title">分销中心</p>
    <div class="pannel center-box">
      <div class="mobile-box" style="background-image: url('./static/img/phonebg.jpg');">
        <p class="title text-white">{{formData.center_name || '分销中心'}}</p>
        <div class="info text-white">
          <p>天天的小店【初级】</p>
          <p>{{formData.comm_name || '佣金'}}金额： ￥20.00</p>
          <div>
            <span>再获得</span>
            <span data>180.00</span>
            <span>元{{formData.comm_name || '佣金'}}升级为</span>
            <span data>中级用户</span>
          </div>
        </div>
        <ul class="text-white tab">
          <li>会员中心</li>
          <li>分销中心</li>
        </ul>
        <ul class="summary text-white">
          <li>
            <span>￥0.00</span>
            <p>销售额</p>
          </li>
          <li>
            <span>￥0.00</span>
            <p>今日{{formData.comm_name || '佣金'}}</p>
          </li>
          <li>
            <span>0</span>
            <p>今日订单</p>
          </li>
        </ul>
        <ul class="dplist">
          <li class="item">
            <i class="iconfont icon-order"></i>
            <span class="item-name">店铺订单</span>
            <span class="number">0</span>
            <b class="el-icon-arrow-right"></b>
          </li>
          <li class="item">
            <i class="iconfont icon-shop2"></i>
            <span class="item-name">{{formData.team_name || '我的下属'}}</span>
            <span class="number">0</span>
            <b class="el-icon-arrow-right"></b>
          </li>
          <li>
            <span class="item-name">{{formData.shop_name || '店铺会员'}}</span>
            <span class="number">0</span>
            <b class="el-icon-arrow-right"></b>
          </li>
          <li>
            <span class="item-name">{{formData._1_shop || '一级分店'}}</span>
            <span class="number">0</span>
            <b class="el-icon-arrow-right"></b>
          </li>
          <li>
            <span class="item-name">{{formData._2_shop || '二级分店'}}</span>
            <span class="number">0</span>
            <b class="el-icon-arrow-right"></b>
          </li>
          <li class="item">
            <i class="iconfont icon-meiyuan"></i>
            <span class="item-name">{{formData.my_comm || '我的佣金'}}</span>
            <b class="el-icon-arrow-right"></b>
          </li>
          <li class="item">
            <i class="iconfont icon-liebiao1"></i>
            <span class="item-name">{{formData.remark || '分销说明'}}</span>
            <b class="el-icon-arrow-right"></b>
          </li>
        </ul>
      </div>
      <div class="edit-right-ctr">
        <p class="title">分销名称编辑</p>
        <el-form label-width="170px">
          <el-form-item label="分销中心名称" required>
            <el-input v-model="formData.center_name" size="small" placeholder="分销中心" :maxlength="10"></el-input>
          </el-form-item>
          <el-form-item label="佣金名称" required>
            <el-input v-model="formData.comm_name" size="small" placeholder="佣金" :maxlength="4"></el-input>
          </el-form-item>
          <el-form-item label="分销团队名称" required>
            <el-input v-model="formData.team_name" size="small" placeholder="我的下属" :maxlength="10"></el-input>
          </el-form-item>
          <el-form-item label="我的店铺名称" required>
            <el-input v-model="formData.shop_name" size="small" placeholder="店铺会员" :maxlength="10"></el-input>
          </el-form-item>
          <el-form-item label="一级分店名称" required>
            <el-input v-model="formData._1_shop" size="small" placeholder="一级分店" :maxlength="10"></el-input>
          </el-form-item>
          <el-form-item label="二级分店名称" required>
            <el-input v-model="formData._2_shop" size="small" placeholder="二级分店" :maxlength="10"></el-input>
          </el-form-item>
          <el-form-item label="我的佣金名称" required>
            <el-input v-model="formData.my_comm" size="small" placeholder="我的佣金" :maxlength="10"></el-input>
          </el-form-item>
          <el-form-item label="分销说明名称" required>
            <el-input v-model="formData.remark" size="small" placeholder="分销说明" :maxlength="10"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button size="small" type="primary">保存</el-button>
            <a href="javascript:;">恢复默认</a>
          </el-form-item>
        </el-form>
        <div class="footer">
          <span>说明：</span>
          <div>
            <p>1. 为了商城运营更好，分销设置内容必须符合政策运营范围；</p>
            <p>2. 由分销设置内容引发的政策风险，由商家自行承担。</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      formData: {
        center_name: '分销中心',
        comm_name: '佣金',
        team_name: '我的下属',
        shop_name: '店铺会员',
        _1_shop: '一级分店',
        _2_shop: '二级分店',
        my_comm: '我的佣金',
        remark: '分销说明'
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.center-box{
  position: relative;
  .mobile-box{
    width: 345px;
    height: 770px;
    box-sizing: border-box;
    background-repeat: no-repeat;
    padding: 98px 17px 148px;
    .text-white{
      color: #fff;
    }
    .title{
      line-height: 38px;
      text-align: center;
      font-size: 16px;
    }
    .info{
      height: 80px;
      padding-left: 78px;
      padding-top: 20px;
      line-height: 24px;
      :last-child{
        color: #999;
        font-size: 12px;
        span[data]{
          color: #FAA20E;
        }
      }
    }
    .tab, .summary{
      display: flex;
      width: 100%;
      text-align: center;
      li{
        flex: 1;
      }
    }
    .summary{
      margin-top: 10px;
      line-height: 22px;
    }
    .dplist{
      margin-top: 38px;
      background-color: #F5F5F5;
      li{
        background-color: #fff;
        line-height: 34px;
        border-top: 1px solid #D9D9D9;
        padding-left: 40px;
        display: flex;
        align-items: center;
        .item-name{
          flex: 1;
        }
        span.number{
          width: 28px;
          height: 18px;
          line-height: 18px;
          text-align: center;
          border: 1px solid #C82100;
          border-radius: 9px;
          margin-right: 5px;
        }
        b{
          font-size: 18px;
          font-weight: 600;
          margin-right: 10px;
        }
      }
      .item{
        position: relative;
        margin-bottom: 10px;
        border-bottom: 1px solid #D9D9D9;
        .iconfont{
          position: absolute;
          left: 20px;
        }
      }
    }
    .focus-style{
      border: 1px dashed #FFA200;
    }
  }
  .edit-right-ctr{
    margin-left: 20px;
    margin-top: 80px;
    padding:20px 30px;
    box-sizing: border-box;
    .title{
      padding-bottom: 10px;
      border-bottom: 1px solid #D3D3D3;
      margin-bottom: 10px;
    }
    .footer{
      padding-top: 20px;
      border-top: 1px solid #D3D3D3;
      font-size: 12px;
      color: #999;
      display: flex;
      line-height: 24px;
    }
  }
}
</style>
