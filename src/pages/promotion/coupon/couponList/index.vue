<template>
  <div>
    <p class="page-title">优惠卷</p>
    <div class="pannel">
      <el-button size="small" type="primary" @click="$router.push('/promotion/coupons_list/add')">新增优惠卷</el-button>
    </div>
    <div class="pannel">
      <el-tabs type="card">
        <el-tab-pane label="优惠卷">
          <list/>
        </el-tab-pane>
        <el-tab-pane label="已结束优惠卷">
          <list type="'over'"/>
        </el-tab-pane>
        <el-tab-pane label="领取/使用记录">
          <el-table :data="recode">
            <el-table-column prop="name" label="优惠卷名称" align="center"></el-table-column>
            <el-table-column label="面值" align="center" sortable>
              <template slot-scope="scope">
                <span>￥{{scope.row.value}}</span>
              </template>
            </el-table-column>
            <el-table-column prop="condition" label="使用条件" align="center"></el-table-column>
            <el-table-column prop="user" label="领取人" align="center"></el-table-column>
            <el-table-column prop="sendTime" label="领取时间" width="150" align="center" sortable></el-table-column>
            <el-table-column prop="useTime" label="使用时间" width="150" align="center" sortable></el-table-column>
            <el-table-column prop="order" label="订单编号" width="150" align="center"></el-table-column>
            <el-table-column prop="status" label="状态" align="center"></el-table-column>
          </el-table>
          <div class="pannel table-footer">
            <el-pagination
              :page-size="10"
              layout="sizes, total, prev, next, jumper"
              :total="1000">
            </el-pagination>
          </div>
        </el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>
<script>
import List from '../components/List'
export default {
  components: {
    List
  },
  data () {
    return {
      recode: [
        {
          name: '优惠卷名称',
          value: '100',
          condition: '不限制',
          user: 'test',
          sendTime: '2018/12/2 8:06:52',
          useTime: '',
          order: '',
          status: '已领取'
        },
        {
          name: '优惠卷名称',
          value: '100',
          condition: '不限制',
          user: 'test',
          sendTime: '2018/12/2 8:06:52',
          useTime: '2016/5/10 5:53:30',
          order: '160510055329893',
          status: '已使用'
        }
      ]
    }
  }
}
</script>
