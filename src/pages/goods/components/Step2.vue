<template>
  <div class="step2">
    <div class="pannel-content">
      <p class="content-title">基本信息</p>
      <el-form class="form-box" label-width="140px">
        <el-form-item label="所属分类：">
          <span>药材</span>
          <a href="javascript:;">[编辑]</a>
        </el-form-item>
        <el-form-item label="商品类型：">
          <el-select size="small" v-model="baseInfo.good_type">
            <el-option label="--请选择--" value=""></el-option>
            <el-option label="苹果" value="1"></el-option>
          </el-select>
          <p class="tip">
            <span>如果商品没有多种规格，且常规参数能满足商品展示，则不用选</span>
            <a href="javascript:;">[商品类型管理]</a>
          </p>
        </el-form-item>
        <el-form-item label="品牌：">
          <el-select size="small" v-model="baseInfo.brand">
            <el-option label="--请选择--" value=""></el-option>
            <el-option label="法国梧桐" value="1"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="商品名称：" required>
          <el-input size="small" v-model="baseInfo.good_name"></el-input>
        </el-form-item>
        <el-form-item label="排序：">
          <el-input size="small" v-model="baseInfo.order"></el-input>
          <p class="tip">商品显示顺序，越大排在越前</p>
        </el-form-item>
        <el-form-item label="商品标签定义：">
          <span class="mini-btn" type="primary" @click="add_tag=!add_tag">{{add_tag?'取消':'添加'}}</span>
          <div class="add-tag" :class="{'hide-add-ctr': add_tag}">
            <label><input type="radio" name="tags" v-model="baseInfo.good_tag" value="1">新品</label>
            <label><input type="radio" name="tags" v-model="baseInfo.good_tag" value="2">热卖</label>
            <div>
              <el-input v-model="diy_tag" size="mini" style="width:160px"></el-input>
              <span class="mini-btn" type="success">保存</span>
            </div>
          </div>
        </el-form-item>
        <el-form-item label="商品简介：">
          <el-input v-model="baseInfo.good_intr" type="textarea" :rows="3"></el-input>
          <p class="tip">微信分享给好友时会显示这里的文案，如果没有填写，则显示商品名称</p>
        </el-form-item>
        <el-form-item label="商品图片：">
          <div class="good-img">
            <ul class="img-list">
              <li v-for="(v, index) in baseInfo.good_img" :key="index">
                <div class="img-box">
                  <img :src="v.url">
                  <div class="ctr">
                    <i class="iconfont icon-left"></i>
                    <i class="iconfont icon-right"></i>
                    <i class="iconfont icon-cuo"></i>
                  </div>
                </div>
                <p>
                  <span class="mini-btn" style="width:100%;" :class="{default: v.default}">设为默认</span>
                </p>
              </li>
              <li>
                <label>
                  <input type="file" class="hide">
                  <i class="iconfont icon-add"></i>
                </label>
              </li>
            </ul>
            <p class="tip">建议尺寸640×640像素</p>
            <p class="tip">支持批量上传，每个商品最多5张图，每张小于300KB，支持jpg、gif、png格式</p>
          </div>
        </el-form-item>
        <el-form-item label="商品属性：">
          <div class="add-tag" :class="{'hide-add-ctr': add_attr}">
            <span class="mini-btn" type="primary" @click="add_attr=!add_attr">{{add_attr?'取消':'添加'}}</span>
            <span>100*10：</span>
            <label><input type="checkbox" name="attr" v-model="baseInfo.good_attr" value="1">属性值1</label>
            <label><input type="checkbox" name="attr" v-model="baseInfo.good_attr" value="2">属性值2</label>
            <div>
              <el-input v-model="diy_tag" size="mini" style="width:160px"></el-input>
              <span class="mini-btn" type="success">保存</span>
            </div>
          </div>
        </el-form-item>
      </el-form>
    </div>
    <div class="pannel-content">
      <p class="content-title">库存/规格</p>
      <div v-if="false" class="pannel" style="margin-top:10px">
        <el-button type="info" size="small" @click="multipleStandard = true" v-if="!multipleStandard">开启多商品规格</el-button>
        <div class="default-btn" v-else>
          <button>生成部分规格</button>
          <button>怎加一个规格</button>
          <button @click="multipleStandard = false">关闭规格</button>
          <button>生成所有规格</button>
        </div>
      </div>
      <el-form label-width="140px">
        <el-form-item label="原价：" required>
          <el-input class="_110px" size="small" v-model="stock.old_price"></el-input>
          <span>元</span>
        </el-form-item>
        <el-form-item label="现价：" required>
          <el-input class="_110px" size="small" v-model="stock.new_price"></el-input>
          <span>元</span>
          <el-button type="info" size="small" style="margin-left:20px">设置会员价格</el-button>
        </el-form-item>
        <el-form-item label="总库存：" required>
          <el-input class="_110px" size="small" v-model="stock.total"></el-input>
        </el-form-item>
        <el-form-item label="商品编码：">
          <el-input class="_110px" size="small" v-model="stock.id"></el-input>
        </el-form-item>
        <el-form-item label="基础销量：">
          <el-input class="_110px" size="small" v-model="stock.baseSales"></el-input>
        </el-form-item>
      </el-form>
    </div>
    <div class="pannel-content">
      <p class="content-title">分销佣金设置</p>
      <el-form label-width="140px">
        <el-form-item label="使用分类佣金设置：">
          <div class="form-item-box first-child">
            <div>
              <toggle-button v-model="commision.open" :labels="true" :color="{checked: '#0067CC', unchecked: '#BFCBD9'}"
                :width="80" :height="30" :font-size="16">
              </toggle-button>
            </div>
            <i class="iconfont icon-shop1" type="success"></i>
            <b>平台总店</b>
          </div>
        </el-form-item>
        <el-form-item label="上二级佣金比例：">
          <div class="form-item-box">
            <el-input class="_110px" v-model="commision.second_ratio" :disabled="!commision.open"></el-input>
            <i class="el-icon-arrow-left" type="success"></i>
            <b>一级分销</b>
          </div>
        </el-form-item>
        <el-form-item label="上一级佣金比例：">
          <div class="form-item-box">
            <el-input class="_110px" v-model="commision.first_ratio" :disabled="!commision.open"></el-input>
            <i class="el-icon-arrow-left"></i>
            <b>二级分销</b>
          </div>
        </el-form-item>
        <el-form-item label="成交店铺佣金比例：">
          <div class="form-item-box">
            <el-input class="_110px" v-model="commision.deal_ratio" :disabled="!commision.open"></el-input>
            <i class="el-icon-arrow-left"></i>
            <b>三级分销</b>
            <span class="iconfont icon-arrow-up"></span>
            <span class="iconfont icon-Users"></span>
          </div>
        </el-form-item>
      </el-form>
    </div>
    <div class="pannel-content">
      <p class="content-title">物流及其他</p>
      <el-form label-width="140px">
        <el-form-item label="物流体积：">
          <el-input size="small" class="_110px" v-model="logistics.volume"></el-input>
          <span>立方米</span>
        </el-form-item>
        <el-form-item label="物流重量：">
          <el-input size="small" class="_110px" v-model="logistics.weight"></el-input>
          <span>千克</span>
        </el-form-item>
        <el-form-item label="运费设置：" required>
          <p>
            <label>
              <input type="radio" name="freight" v-model="logistics.freight">
              <span>包邮</span>
            </label>
          </p>
          <p>
            <label>
              <input type="radio" name="freight" v-model="logistics.freight">
              <span>运费模板</span>
            </label>
          </p>
        </el-form-item>
        <el-form-item label="是否上架：" required>
          <p>
            <label>
              <input type="radio" v-model="logistics.upper" name="upper" value="upper">
              <span>立刻上架</span>
            </label>
          </p>
          <p>
            <label>
              <input type="radio" v-model="logistics.upper" name="upper" value="instock">
              <span>放入仓库</span>
            </label>
          </p>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      multipleStandard: false,
      add_attr: false,
      add_tag: false,
      diy_tag: '',
      selectValue: '',
      baseInfo: {
        group_name: '',
        good_type: '',
        brand: '',
        good_name: '',
        order: 0,
        good_tag: '',
        good_intr: '',
        good_img: [
          {
            url: './static/img/apple.jpg',
            default: true
          },
          {
            url: './static/img/none.gif',
            default: false
          }
        ],
        good_attr: []
      },
      stock: {
        old_price: 10,
        new_price: 5,
        total: 10,
        id: 1,
        baseSales: 10
      },
      logistics: { // 物流
        volume: '',
        weight: '',
        freight: 'free',
        upper: false
      },
      commision: { // 分销
        open: false,
        second_ratio: '12',
        first_ratio: '14',
        deal_ratio: '16'
      }
    }
  }
}
</script>

