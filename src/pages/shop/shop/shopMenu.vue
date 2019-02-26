<template>
  <div class="shop-menu-box">
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
          <div class="checkbox">
            <label>
              <input type="checkbox">
              <span>店铺主页</span>
            </label>
            <label>
              <input type="checkbox">
              <span>店铺活动</span>
            </label>
            <label>
              <input type="checkbox">
              <span>会员中心</span>
            </label>
            <label>
              <input type="checkbox">
              <span>分销中心</span>
            </label>
            <label>
              <input type="checkbox">
              <span>所有商品</span>
            </label>
            <label>
              <input type="checkbox">
              <span>搜索结果</span>
            </label>
            <label>
              <input type="checkbox">
              <span>商品分类</span>
            </label>
            <label>
              <input type="checkbox">
              <span>品牌专题</span>
            </label>
          </div>
        </div>
        <div class="pannel pannel-content">
          <p style="font-weight:600;margin-bottom:10px">店铺导航显示风格:</p>
          <label>
            <input type="radio">
            <span>纯文字</span>
          </label>
          <label>
            <input type="radio">
            <span>小图标加文字</span>
          </label>
        </div>
        <div class="pannel pannel-tab">
          <span class="add-tab" @click="addTab">+ 添加一级导航</span>
          <el-tabs v-model="tab_name" type="card" closable @edit="handleTabsEdit">
            <el-tab-pane :key="index" v-for="(item, index) in tabLists"
              :label="item.title"
              :name="item.title">
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
      tab_name: '首页',
      tabLists: [
        {
          title: '首页',
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
          list: []
        }
      ]
    }
  },
  methods: {
    handleTabsEdit (name) {
      this.tabLists.forEach((item, index) => {
        if (item.title === name) {
          this.tabLists.splice(index, 1)
        }
      })
      this.tab_name = this.tabLists[0].title || ''
    },
    addTab () {
      this.tabLists.push({
        title: 'new',
        name: 'new',
        list: []
      })
    }
  }
}
</script>

<style lang="scss">
.shop-menu-box{
  .pannel-shop{
    display: flex;
    .mobile-model{
      width: 350px;
      height: 510px;
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
    .checkbox{
      width: 380px;
      input[type=checkbox]{
        margin-left: 10px;
      }
    }
  }
  .el-tab-pane{
    border: 1px solid #ddd;
    padding: 15px;
    border-top: none;
  }
  .el-tabs__header{
    margin: 0;
  }
}

</style>
