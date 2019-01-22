<template>
  <div class="edit-item-dom">
    <ul class="good-dom" :class="layout_type" v-if="goodList.length === 0">
      <li v-for="v in num" :key="v.id">
        <span class="img-box">
          第{{v}}个商品
        </span>
        <div>
          <span style="color:red">￥88</span>
          <span class="old-price"><span>99</span></span>
        </div>
      </li>
    </ul>
    <ul class="good-dom" :class="layout_type" v-else>
      <li v-for="v in goodList" :key="v.id">
        <span class="img-box">
          <img :src="v.img">
        </span>
        <div>
          <span style="color:red">￥{{v.new_price}}</span>
          <span class="old-price"><span>{{v.old_price}}</span></span>
        </div>
      </li>
    </ul>
    <div class="edit-right-ctr" v-if="righEdit">
      <div class="good-ctr-form">
        <div class="ctr-form-item">
          <span class="label choose-good">选择商品：</span>
          <ul class="good-lists">
            <li v-for="(v, index) in goodList" :key="v.id">
              <i class="el-icon-delete" @click="delGood(index)"></i>
            </li>
            <li @click="addGood"><i class="el-icon-plus"></i></li>
          </ul>
        </div>
        <div class="ctr-form-item">
          <span class="label">布局方式：</span>
          <div>
            <label for="small"><input v-model="layout_type" type="radio" id="small" name="layout_type" value="small">小图</label>
            <label for="big"><input v-model="layout_type" type="radio" id="big" name="layout_type" value="big">大图</label>
            <label for="middle"><input v-model="layout_type" type="radio" id="middle" name="layout_type" value="middle">一大两小</label>
            <label for="item-list"><input v-model="layout_type" type="radio" id="item-list" name="layout_type" value="item-list">列表</label>
          </div>
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
      layout_type: 'small',
      goodList: []
    }
  },
  computed: {
    num () {
      return this.layout_type === 'small' ? 4 : 3
    }
  },
  methods: {
    delGood (index) {
      this.goodList.splice(index, 1)
    },
    addGood () {
      this.goodList.push({
        img: '',
        old_price: 0,
        new_price: 0
      })
    }
  }
}
</script>
<style lang="scss" scoped>
.good-dom{
  width: 100%;
  padding: 5px 10px 0;
  box-sizing: border-box;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  li{
    box-sizing: border-box;
    border: 1px solid #E9E9E9;
    margin-bottom: 10px;
    padding: 5px;
    .old-price{
      color: #929292;
      span{
        text-decoration:line-through
      }
    }
    .img-box{
      background-color: #EEA642;
      margin-bottom: 10px;
      color: #fff;
      text-align: center;
    }
  }
  &.small{
    li{
      width: 144px;
      height: 172px;
      .img-box{
        display: inline-block;
        width: 134px;
        height: 134px;
      }
    }
  }
  &.big{
    li{
      width: 100%;
      height: 372px;
    }
  }
  &.middle{
    li{
      width: 144px;
      &:nth-child(3n-2){
        width: 100%;
        height: 372px;
      }
    }
  }
  &.item-list{
    li{
      width: 100%;
      height: 100px;
    }
  }
}
.good-ctr-form{
  padding-left: 80px;
  .ctr-form-item{
    .label{
      width: 80px;
      margin-right: 10px;
      &.choose-good{
        margin-top: 20px;
      }
    }
    label{
      margin-right: 15px;
    }
    .good-lists{
      width: 280px;
      display: flex;
      flex-wrap: wrap;
      li{
        width: 58px;
        height: 58px;
        border: 1px solid #999;
        margin-right: 10px;
        margin-bottom: 10px;
        position: relative;
        &:not(:last-child){
          i{
            position: absolute;
            top: 22px;
            left: 22px;
            display: none;
            color: #E5E5E5;
          }
          &:hover{
            i{
              display: block;
              cursor: pointer;
            }
          }
        }
      }
      li:last-child{
        width: 58px;
        height: 58px;
        border: 1px dashed #999;
        font-size: 24px;
        font-weight: 600;
        text-align: center;
        i{
          line-height: 58px;
        }
      }
    }
  }
}
</style>
