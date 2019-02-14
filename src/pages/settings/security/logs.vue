<template>
  <div>
    <div class="page-title">
      <p>操作日志</p>
      <span>查看各管理员的历史操作记录</span>
    </div>
    <div class="pannel pannel-content">
      <div class="form-item">
        <span class="label">操作人：</span>
        <el-select v-model="query.user" size="mini">
          <el-option value="">请选择</el-option>
          <el-option value="admin">admin</el-option>
        </el-select>
      </div>
      <div class="form-item">
        <span class="label">操作时间：</span>
        <el-date-picker v-model="query.time"
          type="daterange" range-separator="至" size="mini"
          start-placeholder="开始日期" end-placeholder="结束日期">
        </el-date-picker>
        <span class="mini-btn" type="primary">查询</span>
        <span>快速查看</span>
        <span class="mini-btn" plain>最近7天</span>
        <span class="mini-btn" plain>最近1个月</span>
      </div>
    </div>
    <div class="pannel">
      <el-button size="mini" type="danger">批量删除</el-button>
      <el-button size="mini" type="warning">清空日志</el-button>
    </div>
    <div class="pannel">
      <el-table :data="list" border>
        <el-table-column type="selection" width="50" align="center"></el-table-column>
        <el-table-column label="用户" prop="username" align="center" width="100"></el-table-column>
        <el-table-column label="IP" prop="ip" align="center" width="200"></el-table-column>
        <el-table-column label="详情" prop="detail"></el-table-column>
        <el-table-column label="操作时间" prop="time" align="center" width="160"></el-table-column>
        <el-table-column label="操作" width="55" align="center">
          <template slot-scope="scope">
            <a href="javascript:;">删除</a>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <div class="pannel table-footer">
      <el-pagination
        :page-size="10"
        layout="sizes, total, prev, next, jumper"
        :total="1000">
      </el-pagination>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      query: {
        user: '',
        time: []
      },
      list: [
        {
          username: 'admin',
          ip: '114.226.179.242',
          detail: '页面地址：/Admin/goods/productonsales.aspx?firstPage=1日志的详细描述：设置了“1” 件商品包邮',
          time: '2019-02-13 14:03:37'
        },
        {
          username: 'admin',
          ip: '114.226.179.242',
          detail: '页面地址：/Admin/goods/productonsales.aspx?firstPage=1日志的详细描述：设置了“1” 件商品包邮',
          time: '2019-02-13 14:03:37'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.form-item{
  line-height: 36px;
  .label{
    display: inline-block;
    width: 80px;
    text-align: right;
  }
}
</style>
