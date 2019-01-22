import Vue from 'vue'
import Router from 'vue-router'
import shop from '@/pages/shop/index'
import shopDefault from '@/pages/shop/default'
import shopSetting from '@/pages/shop/setting'
import shopConfig from '@/pages/shop/shop/config'
import shopIndex from '@/pages/shop/shop/shopIndex/index'
import shopEdit from '@/pages/shop/shop/shopIndex/editShopIndex'
import pageManage from '@/pages/shop/shop/pageManage'
import shopMenu from '@/pages/shop/shop/shopMenu'
import meiQia from '@/pages/shop/shop/meiQia'
import noticeList from '@/pages/shop/shop/noticeList'
import articles from '@/pages/shop/shop/articles'
import manageImages from '@/pages/shop/shop/manageImages'
import imageLib from '@/pages/shop/imgLib/imageLib'
import imageType from '@/pages/shop/imgLib/imageType'

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
    }
  ]
})
