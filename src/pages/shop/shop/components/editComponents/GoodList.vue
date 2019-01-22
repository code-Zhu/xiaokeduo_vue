<template>
  <div class="edit-item-dom">
    <ul class="good-dom" :class="layout_type">
      <li v-for="v in show_num" :key="v.id">
        <span class="img-box">
          第{{v}}个商品
        </span>
        <div>
          <p class="title" v-show="show.join(',').includes('good_name')">商品名称</p>
          <span style="color:red" v-show="show.join(',').includes('good_new_price')">￥88</span>
          <span class="old-price" v-show="show.join(',').includes('good_old_price')"><span>99</span></span>
        </div>
      </li>
    </ul>
    <div class="edit-right-ctr" v-if="righEdit">
      <div class="good-ctr-form">
        <div class="ctr-form-item order">
          <span class="label">商品排序：</span>
          <select name="order">
            <option value="hot">最热商品（销量从高到低）</option>
            <option value="new">最新商品（上架从晚到早）</option>
          </select>
        </div>
        <div class="ctr-form-item">
          <span class="label">显示数量：</span>
          <label for="six">
            <input type="radio" v-model="show_num" id="six" name="show-num" :value="6">
            <span>前6个商品</span>
          </label>
          <label for="twelve">
            <input type="radio" v-model="show_num" id="twelve" name="show-num" :value="12">
            <span>前12个商品</span>
          </label>
          <label for="eighteen">
            <input type="radio" v-model="show_num" id="eighteen" name="show-num" :value="18">
            <span>前18个商品</span>
          </label>
        </div>
        <div class="ctr-form-item">
          <span class="label">展现形式：</span>
          <div>
            <label for="small"><input v-model="layout_type" type="radio" id="small" name="layout_type" value="small">小图</label>
            <label for="big"><input v-model="layout_type" type="radio" id="big" name="layout_type" value="big">大图</label>
            <label for="middle"><input v-model="layout_type" type="radio" id="middle" name="layout_type" value="middle">一大两小</label>
            <label for="item-list"><input v-model="layout_type" type="radio" id="item-list" name="layout_type" value="item-list">列表</label>
            <p>
              <label for="good-name">
                <input v-model="show" type="checkbox" id="good-name" name="name" value="good_name">
                <span>显示商品名称</span>
              </label>
            </p>
            <p>
              <label for="good-new-price">
                <input v-model="show" type="checkbox" id="good-new-price" name="name" value="good_new_price">
                <span>显示商品销售价</span>
              </label>
            </p>
            <p>
              <label for="good-old-name">
                <input v-model="show" type="checkbox" id="good-old-name" name="name" value="good_old_price">
                <span>显示商品原价</span>
              </label>
            </p>
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
      show_num: 6,
      show: ['good_name', 'good_new_price', 'good_old_price'],
      goodList: []
    }
  },
  computed: {
  },
  methods: {
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
    .title{
      margin: 5px 0 10px;
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
      min-height: 172px;
      .img-box{
        display: inline-block;
        width: 134px;
        height: 134px;
        overflow: hidden;
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
  padding-left: 60px;
  .ctr-form-item{
    display: flex;
    .label{
      width: 80px;
      margin-right: 5px;
    }
    &.order{
      select{
        padding: 3px 0;
        outline: none;
        border-radius: 5px;
        width: 200px;
      }
    }
    label{
      margin-right: 5px;
    }
  }
}
</style>
