<template>
  <div>
    <p class="page-title">积分兑换</p>
    <div class="pannel">
      <el-button type="primary" size="small" @click="$router.push('/promotion/integral_list/add')">添加积分兑换活动</el-button>
      <el-button type="primary" size="small">会员积分设置</el-button>
    </div>
    <div class="pannel pannel-content">
      <b>商品名称：</b>
      <el-input size="mini" v-model="query.key" style="width: 110px" placeholder="商品名称"></el-input>
      <span class="mini-btn" type="primary">查询</span>
      <span class="mini-btn" type="primary">订单列表</span>
    </div>
    <div class="pannel">
      <el-tabs v-model="tabName" type="card">
        <el-tab-pane label="所有活动" name="first">
          <activity-list :list="list"/>
        </el-tab-pane>
        <el-tab-pane label="进行中" name="second">
          <activity-list :list="list1"/>
        </el-tab-pane>
        <el-tab-pane label="已结束" name="third">
          <activity-list :list="list3"/>
        </el-tab-pane>
        <el-tab-pane label="未开始" name="fourth">
          <activity-list :list="list2"/>
        </el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>
<script>
import activityList from './ActivityList'
export default {
  components: {
    activityList
  },
  data () {
    return {
      query: {
        key: ''
      },
      tabName: 'first',
      list: [
        {
          name: '测试进行中的活动',
          good_num: 1,
          send_num: 0,
          sended: 0,
          status: 1
        },
        {
          name: '测试未开始的活动',
          good_num: 1,
          send_num: 0,
          sended: 0,
          status: 2
        },
        {
          name: '测试已结束的活动',
          good_num: 1,
          send_num: 0,
          sended: 0,
          status: 3
        }
      ],
      list1: [
        {
          name: '测试进行中的活动',
          good_num: 1,
          send_num: 0,
          sended: 0,
          status: 1
        }
      ],
      list2: [
        {
          name: '测试未开始的活动',
          good_num: 1,
          send_num: 0,
          sended: 0,
          status: 2
        }
      ],
      list3: [
        {
          name: '测试已结束的活动',
          good_num: 1,
          send_num: 0,
          sended: 0,
          status: 3
        }
      ]
    }
  }
}
</script>
