<template>
  <div>
    <p class="page-title">物流跟踪配置</p>
    <el-form label-width="130px" size="mini">
      <el-form-item label="快递100key：">
        <el-input v-model="form.key" style="width: 350px"></el-input>
        <a target="_blank" href="http://www.kuaidi100.com/openapi/applyapi.shtml">去申请</a>
        <p>快递100跟踪物流状态时使用的参数，可以去快递100申请该key.</p>
      </el-form-item>
      <el-form-item label="物流查询地址：" required>
        <el-input v-model="form.addr" style="width: 350px"></el-input>
        <p>在没有填写快递100 key时，系统将访问该地址查询物流信息。</p>
        <p style="color: #ff0000">其中{numberId}为运单号码参数，修改地址时，请原样粘贴</p>
      </el-form-item>
      <el-form-item label="">
        <el-button size="small" type="success">保存</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
export default {
  data () {
    return {
      form: {
        key: '',
        addr: 'http://m.kuaidi100.com/index_all.html?postid={numberId}&type={companyCode}&callbackurl={callbackurl}'
      }
    }
  }
}
</script>
