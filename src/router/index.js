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
const noticeList = () => import('@/pages/shop/shop/noticeList/index')
const noticeListAdd = () => import('@/pages/shop/shop/noticeList/add')
const articles = () => import('@/pages/shop/shop/articles/index')
const articlesAddSingle = () => import('@/pages/shop/shop/articles/addSingle')
const articlesAddMultiple = () => import('@/pages/shop/shop/articles/addMultiple')
const manageImages = () => import('@/pages/shop/shop/manageImages/index')
const manageImagesAdd = () => import('@/pages/shop/shop/manageImages/add')
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
const manageCategories = () => import('@/pages/goods/groupManage/manageCategories/index')
const manageCategoriesAdd = () => import('@/pages/goods/groupManage/manageCategories/add')
const goodTypes = () => import('@/pages/goods/groupManage/goodTypes/index')
const goodTypesAdd = () => import('@/pages/goods/groupManage/goodTypes/add')
const goodTags = () => import('@/pages/goods/groupManage/goodTags')
const goodBrands = () => import('@/pages/goods/groupManage/goodBrands/index') //
const goodBrandsAdd = () => import('@/pages/goods/groupManage/goodBrands/add')
const goodQuestions = () => import('@/pages/goods/customAsk/goodQuestions')
const goodReviews = () => import('@/pages/goods/customAsk/goodReviews')

const order = () => import('@/pages/trade/index')
const setOrder = () => import('@/pages/trade/setOrder')
const orderDetail = () => import('@/pages/trade/detail')
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
const memberDetail = () => import('@/pages/vipMember/memberManager/detail')
const memberDetailEdit = () => import('@/pages/vipMember/memberManager/edit')
const memberGrade = () => import('@/pages/vipMember/memberManager/grade/index')
const memberGradeAdd = () => import('@/pages/vipMember/memberManager/grade/add')
const memberIntegral = () => import('@/pages/vipMember/memberManager/integral/index')
const memberIntegralDetail = () => import('@/pages/vipMember/memberManager/integral/detail')
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
const fenXiaoListDetail = () => import('@/pages/distribution/manage/detail')
const fenXiaoListCommissionDetail = () => import('@/pages/distribution/manage/commissionDetail')
const fenXiaoGrade = () => import('@/pages/distribution/manage/grade/index')
const fenXiaoGradeEdit = () => import('@/pages/distribution/manage/grade/edit')
const fenXiaoLevel = () => import('@/pages/distribution/manage/levelReward')
const fenXiaoSaleRank = () => import('@/pages/distribution/manage/saleRank/index')
const fenXiaoSaleRankDetail = () => import('@/pages/distribution/manage/saleRank/detail')
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
const promotionCouponList = () => import('@/pages/promotion/coupon/couponList/index')
const promotionCouponListAdd = () => import('@/pages/promotion/coupon/couponList/add')
const promotionCouponListAddGood = () => import('@/pages/promotion/coupon/couponList/couponGood')
const promotionSetRegisterSendCoupon = () => import('@/pages/promotion/coupon/setRegisterSendCoupon')
const promotionSendCouponByManager = () => import('@/pages/promotion/coupon/sendCouponByManager')
const promotionIntegralList = () => import('@/pages/promotion/activity/integral/integralList')
const promotionIntegralListAdd = () => import('@/pages/promotion/activity/integral/add')
const promotionIntegralListAddGoods = () => import('@/pages/promotion/activity/integral/integralGood')
const promotionPointToCash = () => import('@/pages/promotion/activity/pointToCash')
const promotionShareActList = () => import('@/pages/promotion/activity/share/index')
const promotionShareActListAdd = () => import('@/pages/promotion/activity/share/add')
const promotionActivityList = () => import('@/pages/promotion/activity/activity/index')
const promotionActivityListAdd = () => import('@/pages/promotion/activity/activity/add')
const promotionActivityListAddGood = () => import('@/pages/promotion/activity/activity/good')
const promotionTimeDiscount = () => import('@/pages/promotion/activity/timeDiscount/index')
const promotionTimeDiscountAdd = () => import('@/pages/promotion/activity/timeDiscount/add')
const promotionTimeDiscountAddGood = () => import('@/pages/promotion/activity/timeDiscount/good')
const promotionOneRmbList = () => import('@/pages/promotion/activity/oneRMB/index')
const promotionOneRmbListAdd = () => import('@/pages/promotion/activity/oneRMB/add')
const promotionRefound = () => import('@/pages/promotion/activity/refound/index')
const promotionBargain = () => import('@/pages/promotion/activity/bargain/index')
const promotionBargainAdd = () => import('@/pages/promotion/activity/bargain/add')
const promotionVote = () => import('@/pages/promotion/activity/vote/index')
const promotionVoteAdd = () => import('@/pages/promotion/activity/vote/add')
const promotionGameAdd = () => import('@/pages/promotion/game/components/add')
const promotionGameList = () => import('@/pages/promotion/game/lucky')
const promotionGameDFW = () => import('@/pages/promotion/game/dfw')
const promotionGameEGG = () => import('@/pages/promotion/game/egg')
const promotionGameFLIP = () => import('@/pages/promotion/game/flip')
const promotionGameGGL = () => import('@/pages/promotion/game/ggl')
const promotionGamePrizeList = () => import('@/pages/promotion/game/gamePrizeList/index')
const promotionGamePrizeListDetail = () => import('@/pages/promotion/game/gamePrizeList/detail')

