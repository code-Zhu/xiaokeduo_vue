   <template>
  <div>
    <div class="type-template-box">
      <div>
        <span>默认运费：</span>
        <el-input type="text" size="small" style="width: 100px"></el-input>
        <span>{{unitType[unit]}}内，</span>
        <el-input type="text" size="small" style="width: 100px"></el-input>
        <span>元；每增加</span>
        <el-input type="text" size="small" style="width: 100px"></el-input>
        <span>{{unitType[unit]}}增加运费</span>
        <el-input type="text" size="small" style="width: 100px"></el-input>
        <span>元</span>
        <el-table :data="list" size="mini" border style="margin-top:5px" v-if="list.length>0"
          @selection-change="handleSelectChange">
          <el-table-column v-if="isHandleGroup" type="selection" width="50"></el-table-column>
          <el-table-column label="运送到" width="200">
            <template slot-scope="scope">
              <div class="table-area">
                <span>{{scope.row.area.join(',') || '未添加地区'}}</span>
                <a href="javascript:;" @click="currentIndex=scope.$index">编辑</a>
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
          <el-table-column :label="`首${unitType[unit]}（${unitType[unit]}）`" align="center">
            <template slot-scope="scope">
              <el-input size="mini" v-model="scope.row.firstOne"></el-input>
            </template>
          </el-table-column>
          <el-table-column label="首费（元）" align="center">
            <template slot-scope="scope">
              <el-input size="mini" v-model="scope.row.firstCost"></el-input>
            </template>
          </el-table-column>
          <el-table-column :label="`续${unitType[unit]}（${unitType[unit]}）`" align="center">
            <template slot-scope="scope">
              <el-input size="mini" v-model="scope.row.nextOne"></el-input>
            </template>
          </el-table-column>
          <el-table-column label="续费（元）" align="center">
            <template slot-scope="scope">
              <el-input size="mini" v-model="scope.row.nextCost"></el-input>
            </template>
          </el-table-column>
          <el-table-column label="操作" align="center">
            <template slot-scope="scope">
              <a href="javascript:;" @click="handleDelete(scope.$index)">删除</a>
            </template>
          </el-table-column>
        </el-table>
        <div v-if="isHandleGroup">
          <el-popover  v-model="popover" placement="bottom-start"
            width="650" trigger="click">
            <div>
              <span>首件：</span>
              <el-input v-model="group.firstOne" size="small" style="width:100px"></el-input>
              <span>，件内</span>
              <el-input v-model="group.firstCost" size="small" style="width:100px"></el-input>
              <span>元 续件</span>
              <el-input v-model="group.nextOne" size="small" style="width:100px"></el-input>
              <span>件 续费</span>
              <el-input v-model="group.nextCost" size="small" style="width:100px"></el-input>
              <span>元</span>
            </div>
            <div style="text-align:center;margin-top:10px">
              <el-button type="success" size="small" @click="handleGroupSet">保存</el-button>
              <el-button type="success" size="small" @click="popover=false">取消</el-button>
            </div>
            <a slot="reference" href="javascript:;">批量设置</a>
          </el-popover>
          <!-- <a href="javascript:;" @click="handleGroupDelete">批量删除</a> -->
        </div>
        <div>
          <a href="javascript:;" @click="handleAdd">为指定地区城市设置运费</a>
          <a href="javascript:;" @click="isHandleGroup=!isHandleGroup">{{isHandleGroup?'取消批量':'批量操作'}}</a>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { pca, pcaa } from 'area-data'
export default {
  props: ['unit'],
  data () {
    return {
      currentIndex: -1,
      currentPro: '',
      PCA: pca,
      PCAA: pcaa,
      unitType: ['', '件', 'kg', 'm³'],
      list: [],
      isHandleGroup: false,
      popover: false,
      group: {
        firstOne: '',
        firstCost: '',
        nextCost: '',
        nextOne: ''
      },
      groupSelect: []
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
    handleAdd () {
      this.list.push({
        area: [],
        firstOne: '',
        firstCost: '',
        nextCost: '',
        nextOne: ''
      })
    },
    handleDelete (ind) {
      this.list.splice(ind, 1)
    },
    handleGroupSet () {
      this.groupSelect.forEach(item => {
        item.firstOne = this.group.firstOne
        item.nextOne = this.group.nextOne
        item.firstCost = this.group.firstCost
        item.nextCost = this.group.nextCost
      })
      this.popover = false
    },
    handleSelectChange (v) {
      this.groupSelect = v
    }
    // handleGroupDelete () { // 批量删除暂未找到好的解决办法
    //   this.groupSelect = []
    //   console.log(this.groupSelect)
    // }
  }
}
</script>
<style lang="scss" scoped>
.type-template-box{
  width: 710px;
  border: 1px solid #ccc;
  padding: 5px 10px;
}
// .area-dialog{
//   position: fixed;
//   padding-bottom: 10px;
//   z-index: 10;
//   left: 50%;
//   top: 50%;
//   transform: translate(-50%, -50%);
//   width: 610px;
//   background-color: #fff;
//   border: 1px solid #CDCDCD;
//   .top{
//     background-color: #EFEFEF;
//     line-height: 36px;
//     font-size: 16px;
//     display: flex;
//     justify-content: space-between;
//     align-items: center;
//     padding: 0 10px;
//   }
//   .pro-list{
//     padding: 0 10px;
//     margin-bottom: 10px;
//     display: flex;
//     flex-wrap: wrap;
//     .item{
//       width: 116px;
//       position: relative;
//       font-size: 14px!important;
//       line-height: 32px;
//       .city-list{
//         position: absolute;
//         background-color: #EFEFEF;
//         border: 1px solid #ddd;
//         width: 290px;
//         display: flex;
//         flex-wrap: wrap;
//         z-index: 10;
//         font-size: 12px;
//         i{
//           position: absolute;
//           top: 0;
//           right: 0;
//           background-color: #000;
//           color: #fff;
//         }
//       }
//     }
//   }
// }
</style>
