<template>
  <div class="selectcategory">
    <p class="page-title">商品分类管理</p>
    <div class="pannel">
      <el-button type="primary" size="small" @click="$router.push('/goods/manage_categories/add')">添加商品分类<i class="el-icon-plus el-icon--right"></i></el-button>
      <el-button @click="all_show = !all_show" type="primary" size="small" plain>
        {{all_show?'全部收缩':'全部展开'}}
        <i v-if="all_show" class="el-icon-circle-plus el-icon--right"></i>
        <i v-else class="el-icon-remove el-icon--right"></i>
      </el-button>
      <el-button type="success" size="small" style="float:right">保存排序<i class="el-icon-check el-icon--right"></i></el-button>
    </div>
    <div class="pannel table-body">
      <!-- <el-table :data="list" border>
        <el-table-column prop="name" label="分类名称">
          <template slot-scope="scope">
            <div>
              <b>
                <i class="el-icon-circle-plus"></i>
                <span>{{scope.row.name}}</span>
              </b>
              <p class="type-icon">
                <i class="iconfont icon-ico" title="点击图标下载二维码"></i>
                <i class="iconfont icon-icon-link" title="点击复制该类别网址"></i>
              </p>
            </div>
          </template>
        </el-table-column>
        <el-table-column prop="order" label="排序" align="center">
          <template slot-scope="scope">
            <el-input size="mini" v-model="scope.row.order" style="width:60px"></el-input>
          </template>
        </el-table-column>
        <el-table-column label="操作">
          <template slot-scope="scope">
            <div class="ctr">
              <a href="javascript:;">转移商品</a>
              <a href="javascript:;">编辑</a>
              <a href="javascript:;">删除</a>
              <a href="javascript:;">类目佣金</a>
            </div>
          </template>
        </el-table-column>
      </el-table> -->
      <table class="diy-table">
        <tr>
          <th>分类名称</th>
          <th>排序</th>
          <th>操作</th>
        </tr>
        <tr v-for="v in list" :key="v.id">
          <td>
            <div class="column">
              <b>
                <i v-if="all_show" class="el-icon-remove"></i>
                <i v-else class="el-icon-circle-plus"></i>
                <span>{{v.name}}</span>
              </b>
              <p class="type-icon">
                <i class="iconfont icon-ico" title="点击图标下载二维码" @click="dialogVisible3 = true"></i>
                <i class="iconfont icon-icon-link" title="点击复制该类别网址" @click="copySuccess"></i>
              </p>
            </div>
            <div v-if="all_show">
              <div class="column child-column" v-for="item in v.children" :key="item.id">
                <span>{{item.name}}</span>
                <p class="type-icon">
                  <i class="iconfont icon-ico" title="点击图标下载二维码" @click="dialogVisible3 = true"></i>
                  <i class="iconfont icon-icon-link" title="点击复制该类别网址" @click="copySuccess"></i>
                </p>
              </div>
            </div>
          </td>
          <td>
            <div class="column">
              <el-input size="mini" v-model="v.order"></el-input>
            </div>
            <div v-if="all_show">
              <div class="column" v-for="item in v.children" :key="item.id">
                <el-input size="mini" v-model="item.order"></el-input>
              </div>
            </div>
          </td>
          <td>
            <div class="column">
              <a href="javascript:;" @click="dialogVisible2 = true">转移商品</a>
              <router-link to="/goods/manage_categories/1">编辑</router-link>
              <a href="javascript:;">删除</a>
              <a href="javascript:;" @click="dialogVisible1 = true">类目佣金</a>
            </div>
            <div v-if="all_show">
              <div class="column" v-for="item in v.children" :key="item.id">
                <a href="javascript:;" @click="dialogVisible2 = true">转移商品</a>
                <router-link to="/goods/manage_categories/1">编辑</router-link>
                <a href="javascript:;">删除</a>
              </div>
            </div>
          </td>
        </tr>
      </table>
    </div>
    <el-dialog title="商品二维码" :visible.sync="dialogVisible3" width="350px">
      <img src="asd.jpg" alt="">
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible3 = false" size="small" type="success">下&nbsp;载</el-button>
        <el-button @click="dialogVisible3 = false" size="small">关&nbsp;闭</el-button>
      </span>
    </el-dialog>
    <el-dialog title="将指定分类下的商品转移到其他分类" :visible.sync="dialogVisible2" width="600px">
      <el-form size="small" label-width="220px">
        <el-form-item label="需要转移商品的分类：">
          <el-select value="">
            <el-option label="网络设备" value=""></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="转移至：">
          <el-select value="">
            <el-option label="--请选择--" value=""></el-option>
            <el-option label="网络设备" value=""></el-option>
          </el-select>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible2 = false" size="small" type="success">确&nbsp;定</el-button>
      </span>
    </el-dialog>
    <el-dialog title="修改类目佣金" :visible.sync="dialogVisible1" width="600px">
      <el-form size="small" label-position="top">
        <el-form-item label="上二级佣金比例">
          <div style="margin-left:50px">
            <span>分佣设置</span>
            <el-input style="width:200px"></el-input>
            <span>%</span>
          </div>
        </el-form-item>
        <el-form-item label="上一级佣金比例">
          <div style="margin-left:50px">
            <span>分佣设置</span>
            <el-input style="width:200px"></el-input>
            <span>%</span>
          </div>
        </el-form-item>
        <el-form-item label="成交店铺佣金比例">
          <div style="margin-left:50px">
            <span>分佣设置</span>
            <el-input style="width:200px"></el-input>
            <span>%</span>
          </div>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible1 = false" size="small" type="success">保&nbsp;存</el-button>
        <el-button @click="dialogVisible1 = false" size="small">关&nbsp;闭</el-button>
      </span>
    </el-dialog>
  </div>
</template>
<script>
export default {
  data () {
    return {
      dialogVisible1: false,
      dialogVisible2: false,
      dialogVisible3: false,
      all_show: true,
      list: [
        {
          name: '新鲜水果',
          hasChildren: true,
          order: 1,
          children: [
            {
              name: '苹果',
              order: 1,
              hasChildren: false
            },
            {
              name: '香蕉',
              order: 2,
              hasChildren: false
            }
          ]
        },
        {
          name: '儿童服饰',
          hasChildren: true,
          order: 2,
          children: [
            {
              name: '男童',
              order: 1,
              hasChildren: false
            },
            {
              name: '女童',
              order: 2,
              hasChildren: false
            }
          ]
        },
        {
          name: '投资理财',
          order: 3,
          hasChildren: false
        },
        {
          name: '药材',
          order: 4,
          hasChildren: false
        }
      ]
    }
  },
  methods: {
    copySuccess () {
      this.$message.success('复制成功，复制内容为：http://47.93.12.216/ProductDetails.aspx?productId=2188')
    }
  }
}
</script>
<style lang="scss" scoped>
.type-icon{
  float: right;
  i{
    cursor: pointer;
    background-color: #4EC914;
    color: #fff;
    border-radius: 50%;
    padding: 1px;
    font-size: 14px;
  }
}
.diy-table{
  width: 100%;
  &,th,td{
    border: 1px solid #ddd;
  }
  th,td{
    &:nth-child(2){
      width: 100px;
      text-align: center;
    }
    &:last-child{
      width: 260px;
    }
  }
  line-height: 40px;
  th{
    background-color: #F2F8FC;
  }
  .column:not(:last-child){
    border-bottom: 1px solid #ddd;
  }
  .column{
    padding: 0 10px;
  }
  .child-column{
    padding-left: 40px;
  }
  b{
    cursor: pointer;
  }
}
</style>
