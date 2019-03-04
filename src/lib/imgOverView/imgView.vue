<template>
  <div class="img-view-box" v-if="show" @click.self="show=false">
    <img :src="list[index].img">
    <i v-if="index>0" class="btn left-btn el-icon-arrow-left" @click="changeIndex('left')"></i>
    <i v-if="index<list.length-1" class="btn right-btn el-icon-arrow-right" @click="changeIndex('right')"></i>
  </div>
</template>
<script>
export default {
  props: {
    show: Boolean,
    index: 0,
    list: []
  },
  methods: {
    changeIndex (type) {
      if (type === 'left') {
        this.index--
      } else if (type === 'right') {
        this.index++
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.img-view-box{
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: rgba(0,0,0,0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 100;
  user-select:none;
  .btn{
    color: #fff;
    position: absolute;
    font-size: 50px;
    top: 50%;
    transform: translate(50%, 10%);
    cursor: pointer;
    &.right-btn{
      right:50px;
    }
    &.left-btn{
      left:50px;
    }
  }
}
</style>
