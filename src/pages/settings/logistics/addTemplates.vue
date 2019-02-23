<template>
  <div style="margin-bottom:100px">
    <p class="page-title">新建运费模板</p>
    <el-form size="small" label-width="150px">
      <el-form-item label="模板名称：">
        <el-input style="width: 230px" placeholder="模板名称不能重复"></el-input>
      </el-form-item>
      <el-form-item label="计价方式：">
        <label>
          <input v-model="form.unit" value="1" type="radio">
          <span>按件数</span>
        </label>
        <label>
          <input v-model="form.unit" value="2" type="radio">
          <span>按重量</span>
        </label>
        <label>
          <input v-model="form.unit" value="3" type="radio">
          <span>按体积</span>
        </label>
      </el-form-item>
      <el-form-item label="是否包邮：">
        <label>
          <input v-model="form.free" type="radio" value="1">
          <span>自定义运费</span>
        </label>
        <label>
          <input v-model="form.free" type="radio" value="2">
          <span>卖家承担运费</span>
        </label>
      </el-form-item>
      <el-form-item label="运送方式：" v-if="form.free==1">
        <span>除指定地区外，其余地区的运费采用“默认运费”</span>
        <div>
          <label>
            <input v-model="form.types" value="1" type="checkbox">
            <span>快递</span>
          </label>
          <type-template v-if="form.types.includes('1')" :unit="form.unit"/>
        </div>
        <div>
          <label>
            <input v-model="form.types" value="2" type="checkbox">
            <span>EMS</span>
          </label>
          <type-template v-if="form.types.includes('2')" :unit="form.unit"/>
        </div>
        <div>
          <label>
            <input v-model="form.types" value="3" type="checkbox">
            <span>顺丰</span>
          </label>
          <type-template v-if="form.types.includes('3')" :unit="form.unit"/>
        </div>
        <div>
          <label>
            <input v-model="form.types" value="4" type="checkbox">
            <span>平邮</span>
          </label>
          <type-template v-if="form.types.includes('4')" :unit="form.unit"/>
        </div>
        <div class="type-last">
          <label>
            <input v-model="form.types" value="5" type="checkbox" :disabled="form.types.length==0">
            <span @click="handleFreeListInit">是否指定包邮（选填）</span>
          </label>
          <el-table :data="freeList" v-if="form.types.includes('5')" border size="mini">
            <el-table-column label="选择地区">
              <template slot-scope="scope">
                <div class="table-area">
                  <span>{{scope.row.area.join(',') || '未添加地区'}}</span>
                  <a href="javascript:;" @click="currentIndex = scope.$index">编辑</a>
                </div>
                <div class="area-dialog" v-if="currentIndex == scope.$index">
                  <div class="top">
                    <span>选择区域</span>
                    <b class="el-icon-close" @click="currentIndex=-1;scope.row.area=[]"></b>
                  </div>
                  <div class="pro-list">
                    <div class="item" v-for="(v, index) in PCA['86']" :key="index">
                      <input v-model="scope.row.area" type="checkbox" :value="v">
                      <span @click="currentPro=index">{{cityName(v)}}</span>
                      <div class="city-list" v-if="index == currentPro">
                        <i class="el-icon-close" @click="currentPro=''"></i>
                        <p v-for="(item, ind) in PCAA[`${index}`]" :key="ind">
                          <label>
                            <input v-model="scope.row.area" :value="item" type="checkbox">
                            <span>{{item}}</span>
                          </label>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div style="text-align:center">
                    <el-button type="success" size="small" @click="currentIndex=-1">确定</el-button>
                  </div>
                </div>
              </template>
            </el-table-column>
            <el-table-column label="选择运送方式" width="100">
              <template slot-scope="scope">
                <select v-model="scope.row.type">
                  <option value="1" v-if="form.types.includes('1')">快递</option>
                  <option value="2" v-if="form.types.includes('2')">EMS</option>
                  <option value="3" v-if="form.types.includes('3')">顺丰</option>
                  <option value="4" v-if="form.types.includes('4')">平邮</option>
                </select>
              </template>
            </el-table-column>
            <el-table-column label="设置包邮条件" width="400">
              <template slot-scope="scope">
                <div>
                  <select v-model="scope.row.condition">
                    <option value="1">件数</option>
                    <option value="2">金额</option>
                    <option value="3">件数+金额</option>
                  </select>
                  <label v-if="scope.row.condition!=='2'">
                    <span>满</span>
                    <input type="text" style="width:60px">
                    <span>件包邮</span>
                  </label>
                  <label v-if="scope.row.condition!=='1'">
                    <span>满</span>
                    <input type="text" style="width:60px">
                    <span>元包邮</span>
                  </label>
                </div>
              </template>
            </el-table-column>
            <el-table-column label="操作" width="100">
              <template slot-scope="scope">
                <i class="iconfont icon-add" @click="handleAdd"></i>
                <b class="iconfont icon-cuo" @click="handleDelete(scope.$index)"></b>
              </template>
            </el-table-column>
          </el-table>
        </div>
      </el-form-item>
    </el-form>
    <div class="submit-box-fixed">
      <el-button type="primary" size="small">保存模板信息</el-button>
    </div>
  </div>
