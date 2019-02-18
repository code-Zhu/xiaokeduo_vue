
<template>
  <div>
    <p class="page-title">满减活动</p>
    <div class="pannel">
      <el-button type="primary" size="small">添加满减活动</el-button>
    </div>
    <div class="pannel pannel-content">
      <el-input size="mini" v-model="query.key" style="width: 110px" placeholder="活动名称"></el-input>
      <el-date-picker v-model="query.time"
        type="daterange" range-separator="至" size="mini"
        start-placeholder="有效期" end-placeholder="有效期">
      </el-date-picker>
      <span class="mini-btn" type="primary">查询</span>
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
        key: '',
        time: []
      },
      tabName: 'first',
      list: [
        {
          name: '添加满减活动未开始',
          type: '普通优惠',
          time: '2019/2/18 11:00:00 至 2019/2/18 11:59:59',
          status: 2
        },
        {
          name: '添加满减活动进行中',
          type: '普通优惠',
          time: '2019/2/18 11:00:00 至 2019/2/18 11:59:59',
          status: 1
        },
        {
          name: '添加满减活动已结束',
          type: '普通优惠',
          time: '2019/2/18 11:00:00 至 2019/2/18 11:59:59',
          status: 3
        }
      ],
      list1: [
        {
          name: '添加满减活动进行中',
          type: '普通优惠',
          time: '2019/2/18 11:00:00 至 2019/2/18 11:59:59',
          status: 1
        }
      ],
      list2: [
        {
          name: '添加满减活动未开始',
          type: '普通优惠',
          time: '2019/2/18 11:00:00 至 2019/2/18 11:59:59',
          status: 2
        }
      ],
      list3: [
        {
          name: '添加满减活动已结束',
          type: '普通优惠',
          time: '2019/2/18 11:00:00 至 2019/2/18 11:59:59',
          status: 3
        }
      ]
    }
  }
}
</script>
