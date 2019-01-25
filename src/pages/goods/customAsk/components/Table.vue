<template>
  <div class="list-table">
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
        <el-table-column label="客户评论" v-if="type=='question'">
          <template slot-scope="scope">
            <div class="review">
              <p>{{scope.row.review}}</p>
              <span>{{scope.row.time}}</span>
              <span>{{scope.row.review_name}}</span>
            </div>
          </template>
        </el-table-column>
        <el-table-column label="客户/问题" v-if="type=='reply'">
          <template slot-scope="scope">
            <div class="review">
              <p>{{scope.row.review}}</p>
              <span>{{scope.row.time}}</span>
              <span>{{scope.row.review_name}}</span>
              <div class="reply">
                <p>[回复]{{scope.row.reply}}</p>
                <p>[{{scope.row.reply_time}}]</p>
              </div>
            </div>
          </template>
        </el-table-column>
        <el-table-column label="操作" width="90">
          <template slot-scope="scope">
            <el-button size="mini" type="success" v-if="type=='question'">回复</el-button>
            <el-button size="mini" type="danger" style="margin-top:10px;margin-left: 0px">删除</el-button>
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
  props: ['list', 'type'],
  data () {
    return {
      query: ''
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
    >p{
      color: #000;
      &~span{
        color: #999;
        margin-right: 10px;
      }
    }
    .reply{
      color: #ff0000;
      font-size: 12px;
      background-color: #F2F2F2;
    }
  }
}
</style>
