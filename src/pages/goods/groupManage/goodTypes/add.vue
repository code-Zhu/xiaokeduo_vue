<template>
  <div>
    <div class="page-title">
      <p>添加新的商品类型</p>
      <span>商品类型是一系属性的组合，可以用来向顾客展示某些商品具有的特有的属性，一个商品类型下可添加多种属性.一种是供客户查看的扩展属性,如图书类型商品的作者，出版社等，一种是供客户可选的规格,如服装类型商品的颜色、尺码。</span>
    </div>
    <div class="pannel">
      <el-tabs v-model="tabName" type="card">
        <el-tab-pane label="第一步：添加类型名称" name="first" disabled>
          <el-form size="small" class="form-box" label-width="180px" style="width: 560px">
            <el-form-item label="商品类型名称：" required>
              <el-input v-model="step1Value.typeName"></el-input>
              <p class="tip">类型名称不能为空，在30个字符以内</p>
            </el-form-item>
            <el-form-item label="关联品牌：">
              <label>
                <input type="checkbox">
                <span>LINK</span>
              </label>
            </el-form-item>
            <el-form-item label="备注：">
              <el-input v-model="step1Value.remark" type="textarea" :rows="4"></el-input>
              <p class="tip">备注的长度限制在0-100字符之间</p>
            </el-form-item>
            <el-form-item label="">
              <el-button type="primary" @click="tabName = 'second'" :disabled="!step1Value.typeName">下一步</el-button>
            </el-form-item>
          </el-form>
        </el-tab-pane>
        <el-tab-pane label="第二步：添加扩展属性" name="second" disabled>
          <div class="pannel">
            <el-table :data="step2Value" size="small" border>
              <el-table-column label="属性名称" align="center" width="150">
                <template slot-scope="scope">
                  <div>
                    <el-input v-model="scope.row.name" size="small"></el-input>
                  </div>
                </template>
              </el-table-column>
              <el-table-column label="支持多选" align="center" width="80">
                <template slot-scope="scope">
                  <i class="el-icon-check" v-if="scope.row.multiple"></i>
                  <i class="el-icon-close" v-else style="color: #ff0000"></i>
                </template>
              </el-table-column>
              <el-table-column label="属性值" align="center">
                <template slot-scope="scope">
                  <el-tag v-for="(v, index) in scope.row.valueList" :key="index"
                    size="small" closable @close="handleClose('step2', scope.$index, index)" style="margin-left:2px">{{v}}</el-tag>
                </template>
              </el-table-column>
              <el-table-column label="排序" align="center" width="80">
                <template slot-scope="scope">
                  <div class="order">
                    <i class="el-icon-caret-bottom"></i>
                    <i class="el-icon-caret-top"></i>
                  </div>
                </template>
              </el-table-column>
              <el-table-column label="操作" align="center" width="150">
                <template slot-scope="scope">
                  <a href="javascript:;" @click="dialogVisible2=true;currentIndex=scope.$index">添加属性值</a>
                  <!-- <a href="javascript:;">编辑</a> -->
                  <a href="javascript:;" @click="step2Value.splice(scope.$index, 1)">删除</a>
                </template>
              </el-table-column>
            </el-table>
          </div>
          <div class="pannel">
            <el-button type="success" size="small" @click="dialogVisible1=true">添加扩展属性</el-button>
          </div>
          <div class="pannel">
            <el-button type="primary" size="small" @click="tabName = 'third'" style="margin-left:350px">下一步</el-button>
          </div>
        </el-tab-pane>
        <el-tab-pane label="第三步：添加规格" name="third" disabled>
          <div class="pannel">
            <el-table :data="step3Value" size="small" border>
              <el-table-column label="规格名称" align="center" width="150">
                <template slot-scope="scope">
                  <div>
                    <el-input v-model="scope.row.name" size="small"></el-input>
                  </div>
                </template>
              </el-table-column>
              <el-table-column label="规格值" align="center">
                <template slot-scope="scope">
                  <el-tag v-for="(v, index) in scope.row.valueList" :key="index"
                    size="small" closable @close="handleClose('step3', scope.$index, index)" style="margin-left:2px">{{v}}</el-tag>
                </template>
              </el-table-column>
              <el-table-column label="排序" align="center" width="80">
                <template slot-scope="scope">
                  <div class="order">
                    <i class="el-icon-caret-bottom"></i>
                    <i class="el-icon-caret-top"></i>
                  </div>
                </template>
              </el-table-column>
              <el-table-column label="操作" align="center" width="150">
                <template slot-scope="scope">
                  <a href="javascript:;" @click="dialogVisible4=true;currentIndex=scope.$index">添加规格值</a>
                  <!-- <a href="javascript:;">编辑</a> -->
                  <a href="javascript:;" @click="step3Value.splice(scope.$index, 1)">删除</a>
                </template>
              </el-table-column>
            </el-table>
          </div>
          <div class="pannel">
            <el-button type="success" size="small" @click="dialogVisible3=true">添加新规格</el-button>
          </div>
          <div class="pannel">
            <el-button type="primary" size="small" style="margin-left:350px">完成</el-button>
          </div>
        </el-tab-pane>
      </el-tabs>
    </div>
    <el-dialog title="添加扩展属性" :visible.sync="dialogVisible1"
      width="520px">
      <el-form class="form-box" label-width="110px" size="small">
        <el-form-item label="属性值名：" required>
          <el-input v-model="step2.name"></el-input>
        </el-form-item>
        <el-form-item label="是否支持多选：">
          <label>
            <input v-model="step2.multiple" type="checkbox">
            <span>支持多选</span>
            <p class="tip">(有些属性是可以选择多个属性值的，如“适合人群”，就可能既适合老年人也适合中年人)</p>
          </label>
        </el-form-item>
        <el-form-item label="属性值：" required>
          <el-input v-model="step2.valueList"></el-input>
          <p class="tip">扩展属性的值，每个值的字符数最多50个字符, 多个属性值‘,’隔开</p>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible1 = false" size="small">关&nbsp;闭</el-button>
        <el-button type="primary" @click="handleStepValueAdd('step2', 'dialogVisible1')" size="small">添加扩展属性</el-button>
      </span>
    </el-dialog>
    <el-dialog title="添加属性值" :visible.sync="dialogVisible2"
      width="520px">
      <el-form label-width="95px" size="small">
        <el-form-item label="属性值名：" required>
          <el-input v-model="propName"></el-input>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible2 = false" size="small">关&nbsp;闭</el-button>
        <el-button type="success" @click="handPropAdd('step2', 'dialogVisible2')" size="small">添加属性值</el-button>
      </span>
    </el-dialog>
    <el-dialog title="添加新的规格" :visible.sync="dialogVisible3"
      width="520px">
      <el-form class="form-box" label-width="95px" size="small">
        <el-form-item label="规格名称：" required>
          <el-input v-model="step3.name"></el-input>
          <p class="tip">规格名称长度在1至30个字符之间</p>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible3 = false" size="small">关&nbsp;闭</el-button>
        <el-button type="success" @click="handleStepValueAdd('step3', 'dialogVisible3')" size="small">添加新规格</el-button>
      </span>
    </el-dialog>
    <el-dialog title="添加规格值" :visible.sync="dialogVisible4"
      width="520px">
      <el-form class="form-box" label-width="95px" size="small">
        <el-form-item label="规格值名：" required>
          <el-input v-model="propName"></el-input>
          <p class="tip">每个值的字符数最多50个字符</p>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible4 = false" size="small">关&nbsp;闭</el-button>
        <el-button type="success" @click="handPropAdd('step3', 'dialogVisible4')" size="small">确定</el-button>
      </span>
    </el-dialog>
  </div>
