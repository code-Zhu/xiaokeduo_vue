<template>
  <div class="info-base" :class="styles">
    <div class="left-info info-item">
      <span>{{data[0].label}} {{data[0].num}}</span>
      <span>{{data[1].label}} {{data[1].num}}</span>
    </div>
    <div class="right-info info-item">
      <div>
        <p>{{data[2].label}}</p>
        <a href="javascript:;">{{data[2].num}}</a>
      </div>
      <div>
        <p>{{data[3].label}}</p>
        <p>{{data[3].num}}&nbsp;</p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: ['styles', 'data']
}
</script>

<style lang="scss" scoped>
.info-base{
  position: relative;
  &.left{
    .left-info{
      left: -185px;
    }
    .right-info{
      background: #F2D7C5;
    }
  }
  &.right{
    .left-info{
      right: -185px;
    }
    .right-info{
      background: #C5E1FD;
    }
  }
  .info-item{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    text-align: center;
    &.left-info{
      position: absolute;
      top: 0;
      width: 200px;
      height: 130px;
      line-height: 30px;
      span{
        width: 100%;
        border-bottom: 1px dashed #000;
      }
    }
    &.right-info{
      line-height: 22px;
      border-radius: 50%;
      width: 160px;
      height: 160px;
      box-sizing: border-box;
      padding: 20px 0;
      >:first-child{
        font-size: 16px;
      }
    }
  }
}
</style>
