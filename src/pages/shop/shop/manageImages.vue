<template>
  <div class="shop-menu">
    <div class="page-title">
      <p>九图一文素材管理</p>
      <span>管理九图一文格式的图文素材</span>
    </div>
    <div class="pannel">
      <el-row>
        <el-col :span="4">
          <el-button size="mini" type="success">新建九图一文素材</el-button>
        </el-col>
        <el-col :span="6">
          <el-input size="mini" placeholder="请输入内容"  prefix-icon="el-icon-search"></el-input>
        </el-col>
      </el-row>
    </div>
    <div class="pannel pannel-list">
      <p>九图一文素材列表：（共6条）</p>
      <ul class="list">
        <li v-for="v in 6" :key="v">
          <p class="list-title">分享标题内容</p>
          <div class="img-box">
            <span></span><span></span><span></span>
            <span></span><span></span><span></span>
            <span></span><span></span><span></span>
          </div>
          <div class="btn">
            <i class="shadow"></i>
            <p>
              <a href="#">编辑</a>
              <a href="#">删除</a>
            </p>
          </div>
        </li>
      </ul>
      <div class="table-footer" style="text-align:center">
        <el-pagination
          :page-size="100"
          layout="total, prev, pager, next, jumper"
          :total="400">
        </el-pagination>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.pannel-list{
  .list{
    margin-top: 15px;
    display: flex;
    flex-wrap: wrap;
    li{
      width: 186px;
      height: 230px;
      padding: 10px;
      border: 1px solid #999;
      border-radius: 5px;
      margin-right: 10px;
      margin-bottom: 10px;
      display: flex;
      flex-direction: column;
      position: relative;
      .list-title{
        flex: 1;
      }
      div{
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        span{
          width: 54px;
          height: 54px;
          border: 1px solid #ddd;
          background: url('../../../assets/img/none.gif') no-repeat;
          background-size: 100%;
          padding: 1px;
          margin-bottom: 2px;
        }
      }
      .btn{
        position: absolute;
        width: 100%;
        height: 30px;
        left: 0;
        bottom: 10px;
        color: #fff;
        line-height: 30px;
        text-align: center;
        display: none;
        p{
          position: relative;
          width: 100%;
          z-index: 2;
          a{
            color: #fff;
            &+a{
              margin-left: 64px;
            }
          }
          a:hover{
            cursor: pointer;
            color: #FFD800
          }
        }
        .shadow{
          position: absolute;
          z-index: 1;
          left: 0;
          width: 100%;
          height: 100%;
          background-color: #000;
          opacity: .5;
        }
      }
      &:hover{
        .btn{
          display: block;
        }
      }
    }
  }
}
</style>
