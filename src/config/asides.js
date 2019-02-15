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
        path: '/member/sign_integral'
      },
      {
        label: '购物送积分',
        path: '/member/purchase_integral'
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
const asideFenxiao = [
  {
    title: false,
    list: [
      {
        label: '分销概况',
        path: '/fenxiao/default'
      },
      {
        label: '分销设置',
        path: '/fenxiao/setting'
      },
      {
        label: '分销中心',
        path: '/fenxiao/center'
      },
      {
        label: '掌柜名片设置',
        path: '/fenxiao/cardset'
      }
    ]
  },
  {
    title: true,
    icon: 'icon-daili',
    label: '分销商管理',
    list: [
      {
        label: '分销商列表',
        path: '/fenxiao/list'
      },
      {
        label: '分销商等级',
        path: '/fenxiao/grade'
      },
      {
        label: '分销商升级奖励',
        path: '/fenxiao/level'
      },
      {
        label: '销售排行榜',
        path: '/fenxiao/rank'
      }
    ]
  },
  {
    title: true,
    icon: 'icon-yue',
    label: '佣金管理',
    list: [
      {
        label: '佣金明细',
        path: '/fenxiao/commission'
      },
      {
        label: '提现申请',
        path: '/fenxiao/withdraw'
      },
      {
        label: '提现记录',
        path: '/fenxiao/record'
      }
    ]
  }
]
const asideWechat = [
  {
    title: false,
    list: [
      {
        label: '绑定微信公众号',
        path: '/wechat/default'
      }
    ]
  },
  {
    title: true,
    icon: 'icon-wechat',
    label: '微信设置',
    list: [
      {
        label: '引导关注',
        path: '/wechat/guide_concern'
      },
      {
        label: '一键登录',
        path: '/wechat/validation_service'
      },
      {
        label: '消息模板',
        path: '/wechat/message_templets'
      },
      {
        label: '微信支付',
        path: '/wechat/weixin_pay'
      },
      {
        label: '微信证书设置',
        path: '/wechat/redpack_setting'
      }
    ]
  }
]
const asidePromotion = [
  {
    title: true,
    icon: 'icon-juan',
    label: '优惠卷',
    list: [
      {
        label: '优惠卷列表',
        path: '/promotion/coupons_list'
      },
      {
        label: '会员注册送优惠卷',
        path: '/promotion/set_register_send_coupon'
      },
      {
        label: '优惠卷手动发放',
        path: '/promotion/send_coupon_by_manager'
      }
    ]
  },
  {
    title: true,
    icon: 'icon-cuxiao',
    label: '促销活动',
    list: []
  },
  {
    title: true,
    icon: 'icon-choujiang',
    label: '抽奖游戏',
    list: []
  }
]
const asideSettings = [
  {
    title: true,
    label: '设置收款账号',
    icon: 'icon-alipay',
    list: [
      {
        label: '账户余额',
        path: '/settings/account_balance'
      },
      {
        label: '线下支付',
        path: '/settings/offline_pay'
      },
      {
        label: '货到付款',
        path: '/settings/cod'
      },
      {
        label: '提现设置',
        path: '/settings/draw_setting'
      }
    ]
  },
  {
    title: true,
    label: '物流配送',
    icon: 'icon-wuliu',
    list: [
      {
        label: '运费模板',
        path: '/settings/shipping_templates'
      },
      {
        label: '物流公司',
        path: '/settings/logistics_company'
      },
      {
        label: '物流地址管理',
        path: '/settings/logistics_addr'
      },
      {
        label: '物流跟踪配置',
        path: '/settings/logistics_track'
      }
    ]
  },
  {
    title: true,
    label: '安全中心',
    icon: 'icon-security',
    list: [
      {
        label: '部门管理',
        path: '/settings/department'
      },
      {
        label: '人员管理',
        path: '/settings/staff'
      },
      {
        label: '操作日志',
        path: '/settings/logs'
      }
    ]
  }
]
const asideStatistics = [
  {
    title: false,
    list: [
      {
        label: '经营简报',
        path: '/statistics/default'
      }
    ]
  },
  {
    title: true,
    label: '销售分析',
    icon: 'icon-fenxi',
    list: [
      {
        label: '订单统计',
        path: '/statistics/order'
      },
      {
        label: '老顾客回头率',
        path: '/statistics/return'
      },
      {
        label: '商品销售排行榜',
        path: '/statistics/sale_rank'
      }
    ]
  },
  {
    title: true,
    label: '会员分析',
    icon: 'icon-qushi',
    list: [
      {
        label: '会员排行榜',
        path: '/statistics/vip_rank'
      },
      {
        label: '会员地区分布',
        path: '/statistics/vip_area'
      },
      {
        label: '会员增长统计',
        path: '/statistics/vip_increase'
      }
    ]
  }
]
module.exports = {
  aside_shop: asideShop,
  aside_goods: asideGoods,
  aside_trade: asideTrade,
  aside_member: asideMeber,
  aside_fenxiao: asideFenxiao,
  aside_wechat: asideWechat,
  aside_promotion: asidePromotion,
  aside_settings: asideSettings,
  aside_statistics: asideStatistics
}