<style lang="scss" scoped>
._110px{ width:110px}
.content-title{
  font-size: 16px;
  padding-left: 10px;
  border-left: 2px solid #FF0000;
}
.form-box{
  width: 650px;
  .add-tag{
    overflow: hidden;
    height: 35px;
    transition: height .3s ease;
    &.hide-add-ctr{
      height:80px;
    }
  }
  .good-img{
    .tip{
      line-height: 20px;
    }
    .img-list{
      display: flex;
      li:not(:last-child){
        margin-right: 10px;
        line-height: 100%;
        .img-box{
          position: relative;
          border: 1px solid #CFCFCF;
          img{
            width: 85px;
            height: 85px;
          }
          .ctr{
            display: none;
            width: 100%;
            line-height: 20px;
            text-align: center;
            position: absolute;
            color: #fff;
            background-color: rgba(33, 33, 33, .7);
            bottom: 0;
            i{
              cursor: pointer;
              margin-right: 0;
              margin: 0 2px;
              color: #A3F349;
              &:last-child{
                color: #FB9F6F;
              }
            }
          }
          &:hover{
            .ctr{
              display: block;
            }
          }
        }
        .mini-btn{
          margin-top: 5px;
          &:hover,&.default{
            background-color: #81BA15;
          }
        }
      }
      li:last-child{
        i{
          display: inline-block;
          width: 80px;
          height: 80px;
          border: 2px dashed #696463;
          text-align: center;
          line-height: 80px;
          &:hover{
            color: #18BD9D;
            border-color: #18BD9D;
          }
        }
      }
    }
  }
}
.form-item-box{
  display: flex;
  align-items: center;
  &>:first-child{
    width: 110px;
  }
  >i{
    margin-left: 40px;
    margin-right: 10px;
    text-align: center;
    border-radius: 50%;
    font-size: 18px;
    background-color: #455262;
    color: #fff;
    width: 26px;
    height: 26px;
    line-height: 26px;
    &[type=success]{
      background-color: #00BBAB;
    }
  }
  >span{
    font-size: 40px;
    margin-left: 10px;
    &~span{
      position: relative;
    }
    &~span::after{
      content: '会员下单';
      position: absolute;
      font-size: 14px;
      bottom: -28px;
      left: -5px;
      width: 60px;
    }
  }
  &.first-child{
    i{
      width: 40px;
      height: 40px;
      font-size: 24px;
      line-height: 40px;
      margin-left: 35px;
    }
  }
}
</style>
