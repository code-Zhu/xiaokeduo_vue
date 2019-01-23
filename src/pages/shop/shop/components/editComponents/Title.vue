<template>
  <div class="title-box">
    <div class="title" :style="{textAlign: style.align, background: style.bg_color, color: style.color}">
      <img :src="img" v-if="img!==''"><span>{{title}}</span>
    </div>
    <div class="edit-right-ctr" v-if="righEdit">
      <div class="ctr-form">
        <div class="ctr-form-item">
          <span class="label">标题名称：</span>
          <el-input v-model="title" size="mini" type="text" style="width: 160px"></el-input>
        </div>
        <div class="ctr-form-item">
          <span class="label">对齐方式：</span>
          <label for="left">
            <input v-model="style.align" type="radio" name="align" id="left" value="left">
            <span>左对齐</span>
          </label>
          <label for="center">
            <input v-model="style.align" type="radio" name="align" id="center" value="center">
            <span>居中对齐</span>
          </label>
          <label for="right">
            <input v-model="style.align" type="radio" name="align" id="right" value="right">
            <span>右对齐</span>
          </label>
        </div>
        <div class="ctr-form-item">
          <span class="label">背景颜色：</span>
          <el-input v-model="style.bg_color" type="color" size="mini" style="width: 70px"></el-input>
        </div>
        <div class="ctr-form-item">
          <span class="label">文字颜色：</span>
          <el-input v-model="style.color" type="color" size="mini" style="width: 70px"></el-input>
        </div>
        <div class="ctr-form-item">
          <span class="label">前导图片：</span>
          <span class="front-img">
            <i class="el-icon-plus"></i>
          </span>
          <span class="btn">上传</span>
          <p class="tip">左对齐方式，图标才会显示在标题前面，请上传透明背景的png格式图标</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: ['righEdit'],
  data () {
    return {
      style: {
        align: 'left',
        bg_color: '#ffffff',
        color: '#707070'
      },
      title: '标题名称',
      img: ''
    }
  }
}
</script>

<style lang="scss" scoped>
.title-box{
  .title{
    height: 30px;
    line-height: 30px;
    img{
      width: 30px;
      height: 30px;
      vertical-align: middle;
    }
  }
  .edit-right-ctr{
    .ctr-form{
      margin-left: 40px;
      .ctr-form-item{
        flex-wrap: wrap;
      }
      .front-img{
        text-align: center;
        line-height: 24px;
        height: 24px;
        width: 24px;
        border: 1px dashed #D4D4D4;
        margin-top: 3px;
      }
      .tip{
        width: 312px;
        font-size: 12px;
        color: #999;
        line-height: 14px;
        margin-left: 70px;
      }
    }
  }
}
</style>
