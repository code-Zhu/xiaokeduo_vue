<template>
  <div>
    <div class="pannel pannel-content">
      <el-form :inline="true" label-width="100px">
        <el-form-item label="店铺名：">
          <el-input size="mini" v-model="query.shopname"></el-input>
        </el-form-item>
        <el-form-item label="昵称：">
          <el-input size="mini" v-model="query.name"></el-input>
        </el-form-item>
        <el-form-item label="联系人：">
          <el-input size="mini" v-model="query.linkman"></el-input>
        </el-form-item>
        <el-form-item label="所属上级：">
          <el-input size="mini" v-model="query.upper" placeholder="输入店铺名称"></el-input>
        </el-form-item>
        <el-form-item label="用户名：">
          <el-input size="mini" v-model="query.username"></el-input>
        </el-form-item>
        <el-form-item label="手机号码：">
          <el-input size="mini" v-model="query.phone"></el-input>
        </el-form-item>
        <el-form-item label="分销商等级：">
          <el-select size="mini" v-model="query.username">
            <el-option value="" label="全部"></el-option>
            <el-option value="1" label="初级茶客"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item>
          <span class="mini-btn" type="primary">查询</span>
          <a href="javascript:;">清除条件</a>
        </el-form-item>
      </el-form>
    </div>
    <div class="pannel">
      <el-button size="small" type="success" v-if="type==='frozen'">批量解冻</el-button>
      <el-button size="small" type="primary" v-else>批量冻结</el-button>
      <el-button size="small" type="primary">批量设置等级</el-button>
      <span>|</span>
      <el-button size="small" type="primary">批量设置密码</el-button>
    </div>
    <div class="pannel">
      <el-table :data="list" size="small">
        <el-table-column type="selection"></el-table-column>
        <el-table-column label="头像">
          <template slot-scope="scope">
            <img :src="scope.row.avator" style="width:60px;height:60px">
          </template>
        </el-table-column>
        <el-table-column label="昵称/手机">
          <template slot-scope="scope">
            <p>{{scope.row.name}}</p>
            <p>{{scope.row.phone}}</p>
          </template>
        </el-table-column>
        <el-table-column label="用户名" prop="username"></el-table-column>
        <el-table-column label="店名/联系人">
          <template slot-scope="scope">
            <p>{{scope.row.shopname}}</p>
            <p>{{scope.row.linkman}}</p>
          </template>
        </el-table-column>
        <el-table-column label="分销商等级" prop="grade"></el-table-column>
        <el-table-column label="总销售额">
          <template slot-scope="scope">
            <i style="color: #ff0000">￥{{scope.row.saleTotal}}</i>
          </template>
        </el-table-column>
        <el-table-column label="佣金总额">
          <template slot-scope="scope">
            <i style="color: #ff0000">￥{{scope.row.commTotal}}</i>
          </template>
        </el-table-column>
        <el-table-column label="申请时间" prop="time"></el-table-column>
        <el-table-column label="操作" width="95">
          <template slot-scope="scope">
            <div class="table-ctr">
              <a href="javascript:;">详情</a>
              <span>|</span>
              <a href="javascript:;">编辑</a>
              <a href="javascript:;">佣金</a>
              <span>|</span>
              <a href="javascript:;" v-if="type==='frozen'">解冻</a>
              <a href="javascript:;" v-if="type===undefined">冻结</a>
              <a href="javascript:;" v-if="type===undefined">调整佣金</a>
              <a href="javascript:;" v-if="type===undefined">修改所属上级</a>
            </div>
          </template>
        </el-table-column>
      </el-table>
      <div class="pannel table-footer">
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
  props: ['type'],
  data () {
    return {
      query: {
        shopname: '',
        name: '',
        linkman: '',
        upper: '',
        username: '',
        phone: '',
        grade: ''
      },
      list: [
        {
          avator: './static/img/user.png',
          name: 'foansda',
          phone: '13812345768',
          username: 'asda',
          shopname: '茅岩莓茶_8801',
          linkman: 'asdas',
          grade: '高级茶神',
          saleTotal: '0.00',
          commTotal: '0.00',
          time: '2019-01-31 20:05:22'
        },
        {
          avator: './static/img/user.png',
          name: 'foansda',
          phone: '13812345768',
          username: 'asda',
          shopname: '茅岩莓茶_8801',
          linkman: 'asdas',
          grade: '高级茶神',
          saleTotal: '0.00',
          commTotal: '0.00',
          time: '2019-01-31 20:05:22'
        },
        {
          avator: './static/img/user.png',
          name: 'foansda',
          phone: '13812345768',
          username: 'asda',
          shopname: '茅岩莓茶_8801',
          linkman: 'asdas',
          grade: '高级茶神',
          saleTotal: '0.00',
          commTotal: '0.00',
          time: '2019-01-31 20:05:22'
        },
        {
          avator: './static/img/user.png',
          name: 'foansda',
          phone: '13812345768',
          username: 'asda',
          shopname: '茅岩莓茶_8801',
          linkman: 'asdas',
          grade: '高级茶神',
          saleTotal: '0.00',
          commTotal: '0.00',
          time: '2019-01-31 20:05:22'
        },
        {
          avator: './static/img/user.png',
          name: 'foansda',
          phone: '13812345768',
          username: 'asda',
          shopname: '茅岩莓茶_8801',
          linkman: 'asdas',
          grade: '高级茶神',
          saleTotal: '0.00',
          commTotal: '0.00',
          time: '2019-01-31 20:05:22'
        },
        {
          avator: './static/img/user.png',
          name: 'foansda',
          phone: '13812345768',
          username: 'asda',
          shopname: '茅岩莓茶_8801',
          linkman: 'asdas',
          grade: '高级茶神',
          saleTotal: '0.00',
          commTotal: '0.00',
          time: '2019-01-31 20:05:22'
        }
      ]
    }
  }
}
</script>
