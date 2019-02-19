<template>
  <div class="shop-menu">
    <p class="page-title">消息公告</p>
    <div class="pannel">
      <el-tabs type="border-card">
        <el-tab-pane label="公告管理">
          <div class="pannel-content tab-sel">
            <el-col :span="4">
              <el-col :span="10"><span>公告标题:</span></el-col>
              <el-col :span="14"><el-input size="mini"></el-input></el-col>
            </el-col>
            <el-col :span="11">
              <el-col :span="4">
                <span>发布时间:</span>
              </el-col>
              <el-col :span="18">
                <el-date-picker v-model="time" type="daterange" size="mini"
                  range-separator="至" start-placeholder="开始日期" end-placeholder="结束日期">
                </el-date-picker>
              </el-col>
            </el-col>
            <el-col :span="4">
              <el-col :span="9"><span>创建用户:</span></el-col>
              <el-col :span="15"><el-input size="mini"></el-input></el-col>
            </el-col>
            <el-col :span="5">
              <el-col :span="5"><span>状态:</span></el-col>
              <el-col :span="11">
                <el-select v-model="status" size="mini">
                  <el-option label="所有公告" value="0"></el-option>
                  <el-option label="待发布" value="1"></el-option>
                  <el-option label="已发布" value="2"></el-option>
                </el-select>
              </el-col>
              <el-col :span="8">
                <el-button size="mini" type="primary">查询</el-button>
              </el-col>
            </el-col>
          </div>
          <div class="pannel">
            <div class="table-header">
              <el-button type="danger" size="mini">批量删除</el-button>
              <el-button type="success" size="mini" @click="$router.push('/shop/notice_list/add')">创建新的公告</el-button>
            </div>
            <div class="table-body">
              <el-table :data="list1" border>
                <el-table-column type="selection" width="35"></el-table-column>
                <el-table-column prop="title" label="标题"></el-table-column>
                <el-table-column prop="c_user" label="创建用户" width="80"></el-table-column>
                <el-table-column prop="c_time" label="创建时间" width="160"></el-table-column>
                <el-table-column prop="send_to" label="发送对象" width="80"></el-table-column>
                <el-table-column prop="send_status" label="发送状态" width="80"></el-table-column>
                <el-table-column prop="last_send_time" label="最后发布时间" width="160"></el-table-column>
                <el-table-column label="操作" width="90">
                  <template slot-scope="scope">
                    <div class="table-ctr">
                      <a href="#">预览</a>
                      <a href="#">删除</a>
                    </div>
                  </template>
                </el-table-column>
              </el-table>
            </div>
            <div class="table-footer">
              <el-pagination
                :page-size="100"
                layout="total, prev, pager, next, jumper"
                :total="400">
              </el-pagination>
            </div>
          </div>
        </el-tab-pane>
        <el-tab-pane label="消息管理">
          <div class="pannel-content tab-sel">
            <el-col :span="4">
              <el-col :span="10"><span>公告标题:</span></el-col>
              <el-col :span="14"><el-input size="mini"></el-input></el-col>
            </el-col>
            <el-col :span="11">
              <el-col :span="4">
                <span>发布时间:</span>
              </el-col>
              <el-col :span="18">
                <el-date-picker v-model="time" type="daterange" size="mini"
                  range-separator="至" start-placeholder="开始日期" end-placeholder="结束日期">
                </el-date-picker>
              </el-col>
            </el-col>
            <el-col :span="4">
              <el-col :span="9"><span>创建用户:</span></el-col>
              <el-col :span="15"><el-input size="mini"></el-input></el-col>
            </el-col>
            <el-col :span="5">
              <!-- <el-col :span="5"><span>状态:</span></el-col>
              <el-col :span="11">
                <el-select v-model="status" size="mini">
                  <el-option label="所有公告" value="0"></el-option>
                  <el-option label="待发布" value="1"></el-option>
                  <el-option label="已发布" value="2"></el-option>
                </el-select>
              </el-col> -->
              <el-col :span="8">
                <el-button size="mini" type="primary">查询</el-button>
              </el-col>
            </el-col>
          </div>
          <div class="pannel">
            <div class="table-header">
              <el-button type="danger" size="mini">批量删除</el-button>
              <el-button type="success" size="mini">发布新消息</el-button>
            </div>
            <div class="table-body">
              <el-table :data="list2" border>
                <el-table-column type="selection"></el-table-column>
                <el-table-column prop="title" label="标题"></el-table-column>
                <el-table-column prop="c_user" label="创建用户" width="80"></el-table-column>
                <el-table-column prop="c_time" label="创建时间" width="160"></el-table-column>
                <el-table-column prop="send_to" label="发送对象" width="80"></el-table-column>
                <el-table-column prop="send_status" label="发送状态" width="80"></el-table-column>
                <el-table-column prop="last_send_time" label="最后发布时间" width="160"></el-table-column>
                <el-table-column label="操作" width="90">
                  <template slot-scope="scope">
                    <div class="table-ctr">
                      <a href="#">预览</a>
                      <a href="#">删除</a>
                    </div>
                  </template>
                </el-table-column>
              </el-table>
            </div>
            <div class="table-footer">
              <el-pagination
                :page-size="100"
                layout="total, prev, pager, next, jumper"
                :total="400">
              </el-pagination>
            </div>
          </div>
        </el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      time: '',
      status: '',
      list1: [
        {
          title: '恭喜分销商获得升级奖励佣金￥1.00',
          c_user: 'admin',
          c_time: '2018-12-02 15:56:50',
          send_to: '所有用户',
          send_status: '已发布',
          last_send_time: '2018-12-02 15:57:06'
        },
        {
          title: '恭喜分销商获得升级奖励佣金￥1.00',
          c_user: 'admin',
          c_time: '2018-12-02 15:56:50',
          send_to: '所有用户',
          send_status: '已发布',
          last_send_time: '2018-12-02 15:57:06'
        },
        {
          title: '恭喜分销商获得升级奖励佣金￥1.00',
          c_user: 'admin',
          c_time: '2018-12-02 15:56:50',
          send_to: '所有用户',
          send_status: '已发布',
          last_send_time: '2018-12-02 15:57:06'
        },
        {
          title: '恭喜分销商获得升级奖励佣金￥1.00',
          c_user: 'admin',
          c_time: '2018-12-02 15:56:50',
          send_to: '所有用户',
          send_status: '已发布',
          last_send_time: '2018-12-02 15:57:06'
        },
        {
          title: '恭喜分销商获得升级奖励佣金￥1.00',
          c_user: 'admin',
          c_time: '2018-12-02 15:56:50',
          send_to: '所有用户',
          send_status: '已发布',
          last_send_time: '2018-12-02 15:57:06'
        },
        {
          title: '恭喜分销商获得升级奖励佣金￥1.00',
          c_user: 'admin',
          c_time: '2018-12-02 15:56:50',
          send_to: '所有用户',
          send_status: '已发布',
          last_send_time: '2018-12-02 15:57:06'
        },
        {
          title: '恭喜分销商获得升级奖励佣金￥1.00',
          c_user: 'admin',
          c_time: '2018-12-02 15:56:50',
          send_to: '所有用户',
          send_status: '已发布',
          last_send_time: '2018-12-02 15:57:06'
        },
        {
          title: '恭喜分销商获得升级奖励佣金￥1.00',
          c_user: 'admin',
          c_time: '2018-12-02 15:56:50',
          send_to: '所有用户',
          send_status: '已发布',
          last_send_time: '2018-12-02 15:57:06'
        },
        {
          title: '恭喜分销商获得升级奖励佣金￥1.00',
          c_user: 'admin',
          c_time: '2018-12-02 15:56:50',
          send_to: '所有用户',
          send_status: '已发布',
          last_send_time: '2018-12-02 15:57:06'
        },
        {
          title: '恭喜分销商获得升级奖励佣金￥1.00',
          c_user: 'admin',
          c_time: '2018-12-02 15:56:50',
          send_to: '所有用户',
          send_status: '已发布',
          last_send_time: '2018-12-02 15:57:06'
        }
      ],
      list2: [
        {
          title: '五一放假',
          c_user: 'admin',
          c_time: '2018-12-02 15:56:50',
          send_to: '所有用户',
          send_status: '已发布',
          last_send_time: '2018-12-02 15:57:06'
        }
      ]
    }
  }
}
</script>
<style lang="scss" scoped>
.tab-sel{
  text-align: center;
  height: 30px;
  line-height: 30px;
}
</style>
