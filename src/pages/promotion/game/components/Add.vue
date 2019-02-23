<template>
  <div>
    <div class="page-title">
      <p>新建幸运大转盘</p>
    </div>
    <div class="add-box">
      <div class="mobile-model">
        <div class="mobile-header">
          <i></i>
          <div class="mobile-title">店铺主页</div>
        </div>
        <div class="mobile-content">
          <div class="game-top">
            <img :src="gameTypeImg[gameType].topImg" alt="">
          </div>
          <div class="game-num">
            <p>您还有{{form.eachDayTime || 1}}次机会</p>
          </div>
          <div class="game-middle">
            <img :src="gameTypeImg[gameType].middleImg" alt="">
          </div>
          <div class="game-footer">
            <p>活动奖品：</p>
            <div v-for="(v, index) in prizeList" :key="index">
              <span>{{v.name}}:</span>
              <span v-if="v.type==1">赠送积分</span>
              <span v-if="v.type==2">赠送优惠券</span>
              <span v-if="v.type==3">赠送商品</span>
              <span v-if="v.type==4">其他奖品</span>
            </div>
            <p>活动说明：</p>
            <span>{{form.intr}}</span>
            <p>活动时间：</p>
            <span v-if="form.time">{{form.time[0]}}至{{form.time[1]}}</span>
          </div>
        </div>
        <div class="mobile-footer">
          <i></i>
        </div>
      </div>
      <div v-if="step==1">
        <div class="pannel pannel-content">
          <p class="title"><b>基本信息：</b></p>
          <el-form class="form-box" label-width="130px" size="small" style="margin-top: 20px;margin-right:70px">
            <el-form-item label="活动名称：" required>
              <el-input v-model="form.title"></el-input>
            </el-form-item>
            <el-form-item label="活动时间：">
              <el-date-picker v-model="form.time"
                type="datetimerange" range-separator="至" value-format="yyyy-MM-dd HH:mm:ss"
                start-placeholder="开始日期" end-placeholder="结束日期">
              </el-date-picker>
            </el-form-item>
            <el-form-item label="活动说明：">
              <el-input v-model="form.intr" type="textarea" :rows="4"></el-input>
            </el-form-item>
          </el-form>
        </div>
        <div class="pannel-content">
          <p class="title"><b>活动设置：</b></p>
          <el-form class="form-box" label-width="130px" size="small" style="margin-top: 20px;margin-right:70px">
            <el-form-item label="适用会员：" required>
              <div>
                <label>
                  <input type="checkbox">
                  <span>全部会员</span>
                </label>
              </div>
              <div>
                <label>
                  <input type="checkbox">
                  <span>代理商</span>
                </label>
                <label>
                  <input type="checkbox">
                  <span>合伙人</span>
                </label>
                <label>
                  <input type="checkbox">
                  <span>创客</span>
                </label>
              </div>
              <div>
                <label>
                  <input type="checkbox">
                  <span>新会员</span>
                </label>
                <label>
                  <input type="checkbox">
                  <span>活跃会员</span>
                </label>
                <label>
                  <input type="checkbox">
                  <span>沉睡会员</span>
                </label>
              </div>
            </el-form-item>
            <el-form-item label="消耗积分：" required>
              <el-input style="width:200px"></el-input>
              <span>积分/次</span>
              <p class="tip">用户每次参与活动需要消耗积分，值为0时不消耗</p>
            </el-form-item>
            <el-form-item label="参与送积分：" required>
              <el-input style="width:200px"></el-input>
              <span>积分/次</span>
              <label>
                <input type="checkbox">
                <span>仅送给未中奖的用户</span>
              </label>
              <p class="tip">值为0时不赠送积分</p>
            </el-form-item>
            <el-form-item label="参与次数：" required>
              <div>
                <span>每人每天限</span>
                <el-input v-model="form.eachDayTime" style="width:100px"></el-input>
                <span>次</span>
                <p class="tip">0为不限制</p>
              </div>
              <div>
                <span>每人最多限</span>
                <el-input style="width:100px"></el-input>
                <span>次</span>
                <p class="tip">0为不限制</p>
              </div>
            </el-form-item>
            <el-form-item label="会员信息校验：" required>
              <el-switch v-model="form.switchValue" active-color="#0058CC" inactive-color="#E8E8E8"></el-switch>
              <span>会员参与活动是否需要绑定手机号</span>
            </el-form-item>
          </el-form>
        </div>
      </div>
      <div v-if="step==2">
        <div class="pannel-content">
          <div class="part-title">
            <b>中奖概率</b>
          </div>
          <div class="form-box" style="text-align:center;">
            <span>综合中奖率：</span>
            <el-input size="mini" style="width:100px"></el-input>
            <span>%</span>
            <p class="tip">活动有效期内，中奖概率保持不变</p>
          </div>
          <div class="part-title">
            <b>设置奖品</b>
          </div>
          <div class="form-box" style="text-align:center;">
            <p class="tip">等级设置的奖品数量越多，则该等级中奖率越高</p>
            <p class="tip">例如：设置一等奖 10个，二等奖20个，则中二等奖概率高于一等奖</p>
          </div>
          <el-tabs v-model="priceName" type="card" editable
            @tab-remove="prizeRemove" @tab-add="prizeAdd">
            <el-tab-pane :key="index" v-for="(item, index) in prizeList"
              :label="item.name" :name="item.name">
              <el-form size="small" label-width="150px" class="form-box">
                <el-form-item label="奖品类别：" required>
                  <label>
                    <input v-model="item.type" type="radio" value="1">
                    <span>赠送积分</span>
                  </label>
                  <label>
                    <input v-model="item.type" type="radio" value="2">
                    <span>赠送优惠卷</span>
                  </label>
                  <label>
                    <input v-model="item.type" type="radio" value="3">
                    <span>赠送商品</span>
                  </label>
                  <label>
                    <input v-model="item.type" type="radio" value="4">
                    <span>其他奖品</span>
                  </label>
                </el-form-item>
                <el-form-item label="奖品名称：" required>
                  <el-input style="width: 200px" v-model="item.prizeName"></el-input>
                </el-form-item>
                <el-form-item label="赠送积分：" required v-if="item.type==1">
                  <el-input style="width: 200px"></el-input>
                </el-form-item>
                <el-form-item label="赠送优惠券：" required v-if="item.type==2">
                  <el-select value="1" style="width: 200px">
                    <el-option label="满50减5" value="1"></el-option>
                  </el-select>
                </el-form-item>
                <el-form-item label="赠送商品：" required v-if="item.type==3">
                  <span class="prize-img" @click="dialogVisible=true">
                    <i class="el-icon-plus"></i>
                  </span>
                </el-form-item>
                <el-form-item label="是否配送：" required v-if="item.type==4">
                  <label>
                    <input type="checkbox">
                    <span>是，需要配送</span>
                  </label>
                </el-form-item>
                <el-form-item label="奖品数量：" required>
                  <el-input style="width: 200px" v-model="item.prizeName"></el-input>
                  <p class="tip">奖品数量为0时不设此奖项</p>
                </el-form-item>
                <el-form-item label="奖品图片：" v-if="item.type==4">
                  <label class="prize-img">
                    <input type="file" class="hide">
                    <i class="el-icon-plus"></i>
                  </label>
                  <p class="tip">仅支持jpg、 png、gif，尺寸60*60px,不超过1M</p>
                </el-form-item>
              </el-form>
            </el-tab-pane>
          </el-tabs>
          <div class="part-title">
            <b>中奖结果说明</b>
          </div>
          <el-form size="mini" label-width="200px" style="margin-right:30px">
            <el-form-item label="未中奖说明：">
              <el-input v-model="step2.textarea" type="textarea" :rows="4"></el-input>
            </el-form-item>
          </el-form>
        </div>
      </div>
    </div>
    <div class="submit-box-fixed">
      <el-button type="success" size="small" v-if="step == 1" @click="step=2">下一步</el-button>
      <el-button type="success" size="small" v-if="step == 2">提交</el-button>
    </div>
    <el-dialog :visible.sync="dialogVisible"
      width="30%">
      <div slot="title">
        <span>选择商品</span>
        <el-input size="mini" placeholder="请输入商品名称" style="width:350px"></el-input>
        <span class="mini-btn" type="success">查询</span>
      </div>
      <ul class="dialog-good-list">
        <li v-for="v in 4" :key="v">
          <img :src="'./static/img/apple.jpg'" style="width:60px;height:60px">
          <div>
            <a href="javascript:;">苹果手机</a>
            <span>￥98.00</span>
          </div>
          <span class="mini-btn" plain>选取</span>
        </li>
      </ul>
      <div class="pannel table-footer">
        <el-pagination
          :page-size="10"
          layout="total, prev, next, jumper"
          :total="1000">
        </el-pagination>
      </div>
    </el-dialog>
  </div>