</template>
<script>
import typeTemplate from './components/TypeTemplate'
import { pca, pcaa } from 'area-data'
export default {
  components: {typeTemplate},
  data () {
    return {
      currentIndex: -1,
      currentPro: '',
      PCA: pca,
      PCAA: pcaa,
      form: {
        unit: 1,
        free: 1,
        types: []
      },
      freeList: [
        {
          area: [],
          type: '1',
          condition: '1',
          conditionValue: ''
        }
      ]
    }
  },
  methods: {
    cityName (v) {
      if (v === '内蒙古自治区') {
        return '内蒙古'
      }
      if (v === '广西壮族自治区') {
        return '广西'
      }
      if (v === '宁夏回族自治区') {
        return '宁夏'
      }
      if (v === '新疆维吾尔自治区') {
        return '新疆'
      }
      if (v === '香港特别行政区') {
        return '香港'
      }
      if (v === '西藏自治区') {
        return '西藏'
      }
      if (v === '澳门特别行政区') {
        return '澳门'
      }
      return v
    },
    handleFreeListInit () {
      this.freeList = [
        {
          area: [],
          type: '1',
          condition: '1',
          conditionValue: ''
        }
      ]
    },
    handleAdd () {
      this.freeList.push({
        area: [],
        type: '1',
        condition: '1',
        conditionValue: ''
      })
    },
    handleDelete (index) {
      this.freeList.splice(index, 1)
    }
  }
}
</script>

<style lang="scss">
.type-last{
  border-top: 1px solid #ccc;
  padding-top: 5px;
  margin-top: 5px;
}
.table-area{
  display: flex;
  justify-content: space-between;
  span{
    width: 150px;
  }
}
.area-dialog{
  position: fixed;
  padding-bottom: 10px;
  z-index: 10;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 610px;
  background-color: #fff;
  border: 1px solid #CDCDCD;
  .top{
    background-color: #EFEFEF;
    line-height: 36px;
    font-size: 16px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 10px;
  }
  .pro-list{
    padding: 0 10px;
    margin-bottom: 10px;
    display: flex;
    flex-wrap: wrap;
    .item{
      width: 116px;
      position: relative;
      font-size: 14px!important;
      line-height: 32px;
      .city-list{
        position: absolute;
        background-color: #EFEFEF;
        border: 1px solid #ddd;
        width: 290px;
        display: flex;
        flex-wrap: wrap;
        z-index: 10;
        font-size: 12px;
        i{
          position: absolute;
          top: 0;
          right: 0;
          background-color: #000;
          color: #fff;
        }
      }
    }
  }
}
</style>
