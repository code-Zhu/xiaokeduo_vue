<template>
  <div class="edit-shop-index">
    <p class="page-title">编辑店铺主页</p>
    <div class="drag-box">
      <div class="pannel pannel-edit">
        <p class="title">拖动添加模块</p>
        <draggable element="ul" :list="module_list" class="list"
          :options="{group:{name:'people', pull:'clone', put:false }}">
          <li v-for="item in module_list" :key="item.id" class="list-item">
            <i :class="item.icon"></i>
            <p>{{item.label}}</p>
          </li>
        </draggable>
      </div>
      <div class="pannel mobile-model">
        <div class="mobile-header">
          <i></i>
          <div class="mobile-title">店铺主页</div>
        </div>
        <div class="mobile-content">
          <draggable element="ul" :list="list" class="list" :options="{group:'people'}">
            <li v-for="(item, index) in list" :key="item.id" class="list-item"
              :class="{'edit-focus': index === edit_focus_index}" @click="handleEdit(index)">
              <div class="item-box">
                <good v-if="item.name==='good'" :righEdit="index === edit_focus_index"/>
                <good-search v-if="item.name==='good_search'" :righEdit="index === edit_focus_index"/>
                <good-list v-if="item.name==='good_list'" :righEdit="index === edit_focus_index"/>
                <cut-line v-if="item.name==='cut_line'" :righEdit="index === edit_focus_index"/>
                <blank v-if="item.name==='blank'" :righEdit="index === edit_focus_index"/>
                <img-ad v-if="item.name==='img_ad'" :righEdit="index === edit_focus_index"/>
                <img-tab v-if="item.name==='img_tab'" :righEdit="index === edit_focus_index"/>
                <window v-if="item.name==='window'" :righEdit="index === edit_focus_index"/>
                <item-video v-if="item.name==='video'" :righEdit="index === edit_focus_index"/>
                <top-menu v-if="item.name==='topmenu'" :righEdit="index === edit_focus_index"/>
              </div>
              <div class="ctr">
                <span v-if="index !== 0 && list.length !== 1">上移</span>
                <span v-if="index !== list.length - 1 && list.length !== 1">下移</span>
                <span @click="handleEdit(index)">编辑</span>
                <span @click="handleDelete(index)">删除</span>
              </div>
            </li>
          </draggable>
        </div>
        <div class="mobile-footer">
          <i></i>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import draggable from 'vuedraggable'
const Good = () => import('../components/editComponents/Good')
const GoodList = () => import('../components/editComponents/GoodList')
const GoodSearch = () => import('../components/editComponents/GoodSearch')
const CutLine = () => import('../components/editComponents/CutLine')
const Blank = () => import('../components/editComponents/Blank')
const ImgAd = () => import('../components/editComponents/ImgAd')
const ImgTab = () => import('../components/editComponents/ImgTab')
const Window = () => import('../components/editComponents/Window')
const ItemVideo = () => import('../components/editComponents/Video')
const TopMenu = () => import('../components/editComponents/TopMenu')
export default {
  components: {
    draggable, Good, GoodSearch, GoodList, CutLine, Blank, ImgAd, ImgTab, Window, ItemVideo, TopMenu
  },
  data () {
    return {
      module_list: [
        {
          name: 'good',
          label: '商品',
          icon: 'iconfont icon-shangpin'
        },
        {
          name: 'good_list',
          label: '商品列表',
          icon: 'iconfont icon-list'
        },
        {
          name: 'good_search',
          label: '商品搜索',
          icon: 'iconfont icon-sousuo'
        },
        {
          name: 'cut_line',
          label: '分割线',
          icon: 'iconfont icon-fengexian'
        },
        {
          name: 'blank',
          label: '辅助空白',
          icon: 'iconfont icon-blank'
        },
        {
          name: 'img_ad',
          label: '图片广告',
          icon: 'iconfont icon-tuku'
        },
        {
          name: 'img_tab',
          label: '图片导航',
          icon: 'iconfont icon-tupian'
        },
        {
          name: 'window',
          label: '橱窗',
          icon: 'iconfont icon-chuchuang'
        },
        {
          name: 'video',
          label: '视频',
          icon: 'iconfont icon-Video'
        },
        {
          name: 'topmenu',
          label: '顶部菜单',
          icon: 'iconfont icon-menu'
        },
        {
          name: 'title',
          label: '标题',
          icon: 'iconfont icon-biaoti'
        },
        {
          name: 'richtxt',
          label: '富文本',
          icon: 'iconfont icon-fuwenben'
        },
        {
          name: 'testbar',
          label: '文本导航',
          icon: 'iconfont icon-textbar'
        }
      ],
      list: [],
      edit_focus_index: 0
    }
  },
  watch: {
    list () {
      console.log(this.list)
      this.edit_focus_index = this.list.length - 1
    }
  },
  methods: {
    handleDelete (ind) {
      this.list.splice(ind, 1)
    },
    handleEdit (index) {
      this.edit_focus_index = index
    }
  }
}
</script>
<style lang="scss" scoped>
.drag-box{
  display: flex;
  align-items: flex-start;
  .pannel-edit{
    width: 180px;
    border: 1px solid #ccc;
    border-radius: 15px;
    overflow: hidden;
    .title{
      background: #E8E8E8;
      line-height: 34px;
      text-align: center;
    }
    .list{
      padding: 10px;
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      text-align: center;
      .list-item{
        width: 72px;
        height: 52px;
        border: 1px solid #ccc;
        background-color: #eee;
        margin-bottom: 10px;
        &:hover{
          background-color: #0BA29B;
          color: #fff;
          cursor: pointer;
        }
        i.iconfont{
          display: inline-block;
          font-size: 28px;
          margin: 3px 0;
        }
        p{
          font-size: 12px;
        }
      }
    }
  }
  .mobile-model{
    width: 346px;
    min-height: 650px;
    margin-left: 20px;
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
        background: url('../../../../assets/img/modules.png') no-repeat 0 -74px;
      }
      .mobile-title{
        height: 34px;
        padding-top: 32px;
        background: url('../../../../assets/img/modules.png') no-repeat 0 0;
        color: #fff;
        font-size: 18px;
        text-align: center;
        overflow: hidden;
        cursor: pointer;
      }
    }
    .mobile-content{
      flex: 1;
      display: flex;
      flex-direction: column;
      .list{
        flex: 1;
        height: 100%;
        margin: 0 13px 13px;
        border: 1px solid#ddd;
        .list-item{
          position: relative;
          cursor: move;
          .item-box{
            margin-bottom: 10px;
            border: 2px dashed transparent;
          }
          .ctr{
            display: none;
            position: absolute;
            bottom: 4px;
            right: 3px;
            text-align: right;
            span{
              cursor: pointer;
              background: #ccc;
              &:hover{
                background: #FFAA00;
                color: #fff;
              }
            }
          }
          &:hover,&.edit-focus{
            .item-box{
              border-color:#FFAA00;
            }
            .ctr{
              display: block;
            }
          }
        }
      }
    }
    .mobile-footer{
      border-top: 1px solid #ccc;
      &>i{
        display: block;
        margin: 10px auto;
        width: 62px;
        height: 62px;
        background: url('../../../../assets/img/modules.png') no-repeat -253px -70px;
      }
    }
  }
}
</style>
