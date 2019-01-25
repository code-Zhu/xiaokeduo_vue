<template>
  <div class="pannel">
    <div class="export-table-top">
      <el-row>
        <el-col :span="6">
          <el-col :span="6"><span>商品名称</span></el-col>
          <el-col :span="18">
            <el-input size="mini"></el-input>
          </el-col>
        </el-col>
        <el-col :span="6">
          <el-col :span="6" :push="2"><span>商品分类</span></el-col>
          <el-col :span="18" :push="2">
            <el-select v-model="query" size="mini">
              <el-option label="-请选择商品分类-" value=""></el-option>
            </el-select>
          </el-col>
        </el-col>
        <el-col :span="6">
          <el-col :span="6" :push="4"><span>商品编码</span></el-col>
          <el-col :span="18" :push="4">
            <el-input size="mini"></el-input>
          </el-col>
        </el-col>
      </el-row>
      <el-row style="margin-top:10px">
        <el-col :span="10">
          <el-col :span="4"><span>创建时间</span></el-col>
          <el-col :span="20" style="margin-left:-6px">
            <el-date-picker v-model="time" size="mini"
              type="daterange" range-separator="至"
              start-placeholder="开始日期" end-placeholder="结束日期">
            </el-date-picker>
          </el-col>
        </el-col>
        <el-col :span="12">
          <el-col :span="18" :push="1">
            <span>包含(至少选择一项)</span>
            <label>
              <input type="checkbox" v-model="inclu" name="inclu" value="onsale">
              <span>出售中的商品</span>
            </label>
            <label>
              <input type="checkbox" v-model="inclu" name="inclu" value="onstock">
              <span>仓库中的商品</span>
            </label>
          </el-col>
          <el-col :span="4" :push="1">
            <el-button size="mini" type="primary">查询</el-button>
          </el-col>
        </el-col>
      </el-row>
    </div>
    <div class="pannel-content table-header">
      <span style="margin-right:10px">导出数量6件</span>
      <span>导出版本</span>
      <el-select v-model="query" size="mini">
        <el-option label="-请选择-" value=""></el-option>
      </el-select>
      <label>
        <input type="checkbox" name="export_num">
        <span>导出库存数量</span>
      </label>
      <el-button size="mini" type="primary" style="margin-left:10px">导出</el-button>
    </div>
    <div class="pannel table-body">
      <el-table :data="list" border>
        <el-table-column label="商品" width="600">
          <template slot-scope="scope">
            <div class="goods">
              <img :src="scope.row.good_img">
              <div>
                <a href="javascript:;">{{scope.row.good_name}}</a>
                <p>商品编码：{{scope.row.good_id}}</p>
              </div>
            </div>
          </template>
        </el-table-column>
        <el-table-column prop="total" label="库存"></el-table-column>
        <el-table-column prop="old_price" label="原价"></el-table-column>
        <el-table-column prop="new_price" label="现价"></el-table-column>
        <el-table-column label="操作">
          <template slot-scope="scope">
            <el-button type="primary" size="mini">不导出</el-button>
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
      time: [],
      inclu: [],
      list: [
        {
          good_name: '测试',
          good_img: './static/img/none.gif',
          good_id: '1',
          total: 1,
          old_price: 12,
          new_price: 1
        },
        {
          good_name: '测试',
          good_img: './static/img/none.gif',
          good_id: '1',
          total: 1,
          old_price: 12,
          new_price: 1
        },
        {
          good_name: '测试',
          good_img: './static/img/none.gif',
          good_id: '1',
          total: 1,
          old_price: 12,
          new_price: 1
        },
        {
          good_name: '测试',
          good_img: './static/img/none.gif',
          good_id: '1',
          total: 1,
          old_price: 12,
          new_price: 1
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.export-table-top{
  line-height: 30px;
}
.goods{
  display: flex;
  font-size: 12px;
  img{
    height: 40px;
    margin-right: 10px;
  }
}
</style>
