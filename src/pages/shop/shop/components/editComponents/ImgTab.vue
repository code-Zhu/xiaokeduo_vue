<template>
  <div class="img-tab-box">
    <ul class="img-tab" v-if="img_list.length===0">
      <li v-for="v in 4" :key="v.id">
        <img src="11">
        <span>导航文字</span>
      </li>
    </ul>
    <ul class="img-tab" v-else>
      <li v-for="v in img_list" :key="v.id">
        <img :src="v.img">
        <span>{{v.title}}</span>
      </li>
    </ul>
    <div class="edit-right-ctr" v-if="righEdit">
      <div class="ctr-form">
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
                  <span>
                    <img :src="v.img">
                  </span>
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
            <li class="add-img-ad-item" @click="adImgList" v-show="img_list.length<4">
              <i class="el-icon-circle-plus"></i>
              <span>增加一个导航</span>
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
      img_list: [
        {
          img: 'static/img/waitupload.png',
          title: '导航名称',
          ad_url: ''
        },
        {
          img: 'static/img/waitupload.png',
          title: '导航名称',
          ad_url: ''
        },
        {
          img: 'static/img/waitupload.png',
          title: '导航名称',
          ad_url: ''
        },
        {
          img: 'static/img/waitupload.png',
          title: '导航名称',
          ad_url: ''
        }
      ]
    }
  },
  methods: {
    adImgList () {
      this.img_list.push({
        img: 'static/img/waitupload.png',
        title: '导航名称',
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
.img-tab-box{
  .img-tab{
    display: flex;
    padding: 0 10px;
    li{
      text-align: center;
      flex: 1;
      overflow: hidden;
      img{
        width: 100%
      }
      span{
        font-size: 12px;
        color: #646464;
      }
      &+li{
        margin-left: 2px
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
          overflow: hidden;
          img{
            width: 80px
          }
          span[data-reset]{
            display: none;
            position: absolute;
            width: 100%;
            background-color: #B2B2B2;
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
