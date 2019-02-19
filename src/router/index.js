import Vue from 'vue'
import Router from 'vue-router'

const _404 = () => import('@/components/404')

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

const order = () => import('@/pages/trade/index')
const setOrder = () => import('@/pages/trade/setOrder')
const allOrder = () => import('@/pages/trade/manageorder/allOrder')
const waitPay = () => import('@/pages/trade/manageorder/waitPay')
const waitSend = () => import('@/pages/trade/manageorder/waitSend')
const sended = () => import('@/pages/trade/manageorder/sended')
const finished = () => import('@/pages/trade/manageorder/finished')
const closed = () => import('@/pages/trade/manageorder/closed')
const recycleStation = () => import('@/pages/trade/manageorder/recycleStation')
// const expressTemplates = () => import('@/pages/trade/manageorder/expressTemplates')
// const returnsApply = () => import('@/pages/trade/afterSale/returnsApply')
const member = () => import('@/pages/vipMember/index')
const memberDefault = () => import('@/pages/vipMember/default')
const memberList = () => import('@/pages/vipMember/memberManager/list')
const memberGrade = () => import('@/pages/vipMember/memberManager/grade')
const memberIntegral = () => import('@/pages/vipMember/memberManager/integral')
const memberWithdraw = () => import('@/pages/vipMember/balanceManager/withdraw')
const memberBudget = () => import('@/pages/vipMember/balanceManager/budget')
const memberIntegralGet = () => import('@/pages/vipMember/integral/getIntegral')
const memberMsgSendSet = () => import('@/pages/vipMember/msgSendSet/index')

const fenXiao = () => import('@/pages/distribution/index')
const fenXiaoDefault = () => import('@/pages/distribution/default')
const fenXiaoSetting = () => import('@/pages/distribution/setting')
const fenXiaoCenter = () => import('@/pages/distribution/center')
const fenXiaoCard = () => import('@/pages/distribution/card')
const fenXiaoList = () => import('@/pages/distribution/manage/list')
const fenXiaoGrade = () => import('@/pages/distribution/manage/grade')
const fenXiaoLevel = () => import('@/pages/distribution/manage/levelReward')
const fenXiaoSaleRank = () => import('@/pages/distribution/manage/saleRank')
const fenXiaoCommissionList = () => import('@/pages/distribution/commission/list')
const fenXiaoCommissionDrawList = () => import('@/pages/distribution/commission/withdrawList')
const fenXiaoCommissionRecord = () => import('@/pages/distribution/commission/withdrawRecord')

const weChat = () => import('@/pages/wechat/index')
const wechatDefault = () => import('@/pages/wechat/default')
const wechatGuideConcern = () => import('@/pages/wechat/wechatSetting/guideConcern')
const wechatValidationService = () => import('@/pages/wechat/wechatSetting/validationService')
const wechatMessageTemplets = () => import('@/pages/wechat/wechatSetting/messageTemplets')
const wechatWpay = () => import('@/pages/wechat/wechatSetting/weixinPay')
const wechatRedpackSetting = () => import('@/pages/wechat/wechatSetting/redpackSetting')

const promotion = () => import('@/pages/promotion/index')
const promotionCouponList = () => import('@/pages/promotion/coupon/couponList')
const promotionSetRegisterSendCoupon = () => import('@/pages/promotion/coupon/setRegisterSendCoupon')
const promotionSendCouponByManager = () => import('@/pages/promotion/coupon/sendCouponByManager')
const promotionIntegralList = () => import('@/pages/promotion/activity/integral/integralList')
const promotionPointToCash = () => import('@/pages/promotion/activity/pointToCash')
const promotionShareActList = () => import('@/pages/promotion/activity/share/index')
const promotionActivityList = () => import('@/pages/promotion/activity/activity/index')
const promotionTimeDiscount = () => import('@/pages/promotion/activity/timeDiscount/index')
const promotionOneRmbList = () => import('@/pages/promotion/activity/oneRMB/index')
const promotionRefound = () => import('@/pages/promotion/activity/refound/index')
const promotionBargain = () => import('@/pages/promotion/activity/bargain/index')
const promotionVote = () => import('@/pages/promotion/activity/vote/index')
const promotionGameList = () => import('@/pages/promotion/game/lucky')
const promotionGameDFW = () => import('@/pages/promotion/game/dfw')
const promotionGameEGG = () => import('@/pages/promotion/game/egg')
const promotionGameFLIP = () => import('@/pages/promotion/game/flip')
const promotionGameGGL = () => import('@/pages/promotion/game/ggl')
const promotionGamePrizeList = () => import('@/pages/promotion/game/gamePrizeList')

