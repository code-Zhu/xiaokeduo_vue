<template>
  <div>
    <p class="page-title">一元夺宝退款</p>
    <div class="pannel pannel-content">
      <el-form inline size="mini">
        <el-form-item label="活动标题：">
          <el-input v-model="query.title"></el-input>
        </el-form-item>
        <el-form-item label="用户昵称：">
          <el-input v-model="query.name"></el-input>
        </el-form-item>
        <el-form-item label="联系电话：">
          <el-input v-model="query.phone"></el-input>
        </el-form-item>
        <el-form-item label="支付方式：">
          <el-select v-model="query.pay">
            <el-option label="全部" value=""></el-option>
            <el-option label="微信" value="1"></el-option>
            <el-option label="支付宝" value="2"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="退款状态：">
          <el-select v-model="query.status">
            <el-option label="全部" value=""></el-option>
            <el-option label="已退款" value="1"></el-option>
            <el-option label="待审核" value="2"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item>
          <span class="mini-btn" type="primary">查询</span>
        </el-form-item>
      </el-form>
    </div>
    <div class="pannel">
      <el-button type="danger" size="small">批量退款</el-button>
    </div>
    <div class="pannel">
      <el-table :data="list">
        <el-table-column type="selection"></el-table-column>
        <el-table-column label="昵称"></el-table-column>
        <el-table-column label="手机号"></el-table-column>
        <el-table-column label="活动标题" width="250" align="center"></el-table-column>
        <el-table-column label="结束时间"></el-table-column>
        <el-table-column label="支付类型"></el-table-column>
        <el-table-column label="金额"></el-table-column>
        <el-table-column label="退款流水号"></el-table-column>
        <el-table-column label="退款状态"></el-table-column>
        <el-table-column label="操作"></el-table-column>
      </el-table>
    </div>
    <div class="pannel table-footer">
      <el-pagination
        :page-size="10"
        layout="sizes, total, prev, next, jumper"
        :total="1000">
      </el-pagination>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      query: {
        title: '',
        name: '',
        phone: '',
        status: '',
        pay: ''
      },
      list: []
    }
  }
}
</script>
<style lang="scss" scoped>
.pannel-content{
  .el-form-item--mini.el-form-item{
    margin-bottom: 5px
  }
}
</style>
