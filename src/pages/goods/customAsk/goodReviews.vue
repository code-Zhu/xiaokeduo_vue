<template>
  <div class="selectcategory">
    <p class="page-title">客户评论</p>
    <div class="pannel pannel-content">
      <el-row style="line-height: 30px">
        <el-col :span="6">
          <el-col :span="6">商品名称</el-col>
          <el-col :span="18">
            <el-input v-model="query" size="mini"></el-input>
          </el-col>
        </el-col>
        <el-col :span="6">
          <el-col :span="6" :push="1">商品分类</el-col>
          <el-col :span="17" :push="1">
            <el-select v-model="query" size="mini">
              <el-option label="-选择商品分类-" value=""></el-option>
              <el-option label="苹果" value="apple"></el-option>
            </el-select>
          </el-col>
        </el-col>
        <el-col :span="6">
          <el-col :span="6" :push="1">商品编码</el-col>
          <el-col :span="17" :push="1">
            <el-input v-model="query" size="mini"></el-input>
          </el-col>
        </el-col>
        <el-col :span="6">
          <el-button size="mini" type="primary" style="margin-left:10px">查询</el-button>
        </el-col>
      </el-row>
    </div>
    <div class="pannel table-body">
      <el-table :data="list">
        <el-table-column label="商品" width="300">
          <template slot-scope="scope">
            <div>
              <img :src="scope.row.img">
              <a href="javascript:;">{{scope.row.name}}</a>
            </div>
          </template>
        </el-table-column>
        <el-table-column label="客户评论">
          <template slot-scope="scope">
            <div class="review">
              <p>{{scope.row.review}}</p>
              <span>{{scope.row.time}}</span>
              <span>{{scope.row.review_name}}</span>
            </div>
          </template>
        </el-table-column>
        <el-table-column label="操作" width="90">
          <template slot-scope="scope">
            <el-button size="mini" type="danger">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
      <div class="table-footer">
        <el-pagination
          :page-size="10"
          layout="sizes, total, prev, next, jumper"
          :total="1000">
        </el-pagination>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      query: '',
      list: [
        {
          name: '苹果',
          img: './static/img/apple.jpg',
          review: '测试评论',
          time: '2019-01-20 10:46:34',
          review_name: 'admin'
        },
        {
          name: '苹果',
          img: './static/img/apple.jpg',
          review: '测试评论',
          time: '2019-01-20 10:46:34',
          review_name: 'admin'
        },
        {
          name: '苹果',
          img: './static/img/apple.jpg',
          review: '测试评论',
          time: '2019-01-20 10:46:34',
          review_name: 'admin'
        },
        {
          name: '苹果',
          img: './static/img/apple.jpg',
          review: '测试评论',
          time: '2019-01-20 10:46:34',
          review_name: '测试用户'
        }
      ]
    }
  }
}
</script>
<style lang="scss" scoped>
.table-body{
  img{
    height: 60px;
    &~a{
      vertical-align: top;
    }
  }
  .review{
    p{
      color: #000;
      &~span{
        color: #999;
        margin-right: 10px;
      }
    }
  }
}
</style>
