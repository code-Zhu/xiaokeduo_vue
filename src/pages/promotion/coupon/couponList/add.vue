<template>
  <div>
    <p class="page-title">新增优惠卷</p>
    <div class="add-coupon-box">
      <div class="mobile-model">
        <div class="mobile-header">
          <i></i>
          <div class="mobile-title">优惠卷</div>
        </div>
        <div class="mobile-content">
          <div class="coupon-model">
            <span class="name">优惠卷</span>
            <div>
              <p>￥{{form1.value || '100.00'}}</p>
              <p v-if="form1.condition == 2">{{`满${form1.conditionValue || 0}减${form1.value || 0}`}}</p>
              <p v-else>直减{{form1.value || '100.00'}}</p>
              <p>生效时间：{{form1.time[0] || '2015-07-28 11:18:11'}}</p>
              <p>到期时间：{{form1.time[1] || '2015-07-28 11:18:11'}}</p>
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
          <p class="title"><b>优惠卷卷面信息：</b></p>
          <el-form label-width="110px" size="small" style="margin-top: 20px">
            <el-form-item label="优惠卷名称：" required>
              <el-input v-model="form1.name"></el-input>
            </el-form-item>
            <el-form-item label="面值：" required>
              <el-input v-model="form1.value"></el-input>
            </el-form-item>
            <el-form-item label="使用条件：" required>
              <p>
                <label>
                  <input v-model="form1.condition" value="1" type="radio">
                  <span>不限制</span>
                </label>
              </p>
              <label>
                <input v-model="form1.condition" value="2" type="radio">
                <span>订单满</span>
              </label>
              <el-input v-model="form1.conditionValue" style="width: 100px" :disabled="form1.condition==1"></el-input>
              <span>元可用</span>
            </el-form-item>
            <el-form-item label="有效期限：">
              <el-date-picker v-model="form1.time"
                type="datetimerange" range-separator="至" value-format="yyyy-MM-dd HH:mm:ss"
                start-placeholder="开始日期" end-placeholder="结束日期">
              </el-date-picker>
            </el-form-item>
            <el-form-item label="优惠卷类型：" required>
              <label>
                <input v-model="form1.type" type="checkbox" value="1">
                <span>手工发送</span>
              </label>
              <label>
                <input v-model="form1.type" type="checkbox" value="2">
                <span>自动领取</span>
              </label>
              <label>
                <input v-model="form1.type" type="checkbox" value="3">
                <span>活动赠送</span>
              </label>
            </el-form-item>
          </el-form>
        </div>
        <div class="pannel-content">
          <p class="title"><b>基本规则：</b></p>
          <el-form class="form-box" label-width="110px" size="small" style="margin-top: 20px">
            <el-form-item label="发放总量：" required>
              <el-input></el-input>
            </el-form-item>
            <el-form-item label="适用会员：" required>
              <div>
                <label>
                  <input type="checkbox">
                  <span>全部会员</span>
                </label>
              </div>
              <div>
                <label>
                  <input type="checkbox">
                  <span>代理商</span>
                </label>
                <label>
                  <input type="checkbox">
                  <span>合伙人</span>
                </label>
                <label>
                  <input type="checkbox">
                  <span>创客</span>
                </label>
              </div>
              <div>
                <label>
                  <input type="checkbox">
                  <span>新会员</span>
                </label>
                <label>
                  <input type="checkbox">
                  <span>活跃会员</span>
                </label>
                <label>
                  <input type="checkbox">
                  <span>沉睡会员</span>
                </label>
              </div>
            </el-form-item>
            <el-form-item label="每人限领：">
              <el-select value="1">
                <el-option v-for="(v,index) in 10" :value="v" :label="`${v}张`" :key="index"></el-option>
              </el-select>
              <p class="tip">每个用户自助领券上限，如不选，</p>
              <p class="tip">则默认为1张</p>
            </el-form-item>
            <el-form-item label="活动商品">
              <label>
                <input v-model="form2.goodType" type="radio" value="1">
                <span>全部商品参与</span>
              </label>
              <span class="tip">提示：新发布的商品也能适应此规则哦！</span>
              <div>
                <label>
                  <input v-model="form2.goodType" type="radio" value="2">
                  <span>部分商品参与</span>
                </label>
                <span class="tip">已选商品(<i style="color: #ff0000">0</i>)件</span>
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
        value: '',
        condition: 1,
        conditionValue: '',
        time: [],
        type: []
      },
      form2: {
        goodType: 1
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.add-coupon-box{
  display: flex;
  align-items: flex-start;
  .mobile-content{
    height: 520px;
    .coupon-model{
      height: 115px;
      background-color: #CD1313;
      color: #fff;
      margin: 15px 25px;
      display: flex;
      .name{
        font-size: 30px;
        width: 30px;
        line-height: 36px;
        padding: 0 10px 0 25px;
        border-right: 1px dashed #B60909;
        &+div{
          text-align: center;
          margin-left: 30px;
          :first-child{
            font-size: 34px;
            margin-bottom: 10px;
          }
          :nth-child(2){
            font-size: 24px;
            &~p{
              font-size: 12px;
              line-height: 20px;
            }
          }
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
    width: 630px;
    .title{
      border-bottom: 1px solid #ccc;
      padding-bottom: 10px;
    }
  }
}

</style>
