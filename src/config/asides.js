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
        path: '/goods/zero_goods'
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
        label: '客户咨询',
        path: '/goods/good_questions'
      },
      {
        label: '客户评论',
        path: '/goods/good_reviews'
      }
    ]
  }
]
const asideTrade = [
  {
    title: false,
    list: [
      {
        label: '订单设置',
        path: '/trade/set_order'
      }
    ]
  },
  {
    title: true,
    label: '订单管理',
    icon: 'icon-order',
    list: [
      {
        label: '所有订单',
        path: '/trade/all_order'
      },
      {
        label: '等待付款',
        path: '/trade/wait_pay'
      },
      {
        label: '等待发货',
        path: '/trade/wait_send'
      },
      {
        label: '已发货',
        path: '/trade/sended'
      },
      {
        label: '交易成功',
        path: '/trade/finished'
      },
      {
        label: '交易关闭',
        path: '/trade/closed'
      },
      {
        label: '订单回收站',
        path: '/trade/recycle_station'
      }
      // {
      //   label: '快递单模板',
      //   path: '/trade/express_templates'
      // }
    ]
  }
  // {
  //   title: true,
  //   label: '售后服务',
  //   icon: 'iconfont icon-shouhou',
  //   list: [
  //     {
  //       label: '售后订单',
  //       path: '/trade/returns_apply'
  //     }
  //   ]
  // }
]
const asideMeber = [
  {
    title: false,
    list: [
      {
        label: '会员概况',
        path: '/member/default'
      }
    ]
  },
  {
    title: true,
    label: '会员管理',
    icon: 'icon-huiyuan',
    list: [
      {
        label: '会员列表',
        path: '/member/list'
      },
      {
        label: '会员等级',
        path: '/member/grade'
      },
      {
        label: '会员积分查询',
        path: '/member/integral'
      }
    ]
  },
  {
    title: true,
    label: '余额管理',
    icon: 'icon-yue',
    list: [
      {
        label: '提现管理',
        path: '/member/withdraw'
      },
      {
        label: '收支明细',
        path: '/member/budget'
      }
    ]
  },
  {
    title: true,
    label: '会员积分设置',
    icon: 'icon-integral',
    list: [
      {
        label: '签到送积分',
        path: '/member/sign_in_integral'
      },
      {
        label: '购物送积分',
        path: '/member/shop_integral'
      }
    ]
  },
  {
    title: true,
    label: '短信发送设置',
    icon: 'icon-msg',
    list: [
      {
        label: '短信发送设置',
        path: '/member/send_msg'
      },
      {
        label: '购买短信套餐',
        path: '/member/send_server'
      }
    ]
  }
]
module.exports = {
  aside_shop: asideShop,
  aside_goods: asideGoods,
  aside_trade: asideTrade,
  aside_member: asideMeber
}
