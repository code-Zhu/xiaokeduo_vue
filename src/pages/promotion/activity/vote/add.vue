<template>
  <div>
    <p class="page-title">新建投票调查</p>
    <el-form class="form-box" size="mini" label-width="200px" style="margin-right:200px">
      <el-form-item label="投票调查：" required>
        <el-input></el-input>
      </el-form-item>
      <el-form-item label="投票选项：" required>
        <el-input type="textarea" :rows="6"></el-input>
        <p class="tip">在输入框中用回车换行区分多个选项值，一行一个选项</p>
      </el-form-item>
      <el-form-item label="活动封面：" required>
        <label class="img-box">
          <input type="file" class="hide">
          <span>选择封面</span>
        </label>
        <p class="tip">建议尺寸：640 x 400 像素，小于300KB，支持jpg、gif、png格式</p>
      </el-form-item>
      <el-form-item label="有效期限：" required>
        <el-date-picker v-model="form.time"
          type="datetimerange" range-separator="至" value-format="yyyy-MM-dd HH:mm:ss"
          start-placeholder="开始日期" end-placeholder="结束日期">
        </el-date-picker>
      </el-form-item>
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
      <el-form-item label="活动说明：" required>
        <vue-ueditor-wrap v-model="form.content" :config="myConfig" style="width:100%"></vue-ueditor-wrap>
      </el-form-item>
      <el-form-item label="参与方式：" required>
        <div>
          <label>
            <input v-model="form.joinType" value="1" type="radio">
            <span>投票只能选择一项（单选）</span>
          </label>
        </div>
        <div>
          <label>
            <input v-model="form.joinType" value="2" type="radio">
            <span>投票允许多选，</span>
            <span>最多可选</span>
            <el-input style="width: 70px" :disabled="form.joinType==1"></el-input>
            <span>项</span>
          </label>
        </div>
      </el-form-item>
      <el-form-item>
        <el-button type="success">保存</el-button>
        <el-button type="success">取消</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
const VueUeditorWrap = require('vue-ueditor-wrap')
export default {
  components: { VueUeditorWrap },
  data () {
    return {
      form: {
        time: [],
        content: '',
        joinType: '1'
      },
      myConfig: {
        autoHeightEnabled: true,
        initialFrameHeight: 200, // 初始容器高度
        initialFrameWidth: '100%', // 初始容器宽度
        UEDITOR_HOME_URL: './static/UEditor/',
        serverUrl: 'http://35.201.165.105:8000/controller.php'// 上传文件接口
      }
    }
  }
}
</script>
<style lang="scss" scoped>
.img-box{
  display: inline-block;
  width: 70px;
  height: 70px;
  border: 1px solid #A19C9C;
  line-height: 70px;
  text-align: center;
}
</style>
