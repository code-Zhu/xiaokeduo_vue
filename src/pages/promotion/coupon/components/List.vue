<template>
  <div>
    <el-form class="pannel-content" inline size="mini" style="margin-top:0">
      <el-form-item>
        <el-input v-model="query.name" placeholder="优惠卷名称" style="width: 130px"></el-input>
      </el-form-item>
      <el-form-item>
        <el-input v-model="query.min" placeholder="面值" style="width: 110px"></el-input>
        <span>至</span>
        <el-input v-model="query.max" placeholder="面值" style="width: 110px"></el-input>
      </el-form-item>
      <el-form-item>
        <el-date-picker v-model="query.time"
          type="daterange" range-separator="至"
          start-placeholder="有效期" end-placeholder="有效期">
        </el-date-picker>
      </el-form-item>
      <el-form-item>
        <el-select v-model="query.type" style="width: 110px">
          <el-option value="" label="优惠卷类型"></el-option>
          <el-option value="1" label="手动发送"></el-option>
          <el-option value="2" label="自动领取"></el-option>
          <el-option value="3" label="活动赠送"></el-option>
        </el-select>
        <span class="mini-btn" type="primary">查询</span>
        <span class="mini-btn" type="primary">导出EXCEL</span>
      </el-form-item>
    </el-form>
    <div style="margin-top:15px">
      <div class="pannel" v-if="type">
        <el-button size="small" type="danger">批量删除</el-button>
      </div>
      <el-table :data="list1" size="mini">
        <el-table-column type="selection" width="50" align="center"></el-table-column>
        <el-table-column prop="name" label="优惠卷名称" align="center"></el-table-column>
        <el-table-column label="面值" align="center" sortable>
          <template slot-scope="scope">
            <span>￥{{scope.row.value}}</span>
          </template>
        </el-table-column>
        <el-table-column prop="use_condition" label="使用条件" align="center"></el-table-column>
        <el-table-column prop="time" label="使用期限" align="center" width="155"></el-table-column>
        <el-table-column prop="get_condition" label="领取限制" align="center"></el-table-column>
        <el-table-column label="发放总量" width="100" align="center" sortable>
          <template slot-scope="scope">
            <span>{{scope.row.total}}张</span>
          </template>
        </el-table-column>
        <el-table-column label="已领取" align="center" sortable>
          <template slot-scope="scope">
            <span>{{scope.row.sended}}张</span>
          </template>
        </el-table-column>
        <el-table-column label="已使用" align="center" sortable>
          <template slot-scope="scope">
            <span>{{scope.row.used}}张</span>
          </template>
        </el-table-column>
        <el-table-column width="60" v-if="!type">
          <template slot-scope="scope">
            <div class="icon-style">
              <i class="iconfont icon-ico"></i>
              <i class="iconfont icon-icon-link"></i>
            </div>
          </template>
        </el-table-column>
        <el-table-column label="操作" align="center" width="150">
          <template slot-scope="scope">
            <div v-if="!type">
              <el-button size="mini" type="warning">编辑</el-button>
              <el-button size="mini" type="danger">结束</el-button>
              <p><a href="javascript:;">修改商品</a></p>
            </div>
            <div v-if="type">
              <el-button size="mini" type="danger">删除</el-button>
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
        name: '',
        min: '',
        max: '',
        time: [],
        type: ''
      },
      list1: [
        {
          name: '满100减50',
          value: '100',
          use_condition: '不限制',
          time: '2019/02/15 14:40:00 至 2019/02/16 14:40:59',
          get_condition: '1/张每人',
          total: '10',
          sended: 0,
          used: 0,
          qr_code: '',
          url: 'http://47.93.12.216/VShop/CouponDetails.aspx?CouponId=41'
        }
      ]
    }
  }
}
</script>
<style lang="scss">
.pannel-content{
  .el-form-item--mini.el-form-item{
    margin-bottom: 0
  }
}
.icon-style{
  i{
    cursor: pointer;
    color: #61D0B9;
    margin-right: 0;
    font-size: 18px;
    &:hover{
      background: #fff;
    }
  }
}
</style>
