<template>
  <el-table :data="list" size="small">
    <el-table-column label="微信头像">
      <template slot-scope="scope">
        <img :src="scope.row.avatar" style="width:60px;height:60px">
      </template>
    </el-table-column>
    <el-table-column prop="wxname" label="微信昵称/手机"></el-table-column>
    <el-table-column prop="username" label="用户名"></el-table-column>
    <el-table-column prop="shopName" label="店名/联系人"></el-table-column>
    <el-table-column label="销售额">
      <template slot-scope="scope">
        <i>￥{{scope.row.saleNum}}</i>
      </template>
    </el-table-column>
    <el-table-column prop="order" label="订单数"></el-table-column>
    <el-table-column prop="dealNum" label="成交用户"></el-table-column>
    <el-table-column label="客户单价">
      <template slot-scope="scope">
        <i>￥{{scope.row.singlePrice}}</i>
      </template>
    </el-table-column>
    <el-table-column label="佣金收入">
      <template slot-scope="scope">
        <i>￥{{scope.row.income}}</i>
      </template>
    </el-table-column>
  </el-table>
</template>
<script>
export default {
  props: ['list']
}
</script>
