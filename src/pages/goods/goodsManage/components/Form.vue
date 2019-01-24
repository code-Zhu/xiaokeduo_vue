<template>
  <div class="data">
    <div class="pannel-content" style="margin-top:0">
      <b>数据包信息</b>
      <p>{{type}}数据包的来源：1.系统本身导出的{{type}}数据包；2.{{type}}或商品助理导出的文件，把CSV文件和图片文件夹都命名为products然后选中两个打成zip的压缩包</p>
    </div>
    <div class="pannel form-box">
      <el-form label-width="140px">
        <el-form-item label="导入插件版本" required>
          <el-select v-model="query" size="small">
            <el-option label="-请选择-" value=""></el-option>
            <el-option label="淘宝助理5.0" value="1"></el-option>
          </el-select>
        </el-form-item>
        <p>导入之前需要先把数据包文件上传到服务器上：</p>
        <!-- <el-form-item label="导入之前需要先把数据包文件上传到服务器上："></el-form-item> -->
        <el-form-item label="导入的数据包文件">
          <input type="file">
          <el-button size="small" type="primary">上传</el-button>
          <p class="tip">请上传 *.zip 格式的数据包，上传数据包须小于40M，否则可能上传失败。</p>
        </el-form-item>
        <el-form-item label="导入的数据包文件" required>
          <el-select v-model="query" size="small">
            <el-option label="-请选择-" value=""></el-option>
            <el-option label="ceshi.zip" value="测试"></el-option>
          </el-select>
          <p class="tip">如果上面的下拉框中没有您要导入的数据包文件,请先上传。</p>
        </el-form-item>
      </el-form>
    </div>
    <div class="pannel-content">
      <b>导入选项</b>
    </div>
    <div class="pannel form-box">
      <el-form label-width="140px">
        <el-form-item label="商品分类" required>
          <el-select v-model="query" size="small">
            <el-option label="-请选择商品分类-" value=""></el-option>
            <el-option label="测试" value="1"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="商品品牌" required>
          <el-select v-model="query" size="small">
            <el-option label="-请选择商品品牌-" value=""></el-option>
            <el-option label="测试" value="1"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="商品导入状态">
          <label for="onsale">
            <input v-model="query" name="status" type="radio" id="onsale">
            <span>出售中</span>
          </label>
          <label for="onstock">
            <input v-model="query" type="radio" name="status" id="onstock">
            <span>仓库中</span>
          </label>
        </el-form-item>
        <el-form-item>
          <div style="text-align:right;width:215px">
            <el-button type="primary" size="small" style="width:100px">导入</el-button>
          </div>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>
<script>
export default {
  props: ['type'],
  data () {
    return {
      query: ''
    }
  }
}
</script>
<style lang="scss" scoped>
.form-box{
  padding-left: 30px;
  input[type=file]{
    width: 195px;
    padding: 2px 10px 5px;
    border: 1px solid #ccc;
    border-radius: 4px;
  }
}
</style>
