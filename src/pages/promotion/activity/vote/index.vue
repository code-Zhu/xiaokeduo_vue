
<template>
  <div>
    <div class="page-title">
      <p>投票调查</p>
    </div>
    <div class="pannel">
      <el-button type="primary" size="small" @click="$router.push('/promotion/vote_list/add')">新建投票调查</el-button>
    </div>
    <div class="pannel">
      <el-tabs v-model="tabName" type="card">
        <el-tab-pane label="进行中" name="second">
          <list :list="list1"/>
        </el-tab-pane>
        <el-tab-pane label="未开始" name="third">
          <list :list="list2"/>
        </el-tab-pane>
        <el-tab-pane label="已结束" name="fourth">
          <list :list="list3"/>
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
      tabName: 'second',
      list1: [
        {
          title: '投票进行中',
          type: '多选',
          time: '2019/2/18 11:00:00 至 2019/2/18 11:59:59',
          num: 0,
          status: 1
        }
      ],
      list2: [
        {
          title: '投票已结束',
          type: '多选',
          time: '2019/2/18 11:00:00 至 2019/2/18 11:59:59',
          num: 0,
          status: 2
        }
      ],
      list3: [
        {
          title: '投票未开始',
          type: '多选',
          time: '2019/2/18 11:00:00 至 2019/2/18 11:59:59',
          num: 0,
          status: 3
        }
      ]
    }
  }
}
</script>
