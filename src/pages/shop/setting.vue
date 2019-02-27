<template>
  <div class="shop-setting">
    <p class="page-title">店铺设置</p>
    <div class="pannel-content pannel" type="border">
      <div class="pannel-content-top">
        <p><b>开启首页浮动导航</b></p>
        <p>开启后，首页左侧会显示浮动导航</p>
        <toggle-button v-model="switch_val1" :labels="{checked: '已开启', unchecked: '已关闭'}"
          :color="{checked: '#3AB400', unchecked: '#ccc'}"
          @change="handleSwitchChange1" :width="100" :height="40" :font-size="14">
        </toggle-button>
      </div>
    </div>
    <div class="pannel-content pannel" type="border">
      <div class="pannel-content-top">
        <p><b>底部文字链接</b></p>
        <p>关闭后，底部将不显示文字链接</p>
        <toggle-button v-model="switch_val2" :labels="{checked: '已开启', unchecked: '已关闭'}"
          :color="{checked: '#3AB400', unchecked: '#ccc'}"
          @change="handleSwitchChange2" :width="100" :height="40" :font-size="14">
        </toggle-button>
      </div>
      <div class="form-box" v-show="switch_val2">
        <el-form label-width="160px">
          <el-form-item label="分销申请栏目名称：">
            <el-input class="_350px"></el-input>
          </el-form-item>
          <el-form-item label="栏目链接地址：">
            <el-input class="_350px"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="success" size="mini">保存</el-button>
            <a href="javascript:;" @click="handleReset('text')">恢复默认</a>
            <!-- <el-button type="warning" size="mini">恢复默认</el-button> -->
          </el-form-item>
        </el-form>
      </div>
    </div>
    <div class="pannel-content pannel" type="border">
      <div class="pannel-content-top">
        <p><b>底部版权信息</b></p>
        <p>关闭后，底部将不显示版权信息文字</p>
        <toggle-button v-model="switch_val3" :labels="{checked: '已开启', unchecked: '已关闭'}"
          :color="{checked: '#3AB400', unchecked: '#ccc'}"
          @change="handleSwitchChange3" :width="100" :height="40" :font-size="14">
        </toggle-button>
      </div>
      <div class="form-box" v-show="switch_val3">
        <el-form label-width="160px">
          <el-form-item label="版本信息文字：">
            <el-input class="_350px"></el-input>
          </el-form-item>
          <el-form-item label="文字对应跳转链接：">
            <el-input class="_350px"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="success" size="mini">保存</el-button>
            <a href="javascript:;" @click="handleReset('copy')">恢复默认</a>
            <!-- <el-button type="warning" size="mini">恢复默认</el-button> -->
          </el-form-item>
        </el-form>
      </div>
    </div>
    <el-dialog :visible.sync="dialogVisible"
      width="500px">
      <div class="dialog-content">
        <i class="el-icon-warning"></i>
        <span>{{dialogContent}}</span>
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button type="success" @click="dialogVisible = false" size="small">确&nbsp;定</el-button>
        <el-button @click="dialogVisible = false" size="small">取&nbsp;消</el-button>
      </span>
    </el-dialog>
  </div>
</template>
<script>
export default {
  data () {
    return {
      dialogContent: '',
      dialogVisible: false,
      switch_val1: true,
      switch_val2: true,
      switch_val3: true
    }
  },
  methods: {
    handleReset (type) {
      if (type === 'text') {
        this.dialogContent = '确定要将底部文字链接恢复默认吗？'
      } else if (type === 'copy') {
        this.dialogContent = '确定要将底部底部版权信息恢复默认吗？'
      }
      this.dialogVisible = true
    },
    handleSwitchChange1 (val) {
      this.$message.success(val ? '首页浮动导航已开启' : '首页浮动导航已关闭')
    },
    handleSwitchChange2 (val) {
      this.$message.success(val ? '底部文字链接已开启' : '底部文字链接已关闭')
    },
    handleSwitchChange3 (val) {
      this.$message.success(val ? '底部版权信息已开启' : '底部版权信息已关闭')
    }
  }
}
</script>
<style lang="scss" scoped>
._350px{width: 350px}
.dialog-content{
  text-align: center;
  padding: 10px 0;
  i{
    font-size: 30px;
    color: #1260B3;
    position: relative;
    top: 5px;
  }
}
</style>