const settings = () => import('@/pages/settings/index')
const settingsDrawSetting = () => import('@/pages/settings/account/drawSetting')
const settingsAccountBalance = () => import('@/pages/settings/account/account')
const settingsOfflinePay = () => import('@/pages/settings/account/offlinePay')
const settingsCod = () => import('@/pages/settings/account/cod')
const settingsLogisticsTemplates = () => import('@/pages/settings/logistics/shippingTemplates')
const settingsLogisticsTemplatesAdd = () => import('@/pages/settings/logistics/addTemplates')
const settingsLogisticsCompany = () => import('@/pages/settings/logistics/logisticsCompany')
const settingsLogisticsAddr = () => import('@/pages/settings/logistics/logisticsAddr')
const settingsLogisticsTrack = () => import('@/pages/settings/logistics/logisticsTrack')
const settingsDepartment = () => import('@/pages/settings/security/department/index')
const settingsDepartmentPower = () => import('@/pages/settings/security/department/power')
const settingsMember = () => import('@/pages/settings/security/member/index')
const settingsMemberAdd = () => import('@/pages/settings/security/member/add')
const settingsMemberEdit = () => import('@/pages/settings/security/member/edit')
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
          path: '/shop/notice_list/add',
          component: noticeListAdd
        },
        {
          path: '/shop/articles',
          component: articles
        },
        {
          path: '/shop/articlesAddSingle',
          component: articlesAddSingle
        },
        {
          path: '/shop/articlesMultiple',
          component: articlesAddMultiple
        },
        {
          path: '/shop/manage_images',
          component: manageImages
        },
        {
          path: '/shop/manage_images_add',
          component: manageImagesAdd
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
          path: '/goods/select_category/:step',
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
          path: '/goods/manage_categories/add',
          component: manageCategoriesAdd
        },
        {
          path: '/goods/good_types',
          component: goodTypes
        },
        {
          path: '/goods/good_types/add',
          component: goodTypesAdd
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
          path: '/goods/good_brands/add',
          component: goodBrandsAdd
        },
        {
          path: '/goods/good_brands/add/:id',
          component: goodBrandsAdd
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
          path: '/trade/order_detail',
          component: orderDetail
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
          path: '/member/list/:id',
          component: memberDetail
        },
        {
          path: '/member/detail/edit/:id',
          component: memberDetailEdit
        },
        {
          path: '/member/grade',
          component: memberGrade
        },
        {
          path: '/member/grade/add',
          component: memberGradeAdd
        },
        {
          path: '/member/grade/edit/:id',
          component: memberGradeAdd
        },
        {
          path: '/member/integral',
          component: memberIntegral
        },
        {
          path: '/member/integral/:id',
          component: memberIntegralDetail
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
          path: '/fenxiao/list/commission/:id',
          component: fenXiaoListCommissionDetail
        },
        {
          path: '/fenxiao/list/:id',
          component: fenXiaoListDetail
        },
        {
          path: '/fenxiao/grade',
          component: fenXiaoGrade
        },
        {
          path: '/fenxiao/grade/add',
          component: fenXiaoGradeEdit
        },
        {
          path: '/fenxiao/grade/:id',
          component: fenXiaoGradeEdit
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
          path: '/fenxiao/rank/:id',
          component: fenXiaoSaleRankDetail
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
          path: '/promotion/coupons_list/add',
          component: promotionCouponListAdd
        },
        {
          path: '/promotion/coupons_list/add/good',
          component: promotionCouponListAddGood
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
          path: '/promotion/integral_list/add',
          component: promotionIntegralListAdd
        },
        {
          path: '/promotion/integral_list/add/goods',
          component: promotionIntegralListAddGoods
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
          path: '/promotion/share_act_list/add',
          component: promotionShareActListAdd
        },
        {
          path: '/promotion/activity_list',
          component: promotionActivityList
        },
        {
          path: '/promotion/activity_list/add',
          component: promotionActivityListAdd
        },
        {
          path: '/promotion/activity_list/add/good',
          component: promotionActivityListAddGood
        },
        {
          path: '/promotion/time_discount',
          component: promotionTimeDiscount
        },
        {
          path: '/promotion/time_discount/add',
          component: promotionTimeDiscountAdd
        },
        {
          path: '/promotion/time_discount/add/good',
          component: promotionTimeDiscountAddGood
        },
        {
          path: '/promotion/one_rmb_list',
          component: promotionOneRmbList
        },
        {
          path: '/promotion/one_rmb_list/add',
          component: promotionOneRmbListAdd
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
          path: '/promotion/bargain/add',
          component: promotionBargainAdd
        },
        {
          path: '/promotion/vote_list',
          component: promotionVote
        },
        {
          path: '/promotion/vote_list/add',
          component: promotionVoteAdd
        },
        {
          path: '/promotion/game/add/:type',
          component: promotionGameAdd
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
        },
        {
          path: '/promotion/game_prize_list/:id',
          component: promotionGamePrizeListDetail
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
          path: '/settings/shipping_templates',
          component: settingsLogisticsTemplates
        },
        {
          path: '/settings/shipping_templates/add',
          component: settingsLogisticsTemplatesAdd
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
          path: '/settings/department/power/:id',
          component: settingsDepartmentPower
        },
        {
          path: '/settings/staff',
          component: settingsMember
        },
        {
          path: '/settings/staff/add',
          component: settingsMemberAdd
        },
        {
          path: '/settings/staff/:id',
          component: settingsMemberEdit
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
