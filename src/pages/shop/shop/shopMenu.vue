<template>
  <div class="shop-menu">
    <p class="page-title">店铺导航</p>
    <div class="pannel">
      <div class="pannel-content pannel-content-top">
        <p>店铺导航</p>
        <p>店铺导航是一组快捷菜单，您可以自定义每个导航的链接，并决定在哪些页面显示店铺导航</p>
      </div>
    </div>
    <div class="pannel pannel-shop">
      <div class="mobile-model">
        <div class="mobile-header">
          <i></i>
          <div class="mobile-title">店铺主页</div>
        </div>
        <div class="mobile-content"> </div>
        <div class="mobile-footer">
          <i></i>
        </div>
      </div>
      <div class="edit-box">
        <div class="pannel pannel-content">
          <p style="font-weight:600;margin-bottom:10px">在以下页面显示店铺导航:</p>
          <el-checkbox-group v-model="checkboxVal" style="width:450px">
            <el-checkbox label="店铺主页"></el-checkbox>
            <el-checkbox label="店铺活动"></el-checkbox>
            <el-checkbox label="会员中心"></el-checkbox>
            <el-checkbox label="分销中心"></el-checkbox>
            <el-checkbox label="所有商品"></el-checkbox>
            <el-checkbox label="搜索结果"></el-checkbox>
            <el-checkbox label="商品分类"></el-checkbox>
            <el-checkbox label="品牌专题"></el-checkbox>
          </el-checkbox-group>
        </div>
        <div class="pannel pannel-content">
          <p style="font-weight:600;margin-bottom:10px">店铺导航显示风格:</p>
          <el-radio v-model="radio" label="1">纯文字</el-radio>
          <el-radio v-model="radio" label="2">小图标加文字</el-radio>
        </div>
        <div class="pannel pannel-tab">
          <span class="add-tab" @click="addTab">+ 添加一级导航</span>
          <el-tabs v-model="tab_name" type="border-card" closable @edit="handleTabsEdit">
            <el-tab-pane :key="item.name" v-for="item in tabLists"
              :label="item.title"
              :name="item.name">
              <tab-content :tab="item"></tab-content>
            </el-tab-pane>
          </el-tabs>
        </div>
        <div class="pannel">
          <el-button size="mini" type="success">保存</el-button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import tabContent from './components/shopTab'
export default {
  components: {
    tabContent
  },
  data () {
    return {
      radio: '',
      checkboxVal: [],
      tab_name: 'index',
      tabLists: [
        {
          title: '首页',
          name: 'index',
          children: true,
          list: [
            {
              title: '品牌专题'
            },
            {
              title: '测试'
            },
            {
              title: '测试2'
            },
            {
              title: '品牌专题'
            }
          ]
        },
        {
          title: '活动',
          name: 'actives',
          children: false
        }
      ]
    }
  },
  methods: {
    handleTabsEdit () {
      this.$message('触发tab删除事件')
    },
    addTab () {
      this.tabLists.push({
        title: 'new',
        name: 'new',
        content: 'new'
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.pannel-shop{
  display: flex;
  .mobile-model{
    width: 350px;
    height: 510px;
    display: flex;
    flex-direction: column;
    border: 1px solid #ccc;
    border-radius: 10px;
    .mobile-header{
      width: 320px;
      height: 112px;
      margin: 0 auto;
      padding-top: 10px;
      &>i{
        display: block;
        width: 98px;
        height: 34px;
        margin: 0 auto 13px;
        background: url('../../../assets/img/modules.png') no-repeat 0 -74px;
      }
      .mobile-title{
        height: 34px;
        padding-top: 32px;
        background: url('../../../assets/img/modules.png') no-repeat 0 0;
        color: #fff;
        font-size: 18px;
        text-align: center;
        overflow: hidden;
        cursor: pointer;
      }
    }
    .mobile-content{
      flex: 1;
    }
    .mobile-footer{
      border-top: 1px solid #ccc;
      &>i{
        display: block;
        margin: 10px auto;
        width: 62px;
        height: 62px;
        background: url('../../../assets/img/modules.png') no-repeat -253px -70px;
      }
    }
  }
  .edit-box{
    flex: 1;
    margin-left: 25px;
  }
  .pannel-tab{
    position: relative;
    .add-tab{
      position: absolute;
      z-index: 2;
      right: 10px;
      top: 15px;
      cursor: pointer;
    }
  }
}
</style>
