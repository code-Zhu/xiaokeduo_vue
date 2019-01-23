import Vue from 'vue'
import Router from 'vue-router'

const shop = () => import('@/pages/shop/index')
const shopDefault = () => import('@/pages/shop/default')
const shopSetting = () => import('@/pages/shop/setting')
const shopConfig = () => import('@/pages/shop/shop/config')
const shopIndex = () => import('@/pages/shop/shop/shopIndex/index')
const shopEdit = () => import('@/pages/shop/shop/shopIndex/editShopIndex')
const pageManage = () => import('@/pages/shop/shop/pageManage')
const shopMenu = () => import('@/pages/shop/shop/shopMenu')
const meiQia = () => import('@/pages/shop/shop/meiQia')
const noticeList = () => import('@/pages/shop/shop/noticeList')
const articles = () => import('@/pages/shop/shop/articles')
const manageImages = () => import('@/pages/shop/shop/manageImages')
const imageLib = () => import('@/pages/shop/imgLib/imageLib')
const imageType = () => import('@/pages/shop/imgLib/imageType')

const goods = () => import('@/pages/goods/index')
const selectCategory = () => import('@/pages/goods/selectCategory')
const onSaleGoods = () => import('@/pages/goods/goodsManage/onSaleGoods')
const onStockGoods = () => import('@/pages/goods/goodsManage/onStockGoods')
const zeroGoods = () => import('@/pages/goods/goodsManage/zeroGoods')
const ondeletedGoods = () => import('@/pages/goods/goodsManage/ondeletedGoods')
const importData = () => import('@/pages/goods/goodsManage/importData')
const exportData = () => import('@/pages/goods/goodsManage/exportData') //
const manageCategories = () => import('@/pages/goods/groupManage/manageCategories')
const goodTypes = () => import('@/pages/goods/groupManage/goodTypes')
const goodTags = () => import('@/pages/goods/groupManage/goodTags')
const goodBrands = () => import('@/pages/goods/groupManage/goodBrands') //
const goodQuestions = () => import('@/pages/goods/customAsk/goodQuestions')
const goodReviews = () => import('@/pages/goods/customAsk/goodReviews')
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: shop
    },
    {
      path: '/shop',
      component: shop,
      children: [
        {
          path: '/shop/default',
          component: shopDefault
        },
        {
          path: '/shop/setting',
          component: shopSetting
        },
        {
          path: '/shop/config',
          component: shopConfig
        },
        {
          path: '/shop/shop_index',
          component: shopIndex
        },
        {
          path: '/shop/shop_index/shop_edit',
          component: shopEdit
        },
        {
          path: '/shop/page_manage',
          component: pageManage
        },
        {
          path: '/shop/shop_menu',
          component: shopMenu
        },
        {
          path: '/shop/shop_menu',
          component: shopMenu
        },
        {
          path: '/shop/meiqia',
          component: meiQia
        },
        {
          path: '/shop/notice_list',
          component: noticeList
        },
        {
          path: '/shop/articles',
          component: articles
        },
        {
          path: '/shop/manage_images',
          component: manageImages
        },
        {
          path: '/shop/image_lib',
          component: imageLib
        },
        {
          path: '/shop/image_type',
          component: imageType
        }
      ]
    },
    {
      path: '/goods',
      component: goods,
      children: [
        {
          path: '/goods/select_category',
          component: selectCategory
        },
        {
          path: '/goods/onsale_goods',
          component: onSaleGoods
        },
        {
          path: '/goods/onstock_goods',
          component: onStockGoods
        },
        {
          path: '/goods/zero_goods',
          component: zeroGoods
        },
        {
          path: '/goods/ondeleted_goods',
          component: ondeletedGoods
        },
        {
          path: '/goods/import_data',
          component: importData
        },
        {
          path: '/goods/export_data',
          component: exportData
        },
        {
          path: '/goods/manage_categories',
          component: manageCategories
        },
        {
          path: '/goods/good_types',
          component: goodTypes
        },
        {
          path: '/goods/good_tags',
          component: goodTags
        },
        {
          path: '/goods/good_brands',
          component: goodBrands
        },
        {
          path: '/goods/good_questions',
          component: goodQuestions
        },
        {
          path: '/goods/good_reviews',
          component: goodReviews
        }
      ]
    }
  ]
})
