<template>
  <div>
    <div class="page-title">
      <p>编辑会员资料</p>
      <span>编辑会员各项信息资料</span>
    </div>
    <div class="pannel">
      <el-form class="form-box" label-width="150px" size="small" style="width: 580px">
        <el-form-item label="昵称：">
          <span>a11213a</span>
        </el-form-item>
        <el-form-item label="系统用户名：">
          <span>asd112</span>
        </el-form-item>
        <el-form-item label="会员等级：">
          <el-select>
            <el-option label="白金" value="1"></el-option>
            <el-option label="黄金" value="2"></el-option>
            <el-option label="会员" value="3"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="姓名：">
          <el-input></el-input>
          <p class="tip">姓名长度在20个字符以内</p>
        </el-form-item>
        <el-form-item label="电子邮件地址：">
          <el-input></el-input>
          <p class="tip">请输入正确电子邮件，长度在1-256个字符以内</p>
        </el-form-item>
        <el-form-item label="详细地址：">
          <area-select :level="2" type="text" v-model="form.area" :data="pcaa" size="small"
            :placeholders="['-请选择省-', '-请选择市-', '-请选择区-']"></area-select>
        </el-form-item>
        <el-form-item label="街道地址：">
          <el-input></el-input>
          <p class="tip">街道地址必须控制在100个字符以内</p>
        </el-form-item>
        <el-form-item label="QQ：">
          <el-input></el-input>
          <p class="tip">QQ号长度限制在3-20个字符之间，只能输入数字</p>
        </el-form-item>
        <el-form-item label="手机号码：">
          <el-input></el-input>
          <p class="tip">手机号码长度限制在3-20个字符之间,只能输入数字</p>
        </el-form-item>
        <el-form-item label="身份证号码：">
          <el-input></el-input>
          <p class="tip">只能输入15位或者18位身份证号码</p>
        </el-form-item>
        <el-form-item label="注册日期：">
          <span>2019-02-01 10:45:24</span>
        </el-form-item>
        <el-form-item label="总消费金额：">
          <span>310.00</span>
        </el-form-item>
        <el-form-item label="">
          <el-button type="success" size="small">确定</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>
<script>
import pcaa from 'area-data/pcaa'
export default {
  data () {
    return {
      pcaa,
      form: {
        area: []
      }
    }
  }
}
</script>
