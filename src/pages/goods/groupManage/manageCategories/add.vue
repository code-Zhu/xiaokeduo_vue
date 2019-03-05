<template>
  <div>
    <p class="page-title">添加商品分类</p>
    <div class="pannel">
      <el-form size="small" class="form-box" label-width="180px">
        <el-form-item label="分类名称：" required>
          <el-input v-model="form.name" style="width:215px"></el-input>
        </el-form-item>
        <el-form-item label="选择上级分类：">
          <el-select v-model="form.parent">
            <el-option value="" label="--请选择--"></el-option>
            <el-option value="1" label="网络设备"></el-option>
            <el-option value="2" label="监控设备"></el-option>
            <el-option value="3" label="服装"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="商品编码前缀：">
          <el-input v-model="form.prefix" style="width:215px"></el-input>
          <p class="tip">填写以后，发布商品为您自动生成商品编码的时候可以加上此前缀，只能是字母、数字开头、</p>
          <p class="tip">可包含-(减号)、_(下划线)，长度5个字符以内</p>
        </el-form-item>
      </el-form>
    </div>
    <div class="pannel pannel-content" v-if="form.parent==''">
      <p class="title">分销佣金设置</p>
      <el-form label-width="165px">
        <el-form-item label="">
          <div class="form-item-box first-child">
            <p></p>
            <i class="iconfont icon-shop1" type="success"></i>
            <b>平台总店</b>
          </div>
        </el-form-item>
        <el-form-item label="上二级佣金比例：">
          <div class="form-item-box">
            <el-input class="_110px" v-model="commision.second_ratio">
              <span slot="suffix">%</span>
            </el-input>
            <i class="el-icon-arrow-left" type="success"></i>
            <b>一级分销</b>
          </div>
        </el-form-item>
        <el-form-item label="上一级佣金比例：">
          <div class="form-item-box">
            <el-input class="_110px" v-model="commision.first_ratio">
              <span slot="suffix">%</span>
            </el-input>
            <i class="el-icon-arrow-left"></i>
            <b>二级分销</b>
          </div>
        </el-form-item>
        <el-form-item label="成交店铺佣金比例：">
          <div class="form-item-box">
            <el-input class="_110px" v-model="commision.deal_ratio">
              <span slot="suffix">%</span>
            </el-input>
            <i class="el-icon-arrow-left"></i>
            <b>三级分销</b>
            <span class="iconfont icon-arrow-up"></span>
            <span class="iconfont icon-Users"></span>
          </div>
        </el-form-item>
      </el-form>
    </div>
    <div class="pannel">
      <el-button type="success" size="small" style="margin-left:170px">保存</el-button>
      <el-button type="success" size="small">保存并继续添加</el-button>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      form: {
        name: '',
        parent: '',
        prefix: ''
      },
      commision: { // 分销
        second_ratio: '12',
        first_ratio: '14',
        deal_ratio: '16'
      }
    }
  }
}
</script>
<style lang="scss" scoped>
.title{
  font-size: 16px;
  padding-left: 10px;
  border-left: 2px solid #FF0000;
}
.form-item-box{
  display: flex;
  align-items: center;
  & :first-child{
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
