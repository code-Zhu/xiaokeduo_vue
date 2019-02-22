
<template>
  <div>
    <div class="page-title">
      <p>一元夺宝</p>
      <span style="color: #ff0000">系统每半小时会自动检查一次需要开奖的活动，如果满足条件自动开奖！</span>
    </div>
    <div class="pannel">
      <el-button type="success" size="small" @click="$router.push('/promotion/one_rmb_list/add')">新建一元夺宝活动</el-button>
    </div>
    <div class="pannel">
      <el-tabs v-model="tabName" type="card">
        <el-tab-pane label="所有夺宝" name="first">
          <list :list="list"/>
        </el-tab-pane>
        <el-tab-pane label="进行中" name="second">
          <list :list="list1"/>
        </el-tab-pane>
        <el-tab-pane label="未开始" name="fourth">
          <list :list="list2"/>
        </el-tab-pane>
        <el-tab-pane label="已结束" name="third">
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
        key: ''
      },
      tabName: 'first',
      list: [
        {
          img: './static/img/apple.jpg',
          title: '测试一元夺宝进行中',
          time: '2019/2/18 11:00:00 至 2019/2/18 11:59:59',
          type: '到期满份开奖',
          condition: 1,
          saled: 0,
          status: 1
        },
        {
          img: './static/img/apple.jpg',
          title: '测试一元夺宝未开始',
          time: '2019/2/18 11:00:00 至 2019/2/18 11:59:59',
          type: '到期满份开奖',
          condition: 1,
          saled: 0,
          status: 2
        },
        {
          img: './static/img/apple.jpg',
          title: '测试一元夺宝结束',
          time: '2019/2/18 11:00:00 至 2019/2/18 11:59:59',
          type: '到期满份开奖',
          condition: 1,
          saled: 0,
          status: 3
        }
      ],
      list1: [
        {
          img: './static/img/apple.jpg',
          title: '测试一元夺宝进行中',
          time: '2019/2/18 11:00:00 至 2019/2/18 11:59:59',
          type: '到期满份开奖',
          condition: 1,
          saled: 0,
          status: 1
        }
      ],
      list2: [
        {
          img: './static/img/apple.jpg',
          title: '测试一元夺宝未开始',
          time: '2019/2/18 11:00:00 至 2019/2/18 11:59:59',
          type: '到期满份开奖',
          condition: 1,
          saled: 0,
          status: 2
        }
      ],
      list3: [
        {
          img: './static/img/apple.jpg',
          title: '测试一元夺宝结束',
          time: '2019/2/18 11:00:00 至 2019/2/18 11:59:59',
          type: '到期满份开奖',
          condition: 1,
          saled: 0,
          status: 3
        }
      ]
    }
  }
}
</script>
