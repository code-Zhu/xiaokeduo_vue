<template>
  <div class="top-menu-box">
    <ul class="top-menu" :class="{margin: style.margin === 'have'}">
      <li v-for="v in menu_list" :key="v.id" :style="{backgroundColor: v.bg_color, color: v.color}">
        <i v-show="style.menu_format==='iconfont'"></i>
        <span>{{v.title}}</span>
      </li>
    </ul>
    <div class="edit-right-ctr" v-if="righEdit">
      <div class="ctr-form">
        <div class="ctr-form-item">
          <span class="label choose-good">菜单格式：</span>
          <label for="only_text">
            <input v-model="style.menu_format" type="radio" name="menu_format" id="only_text" value="only_text">
            <span>纯文字导航</span>
          </label>
          <label for="iconfont">
            <input v-model="style.menu_format" type="radio" name="menu_format" id="iconfont" value="iconfont">
            <span>小图标导航</span>
          </label>
        </div>
        <div class="ctr-form-item">
          <span class="label choose-good">菜单间距：</span>
          <label for="no_padding">
            <input v-model="style.margin" type="radio" name="margin" id="no_padding" value="no">
            <span>无间距</span>
          </label>
          <label for="have_padding">
            <input v-model="style.margin" type="radio" name="margin" id="have_padding" value="have">
            <span>有间距</span>
          </label>
        </div>
        <div class="ctr-form-item">
          <span class="label">设置菜单：</span>
          <ul class="menu-list">
            <li class="list-item" v-for="(v, index) in menu_list" :key="v.key">
              <div class="menu-item-header">
                <i class="iconfont icon-up1"></i>
                <i class="iconfont icon-down"></i>
                <i class="el-icon-close" @click="handleDel(index)"></i>
              </div>
              <div class="menu-item-body">
                <div class="menu-body-item">
                  <span data-label="label">标题：</span>
                  <el-input v-model="v.title" type="text" size="mini" style="width: 240px"></el-input>
                </div>
                <div class="menu-body-item">
                  <span data-label="label">链接：</span>
                  <div class="menu-url-list-box">
                    <span data-name="data-name" v-if="v.urlname !==''">{{v.urlname}}</span>
                    <div class="choose-url">
                      <span data-choose="data-choose">{{v.urlname === '' ? '请选择' : '修改'}}</span><i class="el-icon-caret-bottom"></i>
                      <ul class="menu-url-list">
                        <li>选择商品</li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div class="menu-body-item" v-show="style.menu_format==='iconfont'">
                  <span data-label="label">图标：</span>
                  <span data-icon-box="icon-box"></span>
                  <span class="btn">修改</span>
                  <span class="tip">（建议上传尺寸：60x60像素）</span>
                </div>
                <div class="menu-body-item">
                  <span data-label="label">背景颜色：</span>
                  <el-color-picker v-model="v.bg_color" size="small"></el-color-picker>
                </div>
                <div class="menu-body-item">
                  <span data-label="label">文字颜色：</span>
                  <el-color-picker v-model="v.color" size="small"></el-color-picker>
                </div>
              </div>
            </li>
            <li class="add-list-item" @click="addMenuList">
              <i class="el-icon-circle-plus"></i>
              <span>增加一个菜单项</span>
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
        menu_format: 'only_text',
        margin: 'no'
      },
      menu_list: [
        {
          title: '首页',
          url: '',
          urlname: '店铺主页',
          icon: '',
          bg_color: '#07A0E7',
          color: '#ffffff'
        },
        {
          title: '新品',
          url: '',
          urlname: '店铺主页',
          icon: '',
          bg_color: '#72C201',
          color: '#ffffff'
        },
        {
          title: '热卖',
          url: '',
          urlname: '店铺主页',
          icon: '',
          bg_color: '#FFA800',
          color: '#ffffff'
        },
        {
          title: '推荐',
          url: '',
          urlname: '店铺主页',
          icon: '',
          bg_color: '#D50303',
          color: '#ffffff'
        }
      ]
    }
  },
  methods: {
    addMenuList () {
      this.menu_list.push({
        title: '',
        url: '',
        urlname: '',
        icon: '',
        bg_color: '#07A0E7',
        color: '#ffffff'
      })
    },
    handleDel (index) {
      this.menu_list.splice(index, 1)
    }
  }
}
</script>
<style lang="scss" scoped>
.top-menu-box{
  .top-menu{
    height: 45px;
    text-align: center;
    display: flex;
    font-size: 12px;
    li{
      flex: 1;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      i{
        width: 20px;
        height: 14px;
        background: #ddd;
        margin-bottom: 5px;
      }
    }
    &.margin{
      li+li{
        margin-left: 1px;
      }
    }
  }
  .edit-right-ctr{
    .ctr-form{
      padding-left: 30px;
      .ctr-form-item{
        flex-wrap: wrap;
        .tip{
          color: #999;
          font-size: 12px;
          margin-left: 5px;
        }
      }
    }
  }
  .menu-list{
    width: 100%;
    .list-item{
      box-sizing: border-box;
      border: 1px solid #ddd;
      margin-bottom: 10px;
      .menu-item-header{
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
      .menu-item-body{
        padding-left: 60px;
        .menu-body-item{
          display: flex;
          font-size: 12px;
          span[data-icon-box]{
            width: 26px;
            height: 26px;
            margin-top: 5px;
            img{
              width: 100%;
              height: 100%;
            }
          }
          span[data-label]{
            width: 70px;
            font-size: 14px;
            text-align: right;
            margin-right: 10px;
          }
          .menu-url-list-box{
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
    .add-list-item{
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
