<template>
  <div class="blank-box">
    <div class="blank" :style="{height: height + 'px'}"></div>
    <div class="edit-right-ctr" v-if="righEdit">
      <div class="ctr-form">
        <div class="ctr-form-item">
          <span class="label choose-good">高度：</span>
          <el-slider v-model="height" style="width: 250px" :show-tooltip="false"></el-slider>
          <span style="margin-left:15px">{{height}}px</span>
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
      height: 10
    }
  }
}
</script>
<style lang="scss" scoped>
.blank{
  height: 10px;
}
.edit-right-ctr{
  .ctr-form{
    padding-left: 60px;
  }
}
</style>
