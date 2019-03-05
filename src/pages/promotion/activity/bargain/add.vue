<template>
  <div>
    <div class="page-title">
      <p>添加好友砍价</p>
      <span style="color: #ff0000">好友砍价商品不同时享受满减活动,不能使用优惠劵,不能使用积分抵扣订单金额</span>
    </div>
    <div class="pannel">
      <el-button type="primary" size="small" @click="$router.go(-1)">&lt;&lt;返回</el-button>
    </div>
    <div class="add-box">
      <div class="mobile-model">
        <div class="mobile-header">
          <i></i>
          <div class="mobile-title">好友砍价</div>
        </div>
        <div class="mobile-content">
          <div class="item">
            <p>{{form.title || '分享标题'}}</p>
            <div class="item-img-box">
              <img :src="'../static/img/none.gif'">
              <span>商品名称</span>
            </div>
          </div>
        </div>
        <div class="mobile-footer">
          <i></i>
        </div>
      </div>
      <div>
        <div class="pannel pannel-content">
          <p class="title"><b>活动设置：</b></p>
          <el-form class="form-box" label-width="130px" size="small" style="margin-top: 20px;margin-right:90px">
            <el-form-item label="分享标题：" required>
              <el-input v-model="form.title" placeholder="该活动被分享的时候显示的默认标题"></el-input>
            </el-form-item>
            <el-form-item label="活动时间：">
              <el-date-picker v-model="form.time"
                type="datetimerange" range-separator="至" value-format="yyyy-MM-dd HH:mm:ss"
                start-placeholder="开始日期" end-placeholder="结束日期">
              </el-date-picker>
            </el-form-item>
            <el-form-item label="活动封面：">
              <label class="img-box">
                <input type="file" class="hide" accept="image/png, image/jpeg, image/gif">
                <span>选择封面</span>
              </label>
              <p class="tip">建议尺寸：600 x 200 像素，小于300KB，支持jpg、gif、png格式</p>
            </el-form-item>
            <el-form-item label="活动介绍：">
              <el-input type="textarea" :rows="4"></el-input>
            </el-form-item>
          </el-form>
        </div>
        <div class="pannel-content">
          <p class="title"><b>商品设置：</b></p>
          <el-form class="form-box" label-width="130px" size="small" style="margin-top: 20px;margin-right:90px">
            <el-form-item label="选择商品：" required>
              <a href="javascript:;">点击选择</a>
              <span>选择的多规格商品每个规格的价格必须相同</span>
              <p class="tip">活动商品尚未设置,请选择活动商品</p>
            </el-form-item>
            <el-form-item label="活动库存：" required>
              <el-input style="width:100px"></el-input>
              <p class="tip">该商品参加砍价活动最大可销售数量</p>
            </el-form-item>
            <el-form-item label="限购数量：" required>
              <el-input style="width:100px"></el-input>
              <p class="tip">同一个会员最多购买数量</p>
            </el-form-item>
            <el-form-item label="初始价格：" required>
              <el-input style="width:100px"></el-input>
              <span>元</span>
            </el-form-item>
            <el-form-item label="活动底价：" required>
              <el-input style="width:100px"></el-input>
              <span>元</span>
              <p class="tip">最终成交价格不会低于底价</p>
            </el-form-item>
            <el-form-item label="是否分佣：" required>
              <label>
                <input type="checkbox">
                <span>分佣</span>
              </label>
              <div>
                <span>佣金折扣：</span>
                <el-input style="width: 100px"></el-input>
                <span>折</span>
                <p class="tip">在商品销售佣金的基础上进行折扣计算(0&lt;折扣值&lt;=10)</p>
              </div>
            </el-form-item>
            <el-form-item label="砍价方式：" required>
              <div>
                <label>
                  <input type="radio">
                  <span>每次砍掉</span>
                </label>
                <el-input style="width:100px"></el-input>
                <span>元</span>
              </div>
              <div>
                <label>
                  <input type="radio">
                  <span>随机砍掉</span>
                </label>
                <el-input placeholder="最小值" style="width:100px"></el-input>
                <span>~</span>
                <el-input placeholder="最小值" style="width:100px"></el-input>
                <span>元</span>
              </div>
            </el-form-item>
          </el-form>
        </div>
      </div>
    </div>
    <div class="submit-box-fixed">
      <el-button type="success" size="small">保存</el-button>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      form: {
        title: '',
        time: []
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
    background: #fff;
    .item{
      padding: 10px;
      margin: 10px 13px;
      border: 1px solid #E4E4E4;
      border-radius: 5px;
      p{
        border-bottom: 1px solid #E4E4E4;
        padding-bottom: 5px;
      }
      .item-img-box{
        display: flex;
        margin-top: 10px;
        align-items: center;
        img{
          width: 60px;
          height: 60px;
          margin-right: 10px;
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
