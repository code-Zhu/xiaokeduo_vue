<template>
  <div class="wx-default">
    <p class="page-title">绑定微信公众号</p>
    <div class="pannel pannel-content success">
      <i class="el-icon-success"></i>
      <b>已成功绑定微信公众号</b>
      <div>
        店铺正式运营期间请勿随意<router-link to="/wechat/default/change">更换微信公众号</router-link>，以免造成不必要的麻烦，如果网站出现绑定公众号错误，您可以手动
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
            <el-button type="success" size="small" v-if="scope.row.status === 1"
              @click="dialogVisible1 = true">查询详情</el-button>
            <el-button type="success" size="small" v-if="scope.row.status === 2"
              @click="dialogVisible2 = true">重新设置</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <el-dialog :visible.sync="dialogVisible1" width="530px">
      <span slot="title"><i class="iconfont icon-wechat"></i>微信公众号绑定详情</span>
      <p>复制以下信息至 <a href="http://mp.weixin.qq.com/">微信公众平台</a> ->开发者中心->服务器配置中，并提交！</p>
      <el-form size="mini" label-width="80px" style="margin-top:20px">
        <el-form-item label="Url:">
          <div class="dialog-form-item">
            <span>http://47.93.12.216/api/wx.ashx</span>
            <span class="mini-btn" plain>复制</span>
          </div>
        </el-form-item>
        <el-form-item label="Token:">
          <div class="dialog-form-item">
            <span>956E836616083926</span>
            <span class="mini-btn" plain>复制</span>
          </div>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer" style="text-align:center">
        <el-button type="success" @click="dialogVisible1 = false" size="small">我知道了</el-button>
      </span>
    </el-dialog>
    <el-dialog :visible.sync="dialogVisible2" width="530px">
      <span slot="title"><i class="iconfont icon-wechat"></i>重新设置</span>
      <p>如果您微信公众号的AppSecret已经变更，请将新的AppSecret配置在下方</p>
      <el-form class="form-box" size="mini" label-width="80px" style="margin:20px 50px 0;">
        <el-form-item label="Appid:">
          <span>wxad21d572c8944fde</span>
          <p class="tip">微信公众号身份唯一标识</p>
        </el-form-item>
        <el-form-item label="AppSecret:">
          <el-input></el-input>
          <p class="tip">审核后在公众平台开启开发模式后可查看</p>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer" style="text-align:center">
        <el-button type="success" @click="dialogVisible2 = false" size="small">保存</el-button>
        <el-button type="primary" @click="dialogVisible2 = false" size="small">取消</el-button>
      </span>
    </el-dialog>
  </div>
</template>
<script>
export default {
  data () {
    return {
      dialogVisible2: false,
      dialogVisible1: false,
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

<style lang="scss">
.wx-default{
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
  .dialog-form-item{
    display: flex;
    justify-content: space-between;
    margin-right: 40px;
  }
}
</style>
