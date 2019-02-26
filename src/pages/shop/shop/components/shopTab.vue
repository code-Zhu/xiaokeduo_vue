<template>
  <div class="shop-tab">
    <div class="first">
      <p class="title">一级导航</p>
      <div>
        <p>{{tab.title}}</p>
        <p>
          <span class="first-edit">编辑</span>
          <span v-if="tab.list.length>0">设置二级导航以后，主链接已失效。</span>
        </p>
      </div>
    </div>
    <div class="second">
      <p class="title">二级导航</p>
      <ul class="second-list">
        <li v-for="v in tab.list" :key="v.id">
          <div>
            <span>{{v.title}}</span>
          </div>
          <div class="ctr">
            <span>编辑</span>
            <span>删除</span>
            <span>链接</span>
          </div>
        </li>
        <li>+添加二级导航</li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  props: ['tab']
}
</script>

<style lang="scss" scoped>
.shop-tab{
  border: 1px solid #ddd;
  border-top: none;
  padding: 10px;
  .title{
    font-size: 16px;
    line-height: 20px;
    border-left: 2px solid #FF2A00;
    padding-left: 10px;
    margin: 10px 0;
  }
  .first{
    &>div{
      display: flex;
      background-color: #F7F7F7;
      padding-left: 10px;
      line-height: 40px;
      p{
        width: 50%;
        .first-edit{
          cursor: pointer;
          &+span{
            color: #999;
            font-size: 12px;
          }
        }
      }
    }
  }
  .second{
    padding-left: 15px;
    .second-list{
      li:not(:last-child){
        background-color: #F7F7F7;
        height: 40px;
        line-height: 40px;
        padding-left: 10px;
        margin-bottom: 15px;
        display: flex;
        & :first-child{
          width: 50%;
        }
        .ctr{
          span{
            cursor: pointer;
            &:not(:last-child){
              padding-right: 5px;
              margin-right: 5px;
              border-right: 1px solid #666;
            }
            &:last-child{
              color: #0000FF;
            }
          }
        }
      }
      li:last-child{
        border: 1px dashed #6E6E6E;
        line-height: 30px;
        padding-left: 10px;
        cursor: pointer;
      }
    }
  }
}
</style>
