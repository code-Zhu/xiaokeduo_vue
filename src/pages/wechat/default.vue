<template>
  <div>
    <p class="page-title">绑定微信公众号</p>
    <div class="pannel pannel-content success">
      <i class="el-icon-success"></i>
      <b>已成功绑定微信公众号</b>
      <div>
        店铺正式运营期间请勿随意<a href="javascript:;">更换微信公众号</a>，以免造成不必要的麻烦，如果网站出现绑定公众号错误，您可以手动
        <a href="javascript:;">刷新令牌</a>。
      </div>
    </div>
    <div class="pannel">
      <el-table :data="list" border>
        <el-table-column label="配置项" prop="option" width="160" align="center"></el-table-column>
        <el-table-column label="配置说明" prop="intr" align="center"></el-table-column>
        <el-table-column label="状态" prop="status" width="80" align="center">
          <template slot-scope="scope">
            <span v-if="scope.row.status === 1">已绑定</span>
            <span v-if="scope.row.status === 2">已设置</span>
          </template>
        </el-table-column>
        <el-table-column label="操作" width="120" align="center">
          <template slot-scope="scope">
            <el-button type="success" size="small" v-if="scope.row.status === 1">查询详情</el-button>
            <el-button type="success" size="small" v-if="scope.row.status === 2">重新设置</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      list: [
        {
          option: 'URL/Token',
          intr: '绑定到微信公众平台以后，可通过系统后台管理您的微信公众号',
          status: 1
        },
        {
          option: 'AppID/AppSecret',
          intr: '保存到系统后台以后，可在系统中使用更多微信公众号的功能',
          status: 2
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.success{
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-content: flex-start;
  height: 45px;
  i{
    font-size: 44px;
    margin-right: 15px;
  }
  i,b{
    color: #0E932E;
  }
  b{
    margin-bottom: 15px;
  }
}
</style>
