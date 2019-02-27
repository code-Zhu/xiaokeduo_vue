<template>
  <div class="shop-menu">
    <p class="page-title">图片库</p>
    <div class="pannel pannel-top">
      <div class="left">
        <input type="file" id="img_lib" style="display:none">
        <label for="img_lib">
          <span class="btn">上传图片</span>
        </label>
        <el-button size="mini" type="success" icon="el-icon-check" @click="choose('all')">全选</el-button>
        <el-button size="mini" type="success" icon="el-icon-rank" @click="choose('flip')">反选</el-button>
        <el-button size="mini" type="primary" @click="dialogVisible=true">移动到</el-button>
        <el-button size="mini" type="danger" icon="el-icon-delete">删除</el-button>
      </div>
      <div class="right">
        <el-form :inline="true">
          <el-form-item label="显示顺序：">
            <el-select v-model="order" size="mini">
              <el-option label="按上传时间从晚到早" value="0"></el-option>
              <el-option label="按上传时间从早到晚" value="1"></el-option>
              <el-option label="按图片名升序" value="2"></el-option>
              <el-option label="按图片名降序" value="3"></el-option>
              <el-option label="按修改时间从晚到早" value="4"></el-option>
              <el-option label="按修改时间从早到晚" value="5"></el-option>
              <el-option label="按图片从大到小" value="6"></el-option>
              <el-option label="按图片从小到大" value="7"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item>
            <el-input type="text" placeholder="图片名" size="mini"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button size="mini" type="primary">搜索</el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>
    <div class="pannel pannel-list" style="margin-top: -20px">
      <ul class="aside">
        <li class="title">图片分组</li>
        <li class="active">
          <span>默认分类</span>
          <span>(73)</span>
        </li>
        <li v-for="v in 6" :key="v">
          <span>未命名文件夹{{v}}</span>
          <span>(0)</span>
        </li>
        <li>
          <el-button size="mini" type="primary">分组管理</el-button>
        </li>
      </ul>
      <div class="list-box">
        <div class="list">
          <div class="list-header">
            <span>共<span>73</span>张图片</span>
          </div>
          <ul class="list-body">
            <li v-for="(v, index) in list" :key="index" @mouseleave="currentIndex=-1">
              <label class="img-box">
                <input v-model="selection" type="checkbox" :value="v.id" class="hide">
                <img :src="v.img" alt="">
              </label>
              <p class="name">{{v.title}}</p>
              <div class="ctr">
                <i v-if="currentIndex==-1" class="el-icon-picture"></i>
                <i v-if="currentIndex==-1" class="el-icon-edit" @click="currentIndex=index"></i>
                <i v-if="currentIndex==-1" class="el-icon-delete"></i>
                <el-input v-model="v.title" v-if="currentIndex==index" size="mini" style="width:70px"></el-input>
                <span class="mini-btn" v-if="currentIndex==index" type="primary" @click="changeTitle(v.id)" style="line-height:28px;">确定</span>
              </div>
              <div class="ischecked" v-if="selection.includes(v.id)" @click="selection.splice(selection.indexOf(v.id),1)">
                <i class="iconfont icon-true"></i>
              </div>
            </li>
          </ul>
        </div>
        <div class="table-footer" style="text-align:center">
          <el-pagination
            :page-size="100"
            layout="total, prev, pager, next, jumper"
            :total="400">
          </el-pagination>
        </div>
      </div>
    </div>
    <el-dialog title="移动图片管理" :visible.sync="dialogVisible" width="500px">
      <el-form label-width="150px">
        <el-form-item label="选择分组：">
          <el-select value="1">
            <el-option value="1" label="默认分组"></el-option>
          </el-select>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button type="success" @click="dialogVisible = false" size="small">文件移动</el-button>
        <el-button @click="dialogVisible = false" size="small">关&nbsp;闭</el-button>
      </span>
    </el-dialog>
  </div>
</template>
<script>
export default {
  data () {
    return {
      dialogVisible: false,
      order: '',
      list: [
        {
          id: 1,
          title: '教育',
          img: './static/img/wfxqrcode.jpg'
        },
        {
          id: 2,
          title: '测试',
          img: './static/img/waitupload.png'
        },
        {
          id: 3,
          title: '教育',
          img: './static/img/user.png'
        },
        {
          id: 4,
          title: '测试1',
          img: './static/img/wfxqrcode.jpg'
        },
        {
          id: 5,
          title: '教育2',
          img: './static/img/waitupload.png'
        },
        {
          id: 6,
          title: '教育',
          img: './static/img/user.png'
        }
      ],
      selection: [],
      currentIndex: -1
    }
  },
  methods: {
    choose (type) {
      this.selection = this.list.map(v => {
        if (type === 'all') {
          return v.id
        } else if (type === 'flip' && !this.selection.includes(v.id)) {
          return v.id
        }
      })
    },
    changeTitle (id) {
      this.currentIndex = -1
      this.$message.success('名称修改成功')
    }
  }
}
</script>

<style lang="scss" scoped>
.btn{
  display: inline-block;
  margin-right: 10px;
  padding: 7px 15px 8px;
  border-radius: 3px;
  background: #67C23A;
  color: #fff;
  font-size: 12px;
  cursor: pointer;
  &:hover{
    opacity: .85;
  }
}
.pannel-top{
  display: flex;
  justify-content: space-between;
  .right{
    margin-top: -5px;
  }
}
.pannel-list{
  display: flex;
  align-items: flex-start;
  .aside{
    width: 150px;
    background: #F7F7F7;
    padding: 20px 0;
    text-align: center;
    margin-right: 15px;
    .title{
      font-size: 18px;
    }
    li:not(:first-child){
      line-height: 30px;
      color: #0077DD;
      cursor: pointer;
      &:hover,&.active{
        font-weight: 600;
      }
      span+span{
        color: #FD6600;
      }
    }
  }
  .list-box{
    flex: 1;
    .list{
      border-left: 1px solid #ddd;
      padding-left: 10px;
      .list-header{
        width: 100%;
        line-height: 35px;
        margin-bottom: 10px;
        padding-left: 10px;
        background-color: #F2F8FC;
        span{
          span{
            color: #ff0000;
            margin: 0 5px;
          }
        }
      }
      .list-body{
        display: flex;
        flex-wrap: wrap;
        li{
          width: 118px;
          height: 138px;
          margin-right: 23px;
          margin-bottom: 23px;
          border: 1px solid #E4E4E4;
          display: flex;
          flex-direction: column;
          position: relative;
          text-align: center;
          .img-box{
            flex: 1;
            img{
              width: 100%;
              height: 108px;
            }
          }
          .name{
            height: 30px;
            line-height: 30px;
          }
          .ctr{
            width: 100%;
            color: #fff;
            font-size: 16px;
            position: absolute;
            bottom: 0;
            height: 30px;
            background: #666;
            display: flex;
            justify-content: center;
            display: none;
            i{
              width: 30px;
              line-height: 30px;
              &:hover{
                background: #5CB85C;
                cursor: pointer;
              }
            }
          }
          .ischecked{
            position: absolute;
            width: 100%;
            height: 100%;
            line-height: 100%;
            background-color: rgba(0,0,0,0.5);
            display: flex;
            align-items: center;
            justify-content: center;
            i{
              width: 30px;
              height: 30px;
              line-height: 30px;
              border-radius: 50%;
              font-size: 18px;
              color: #fff;
              background-color: #1C89D5;
            }
          }
          &:hover{
            border-color: #999;
            .ctr{
              display: block;
            }
          }
        }
      }
    }
  }
}

</style>
