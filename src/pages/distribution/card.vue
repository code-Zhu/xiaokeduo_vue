<template>
  <div class="card">
    <div class="mobile-model">
      <div class="mobile-header">
        <i></i>
        <div class="mobile-title">店铺主页</div>
      </div>
      <div class="mobile-content">
        <vue-draggable-resizable-gorkys :parent="true" :w="avatar.w" :h="avatar.h" :x="avatar.x" :y="avatar.y">
          <div class="avatar">
            <img :src="avatar.url" alt="">
          </div>
        </vue-draggable-resizable-gorkys>
        <vue-draggable-resizable-gorkys :parent="true" :w="150" :h="28" :x="intr.x" :y="intr.y" :resizable="false">
          <p class="intr">{{intr.content}}</p>
        </vue-draggable-resizable-gorkys>
        <vue-draggable-resizable-gorkys :parent="true" :minw="220" :h="1" :x="spread.x" :y="spread.y" :resizable="false">
          <div class="spread">
            <span>{{spread.content}}</span>
          </div>
        </vue-draggable-resizable-gorkys>
        <vue-draggable-resizable-gorkys :parent="true" :w="qrcode.w" :h="qrcode.h" :x="qrcode.x" :y="qrcode.y">
          <div class="qrcode">
            <img :src="qrcode.url" alt="">
          </div>
        </vue-draggable-resizable-gorkys>
      </div>
      <div class="mobile-footer">
        <i></i>
      </div>
    </div>
  </div>
</template>
<script>
import vueDraggableResizableGorkys from 'vue-draggable-resizable-gorkys'
export default {
  components: {
    vueDraggableResizableGorkys
  },
  data () {
    return {
      avatar: {
        url: './static/img/headLogo.jpg',
        w: 140,
        h: 140,
        x: 0,
        y: 15
      },
      intr: {
        content: '我是天使',
        x: 166,
        y: 100
      },
      spread: {
        content: '邀请您加入店铺名称分销团队',
        x: 60,
        y: 180
      },
      qrcode: {
        url: './static/img/wfxqrcode.jpg',
        w: 168,
        h: 168,
        x: 76,
        y: 220
      }
    }
  },
  methods: {
    onResize (left, top) {
      this.qrcode.x = left
      this.qrcode.y = top
      console.log(this.qrcode)
    }
  }
}
</script>

<style lang="scss" scoped>
.mobile-model{
  width: 350px;
  height: 700px;
  .mobile-content{
    position: relative;
    background-color: #fff;
    margin: -1px 15px 0;
    background-image: url('../../../static/img/storecardbg.png');
    background-repeat: no-repeat;
    background-size: 100%;
    .avatar, .qrcode{
      width: 100%;
      height: 100%;
      img{
        width: 100%;
        height: 100%;
      }
    }
    .avatar{
      img{
        border-radius: 50%;
      }
    }
    .intr{
      font-size: 28px;
    }
    .spread{
      display: inline-block;
      font-size: 16px;
    }
  }
}
</style>
