<template>
  <div class="selectcategory">
    <p class="page-title">上架新商品</p>
  </div>
</template>
<script>
export default {
  data () {
    return {
      categories: [
        {
          name: '新鲜水果',
          hasChildren: true,
          children: [
            {
              name: '苹果',
              hasChildren: false
            },
            {
              name: '香蕉',
              hasChildren: false
            }
          ]
        },
        {
          name: '儿童服饰',
          hasChildren: true,
          children: [
            {
              name: '男童',
              hasChildren: false
            },
            {
              name: '女童',
              hasChildren: false
            }
          ]
        },
        {
          name: '投资理财',
          hasChildren: false
        },
        {
          name: '药材',
          hasChildren: false
        }
      ]
    }
  }
}
</script>
