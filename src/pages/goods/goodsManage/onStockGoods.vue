<template>
  <div class="selectcategory">
    <p class="page-title">仓库中的商品</p>
    <goods-table :type="'onstock'"></goods-table>
  </div>
</template>
<script>
import GoodsTable from './components/GoodsTable'
export default {
  components: {GoodsTable}
}
</script>
