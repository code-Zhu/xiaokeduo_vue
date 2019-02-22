<template>
  <div style="margin-bottom: 500px">
    <p class="page-title">新增九图一文素材</p>
    <div class="pannel" style="display: flex;align-items:flex-start">
      <div class="mobile-model">
        <div class="mobile-header">
          <i></i>
          <div class="mobile-title">店铺主页</div>
        </div>
        <div class="mobile-content">
          <div>
            <img :src="'./static/img/headLogo.jpg'" style="width:35px;height:35px">
          </div>
          <div class="list-box">
            <a href="javascript:;">您的昵称</a>
            <p>{{data.title || '分享标题内容'}}</p>
            <ul class="list">
              <li v-for="(v, index) in 9" :key="index">
                <img v-if="data.imgList[index]" :src="data.imgList[index].url" style="width:88px;height:88px">
                <div v-else>图片{{v}}</div>
              </li>
            </ul>
          </div>
        </div>
        <div class="mobile-footer">
          <i></i>
        </div>
      </div>
      <div class="right">
        <div class="edit-right-ctr">
          <el-form size="small" class="form-box" label-position="top">
            <el-form-item label="标题：" required>
              <el-input v-model="data.title" type="textarea" :rows="4"></el-input>
            </el-form-item>
            <el-form-item label="九宫格图片：" required>
              <el-button type="success">选择图库图片</el-button>
              <el-button type="danger" @click="handleDelete('clean')">一键清空</el-button>
              <draggable element="ul" :list="data.imgList" class="img-list" :options="{animation:300}">
                <li v-for="(item, index) in data.imgList" :key="index">
                  <img :src="item.url">
                  <p class="ctr">
                    <span>编辑</span>
                    <span @click="handleDelete(index)">删除</span>
                  </p>
                </li>
                <li class="last-child" v-if="data.imgList.length<9" @click="addImgItem">
                  <i class="iconfont icon-add"></i>
                </li>
              </draggable>
              <p class="tip">上传1-9张图片，建议上传小于200K的.jpg、.gif、.png格式图片；</p>
              <p class="tip">左键按住图片，可拖拽图片进行排序</p>
            </el-form-item>
          </el-form>
        </div>
      </div>
    </div>
    <div class="submit-box-fixed">
      <el-button type="success" size="small">保存</el-button>
      <el-button type="success" size="small">保存并预览</el-button>
    </div>
  </div>
</template>
<script>
import draggable from 'vuedraggable'
export default {
  components: {
    draggable
  },
  data () {
    return {
      data: {
        title: '分享标题内容',
        imgList: [
          {
            url: './static/img/none.gif'
          },
          {
            url: './static/img/nvr.jpg'
          },
          {
            url: './static/img/nvr.jpg'
          }
        ]
      }
    }
  },
  methods: {
    addImgItem () {
      this.data.imgList.push({
        url: './static/img/user.png'
      })
    },
    handleDelete (ind) {
      if (ind === 'clean') {
        this.data.imgList = []
        return
      }
      this.data.imgList.splice(ind, 1)
    }
  }
}
</script>

<style lang="scss" scoped>
.mobile-model{
  width: 350px;
}
.mobile-content{
  margin: 20px 13px 58px;
  background-color: #fff;
  flex-direction: row;
  font-size: 12px;
  align-items: flex-start;
  .list-box{
    margin-left: 15px;
    line-height: 20px;
    .list{
      display: flex;
      flex-wrap: wrap;
      li{
        margin-right: 1px;
        margin-bottom: 1px;
        div{
          line-height: 88px;
          box-sizing: border-box;
          width: 88px;
          border: 1px dashed #ccc;
          text-align: center;
          color: #ccc;
        }
      }
    }
  }
}
.right{
  position: relative;
  margin-left: 25px;
  .edit-right-ctr{
    width: 600px;
    left: 0;
    .img-list{
      display: flex;
      flex-wrap: wrap;
      align-content: flex-start;
      margin-top: 10px;
      height: 468px;
      li{
        width: 150px;
        height: 150px;
        box-sizing: border-box;
        margin-right: 10px;
        margin-bottom: 10px;
        position: relative;
        img{
          width: 100%;
          height: 100%;
        }
        .ctr{
          position: absolute;
          bottom: 0;
          line-height: 30px;
          text-align: center;
          color: #fff;
          width: 100%;
          background-color: rgba(0, 0, 0, 0.5);
          span{
            cursor: pointer;
          }
          span+span{
            margin-left: 15px;
          }
        }
      }
      .last-child{
        line-height: 146px;
        border: 2px dashed #ccc;
        text-align: center;
        cursor: pointer;
        i{
          font-size: 26px;
          color: #ccc;
        }
      }
    }
  }
}
</style>
