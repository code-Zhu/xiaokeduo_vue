<template>
  <div>
    <p class="page-title">会员登录授权</p>
    <div class="pannel pannel-content">
      <p>开启以后，会员可在微信端通过微信授权快速登录系统。</p>
      <span>(仅认证服务号可用）</span>
      <toggle-button v-model="switch1" :labels="{checked: '已开启', unchecked: '已关闭'}"
        :color="{checked: '#3AB400', unchecked: '#ccc'}"
        :width="100" :height="40" :font-size="14">
      </toggle-button>
    </div>
    <div class="pannel pannel-content">
      <p>开启以后，首次访问微信端商城任何页面的用户，都将被要求先进行微信授权登录。</p>
      <span>（需要系统先开启微信授权登录）</span>
      <toggle-button v-model="switch2" :labels="{checked: '已开启', unchecked: '已关闭'}"
        :color="{checked: '#3AB400', unchecked: '#ccc'}"
        :width="100" :height="40" :font-size="14">
      </toggle-button>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      switch1: true,
      switch2: true
    }
  }
}
</script>

<style lang="scss" scoped>
.pannel-content{
  position: relative;
  line-height: 20px;
  .vue-js-switch{
    position: absolute;
    right: 10px;
    top: 10px;
  }
  span{
    color: #ff0000
  }
}
</style>
