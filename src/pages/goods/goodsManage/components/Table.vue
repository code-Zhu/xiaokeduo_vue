<template>
  <div class="pannel goods-table">
    <div class="pannel-content">
      <div class="table-find-box">
        <div class="find-item">
          <span>商品名称：</span>
          <el-input v-model="query" size="mini" type="text"></el-input>
        </div>
        <div class="find-item">
          <span>商品分类：</span>
          <el-select v-model="query" size="mini" placeholder="请选择商品分类">
            <el-option v-for="v in categories" :key="v.id" :label="v.name" :value="v.name"></el-option>
          </el-select>
        </div>
        <div class="find-item">
          <span class="label">品牌：</span>
          <el-select v-model="query" size="mini">
            <el-option label="请选择品牌" value=""></el-option>
            <el-option label="法国梧桐" value="法国梧桐"></el-option>
          </el-select>
        </div>
        <div class="find-item">
          <a href="javascript:;">清除条件</a>
        </div>
        <div class="find-item">
          <span>商品名编码：</span>
          <el-input v-model="query" size="mini" type="text"></el-input>
        </div>
        <div class="find-item">
          <span>创建时间：</span>
          <el-date-picker v-model="time" size="mini"
            type="daterange" range-separator="至" style="width:405px"
            start-placeholder="开始日期" end-placeholder="结束日期">
          </el-date-picker>
        </div>
        <div class="find-item">
          <el-button size="mini" type="primary">查询</el-button>
        </div>
      </div>
    </div>
    <div class="pannel" style="margin-top: 25px">
      <div class="table-header" v-if="isDel">
        <el-button size="mini" type="danger">彻底删除</el-button>
        <span>|</span>
        <el-button size="mini" type="primary">还原到出售中</el-button>
        <span>|</span>
        <el-button size="mini" type="primary">还原到仓库里</el-button>
      </div>
      <div class="table-header" v-else>
        <el-button size="mini" type="primary" v-if="type=='onsale'">下架</el-button>
        <el-button size="mini" type="primary" v-if="type=='onstock'">上架</el-button>
        <el-button size="mini" type="danger">删除</el-button>
        <span>|</span>
        <el-button size="mini" type="primary">设置包邮</el-button>
        <el-button size="mini" type="primary">设置运费模板</el-button>
        <span>|</span>
        <el-select size="mini" v-model="query">
          <el-option label="更多操作_ _" value=""></el-option>
        </el-select>
      </div>
      <div class="table-body">
        <el-table :data="data" size="small">
          <el-table-column type="selection" align="center" width="35"></el-table-column>
          <el-table-column label="商品名称" align="center" width="250">
            <template slot-scope="scope">
              <div class="good_name">
                <img :src="scope.row.img" alt="">
                <div>
                  <a href="javascript:;">{{scope.row.name}}</a>
                  <p>
                    <i class="iconfont icon-ico" title="点击查看商品二维码"></i>
                    <i class="iconfont icon-icon-link" title="点击复制商品链接"></i>
                  </p>
                </div>
              </div>
            </template>
          </el-table-column>
          <el-table-column prop="price" label="价格">
            <template slot-scope="scope">
              <p>原价：{{scope.row.old_price}}</p>
              <p>现价：{{scope.row.new_price}}</p>
            </template>
          </el-table-column>
          <el-table-column prop="total" label="总库存" align="center"></el-table-column>
          <el-table-column prop="sale_num" label="总销量" align="center"></el-table-column>
          <el-table-column prop="id" label="商品编码" align="center"></el-table-column>
          <el-table-column prop="id" label="排序" align="center"></el-table-column>
          <el-table-column prop="created_time" label="创建时间" width="150" align="center"></el-table-column>
          <el-table-column label="操作">
            <template slot-scope="scope">
              <div class="table-ctr" :data="scope.row.id" v-if="isDel">
                <a href="javascript:;">彻底删除</a>
                <a href="javascript:;">还原到出售中</a>
                <a href="javascript:;">还原到仓库里</a>
              </div>
              <div class="table-ctr" :data="scope.row.id" v-else>
                <a href="javascript:;">编辑</a>
                <span>|</span>
                <a href="javascript:;">详情</a>
                <a href="javascript:;" v-if="type=='onsale'">下架</a>
                <a href="javascript:;" v-if="type=='onstock'">上架</a>
                <span v-if="type">|</span>
                <a href="javascript:;">删除</a>
              </div>
            </template>
          </el-table-column>
        </el-table>
      </div>
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
  props: ['data', 'type', 'isDel'],
  data () {
    return {
      query: '',
      time: [],
      categories: [
        {
          name: '新鲜水果',
          hasChildren: true,
          children: [
            {
              name: '苹果',
              hasChildren: false
            },
            {
              name: '香蕉',
              hasChildren: false
            }
          ]
        },
        {
          name: '儿童服饰',
          hasChildren: true,
          children: [
            {
              name: '男童',
              hasChildren: false
            },
            {
              name: '女童',
              hasChildren: false
            }
          ]
        },
        {
          name: '投资理财',
          hasChildren: false
        },
        {
          name: '药材',
          hasChildren: false
        }
      ]
    }
  }
}
</script>
<style lang="scss" scoped>
.goods-table{
  .table-find-box{
    display: flex;
    flex-wrap: wrap;
    .find-item{
      margin-right: 15px;
      margin-top: 10px;
      .el-input,.el-select{
        width: 150px;
      }
      span{
        display: inline-block;
        width: 85px;
        text-align: right;
      }
    }
  }
  .good_name{
    display: flex;
    text-align: left;
    div{
      margin-left: 10px;
    }
    img{
      width: 60px;
      height: 60px;
    }
    .iconfont{
      display: inline-block;
      cursor: pointer;
      text-align: center;
      font-size: 14px;
      width: 20px;
      line-height: 20px;
      background-color: #4EC914;
      color: #fff;
      border-radius: 50%;
      margin-right: 3px;
    }
  }
}
</style>
