<template>
  <div class="text-tab-box">
    <ul class="text-tab" v-if="text_list.length<1">
      <li>
        <span>请求添加导航链接</span>
      </li>
    </ul>
    <ul class="text-tab" v-else>
      <li v-for="v in text_list" :key="v.id">
        <span>{{v.title || '请求添加导航链接'}}</span>
        <i class="el-icon-arrow-right"></i>
      </li>
    </ul>
    <div class="edit-right-ctr" v-if="righEdit">
      <div class="ctr-form">
        <div class="ctr-form-item">
          <ul class="img-ad-list">
            <li class="img-ad-item" v-for="(v, index) in text_list" :key="v.key">
              <div class="ad-item-header">
                <i class="iconfont icon-up1"></i>
                <i class="iconfont icon-down"></i>
                <i class="el-icon-close" @click="handleDel(index)"></i>
              </div>
              <div class="ad-item-body">
                <div class="img-form">
                  <div class="img-form-box">
                    <span class="label">标题：</span>
                    <el-input v-model="v.title" type="text" size="mini" style="width:190px"/>
                  </div>
                  <div class="img-form-box">
                    <span class="label">链接：</span>
                    <div class="url-list-box">
                      <span data-name="data-name" v-if="v.urlname !==''">{{v.urlname}}</span>
                      <div class="choose-url">
                        <span data-choose="data-choose">{{v.urlname === '' ? '请选择' : '修改'}}</span><i class="el-icon-caret-bottom"></i>
                        <ul class="menu-url-list">
                          <li>选择商品</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </li>
            <li class="add-img-ad-item" @click="addTextList">
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
      text_list: [
        {
          title: '店铺主页',
          tab_url: '',
          urlname: '店铺主页'
        }
      ]
    }
  },
  methods: {
    addTextList () {
      this.text_list.push({
        title: '',
        tab_url: '',
        urlname: ''
      })
    },
    handleDel (index) {
      this.text_list.splice(index, 1)
    }
  }
}
</script>
<style lang="scss" scoped>
.text-tab-box{
  .text-tab{
    display: flex;
    flex-direction: column;
    margin: 0 10px;
    border: 1px solid #EDEDED;
    li{
      display: flex;
      justify-content: space-between;
      align-items: center;
      height: 27px;
      padding-right: 5px;
      &+li{
        border-top: 1px solid #EDEDED
      };
      span{
        font-size: 12px;
        color: #646464;
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
        align-items: flex-start;
        .img-form-box{
          display: flex;
          .label{
            width: 50px;
          }
          .url-list-box{
            display: flex;
            span[data-name]{
              max-width: 100px;
              overflow: hidden;
              color: #fff;
              background-color: #0BA29B;
              height: 20px;
              line-height: 20px;
              padding: 0 10px;
              border-radius: 5px;
              margin-top: 6px;
              margin-right: 5px;
            }
            .choose-url{
              position: relative;
              span[data-choose]{
                color: #1C89D5;
                cursor: pointer;
              }
              .menu-url-list{
                width: 150px;
                background-color: #fff;
                position: absolute;
                z-index: 1;
                display: none;
              }
              &:hover{
                span[data-choose]{color: #000;}
                .menu-url-list{display: block;}
              }
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