</template>
<script>
export default {
  data () {
    return {
      dialogVisible1: false,
      dialogVisible2: false,
      dialogVisible3: false,
      dialogVisible4: false,
      tabName: 'first',
      step1Value: {
        typeName: '',
        remark: ''
      },
      step2Value: [],
      step2: {
        name: '',
        multiple: false,
        valueList: ''
      },
      propName: '',
      currentIndex: -1,
      step3Value: [],
      step3: {
        name: '',
        valueList: ''
      }
    }
  },
  methods: {
    handPropAdd (step, dialog) {
      this[step + 'Value'][this.currentIndex].valueList.push(this.propName)
      this[dialog] = false
    },
    handleStepValueAdd (step, dialog) {
      this[dialog] = false
      if (step === 'step3') {
        this[step + 'Value'].unshift({
          name: this[step].name,
          valueList: []
        })
      } else {
        this[step + 'Value'].unshift({
          name: this[step].name,
          multiple: this[step].multiple,
          valueList: this[step].valueList.split(',')
        })
      }
    },
    handleClose (step, list, ind) {
      this[step + 'Value'][list].valueList.splice(ind, 1)
    }
  }
}
</script>
<style lang="scss" scoped>
.order{
  i{
    font-size: 16px;
    color: #009A0B;
    cursor: pointer;
    &:last-child{
      color: #DF2626;
    }
  }
}
</style>