</template>
<script>
export default {
  data () {
    return {
      dialogVisible: false,
      step: 1,
      gameTypeImg: {
        lucky: {
          topImg: './static/img/imgtop.png',
          middleImg: './static/img/imgbottom.png'
        },
        egg: {
          topImg: './static/img/eggpic1.png',
          middleImg: './static/img/eggpic.png'
        },
        flip: {
          topImg: './static/img/fanpai-toubupic1.png',
          middleImg: './static/img/fanpaipic.png'
        },
        dfw: {
          topImg: './static/img/dafuwenpic1.png',
          middleImg: './static/img/dafuwenpic.png'
        },
        ggl: {
          topImg: './static/img/guaguakapic.png',
          middleImg: './static/img/guajiangpic1.png'
        }
      },
      form: {
        title: '',
        time: [],
        switchValue: false,
        intr: '',
        eachDayTime: 1
      },
      step2: {
        textarea: '谢谢参与'
      },
      priceName: '一等奖',
      prizeList: [
        {
          name: '一等奖',
          type: '1',
          prizeName: '',
          prizeNum: 1
        }
      ],
      NUM: ['', '一', '二', '三', '四', '五', '六', '七', '八', '九']
    }
  },
  computed: {
    gameType () {
      return this.$route.params.type
    }
  },
  methods: {
    prizeRemove (name) {
      this.$message(`删除${name}`)
      this.prizeList.forEach((item, index) => {
        if (item.name === name) {
          this.prizeList.splice(index, 1)
        }
      })
    },
    prizeAdd () {
      this.prizeList.push({
        name: `${this.NUM[this.prizeList.length + 1]}等奖`,
        type: '1',
        prizeName: '',
        prizeNum: 1
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.dialog-good-list{
  li{
    display: flex;
    border-bottom: 1px solid #ddd;
    padding: 10px 0;
    div{
      flex: 1;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }
    .mini-btn{
      height: 28px;
      line-height: 24px;
    }
  }
}
.add-box{
  display: flex;
  align-items: flex-start;
  margin-bottom: 100px;
  .mobile-content{
    height: 570px;
    background: #ff0000;
    margin: -1px 13px 0;
    overflow-y: auto;
    color: #fff;
    .game-top,.game-middle{
      img{
        width: 100%;
      }
    }
    .game-num{
      text-align: center;
      margin: 10px 10px 5px;
    }
    .game-footer{
      padding: 10px;
      p{
        margin: 5px 0;
      }
      span{
        font-size: 12px;
      }
    }
  }
  .pannel-content{
    margin-top: 0;
    margin-left: 20px;
    width: 620px;
    .title{
      border-bottom: 1px solid #ccc;
      padding-bottom: 10px;
    }
  }
  .part-title{
    border-bottom: 1px dashed #ccc;
    margin: 25px 0;
    font-size: 12px;
    position: relative;
    b{
      position: absolute;
      padding: 0 25px;
      background-color: #F7F7F7;
      left: 50%;
      transform: translate(-50%, -50%);
    }
  }
  .prize-img{
    display: inline-block;
    width: 35px;
    height: 35px;
    border: 1px dashed #8D8A89;
    line-height: 35px;
    text-align: center;
  }
}

</style>
