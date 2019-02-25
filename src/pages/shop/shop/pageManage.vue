<template>
  <div class="page-manage">
    <div class="page-title">
      <p>自定义页面</p>
      <span>编辑现有的店铺主页，或新建一个自定义页面，可以使用模板或根据自己的要求，制作适应各种场景的个性化页面</span>
    </div>
    <div class="pannel">
      <el-button type="primary" size="small">创建新页面</el-button>
      <div class="pannel-content">
        <div class="shop-img"></div>
        <div class="shop-info">
          <p>美颜美妆</p>
          <p>http://47.93.12.216:10285/default.aspx</p>
        </div>
        <div class="btn">
          <el-button size="mini" @click="$router.push('/shop/shop_index/shop_edit')">编辑</el-button>
          <el-button size="mini">链接</el-button>
          <el-button size="mini" @click="dialogVisible = true">二维码</el-button>
        </div>
      </div>
    </div>
    <div class="pannel">
      <el-tabs v-model="list_name" type="card">
        <el-tab-pane label="店铺页面" name="first">
          <div class="table-body">
            <el-table :data="list1" header-row-class-name="table-header">
              <el-table-column label="页面名称" prop="name"></el-table-column>
              <el-table-column label="页面地址" prop="url"></el-table-column>
              <el-table-column label="浏览量" prop="browse" width="70" align="center"></el-table-column>
              <el-table-column label="操作" width="225" align="center">
                <template slot-scope="scope">
                  <div class="table-ctr">
                    <a href="#" @click="dialogVisible = true">二维码</a>
                    <a href="#">复制</a>
                    <a href="#" @click="$router.push('/shop/shop_index/shop_edit')">编辑</a>
                    <a href="#">删除</a>
                  </div>
                </template>
              </el-table-column>
            </el-table>
          </div>
          <div class="table-footer">
            <el-pagination
              :page-size="100"
              layout="total, prev, pager, next, jumper"
              :total="400">
            </el-pagination>
          </div>
        </el-tab-pane>
        <el-tab-pane label="草稿箱" name="second">
          <div class="table-body">
            <el-table :data="list2">
              <el-table-column label="页面名称" prop="name"></el-table-column>
              <el-table-column label="页面地址" prop="url"></el-table-column>
              <el-table-column label="浏览量" prop="browse" width="70" align="center"></el-table-column>
              <el-table-column label="操作" width="130" align="center">
                <template slot-scope="scope">
                  <div class="table-ctr">
                    <!-- <a href="#" @click="dialogVisible = true">二维码</a>
                    <a href="#">复制</a> -->
                    <a href="#" @click="$router.push('/shop/shop_index/shop_edit')">编辑</a>
                    <a href="#">删除</a>
                  </div>
                </template>
              </el-table-column>
            </el-table>
          </div>
          <div class="table-footer">
            <el-pagination
              :page-size="100"
              layout="total, prev, pager, next, jumper"
              :total="400">
            </el-pagination>
          </div>
        </el-tab-pane>
      </el-tabs>
    </div>
    <el-dialog title="店铺二维码" :visible.sync="dialogVisible" width="300px">
      <div>
        <img :src="'./static.jpg'" alt="" style="width:200px;height:200px">
      </div>
      <span slot="footer" class="dialog-footer">
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
      list_name: 'first',
      list1: [
        {
          name: '测试页面',
          url: 'http://47.93.12.216:10285/custom/20190114165036',
          browse: 2
        },
        {
          name: '测试页面',
          url: 'http://47.93.12.216:10285/custom/20190114165036',
          browse: 2
        },
        {
          name: '测试页面',
          url: 'http://47.93.12.216:10285/custom/20190114165036',
          browse: 2
        },
        {
          name: '测试页面',
          url: 'http://47.93.12.216:10285/custom/20190114165036',
          browse: 2
        },
        {
          name: '测试页面',
          url: 'http://47.93.12.216:10285/custom/20190114165036',
          browse: 2
        }
      ],
      list2: [
        {
          name: '测试页面',
          url: 'http://47.93.12.216:10285/custom/20190114165036',
          browse: 2
        },
        {
          name: '测试页面',
          url: 'http://47.93.12.216:10285/custom/20190114165036',
          browse: 2
        },
        {
          name: '测试页面',
          url: 'http://47.93.12.216:10285/custom/20190114165036',
          browse: 2
        },
        {
          name: '测试页面',
          url: 'http://47.93.12.216:10285/custom/20190114165036',
          browse: 2
        },
        {
          name: '测试页面',
          url: 'http://47.93.12.216:10285/custom/20190114165036',
          browse: 2
        },
        {
          name: '测试页面',
          url: 'http://47.93.12.216:10285/custom/20190114165036',
          browse: 2
        },
        {
          name: '测试页面',
          url: 'http://47.93.12.216:10285/custom/20190114165036',
          browse: 2
        },
        {
          name: '测试页面',
          url: 'http://47.93.12.216:10285/custom/20190114165036',
          browse: 2
        },
        {
          name: '测试页面',
          url: 'http://47.93.12.216:10285/custom/20190114165036',
          browse: 2
        },
        {
          name: '测试页面',
          url: 'http://47.93.12.216:10285/custom/20190114165036',
          browse: 2
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.pannel-content{
  display: flex;
  align-items: center;
  .shop-img{
    width: 80px;
    height: 80px;
    border: 1px solid #999;
    border-radius: 50%;
    margin-right: 15px;
  }
  .shop-info{
    flex: 1;
    P:first-child{
      font-size: 20px;
      font-weight: 600;
      color: #666;
    }
    p+p{
      color: #99A4B0;
      margin-top: 10px;
    }
  }
}
</style>
