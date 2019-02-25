<template>
  <div>
    <div class="page-title">
      <p>分销商升级奖励设置</p>
      <span>分销商获得佣金自动升级，会产生一定的现金奖励，并计入分销商的佣金总额（系统调整佣金影响的等级变化，在下一次消费时生效）。</span>
    </div>
    <el-tabs type="card">
      <el-tab-pane label="奖励设置">
        <el-form label-width="85px">
          <el-form-item label="开启奖励：">
            <el-switch v-model="rewardSet.rewardOpen" active-color="#004ACC" inactive-color="#E6E6E6"></el-switch>
          </el-form-item>
          <el-form-item label="有效时间：" v-if="rewardSet.rewardOpen">
            <el-date-picker v-model="rewardSet.time"
              type="daterange" range-separator="至" size="mini"
              start-placeholder="开始日期" end-placeholder="结束日期">
            </el-date-picker>
          </el-form-item>
          <el-form-item label="奖励设置：" v-if="rewardSet.rewardOpen">
            <el-table :data="rewardSet.list" size="mini">
              <el-table-column label="序号" width="55">
                <template slot-scope="scope">
                  <span>{{scope.$index+1}}</span>
                </template>
              </el-table-column>
              <el-table-column label="奖励时间" width="180">
                <template slot-scope="scope">
                  <span>升级到</span>
                  <span style="color:#ff0000">{{scope.row.time}}</span>
                  <span>分销商</span>
                </template>
              </el-table-column>
              <el-table-column label="奖励方式">
                <template slot-scope="scope">
                  <span>额外奖励佣金</span>
                  <el-input size="mini" v-model="scope.row.money" style="width: 180px"></el-input>
                  <span>元</span>
                  <span style="font-size: 12px;color:#999">(可提现，计入升级分销商等级的佣金总额)</span>
                </template>
              </el-table-column>
            </el-table>
            <div class="pannel">
              <el-button type="success" size="small">保存</el-button>
            </div>
          </el-form-item>
        </el-form>
      </el-tab-pane>
      <el-tab-pane label="升级佣金明细">
        <div class="pannel pannel-content">
          <el-form :inline="true">
            <el-form-item label="分销商名称：">
              <el-input size="mini" v-model="query.name"></el-input>
            </el-form-item>
            <el-form-item label="奖励时间：">
              <el-date-picker v-model="query.time"
                type="daterange" range-separator="至" size="mini"
                start-placeholder="开始日期" end-placeholder="结束日期">
              </el-date-picker>
            </el-form-item>
            <el-form-item>
              <span class="mini-btn" type="primary">查询</span>
            </el-form-item>
          </el-form>
        </div>
        <el-table :data="levelReward" border size="mini">
          <el-table-column label="分销商名称" prop="name"></el-table-column>
          <el-table-column label="奖励金额" prop="reward" align="center">
            <template slot-scope="scope">
              <span>{{scope.row.reward}}元</span>
            </template>
          </el-table-column>
          <el-table-column label="奖励时间" prop="time"></el-table-column>
          <el-table-column label="奖励原因" prop="reason"></el-table-column>
        </el-table>
        <div class="pannel table-footer">
          <el-pagination
            :page-size="10"
            layout="sizes, total, prev, next, jumper"
            :total="1000">
          </el-pagination>
        </div>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>
<script>
export default {
  data () {
    return {
      rewardSet: {
        rewardOpen: false,
        time: [],
        list: [
          {
            time: '初级茶客',
            money: 0.00
          },
          {
            time: '中级茶客',
            money: 0.00
          },
          {
            time: '高级茶客',
            money: 0.00
          },
          {
            time: '34343',
            money: 0.00
          }
        ]
      },
      levelReward: [
        {
          name: '测试12312',
          reward: 1.00,
          time: '2018-12-02 08:04:23',
          reason: '升级奖励'
        },
        {
          name: '测试12312',
          reward: 1.00,
          time: '2018-12-02 08:04:23',
          reason: '升级奖励'
        },
        {
          name: '测试12312',
          reward: 1.00,
          time: '2018-12-02 08:04:23',
          reason: '升级奖励'
        },
        {
          name: '测试12312',
          reward: 1.00,
          time: '2018-12-02 08:04:23',
          reason: '升级奖励'
        }
      ],
      query: {
        name: '',
        time: []
      }
    }
  }
}
</script>
