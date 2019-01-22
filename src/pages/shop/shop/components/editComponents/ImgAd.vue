<template>
  <div class="img-ad-box">
    <div class="img-ad default">
      <span>Banner轮播图</span>
      <div class="point" v-show="img_list.length>1">
        <i v-for="v in img_list" :key="v.id"></i>
      </div>
    </div>
    <div class="edit-right-ctr" v-if="righEdit">
      <div class="ctr-form">
        <div class="ctr-form-item">
          <span class="label choose-good">显示形式：</span>
          <div>
            <label for="banner">
              <input v-model="style.showType" type="radio" name="showType" id="banner" value="banner">
              <span>折叠轮播</span>
            </label>
            <label for="list">
              <input v-model="style.showType" type="radio" name="showType" id="list" value="list">
              <span>上下平铺</span>
            </label>
          </div>
        </div>
        <div class="ctr-form-item">
          <span class="label choose-good">设置图片：<span class="tip">建议图片最大宽度不超过640px</span></span>
        </div>
        <div class="ctr-form-item" v-show="style.showType === 'list'">
          <span class="label">图片上下距离：</span>
          <el-slider v-model="img_margin" :max="20" style="width: 250px" :show-tooltip="false"></el-slider>
          <span style="margin-left:15px">{{img_margin}}px</span>
        </div>
        <div class="ctr-form-item">
          <ul class="img-ad-list">
            <li class="img-ad-item" v-for="(v, index) in img_list" :key="v.key">
              <div class="ad-item-header">
                <i class="iconfont icon-up1"></i>
                <i class="iconfont icon-down"></i>
                <i class="el-icon-close" @click="handleDel(index)"></i>
              </div>
              <div class="ad-item-body">
                <div class="img-box">
                  <span>选择图片</span>
                  <span data-reset="data-reset">重新选择</span>
                </div>
                <div class="img-form">
                  <div class="img-form-box">
                    <span>标题：</span>
                    <input v-model="v.title" type="text" placeholder="标题可以不设置">
                  </div>
                  <div class="img-form-box">
                    <span>链接：</span>
                    <div class="url-list-box">
                      <span class="url-list-label">选择链接地址</span><i class="el-icon-caret-bottom"></i>
                      <ul class="url-list">
                        <li>选择商品</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </li>
            <li class="add-img-ad-item" @click="adImgList">
              <i class="el-icon-circle-plus"></i>
              <span>增加一个广告</span>
            </li>
          </ul>
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
        showType: 'banner'
      },
      img_margin: 10,
      img_list: []
    }
  },
  methods: {
    adImgList () {
      this.img_list.push({
        img: '',
        title: '',
        ad_url: ''
      })
    },
    handleDel (index) {
      this.img_list.splice(index, 1)
    }
  }
}
</script>
<style lang="scss" scoped>
.img-ad-box{
  .img-ad{
    background-color: #4E6488;
    height: 120px;
    &.default{
      text-align: center;
      display: flex;
      flex-direction: column;
      flex-wrap: wrap;
      align-items: center;
      span{
        margin-top: 35px;
        color: #fff;
        width: 200px;
        font-size: 26px;
        border: 1px solid #fff;
        padding: 15px;
        opacity: .7;
      }
      .point{
        width: 100%;
        display: flex;
        justify-content: center;
        margin-top: 20px;
        i{
          width: 5px;
          height: 5px;
          background: #898989;
          border-radius: 50%;
          margin-left: 5px;
          &:first-child{
            background: #ff0000;
          }
        }
      }
    }
  }
  .edit-right-ctr{
    .ctr-form{
      padding-left: 40px;
      .ctr-form-item{
        .tip{
          color: #999;
          font-size: 12px;
          margin-left: 5px;
        }
      }
    }
  }
  .img-ad-list{
    width: 398px;
    .img-ad-item{
      height: 140px;
      box-sizing: border-box;
      border: 1px solid #ddd;
      margin-bottom: 10px;
      .ad-item-header{
        height: 24px;
        line-height: 24px;
        text-align: right;
        display: flex;
        justify-content: flex-end;
        background-color: #E8E8E8;
        i{
          margin-top: 4px;
          margin-right: 10px;
          width: 16px;
          height: 16px;
          line-height: 16px;
          border-radius: 50%;
          color: #fff;
          background-color: #FF0000;
          font-size: 14px;
          text-align: center;
          cursor: pointer;
          &:not(:last-child){
            background-color: #0BA29B;
          }
        }
      }
      .ad-item-body{
        padding: 15px 20px;
        display: flex;
        input{
          border-radius: 5px;
          outline: none;
          padding: 0 15px;
          border: 1px solid #ddd;
          line-height: 25px;
          &:focus{
            border-color: #66AFE9;
          }
        }
        .img-box{
          text-align: center;
          width: 80px;
          height: 80px;
          border: 1px solid #ddd;
          margin-right: 10px;
          position: relative;
          cursor: pointer;
          span[data-reset]{
            position: absolute;
            width: 100%;
            background-color: #B2B2B2;
            color: #fff;
            bottom: 0;
            right: 0;
            font-size: 12px;
          }
        }
        .img-form-box{
          .url-list-box{
            display: inline-block;
            position: relative;
            .url-list-label{
              color: #1C89D5;
              font-size: 12px;
              cursor: pointer;
            }
            .url-list{
              display: none;
              position: absolute;
              background-color: #fff;
              border: 1px solid #ddd
            }
            &:hover{
              .url-list-label{color: #000}
              .url-list{display: block}
            }
          }
        }
      }
    }
    .add-img-ad-item{
      height: 35px;
      line-height: 35px;
      padding-left: 10px;
      border: 1px dashed #999;
      color: #1C89D5;
      cursor: pointer;
      &:hover{
        color: #000;
      }
    }
  }
}
</style>
