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
        <div class="edit-right-ctr">
          <p>注意：可以使用鼠标左键拖动左图中各元素,进行位置调整</p>
          <el-form :inline="true" label-width="85px">
            <el-form-item label="默认头像：">
              <label>
                <input type="radio" name="default-avatar">
                <span>使用会员头像</span>
              </label>
              <label>
                <input type="radio" name="default-avatar">
                <span>使用分销商店铺Logo</span>
              </label>
              <label>
                <input type="radio" name="default-avatar">
                <span>不使用头像</span>
              </label>
            </el-form-item>
            <el-form-item label="个人介绍：">
              <el-input size="mini" style="width:188px"></el-input>
            </el-form-item>
            <el-form-item label="文字样式：">
              <el-color-picker v-model="color1" size="mini" class="_color-picker"></el-color-picker>
              <el-color-picker v-model="color2" size="mini" class="_color-picker"></el-color-picker>
              <el-input-number size="mini" style="width:80px" controls-position="right"></el-input-number>
              <span>像素</span>
            </el-form-item>
            <el-form-item label=" ">
              <p class="tip">“{{'昵称'}}”为系统参数，实际显示以分销商的昵称替代</p>
            </el-form-item>
            <el-form-item label="推广口号：">
              <el-input type="textarea" :rows="2"></el-input>
            </el-form-item>
            <el-form-item label="文字样式：">
              <el-color-picker v-model="color1" size="mini" class="_color-picker"></el-color-picker>
              <el-color-picker v-model="color2" size="mini" class="_color-picker"></el-color-picker>
              <el-input-number size="mini" style="width:80px" controls-position="right"></el-input-number>
              <span>像素</span>
            </el-form-item>
            <el-form-item label=" ">
              <p class="tip">“{{'店铺名称'}}”为系统参数，实际显示以分销商的店铺名称替代</p>
            </el-form-item>
            <el-form-item label="背景图片：">
              <label class="bg">
                <input type="file" class="hide" accept="image/jpeg, image/png">
              </label>
              <p class="tip">点击图片上传，建议上传480*735px，小于1M，png、jpg格式图片</p>
            </el-form-item>
            <el-form-item label=" ">
              <el-button size="small" type="primary">保存</el-button>
            </el-form-item>
          </el-form>
        </div>
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
      color1: '#ff0000',
      color2: '#fff000',
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
  .edit-right-ctr{
    width: 560px;
    padding: 30px 40px;
    left: 360px;
    >p:first-child{
      color: red;
      margin-left: -20px;
      margin-bottom: 20px;
    }
    ._color-picker{
      vertical-align: middle;
    }
    .bg{
      display: inline-block;
      width: 96px;
      height: 96px;
      border: 2px dashed #FF8182;
      img{
        width: 100%;
        height: 100%;
      }
    }
    .tip{
      font-size: 12px;
      color: #999;
    }
  }
}
</style>
