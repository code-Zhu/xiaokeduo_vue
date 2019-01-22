<template>
  <div class="cut-line-box">
    <p class="cut-line" :style="borderStyle"></p>
    <div class="edit-right-ctr" v-if="righEdit">
      <div class="shop-ctr-form">
        <div class="ctr-form-item">
          <span class="label choose-good">颜色：</span>
          <input type="color" v-model="borderStyle.borderTopColor">
        </div>
        <div class="ctr-form-item">
          <span class="label">样式：</span>
          <div>
            <label for="dashed"><input v-model="borderStyle.borderTopStyle" type="radio" id="dashed" name="border_type" value="dashed">虚线</label>
            <label for="solid"><input v-model="borderStyle.borderTopStyle" type="radio" id="solid" name="border_type" value="solid">实线</label>
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
      borderStyle: {
        borderTopColor: '#dddddd',
        borderTopStyle: 'dashed'
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.cut-line-box{
  padding: 10px;
  .cut-line{
    border-top: 1px dashed #ddd;
  }
  .edit-right-ctr{
    .shop-ctr-form{
      padding-left: 60px;
      line-height: 34px;
    }
  }
}
</style>
