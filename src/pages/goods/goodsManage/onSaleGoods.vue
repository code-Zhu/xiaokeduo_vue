<template>
  <div class="selectcategory">
    <p class="page-title">出售中的商品</p>
    <goods-table :type="'onsale'"></goods-table>
  </div>
</template>
<script>
import GoodsTable from './components/GoodsTable'
export default {
  components: {GoodsTable}
}
</script>
