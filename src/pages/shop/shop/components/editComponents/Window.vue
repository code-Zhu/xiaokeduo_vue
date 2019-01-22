<template>
  <div class="window-box">
    <ul class="img-tab" :class="style.col">
      <li v-for="v in windowList" :key="v.id">
        <img :src="v.img">
        <span>{{v.title}}</span>
      </li>
    </ul>
    <div class="edit-right-ctr" v-if="righEdit">
      <div class="ctr-form">
        <div class="ctr-form-item" style="margin-left:40px">
          <span class="label">展现形式：</span>
          <label for="col_2">
            <input v-model="style.col" type="radio" name="style" id="col_2" value="col_2">
            <span>2列，一大两小</span>
          </label>
          <label for="col_3">
            <input v-model="style.col" type="radio" name="style" id="col_3" value="col_3">
            <span>3列，三小图</span>
          </label>
        </div>
        <div class="ctr-form-item" style="margin-left:40px">
          <span class="label">设置图片：<span class="tip">一大两小模式，左侧大图建议比例142x296px，小图149x144px</span></span>
        </div>
        <div class="ctr-form-item">
          <ul class="img-ad-list">
            <li class="img-ad-item" v-for="v in windowList" :key="v.key">
              <div class="ad-item-body">
                <div class="img-box">
                  <span>
                    <img :src="v.img">
                  </span>
                  <span data-reset="data-reset">重新选择</span>
                </div>
                <div class="img-form">
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
        col: 'col_3'
      },
      windowList: [
        {
          img: 'static/img/waitupload.png',
          ad_url: ''
        },
        {
          img: 'static/img/waitupload.png',
          ad_url: ''
        },
        {
          img: 'static/img/waitupload.png',
          ad_url: ''
        }
      ]
    }
  },
  methods: {
  }
}
</script>
<style lang="scss" scoped>
.window-box{
  .img-tab{
    display: flex;
    padding: 0 10px;
    li{
      img{
        width: 100%;
      }
    }
    &.col_2{
      height: 300px;
      flex-direction: column;
      flex-wrap: wrap;
      justify-content: space-between;
      align-content: space-between;
      li{
        width: 142px;
        &:first-child{
          height: 100%;
          img{
            height: 100%;
          }
        }
      }
    }
    &.col_3{
      li{
        flex: 1;
        overflow: hidden;
        &+li{
          margin-left: 2px;
        }
      }
    }
  }
  .edit-right-ctr{
    .ctr-form{
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
    width: 100%;
    .img-ad-item{
      height: 140px;
      box-sizing: border-box;
      border: 1px solid #ddd;
      margin-bottom: 10px;
      .ad-item-body{
        padding: 15px 20px;
        display: flex;
        .img-box{
          text-align: center;
          width: 80px;
          height: 80px;
          border: 1px solid #ddd;
          margin-right: 10px;
          position: relative;
          cursor: pointer;
          overflow: hidden;
          img{
            width: 80px
          }
          span[data-reset]{
            display: none;
            position: absolute;
            width: 100%;
            background-color: rgba(0, 0, 0, 0.5);
            color: #fff;
            bottom: 0;
            right: 0;
            font-size: 12px;
          }
          &:hover{
            span[data-reset]{
              display: block
            }
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
