<template>
  <div>
    <p class="page-title">添加分享助力活动</p>
    <div class="add-share-box">
      <div class="mobile-model">
        <div class="mobile-header">
          <i></i>
          <div class="mobile-title">分享助力</div>
        </div>
        <div class="mobile-content">
          <div class="share-model">
            <p>{{form2.title||'活动标题'}}</p>
            <div>
              <div class="act-img">
                <b>60×60</b>
              </div>
              <p>{{form2.intr||'活动介绍'}}</p>
            </div>
          </div>
          <div style="flex:1"></div>
          <ul class="tab">
            <li>
              <i class="iconfont icon-shouye"></i>
              <p>店铺主页</p>
            </li>
            <li>
              <i class="iconfont icon-user"></i>
              <p>会员主页</p>
            </li>
            <li>
              <i class="iconfont icon-liebiaolist46"></i>
              <p>所有商品</p>
            </li>
            <li>
              <i class="iconfont icon-wenjian"></i>
              <p>申请分销</p>
            </li>
          </ul>
        </div>
        <div class="mobile-footer">
          <i></i>
        </div>
      </div>
      <div>
        <div class="pannel pannel-content">
          <p class="title"><b>基本信息：</b></p>
          <el-form label-width="130px" size="small" style="margin-top: 20px;margin-right:90px">
            <el-form-item label="活动名称：" required>
              <el-input v-model="form1.name"></el-input>
            </el-form-item>
            <el-form-item label="选择优惠卷：" required>
              <el-select v-model="form1.coupon">
                <el-option label="满50减5" value="1"></el-option>
              </el-select>
              <p v-if="form1.coupon">优惠券有效期：2019-02-22 11:16:00 ~ 2019-02-28 18:50:59</p>
            </el-form-item>
          </el-form>
        </div>
        <div class="pannel-content">
          <p class="title"><b>活动信息：</b></p>
          <el-form class="form-box" label-width="130px" size="small" style="margin-top: 20px;margin-right:90px">
            <el-form-item label="活动时间：">
              <el-date-picker v-model="form2.time"
                type="datetimerange" range-separator="至" value-format="yyyy-MM-dd HH:mm:ss"
                start-placeholder="开始日期" end-placeholder="结束日期">
              </el-date-picker>
            </el-form-item>
            <el-form-item label="订单金额满：" required>
              <el-input style="width:100px"></el-input>
              <span>元，可分享</span>
              <el-input style="width:100px"></el-input>
              <span>张优惠卷</span>
            </el-form-item>
            <el-form-item label="朋友圈显示图片：">
              <label class="img-box">
                <input type="file" class="hide">
                <span>选择图片</span>
              </label>
              <p class="tip">建议尺寸：200 x 200 像素，小于300KB，支持jpg、gif、png格式</p>
            </el-form-item>
            <el-form-item label="朋友圈分享标题：">
              <el-input v-model="form2.title"></el-input>
            </el-form-item>
            <el-form-item label="活动介绍：">
              <el-input v-model="form2.intr" type="textarea" :rows="5"></el-input>
              <div>
                <p>
                  <span>微信昵称标签</span>
                  <span style="color: #ff0000">微信昵称</span>
                </p>
                <div>
                  <span>店铺名称标签</span>
                  <span style="color: #ff0000">店铺名称</span>
                  <span class="tip">在标题和活动介绍中插入微信昵称或店铺名标签，会员在分享到朋友圈 的时候可以在相应位置显示其微信昵称或店铺名。</span>
                </div>
              </div>
            </el-form-item>
          </el-form>
        </div>
      </div>
    </div>
    <div class="submit-box-fixed">
      <el-button type="success" size="small" v-if="form2.goodType == 1">保存</el-button>
      <el-button type="primary" size="small" v-if="form2.goodType == 2" @click="$router.push('/promotion/coupons_list/add/good')">下一步，选择宝贝</el-button>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      form1: {
        name: '',
        coupon: ''
      },
      form2: {
        title: '',
        intr: '',
        time: []
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.add-share-box{
  display: flex;
  align-items: flex-start;
  .mobile-content{
    height: 520px;
    background: #fff;
    .share-model{
      height: 90px;
      margin: 15px 20px;
      line-height: 20px;
      background-color: #F7F7F7;
      >div{
        display: flex;
        .act-img{
          width: 60px;
          height: 60px;
          background-color: #C7C7C7;
          color: #8F8F8F;
          line-height: 60px;
          text-align: center;
          margin-right: 10px;
        }
        p{
          width: 230px;
        }
      }
    }
    .tab{
      display: flex;
      margin: 3px 13px;
      li{
        cursor: pointer;
        flex: 1;
        text-align: center;
        color: #000;
        i{
          font-size: 28px;
          margin-right: 0;
        }
      }
    }
  }
  .pannel-content{
    margin-top: 0;
    margin-left: 10px;
    width: 620px;
    .title{
      border-bottom: 1px solid #ccc;
      padding-bottom: 10px;
    }
  }
  .img-box{
    display: inline-block;
    width: 76px;
    height: 76px;
    border: 1px solid #A19C9C;
    line-height: 76px;
    text-align: center;
  }
}

</style>
