<template>
  <div class="goods-table">
    <el-tabs v-model="tabs_name" type="border-card" @tab-click="handleTabsClick">
      <el-tab-pane label="出售中" name="onsale">
        <data-table :data="list" :type="'onsale'"/>
      </el-tab-pane>
      <el-tab-pane label="仓库中" name="onstock">
        <data-table :data="list" :type="'onstock'"/>
      </el-tab-pane>
      <el-tab-pane label="已售罄" name="zero">
        <data-table :data="list"/>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>
<script>
import DataTable from './Table'
export default {
  props: ['type'],
  components: {
    DataTable
  },
  data () {
    return {
      tabs_name: '',
      tabsRouter: {
        onsale: '/goods/onsale_goods',
        onstock: '/goods/onstock_goods',
        zero: '/goods/zero_goods'
      },
      list: [
        {
          name: '测试1',
          img: './static/img/none.gif',
          new_price: 1.00,
          old_price: 12.00,
          total: 1,
          sale_num: 0,
          id: 11,
          created_time: '2019/1/15 15:13:04'
        },
        {
          name: '测试2',
          img: './static/img/none.gif',
          new_price: 1.00,
          old_price: 12.00,
          total: 1,
          sale_num: 0,
          id: 11,
          created_time: '2019/1/15 15:13:04'
        },
        {
          name: '测试3',
          img: './static/img/waitupload.png',
          new_price: 1.00,
          old_price: 12.00,
          total: 1,
          sale_num: 0,
          id: 11,
          created_time: '2019/1/15 15:13:04'
        }
      ]
    }
  },
  methods: {
    handleTabsClick (v) {
      this.$router.push(this.tabsRouter[v.name])
    }
  },
  mounted () {
    this.tabs_name = this.type
  }
}
</script>
