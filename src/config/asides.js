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
const asideGoods = [
  {
    title: false,
    list: [
      {
        label: '上架新商品',
        path: '/goods/select_category'
      }
    ]
  },
  {
    title: true,
    label: '商品管理',
    icon: 'icon-shopcart',
    list: [
      {
        label: '出售中的商品',
        path: '/goods/onsale_goods'
      },
      {
        label: '仓库中的商品',
        path: '/goods/onstock_goods'
      },
      {
        label: '已售罄的商品',
        path: '/goods/zero_good'
      },
      {
        label: '商品回收站',
        path: '/goods/ondeleted_goods'
      },
      {
        label: '数据包导入',
        path: '/goods/import_data'
      },
      {
        label: '批量导出',
        path: '/goods/export_data'
      }
    ]
  },
  {
    title: true,
    label: '分组管理',
    icon: 'icon-guanli',
    list: [
      {
        label: '商品分类',
        path: '/goods/manage_categories'
      },
      {
        label: '类型管理',
        path: '/goods/good_types'
      },
      {
        label: '标签管理',
        path: '/goods/good_tags'
      },
      {
        label: '品牌管理',
        path: '/goods/good_brands'
      }
    ]
  },
  {
    title: true,
    label: '客户咨询',
    icon: 'icon-zixun',
    list: [
      {
        label: '客户咨询'
      },
      {
        label: '客户评论'
      }
    ]
  }
]
module.exports = {
  aside_shop: asideShop,
  aside_goods: asideGoods
}
