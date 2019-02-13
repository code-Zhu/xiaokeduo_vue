<template>
  <div style="margin-bottom: 55px">
    <div class="page-title">
      <p>消息模板设置</p>
      <span>通过接入模板消息接口，公众号可向关注其账号的用户发送预设模板的消息，以便向用户及时发送重要的服务通知。</span>
    </div>
    <el-tabs type="border-card" v-model="tabsName">
      <el-tab-pane label="基本设置" name="first">
        <div class="tab-content">
          <p class="content-title">您可以根据运营者角色绑定多个微信账户用于接收消息提醒</p>
          <el-button size="small" type="success">绑定运营者微信</el-button>
          <el-table :data="list1" style="margin-top: 10px">
            <el-table-column label="姓名"></el-table-column>
            <el-table-column label="运营者角色"></el-table-column>
            <el-table-column label="接受消息类型"></el-table-column>
            <el-table-column label="操作"></el-table-column>
          </el-table>
        </div>
        <div class="tab-content">
          <div class="content-title">
            <span>微信消息模板ID设置，</span>
            <a href="javascript:;">手动设置帮助？</a>
            <el-button size="small" type="danger">一键配置</el-button>
          </div>
          <el-table :data="list2" size="small">
            <el-table-column label="消息标题" prop="title"></el-table-column>
            <el-table-column label="模板编号" prop="tid"></el-table-column>
            <el-table-column label="微信模板ID">
              <template slot-scope="scope">
                <el-input v-model="scope.row.wid" size="mini"></el-input>
              </template>
            </el-table-column>
          </el-table>
        </div>
      </el-tab-pane>
      <el-tab-pane label="消息设置" name="second">
        <el-table :data="list3" size="small">
          <el-table-column label="消息接收对象" prop="obj"></el-table-column>
          <el-table-column label="消息类型"></el-table-column>
        </el-table>
      </el-tab-pane>
    </el-tabs>
    <div class="submit-box-fixed">
      <el-button type="success" size="small" v-if="tabsName == 'first'">保存模板列表</el-button>
      <el-button type="success" size="small" v-else>保存消息设置</el-button>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      tabsName: 'first',
      list1: [],
      list2: [
        {
          title: '账户变更提醒',
          tid: 'TM00370',
          wid: '1'
        },
        {
          title: '分销商申请成功提醒',
          tid: 'OPENTM207126233',
          wid: '2'
        },
        {
          title: '提现结果提醒',
          tid: 'OPENTM207601150',
          wid: '3'
        },
        {
          title: '订单消息提醒',
          tid: 'OPENTM205109409',
          wid: '4'
        },
        {
          title: '退款通知',
          tid: 'TM00599',
          wid: '5'
        },
        {
          title: '售后申请提醒',
          tid: 'OPENTM401701827',
          wid: '6'
        },
        {
          title: '提现申请通知',
          tid: 'OPENTM401873794',
          wid: '7'
        },
        {
          title: '会员注册成功提醒',
          tid: 'OPENTM207207788',
          wid: '8'
        },
        {
          title: '下级会员注册提示',
          tid: 'OPENTM207777500',
          wid: '9'
        },
        {
          title: '用户咨询提醒',
          tid: 'OPENTM202119578',
          wid: '10'
        }
      ],
      list3: [
        {
          obj: '分销商',
          type_list: []
        },
        {
          obj: '会员',
          type_list: []
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.tab-content{
  margin-bottom: 10px;
  .content-title{
    line-height: 22px;
    border-left: 2px solid #ff0000;
    padding-left: 10px;
    margin-bottom: 20px;
  }
}
.submit-box-fixed{
  width: 100%;
  position: fixed;
  z-index: 3;
  left: 0;
  bottom: 0;
  height: 55px;
  line-height: 55px;
  background-color: rgba(43,54,67,0.8);
  text-align: center;
}
</style>