const settings = () => import('@/pages/settings/index')
const settingsDrawSetting = () => import('@/pages/settings/account/drawSetting')
const settingsAccountBalance = () => import('@/pages/settings/account/account')
const settingsOfflinePay = () => import('@/pages/settings/account/offlinePay')
const settingsCod = () => import('@/pages/settings/account/cod')
const settingsLogisticsCompany = () => import('@/pages/settings/logistics/logisticsCompany')
const settingsLogisticsAddr = () => import('@/pages/settings/logistics/logisticsAddr')
const settingsLogisticsTrack = () => import('@/pages/settings/logistics/logisticsTrack')
const settingsDepartment = () => import('@/pages/settings/security/department')
const settingsMember = () => import('@/pages/settings/security/member')
const settingsLogs = () => import('@/pages/settings/security/logs')

const statistics = () => import('@/pages/statistics/index')
const statisticsDefault = () => import('@/pages/statistics/default')
const statisticsOrder = () => import('@/pages/statistics/sale/order')
const statisticsReturn = () => import('@/pages/statistics/sale/return')
const statisticsRank = () => import('@/pages/statistics/sale/rank')
const statisticsMemberRank = () => import('@/pages/statistics/member/memberRank')
const statisticsMemberArea = () => import('@/pages/statistics/member/memberArea')
const statisticsMemberIncrease = () => import('@/pages/statistics/member/memberIncrease')

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/shop/default',
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
    },
    {
      path: '/trade',
      component: order,
      children: [
        {
          path: '/trade/set_order',
          component: setOrder
        },
        {
          path: '/trade/all_order',
          component: allOrder
        },
        {
          path: '/trade/wait_pay',
          component: waitPay
        },
        {
          path: '/trade/wait_send',
          component: waitSend
        },
        {
          path: '/trade/sended',
          component: sended
        },
        {
          path: '/trade/finished',
          component: finished
        },
        {
          path: '/trade/closed',
          component: closed
        },
        {
          path: '/trade/recycle_station',
          component: recycleStation
        }
        // { //快递单模板
        //   path: '/trade/express_templates',
        //   component: expressTemplates
        // }
        // { // 售后订单
        //   path: '/trade/returns_apply',
        //   component: returnsApply
        // }
      ]
    },
    {
      path: '/member',
      component: member,
      children: [
        {
          path: '/member/default',
          component: memberDefault
        },
        {
          path: '/member/list',
          component: memberList
        },
        {
          path: '/member/grade',
          component: memberGrade
        },
        {
          path: '/member/integral',
          component: memberIntegral
        },
        {
          path: '/member/withdraw',
          component: memberWithdraw
        },
        {
          path: '/member/budget',
          component: memberBudget
        },
        {
          name: 'sign_integral',
          path: '/member/sign_integral',
          component: memberIntegralGet
        },
        {
          name: 'purchase_integral',
          path: '/member/purchase_integral',
          component: memberIntegralGet
        },
        {
          path: '/member/send_msg',
          component: memberMsgSendSet
        }
      ]
    },
    {
      path: '/fenxiao',
      component: fenXiao,
      children: [
        {
          path: '/fenxiao/default',
          component: fenXiaoDefault
        },
        {
          path: '/fenxiao/setting',
          component: fenXiaoSetting
        },
        {
          path: '/fenxiao/center',
          component: fenXiaoCenter
        },
        {
          path: '/fenxiao/cardset',
          component: fenXiaoCard
        },
        {
          path: '/fenxiao/list',
          component: fenXiaoList
        },
        {
          path: '/fenxiao/grade',
          component: fenXiaoGrade
        },
        {
          path: '/fenxiao/level',
          component: fenXiaoLevel
        },
        {
          path: '/fenxiao/rank',
          component: fenXiaoSaleRank
        },
        {
          path: '/fenxiao/commission',
          component: fenXiaoCommissionList
        },
        {
          path: '/fenxiao/withdraw',
          component: fenXiaoCommissionDrawList
        },
        {
          path: '/fenxiao/record',
          component: fenXiaoCommissionRecord
        }
      ]
    },
    {
      path: '/wechat',
      component: weChat,
      children: [
        {
          path: '/wechat/default',
          component: wechatDefault
        },
        {
          path: '/wechat/guide_concern',
          component: wechatGuideConcern
        },
        {
          path: '/wechat/validation_service',
          component: wechatValidationService
        },
        {
          path: '/wechat/message_templets',
          component: wechatMessageTemplets
        },
        {
          path: '/wechat/weixin_pay',
          component: wechatWpay
        },
        {
          path: '/wechat/redpack_setting',
          component: wechatRedpackSetting
        }
      ]
    },
    {
      path: '/promotion',
      component: promotion,
      children: [
        {
          path: '/promotion/coupons_list',
          component: promotionCouponList
        },
        {
          path: '/promotion/set_register_send_coupon',
          component: promotionSetRegisterSendCoupon
        },
        {
          path: '/promotion/send_coupon_by_manager',
          component: promotionSendCouponByManager
        },
        {
          path: '/promotion/integral_list',
          component: promotionIntegralList
        },
        {
          path: '/promotion/point_to_cash',
          component: promotionPointToCash
        },
        {
          path: '/promotion/share_act_list',
          component: promotionShareActList
        },
        {
          path: '/promotion/activity_list',
          component: promotionActivityList
        },
        {
          path: '/promotion/time_discount',
          component: promotionTimeDiscount
        },
        {
          path: '/promotion/one_rmb_list',
          component: promotionOneRmbList
        },
        {
          path: '/promotion/refound_list',
          component: promotionRefound
        },
        {
          path: '/promotion/bargain',
          component: promotionBargain
        },
        {
          path: '/promotion/vote_list',
          component: promotionVote
        },
        {
          path: '/promotion/game_list',
          component: promotionGameList
        },
        {
          path: '/promotion/game_egg_list',
          component: promotionGameEGG
        },
        {
          path: '/promotion/game_lucky_list',
          component: promotionGameFLIP
        },
        {
          path: '/promotion/game_dfw_list',
          component: promotionGameDFW
        },
        {
          path: '/promotion/game_ggl_list',
          component: promotionGameGGL
        },
        {
          path: '/promotion/game_prize_list',
          component: promotionGamePrizeList
        }
      ]
    },
    {
      path: '/settings',
      component: settings,
      children: [
        {
          path: '/settings/account_balance',
          component: settingsAccountBalance
        },
        {
          path: '/settings/offline_pay',
          component: settingsOfflinePay
        },
        {
          path: '/settings/cod',
          component: settingsCod
        },
        {
          path: '/settings/draw_setting',
          component: settingsDrawSetting
        },
        {
          path: '/settings/logistics_company',
          component: settingsLogisticsCompany
        },
        {
          path: '/settings/logistics_addr',
          component: settingsLogisticsAddr
        },
        {
          path: '/settings/logistics_track',
          component: settingsLogisticsTrack
        },
        {
          path: '/settings/department',
          component: settingsDepartment
        },
        {
          path: '/settings/staff',
          component: settingsMember
        },
        {
          path: '/settings/logs',
          component: settingsLogs
        }
      ]
    },
    {
      path: '/statistics',
      component: statistics,
      children: [
        {
          path: '/statistics/default',
          component: statisticsDefault
        },
        {
          path: '/statistics/order',
          component: statisticsOrder
        },
        {
          path: '/statistics/return',
          component: statisticsReturn
        },
        {
          path: '/statistics/sale_rank',
          component: statisticsRank
        },
        {
          path: '/statistics/vip_rank',
          component: statisticsMemberRank
        },
        {
          path: '/statistics/vip_area',
          component: statisticsMemberArea
        },
        {
          path: '/statistics/vip_increase',
          component: statisticsMemberIncrease
        }
      ]
    },
    {
      path: '*',
      component: _404
    }
  ]
})
