<template>
  <div>
    <p class="page-title">新增一元夺宝</p>
    <div class="pannel">
      <el-button size="small" type="primary" @click="$router.go(-1)">&lt;&lt;返回</el-button>
    </div>
    <div class="add-box">
      <div class="mobile-model">
        <div class="mobile-header">
          <i></i>
          <div class="mobile-title">店铺主页</div>
        </div>
        <div class="mobile-content">
          <div class="img-box">
            <b>640×200</b>
          </div>
          <div>
            <p class="title">{{form.title||'活动标题未设置'}}</p>
            <p>奖品名称：未设置</p>
            <p>奖品说明：总数量{{form.count}}，每份价格<span style="color:#ff0000">￥{{form.price}}</span>，每人限购1份</p>
            <p>开奖方式：到结束时间，购买数份数大于<span style="color:#ff0000">{{form.min}}</span>份自动开奖</p>
            <p>距离结束：<span style="color:#ff0000">{{openTime}}</span></p>
            <div>
              <span class="mini-btn" type="primary">分享</span>
              <span class="mini-btn" type="danger">去看看</span>
            </div>
          </div>
        </div>
        <div class="mobile-footer">
          <i></i>
        </div>
      </div>
      <div>
        <div class="pannel pannel-content">
          <p class="title"><b>基本信息：</b></p>
          <el-form class="form-box" label-width="110px" size="small" style="margin-top: 20px">
            <el-form-item label="活动标题：" required>
              <el-input v-model="form.title" placeholder="填不多于20个字的标题"></el-input>
            </el-form-item>
            <el-form-item label="活动封面：" required>
              <label class="act-img-box">
                <input type="file" class="hide">
                <i class="iconfont icon-add"></i>
              </label>
              <p class="tip">点击上传，建议尺寸：640 x 200 像素，小于300KB</p>
            </el-form-item>
            <el-form-item label="活动说明：">
              <el-input type="textarea" placeholder="作为分享出去的主要内容" :rows="5"></el-input>
            </el-form-item>
          </el-form>
        </div>
        <div class="pannel pannel-content">
          <p class="title"><b>奖项设置：</b></p>
          <el-form class="form-box" label-width="110px" size="small" style="margin-top: 20px">
            <el-form-item label="选择奖品：" required>
              <a href="javascript:;">点击选择</a>
              <p class="tip">夺宝商品尚未设置，请选择夺宝商品！</p>
            </el-form-item>
            <el-form-item label="奖品数量：" required>
              <el-input v-model="form.count" style="width: 100px"></el-input>
              <span class="tip">设置夺宝商品开奖时，发放的商品总数量</span>
            </el-form-item>
            <el-form-item label="夺宝定价：" required>
              <el-input v-model="form.price" style="width: 100px"></el-input>
              <span>元</span>
              <span class="tip">设置夺宝商品购买其中一份的价格</span>
            </el-form-item>
            <el-form-item label="每人限购：" required>
              <el-input style="width: 100px"></el-input>
              <span>份</span>
              <span class="tip">该商品单个会员最大购买份数</span>
            </el-form-item>
          </el-form>
        </div>
        <div class="pannel pannel-content">
          <p class="title"><b>活动设置：</b></p>
          <el-form class="form-box" label-width="110px" size="small" style="margin-top: 20px">
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
            <el-form-item label="活动时间：" required>
              <el-date-picker v-model="form.time"
                type="datetimerange" range-separator="至" value-format="yyyy-MM-dd HH:mm:ss"
                start-placeholder="开始日期" end-placeholder="结束日期">
              </el-date-picker>
            </el-form-item>
            <el-form-item label="满足份数：" required>
              <el-input v-model="form.min" style="width: 100px"></el-input>
              <span class="tip">设置夺宝商品最少被购买多少份才能开奖</span>
            </el-form-item>
            <el-form-item label="开奖方式：" required>
              <div>
                <label>
                  <input v-model="form.openType" type="radio" value="1">
                  <span>到结束时间并达到满足份数开奖(<span style="color:#ff0000">推荐</span>)</span>
                </label>
                <p class="tip">在结束时间前，可以一直购买，达到结束时间且达到满足份数后自动开奖。</p>
              </div>
              <div>
                <label>
                  <input v-model="form.openType" type="radio" value="2">
                  <span>达到满足份数开奖</span>
                </label>
                <p class="tip">在结束时间前，达到满足份数后自动开奖。</p>
              </div>
              <div>
                <label>
                  <input v-model="form.openType" type="radio" value="3">
                  <span>到结束时间开奖</span>
                </label>
                <p class="tip">在结束时间前，可以一直购买，达到结束时间后就自动开奖。</p>
              </div>
            </el-form-item>
          </el-form>
        </div>
      </div>
    </div>
    <div class="submit-box-fixed">
      <el-button type="primary" size="small">保存</el-button>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      form: {
        title: '',
        count: 1,
        price: 1,
        min: 0,
        time: [],
        openType: '1'
      }
    }
  },
  computed: {
    openTime () {
      if (!this.form.time || this.form.time.length < 1) {
        return '0天0小时0分0秒'
      } else {
        let s = new Date(this.form.time[1]).getTime() - new Date(this.form.time[0]).getTime()
        let h = parseInt(s / 3600 / 1000 % 24)
        let d = parseInt(s / 3600 / 1000 / 24)
        let m = parseInt(s / 1000 / 60 % 60)
        let ss = s / 1000 % 60
        return `${d}天${h}小时${m}分${ss}秒`
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.add-box{
  display: flex;
  align-items: flex-start;
  margin-bottom: 100px;
  .mobile-content{
    height: 360px;
    .img-box{
      height: 100px;
      color: #8F8F8F;
      background-color: #C7C7C7;
      margin: 10px 13px;
      font-size: 22px;
      line-height: 100px;
      text-align: center;
      &+div{
        line-height: 24px;
        margin: 0 13px;
        font-size: 12px;
        .title{
          font-size: 16px;
        }
        >:last-child{
          padding: 5px 0;
          text-align: right;
          border-top: 1px solid #ccc;
          border-bottom: 1px solid #ccc;
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
    .act-img-box{
      width: 160px;
      height: 50px;
      display: inline-block;
      border: 2px dashed #ccc;
      text-align: center;
      line-height: 50px;
      color: #B5B5B5;
    }
  }
}

</style>
