
<template>
  <div>
    <div class="page-title">
      <p>满减活动</p>
      <span style="color: #ff0000">好友砍价商品不同时享受满减活动,不能使用优惠劵,不能使用积分抵扣订单金额</span>
    </div>
    <div class="pannel">
      <el-button type="primary" size="small">新建砍价</el-button>
    </div>
    <div class="pannel">
      <el-tabs v-model="tabName" type="card">
        <el-tab-pane label="所有活动" name="first">
          <list :list="list"/>
        </el-tab-pane>
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
      tabName: 'first',
      list: [
        {
          img: './static/img/apple.jpg',
          name: '商品名称进行中',
          defaultValue: 111,
          min: 1,
          time: '2019/2/18 11:00:00 至 2019/2/18 11:59:59',
          total: 1,
          deal: 0,
          status: 1
        },
        {
          img: './static/img/apple.jpg',
          name: '商品名称未开始',
          defaultValue: 111,
          min: 1,
          time: '2019/2/18 11:00:00 至 2019/2/18 11:59:59',
          total: 1,
          deal: 0,
          status: 2
        },
        {
          img: './static/img/apple.jpg',
          name: '商品名称已结束',
          defaultValue: 111,
          min: 1,
          time: '2019/2/18 11:00:00 至 2019/2/18 11:59:59',
          total: 1,
          deal: 0,
          status: 3
        }
      ],
      list1: [
        {
          img: './static/img/apple.jpg',
          name: '商品名称进行中',
          defaultValue: 111,
          min: 1,
          time: '2019/2/18 11:00:00 至 2019/2/18 11:59:59',
          total: 1,
          deal: 0,
          status: 1
        }
      ],
      list2: [
        {
          img: './static/img/apple.jpg',
          name: '商品名称未开始',
          defaultValue: 111,
          min: 1,
          time: '2019/2/18 11:00:00 至 2019/2/18 11:59:59',
          total: 1,
          deal: 0,
          status: 2
        }
      ],
      list3: [
        {
          img: './static/img/apple.jpg',
          name: '商品名称已结束',
          defaultValue: 111,
          min: 1,
          time: '2019/2/18 11:00:00 至 2019/2/18 11:59:59',
          total: 1,
          deal: 0,
          status: 3
        }
      ]
    }
  }
}
</script>
