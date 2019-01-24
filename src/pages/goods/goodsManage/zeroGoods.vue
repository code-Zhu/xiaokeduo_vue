<template>
  <div class="selectcategory">
    <p class="page-title">已售罄的商品</p>
    <goods-table :type="'zero'"></goods-table>
  </div>
</template>
<script>
import GoodsTable from './components/GoodsTable'
export default {
  components: {GoodsTable}
}
</script>
