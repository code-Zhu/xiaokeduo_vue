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
      <el-button size="small" type="primary" @click="dialogVisible1 = true">批量设置等级</el-button>
      <span>|</span>
      <el-button size="small" type="primary" @click="dialogVisible2 = true">批量设置密码</el-button>
      <el-button size="small" type="primary">导出Excel</el-button>
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
        <el-table-column label="总销售额" sortable>
          <template slot-scope="scope">
            <i style="color: #ff0000">￥{{scope.row.saleTotal}}</i>
          </template>
        </el-table-column>
        <el-table-column label="佣金总额" sortable>
          <template slot-scope="scope">
            <i style="color: #ff0000">￥{{scope.row.commTotal}}</i>
          </template>
        </el-table-column>
        <el-table-column label="申请时间" prop="time" sortable></el-table-column>
        <el-table-column label="操作" width="95">
          <template slot-scope="scope">
            <div class="table-ctr">
              <router-link to="/fenxiao/list/1">详情</router-link>
              <span>|</span>
              <a href="javascript:;" @click="dialogVisible3=true">编辑</a>
              <router-link to="/fenxiao/list/commission/1">佣金</router-link>
              <span>|</span>
              <a href="javascript:;" v-if="type==='frozen'">解冻</a>
              <a href="javascript:;" v-if="type===undefined">冻结</a>
              <a href="javascript:;" v-if="type===undefined" @click="dialogVisible4=true">调整佣金</a>
              <a href="javascript:;" v-if="type===undefined" @click="dialogVisible5=true">修改所属上级</a>
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
    <el-dialog title="批量设置等级" :visible.sync="dialogVisible1"
      width="400px">
      <el-form label-width="110px" size="small">
        <el-form-item label="请选择等级：" required>
          <el-select>
            <el-option label="金牌" value="1"></el-option>
            <el-option label="银牌" value="2"></el-option>
            <el-option label="会员" value="3"></el-option>
          </el-select>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button type="primary" @click="dialogVisible1 = false" size="small">确定修改</el-button>
        <el-button @click="dialogVisible1 = false" size="small">关&nbsp;闭</el-button>
      </span>
    </el-dialog>
    <el-dialog title="批量重置密码" :visible.sync="dialogVisible2"
      width="400px">
      <el-form label-width="100px" size="small" style="margin:0 40px">
        <el-form-item label="新密码：" required>
          <el-input></el-input>
        </el-form-item>
        <el-form-item label="确认密码：" required>
          <el-input></el-input>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button type="primary" @click="dialogVisible2 = false" size="small">确定修改</el-button>
        <el-button @click="dialogVisible2 = false" size="small">关&nbsp;闭</el-button>
      </span>
    </el-dialog>
    <el-dialog title="修改分销商信息" :visible.sync="dialogVisible3"
      width="460px">
      <el-form class="form-box" label-width="110px" size="small" style="margin:0 40px">
        <el-form-item label="当前修改用户：">
          <span>测试用户</span>
        </el-form-item>
        <el-form-item label="联系人：">
          <el-input></el-input>
        </el-form-item>
        <el-form-item label="手机号：" required>
          <el-input></el-input>
        </el-form-item>
        <el-form-item label="QQ号码：" required>
          <el-input></el-input>
        </el-form-item>
        <el-form-item label="用户密码：" required>
          <el-input></el-input>
          <p class="tip">密码为空表示不修改</p>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button type="primary" @click="dialogVisible3 = false" size="small">确定修改</el-button>
        <el-button @click="dialogVisible3 = false" size="small">关&nbsp;闭</el-button>
      </span>
    </el-dialog>
    <el-dialog title="调整佣金" :visible.sync="dialogVisible4"
      width="400px">
      <el-form label-width="100px" size="small" style="margin:0 40px">
        <el-form-item label="佣金余额：">
          <span style="color: #ff0000">￥0</span>
        </el-form-item>
        <el-form-item label="佣金值：" required>
          <el-input placeholder="正数加佣金，负数减佣金">
            <span slot="suffix">元</span>
          </el-input>
        </el-form-item>
        <el-form-item label="调整备注：" required>
          <el-input placeholder="佣金调整说明"></el-input>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button type="primary" @click="dialogVisible4 = false" size="small">确定修改</el-button>
        <el-button @click="dialogVisible4 = false" size="small">关&nbsp;闭</el-button>
      </span>
    </el-dialog>
    <el-dialog title="调整所属上级" :visible.sync="dialogVisible5"
      width="730px">
      <div class="top-info">
        <span>店铺名称：【销客多_8804】</span>
        <span style="margin-left: 60px">当前所属上级：【主站】</span>
      </div>
      <div class="pannel top-info">
        <span>店铺名</span>
        <el-input size="small" style="width: 170px" placeholder="输入店铺名/联系人"></el-input>
        <span class="mini-btn" type="primary">查询</span>
      </div>
      <el-table :data="upperlist">
        <el-table-column prop="shopname" label="店铺名"></el-table-column>
        <el-table-column prop="linkname" label="联系人"></el-table-column>
        <el-table-column prop="phone" label="联系方式"></el-table-column>
        <el-table-column prop="grade" label="分销商等级"></el-table-column>
        <el-table-column>
          <template slot-scope="scope">
            <span class="mini-btn" type="success" v-if="scope.row.upper" title="不能将自己设置为自己的上级">设为上级</span>
            <span class="mini-btn" type="primary" v-else>设为上级</span>
          </template>
        </el-table-column>
      </el-table>
      <div class="pannel table-footer">
        <el-pagination
          :page-size="10"
          layout="total, prev, next, jumper"
          :total="1000">
        </el-pagination>
      </div>
    </el-dialog>
  </div>
</template>
<script>
export default {
  props: ['type'],
  data () {
    return {
      upperlist: [
        {
          shopname: '销客多_8804',
          linkname: '12312',
          phone: '15849388087',
          grade: '初级代理',
          upper: false
        },
        {
          shopname: '销客多_8804',
          linkname: '12312',
          phone: '15849388087',
          grade: '初级代理',
          upper: true
        },
        {
          shopname: '销客多_8804',
          linkname: '12312',
          phone: '15849388087',
          grade: '初级代理',
          upper: false
        },
        {
          shopname: '销客多_8804',
          linkname: '12312',
          phone: '15849388087',
          grade: '初级代理',
          upper: false
        },
        {
          shopname: '销客多_8804',
          linkname: '12312',
          phone: '15849388087',
          grade: '初级代理',
          upper: false
        }
      ],
      dialogVisible5: false,
      dialogVisible4: false,
      dialogVisible3: false,
      dialogVisible2: false,
      dialogVisible1: false,
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
<style lang="scss" scoped>
.top-info{
  padding: 0 25px;
  background-color: #F9F9F9;
  line-height: 40px;
  border-bottom: 1px solid #E5E5E5;
  &+&{
    text-align: right
  }
}
</style>
