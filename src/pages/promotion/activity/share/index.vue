
<template>
  <div>
    <p class="page-title">分享助力</p>
    <div class="pannel">
      <el-button type="primary" size="small" @click="$router.push('/promotion/share_act_list/add')">添加分享助力活动</el-button>
    </div>
    <div class="pannel pannel-content">
      <b>优惠卷名称：</b>
      <el-input size="mini" v-model="query.key" style="width: 110px" placeholder="优惠卷名称"></el-input>
      <span class="mini-btn" type="primary">搜索</span>
    </div>
    <div class="pannel">
      <el-tabs v-model="tabName" type="card">
        <el-tab-pane label="所有活动" name="first">
          <list :list="list"/>
        </el-tab-pane>
        <el-tab-pane label="进行中" name="second">
          <list :list="list1"/>
        </el-tab-pane>
        <el-tab-pane label="已结束" name="third">
          <list :list="list3"/>
        </el-tab-pane>
        <el-tab-pane label="未开始" name="fourth">
          <list :list="list2"/>
        </el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>
<script>
import List from './List'
export default {
  components: {
    List
  },
  data () {
    return {
      query: {
        key: ''
      },
      tabName: 'first',
      list: [
        {
          name: '添加分享助力进行中',
          condition: 100,
          send_num: 1,
          time: '2019/2/18 11:00:00 至 2019/2/18 11:59:59',
          status: 1
        },
        {
          name: '添加分享助力已结束',
          condition: 100,
          send_num: 1,
          time: '2019/2/18 11:00:00 至 2019/2/18 11:59:59',
          status: 2
        },
        {
          name: '添加分享助力未开始',
          condition: 100,
          send_num: 1,
          time: '2019/2/18 11:00:00 至 2019/2/18 11:59:59',
          status: 3
        }
      ],
      list1: [
        {
          name: '添加分享助力进行中',
          condition: 100,
          send_num: 1,
          time: '2019/2/18 11:00:00 至 2019/2/18 11:59:59',
          status: 1
        }
      ],
      list2: [
        {
          name: '添加分享助力未开始',
          condition: 100,
          send_num: 1,
          time: '2019/2/18 11:00:00 至 2019/2/18 11:59:59',
          status: 2
        }
      ],
      list3: [
        {
          name: '添加分享助力已结束',
          condition: 100,
          send_num: 1,
          time: '2019/2/18 11:00:00 至 2019/2/18 11:59:59',
          status: 3
        }
      ]
    }
  }
}
</script>
