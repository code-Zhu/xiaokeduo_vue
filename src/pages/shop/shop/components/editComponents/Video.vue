<template>
  <div class="video-box">
    <video :src="video_url" x5-video-player-type="h5"></video>
    <div class="edit-right-ctr" v-if="righEdit">
      <div class="ctr-form">
        <div class="ctr-form-item" style="margin-left:40px">
          <span class="label">视频地址：</span>
          <el-input v-model="video_url" size="mini" type="primary"
            style="width: 250px"></el-input>
          <el-button type="success" size="mini" style="height: 29px;margin-top:3px;margin-left:10px">确定</el-button>
          <p class="video-tip">目前只支持腾讯视频，请填写完整的带有vid或者sid的视频地址，如：http://v.qq.com/cover/****.html?vid=g0da0537fm</p>
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
      video_url: 'http://ykugc.cp31.ott.cibntv.net/6973D8E8BD437716257544D3A/030020010058816B69FC300000000168867E57-04FA-52D2-3678-498F6FF66BF8.mp4?ccode=050F&duration=209&expire=18000&psid=0ab9e64a26f33ea5c012e4eb834c77ba&ups_client_netip=b4d426b1&ups_ts=1548140006&ups_userid=&utid=7pK9FFPJZCMCAbTUJGyn9B%2Bk&vid=XMTc4NTg5MDc3Ng%3D%3D&vkey=A310207e95045aefc5ea3b10e44e26af4&sp='
    }
  }
}
</script>

<style lang="scss" scoped>
.video-box{
  width: 100%;
  height: 220px;
  overflow: auto;
  .ctr-form-item{
    flex-wrap: wrap;
    .video-tip{
      font-size:12px;
      color:#999;
      width: 320px;
      line-height: 16px;
      margin-left: 70px;
    }
  }
}
</style>
