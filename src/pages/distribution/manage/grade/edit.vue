<template>
  <div>
    <p class="page-title">{{id?'编辑分销商等级':'新增分销商等级'}}</p>
    <el-form class="form-box" label-width="180px">
      <el-form-item label="等级图标：">
        <label class="avatar">
          <input type="file" class="hide">
          <span>上传新图片</span>
        </label>
        <p class="tip">（建议上传PNG背景透明的图片，大小50px * 50px）</p>
      </el-form-item>
      <el-form-item label="分销商等级名称：" required>
        <el-input class="_230px"></el-input>
      </el-form-item>
      <el-form-item label="佣金满足点：" required>
        <el-input class="_230px"></el-input>
        <p class="tip">设置分销商获得总佣金达到多少金额后，自动升级到此等级</p>
      </el-form-item>
      <el-form-item label="成交店铺佣金奖励：" required>
        <el-input class="_230px"></el-input>
        <p class="tip">设置本店销售，分销商除了获得商品本身的成交店铺佣金比例外，额外获得的佣金比例</p>
      </el-form-item>
      <el-form-item label="上一级佣金奖励：" required>
        <el-input class="_230px"></el-input>
        <p class="tip">设置下级分销商店铺销售，作为上一级分销商除了获得商品本身的上一级佣金比例外，额外获得的佣金比例</p>
      </el-form-item>
      <el-form-item label="上二级佣金奖励：" required>
        <el-input class="_230px"></el-input>
        <p class="tip">设置下下级分销商店铺销售，作为上二级分销商除了获得商品本身的上二级佣金比例外，额外获得的佣金比例</p>
      </el-form-item>
      <el-form-item label="备注：">
        <el-input type="textarea" :rows="4" style="width: 350px"></el-input>
      </el-form-item>
      <el-form-item label="设成默认等级：" v-if="!id">
        <label>
          <input v-model="form.def" type="radio" value="1">
          <span>是</span>
        </label>
        <label>
          <input v-model="form.def" type="radio" value="2">
          <span>否</span>
        </label>
      </el-form-item>
      <el-form-item label="">
        <el-button type="success">确定</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
export default {
  data () {
    return {
      form: {
        def: 2
      }
    }
  },
  computed: {
    id () {
      return this.$route.params.id
    }
  }
}
</script>

<style lang="scss" scoped>
.avatar{
  display: inline-block;
  border: 1px solid #CFCFCF;
  width: 88px;
  height: 88px;
  line-height: 88px;
  text-align: center;
}
._230px{width:230px}
</style>
