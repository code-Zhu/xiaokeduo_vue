<template>
  <div class="selectcategory">
    <p class="page-title">客户咨询</p>
    <div class="pannel">
      <el-tabs type="border-card">
        <el-tab-pane label="未回复咨询">
          <data-table :list="list1" type="question"></data-table>
        </el-tab-pane>
        <el-tab-pane label="已回复咨询">
          <data-table :list="list2" type="reply"></data-table>
        </el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>
<script>
import DataTable from './components/Table'
export default {
  components: {DataTable},
  data () {
    return {
      list1: [
        {
          name: '测试商品',
          img: './static/img/apple.jpg',
          review: '测试未回复咨询1',
          time: '2019-01-20 10:46:34',
          review_name: 'admin'
        },
        {
          name: '测试商品',
          img: './static/img/apple.jpg',
          review: '测试未回复咨询2',
          time: '2019-01-20 10:46:34',
          review_name: 'aaaa'
        }
      ],
      list2: [
        {
          name: '测试商品',
          img: './static/img/apple.jpg',
          review: '测试咨询',
          time: '2019-01-20 10:46:34',
          review_name: 'admin',
          reply: '测试回复',
          reply_time: '2019-01-20 10:46:34'
        },
        {
          name: '测试商品',
          img: './static/img/apple.jpg',
          review: '测试咨询',
          time: '2019-01-20 10:46:34',
          review_name: 'admin',
          reply: '测试回复',
          reply_time: '2019-01-20 10:46:34'
        }
      ]
    }
  }
}
</script>
