const asideShop = [
  {
    title: false,
    list: [
      {
        label: '店铺概况',
        path: '/shop/default'
      },
      {
        label: '店铺设置',
        path: '/shop/setting'
      }
    ]
  },
  {
    title: true,
    label: '店铺管理',
    icon: 'icon-shop',
    list: [
      {
        label: '店铺信息',
        path: '/shop/config'
      },
      {
        label: '店铺主页',
        path: '/shop/shop_index'
      },
      {
        label: '自定义页面',
        path: '/shop/page_manage'
      },
      {
        label: '店铺导航',
        path: '/shop/shop_menu'
      },
      {
        label: '在线客服',
        path: '/shop/meiqia'
      },
      {
        label: '消息公告',
        path: '/shop/notice_list'
      },
      {
        label: '素材管理',
        path: '/shop/articles'
      },
      {
        label: '九图一文',
        path: '/shop/manage_images'
      }
    ]
  },
  {
    title: true,
    label: '图库管理',
    icon: 'icon-tuku',
    list: [
      {
        label: '图片库',
        path: '/shop/image_lib'
      },
      {
        label: '图片分组',
        path: '/shop/image_type'
      }
    ]
  }
]
module.exports = {
  aside_shop: asideShop
}
