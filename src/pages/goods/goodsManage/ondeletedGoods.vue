<template>
  <div class="selectcategory">
    <div class="page-title">
      <p>商品回收站</p>
      <span>删除的商品会先放入回收站，可以在这里找回误删的商品或者将商品彻底删除</span>
    </div>
    <data-table :data="list" :isDel="true"></data-table>
  </div>
</template>
<script>
import DataTable from './components/Table'
export default {
  components: {DataTable},
  data () {
    return {
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
  }
}
</script>
