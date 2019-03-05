<template>
  <div class="pannel goods-table">
    <div class="pannel-content" style="padding-top: 5px;margin-top:0">
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
        <el-button size="mini" type="primary" v-if="type=='onsale'" @click="currentDialog='offset';dialogVisible1=true">下架</el-button>
        <el-button size="mini" type="primary" v-if="type=='onstock'">上架</el-button>
        <el-button size="mini" type="danger">删除</el-button>
        <span>|</span>
        <el-button size="mini" type="primary" @click="currentDialog='free';dialogVisible1=true">设置包邮</el-button>
        <el-button size="mini" type="primary" @click="dialogVisible2 = true">设置运费模板</el-button>
        <el-button size="mini" type="primary">导出Excel</el-button>
        <span>|</span>
        <el-select size="mini" v-model="moreOperation">
          <el-option label="更多操作_ _" value=""></el-option>
          <el-option label="调整基本信息" value="1"></el-option>
          <el-option label="调整显示销售数量" value="2"></el-option>
          <el-option label="调整库存" value="3"></el-option>
          <el-option label="调整会员价" value="4"></el-option>
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
                    <i class="iconfont icon-ico" title="点击查看商品二维码" @click="dialogVisible3 = true"></i>
                    <i class="iconfont icon-icon-link" title="点击复制商品链接" @click="copySuccess"></i>
                  </p>
                </div>
              </div>
            </template>
          </el-table-column>
          <el-table-column prop="price" label="价格" sortable>
            <template slot-scope="scope">
              <p>原价：{{scope.row.old_price}}</p>
              <p>现价：{{scope.row.new_price}}</p>
            </template>
          </el-table-column>
          <el-table-column prop="total" label="总库存" align="center" sortable></el-table-column>
          <el-table-column prop="sale_num" label="总销量" align="center" sortable></el-table-column>
          <el-table-column prop="id" label="商品编码" align="center" sortable></el-table-column>
          <el-table-column prop="id" label="排序" align="center" sortable></el-table-column>
          <el-table-column prop="created_time" label="创建时间" width="150" align="center" sortable></el-table-column>
          <el-table-column label="操作" width="95">
            <template slot-scope="scope">
              <div class="table-ctr" :data="scope.row.id" v-if="isDel">
                <a href="javascript:;">彻底删除</a>
                <a href="javascript:;">还原到出售中</a>
                <a href="javascript:;">还原到仓库里</a>
              </div>
              <div class="table-ctr" :data="scope.row.id" v-else>
                <router-link to="/goods/select_category/2">编辑</router-link>
                <span>|</span>
                <router-link to="/goods/select_category/3">详情</router-link>
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
    <el-dialog :title="dialog[currentDialog].title" :visible.sync="dialogVisible1" width="500px">
      <span>{{dialog[currentDialog].msg}}</span>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible1 = false" size="small">关&nbsp;闭</el-button>
        <el-button type="primary" @click="dialogVisible1 = false" size="small">{{dialog[currentDialog].title}}</el-button>
      </span>
    </el-dialog>
    <el-dialog title="设置运费模板" :visible.sync="dialogVisible2" width="500px">
      <span>选择运费模板：</span>
      <el-select size="small" value="">
        <el-option value="" label="--请选择运费模板--"></el-option>
      </el-select>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible2 = false" size="small">关&nbsp;闭</el-button>
        <el-button type="primary" @click="dialogVisible2 = false" size="small">确定</el-button>
      </span>
    </el-dialog>
    <el-dialog title="调整基本信息" :visible="moreOperation == 1" width="800px" :show-close="false">
      <div class="page-title">
        <p>批量修改商品基本信息</p>
        <span>手工输入您想要修改的信息后在页底处保存设置即可</span>
      </div>
      <div class="pannel pannel-content">
        <el-form label-width="160px">
          <el-form-item label="商品名称：增加前缀：">
            <span></span>
            <span></span>
            <el-input style="width:100px" size="small"></el-input>
            <span>增加后缀：</span>
            <el-input style="width:100px" size="small"></el-input>
            <el-button size="small" type="success">确定</el-button>
          </el-form-item>
          <el-form-item label="查找字符串：">
            <span></span>
            <span></span>
            <el-input style="width:100px" size="small"></el-input>
            <span>替换成为：</span>
            <el-input style="width:100px" size="small"></el-input>
            <el-button size="small" type="success">查询</el-button>
          </el-form-item>
        </el-form>
        <el-table border>
          <el-table-column label="商品图片"></el-table-column>
          <el-table-column label="商品名称"></el-table-column>
          <el-table-column label="商品编码"></el-table-column>
          <el-table-column label="原价"></el-table-column>
        </el-table>
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button @click="moreOperation = ''" size="small">关&nbsp;闭</el-button>
        <el-button type="success" @click="moreOperation = ''" size="small">保存配置</el-button>
      </span>
    </el-dialog>
    <el-dialog title="调整显示销售数量" :visible="moreOperation == 2" width="800px" :show-close="false">
      <div class="page-title">
        <p>批量修改前台商品显示的销售数量</p>
        <span>手工输入您想要修改的信息后在页底处保存设置即可</span>
      </div>
      <div class="pannel pannel-content">
        <el-form label-width="100px">
          <el-form-item label="直接调整：">
            <span>前台显示的销售数量=</span>
            <el-input style="width:100px" size="small"></el-input>
            <el-button size="small" type="success">确定</el-button>
          </el-form-item>
          <el-form-item label="公式调整：">
            <span>前台显示的销售数量=实际销售数量</span>
            <el-select value="1" style="width:100px" size="small">
              <el-option label="+" value="1"></el-option>
              <el-option label="*" value="2"></el-option>
            </el-select>
            <el-input style="width:100px" size="small"></el-input>
            <el-button size="small" type="success">确定</el-button>
          </el-form-item>
        </el-form>
        <el-table border>
          <el-table-column label="商品图片"></el-table-column>
          <el-table-column label="商品名称"></el-table-column>
          <el-table-column label="商品编码"></el-table-column>
          <el-table-column label="实际销售数量"></el-table-column>
          <el-table-column label="显示的销售数量"></el-table-column>
        </el-table>
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button @click="moreOperation = ''" size="small">关&nbsp;闭</el-button>
        <el-button type="success" @click="moreOperation = ''" size="small">保存配置</el-button>
      </span>
    </el-dialog>
    <el-dialog title="调整库存" :visible="moreOperation == 3" width="800px" :show-close="false">
      <div class="page-title">
        <p>批量修改商品库存</p>
        <span>您可以对已选的这些商品的库存直接改成某个值，或增加/减少某个值，也可以手工输入您想要的库存后在页底处保存设置</span>
      </div>
      <div class="pannel pannel-content">
        <el-form>
          <el-form-item label="">
            <span>将原库存改为:</span>
            <el-input style="width:100px" size="small"></el-input>
            <el-button size="small" type="success">确定</el-button>
          </el-form-item>
          <el-form-item>
            <span>将原库存增加(输入负数为减少)：</span>
            <el-input style="width:100px" size="small"></el-input>
            <el-button size="small" type="success">确定</el-button>
          </el-form-item>
        </el-form>
        <el-table border>
          <el-table-column label="商品编码"></el-table-column>
          <el-table-column label="商品"></el-table-column>
          <el-table-column label="库存"></el-table-column>
        </el-table>
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button @click="moreOperation = ''" size="small">关&nbsp;闭</el-button>
        <el-button type="success" @click="moreOperation = ''" size="small">保存配置</el-button>
      </span>
    </el-dialog>
    <el-dialog title="调整会员价" :visible="moreOperation == 4" width="800px" :show-close="false">
      <div class="page-title">
        <p>批量修改商品会员零售价格</p>
        <span>如果会员等级价没填，系统会自动按等级折扣计算；您可以对已选的这些商品直接调价或按公式调价，也可以手工输入您想要的价格后在页底处保存设置</span>
      </div>
      <div class="pannel pannel-content">
        <el-form label-width="100px">
          <el-form-item label="直接调价：">
            <el-select value="1" style="width:100px" size="small">
              <el-option label="代理商价" value="1"></el-option>
              <el-option label="合伙人价" value="2"></el-option>
              <el-option label="创客价" value="3"></el-option>
            </el-select>
            <span>=</span>
            <el-input style="width:100px" size="small"></el-input>
            <el-button size="small" type="success">确定</el-button>
          </el-form-item>
          <el-form-item label="公式调价：">
            <el-select value="2" style="width:100px" size="small">
              <el-option label="代理商价" value="1"></el-option>
              <el-option label="合伙人价" value="2"></el-option>
              <el-option label="创客价" value="3"></el-option>
            </el-select>
            <span>=</span>
            <el-select value="1" style="width:100px" size="small">
              <el-option label="代理商价" value="1"></el-option>
              <el-option label="合伙人价" value="2"></el-option>
              <el-option label="创客价" value="3"></el-option>
            </el-select>
            <el-select value="1" style="width:100px" size="small">
              <el-option label="+" value="1"></el-option>
              <el-option label="*" value="2"></el-option>
            </el-select>
            <el-input style="width:100px" size="small"></el-input>
            <el-button size="small" type="success">确定</el-button>
          </el-form-item>
        </el-form>
        <el-table border>
          <el-table-column label="商品编码"></el-table-column>
          <el-table-column label="商品"></el-table-column>
          <el-table-column label="原价"></el-table-column>
          <el-table-column label="代理商价"></el-table-column>
          <el-table-column label="合伙人价"></el-table-column>
          <el-table-column label="创客价"></el-table-column>
        </el-table>
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button @click="moreOperation = ''" size="small">关&nbsp;闭</el-button>
        <el-button type="success" @click="moreOperation = ''" size="small">保存配置</el-button>
      </span>
    </el-dialog>
    <el-dialog title="商品二维码" :visible.sync="dialogVisible3" width="350px">
      <img src="asd.jpg" alt="">
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible3 = false" size="small">关&nbsp;闭</el-button>
      </span>
    </el-dialog>
  </div>
</template>
<script>
export default {
  props: ['data', 'type', 'isDel'],
  data () {
    return {
      moreOperation: '',
      currentDialog: 'offset',
      dialogVisible1: false,
      dialogVisible2: false,
      dialogVisible3: false,
      dialog: {
        offset: {
          title: '下架商品',
          url: '',
          msg: '确定要下架所选商品吗？下架后商品将不在前台显示！'
        },
        free: {
          title: '设置包邮',
          url: '',
          msg: '确定要设置这些商品包邮？'
        }
      },
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
  },
  methods: {
    copySuccess () {
      this.$message.success('复制成功，复制内容为：http://47.93.12.216/ProductDetails.aspx?productId=2188')
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
