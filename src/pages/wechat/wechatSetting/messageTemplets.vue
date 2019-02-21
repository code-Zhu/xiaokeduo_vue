<template>
  <div style="margin-bottom: 55px" class="message-templets">
    <div class="page-title">
      <p>消息模板设置</p>
      <span>通过接入模板消息接口，公众号可向关注其账号的用户发送预设模板的消息，以便向用户及时发送重要的服务通知。</span>
    </div>
    <el-tabs type="border-card" v-model="tabsName">
      <el-tab-pane label="基本设置" name="first">
        <div class="tab-content">
          <p class="content-title">您可以根据运营者角色绑定多个微信账户用于接收消息提醒</p>
          <el-button size="small" type="success" @click="dialogVisible=true">绑定运营者微信</el-button>
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
    <el-dialog :visible.sync="dialogVisible" width="530px">
      <span slot="title"><i class="iconfont icon-wechat"></i>绑定运营者微信号</span>
      <div class="dialog-content">
        <div class="content-top">
          <span :class="{active: step==1}">1 绑定微信号<i></i></span>
          <span :class="{active: step==2}">2 选中接收消息类型</span>
        </div>
        <p v-if="step==1">微信扫描二维码后，将自动获取绑定授权。成功获取授权后，可点击下一步继续</p>
        <p v-if="step==2">为运营者指定接收消息的类型，可多选</p>
        <div class="step1" v-if="step==1">
          <div style="text-align:center">
            <img :src="'./static/img/api.png'" style="170px;height:170px">
          </div>
          <el-form class="form-box" size="mini" label-width="150px">
            <el-form-item label="运营者微信OpenID：">
              <el-input v-model="openID" placeholder="扫描上方二维码或手动输入"></el-input>
            </el-form-item>
          </el-form>
          <p class="tip">openid号可以在<router-link to="/member/list">会员列表</router-link>中指定的会员一栏中查看并复制；</p>
          <p class="tip">用运营者微信号扫描二维码，也可用手机拍照后，将二维码发送给运营者扫描</p>
        </div>
        <div class="step2" v-if="step==2">
          <el-form label-width="110px" size="mini" style="margin: 10px 35px">
            <el-form-item label="运营者姓名：">
              <el-input></el-input>
            </el-form-item>
            <el-form-item label="运营者角色：">
              <el-input></el-input>
            </el-form-item>
            <el-form-item label="选择消息类型：">
              <label>
                <input type="checkbox">
                <span>新订单提醒</span>
              </label>
              <label>
                <input type="checkbox">
                <span>订单付款提醒</span>
              </label>
              <label>
                <input type="checkbox">
                <span>退货申请提醒</span>
              </label>
              <label>
                <input type="checkbox">
                <span>用户咨询提醒</span>
              </label>
              <label>
                <input type="checkbox">
                <span>提现申请提醒</span>
              </label>
              <div>
                <label>
                  <input type="checkbox">
                  <span>分销商申请成功提醒</span>
                </label>
              </div>
            </el-form-item>
          </el-form>
        </div>
      </div>
      <span slot="footer" class="dialog-footer" style="text-align:center">
        <el-button type="primary" @click="dialogVisible = false" size="small">暂不绑定</el-button>
        <el-button type="success" size="small" v-if="step==1" @click="nextStep">保存至下一步</el-button>
        <el-button type="success" @click="dialogVisible = false" size="small" v-if="step==2">保存</el-button>
      </span>
    </el-dialog>
  </div>
</template>
<script>
export default {
  data () {
    return {
      openID: '',
      step: 1,
      dialogVisible: false,
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
  },
  methods: {
    nextStep () {
      if (!this.openID) {
        this.$message.error('请扫描或输入OpenId!')
        return
      }
      this.step = 2
    }
  }
}
</script>
<style lang="scss">
.message-templets{
  .tip{
    font-size: 12px;
    color: #999;
    line-height: 24px;
  }
  .el-dialog__header{
    padding: 0 15px 5px;
    line-height: 35px;
    i.icon-wechat{
      color:#369F49;
      font-size: 36px;
      position: relative;
      top: 5px;
    }
  }
  .el-dialog__footer{
    text-align: center;
  }
  .dialog-content{
    .content-top{
      display: flex;
      &+p{
        line-height: 40px;
        background-color: #F4F5F9;
        margin: 30px 0px 10px;
      }
      span{
        flex: 1;
        line-height: 40px;
        text-align: center;
        &.active{
          background-color: #5CB85C;
          color: #fff;
        }
        &:first-child{
          position: relative;
          &:not(.active){
            i{
              border-left-color: #fff;
            }
          }
          i{
            border-top: 20px solid transparent;
            border-left: 21px solid #5CB85C;
            border-bottom: 20px solid transparent;
            position: absolute;
            right: -21px;
            top: 0;
            z-index: 1;
          }
        }
      }
    }
  }
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
}
</style>
