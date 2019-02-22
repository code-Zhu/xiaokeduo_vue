<template>
  <div>
    <p class="page-title">添加满减活动</p>
    <div style="margin-left: 100px">
      <b>活动信息：</b>
      <el-form size="small" label-width="160px">
        <el-form-item label="活动名称：" required>
          <el-input style="width: 200px"></el-input>
        </el-form-item>
        <el-form-item label="有效期限：" required>
          <el-date-picker v-model="form.time"
            type="datetimerange" range-separator="至" value-format="yyyy-MM-dd HH:mm:ss"
            start-placeholder="开始日期" end-placeholder="结束日期">
          </el-date-picker>
        </el-form-item>
      </el-form>
    </div>
    <div style="margin-left: 100px">
      <b>规则设置：</b>
      <el-form size="small" label-width="160px">
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
        <el-form-item label="参与限制：">
         <el-select v-model="form.joinCondition">
           <el-option v-for="(v, index) in 6" :label="`每人参与${v}次`" :value="v" :key="index"></el-option>
           <el-option label="不限制" value="all"></el-option>
         </el-select>
        </el-form-item>
      </el-form>
    </div>
    <div class="pannel" style="margin-left: 100px">
      <b>优惠设置：</b>
      <el-form class="form-box" size="small" label-width="160px">
        <el-form-item label="优惠方式：" required>
          <p>
            <label>
              <input v-model="form.level" type="radio" value="1">
              <span>普通优惠</span>
            </label>
          </p>
          <p>
            <label>
              <input v-model="form.level" type="radio" value="2">
              <span>多级优惠</span>
            </label>
            <span class="tip">（每级优惠不累积叠加）</span>
          </p>
        </el-form-item>
        <el-form-item label="优惠条件：" required>
          <label>
            <input v-model="form.condition" type="radio" value="1">
            <span>满额</span>
          </label>
          <label>
            <input v-model="form.condition" type="radio" value="2">
            <span>满件</span>
          </label>
        </el-form-item>
      </el-form>
      <el-table :data="list">
        <el-table-column label="层级" width="55" align="center">
          <template slot-scope="scope">
            <span>{{scope.$index+1}}</span>
          </template>
        </el-table-column>
        <el-table-column label="优惠门槛">
          <template slot-scope="scope">
            <div v-if="form.condition==1">
              <span>满</span>
              <el-input v-model="scope.row.min" style="width: 100px" size="mini"></el-input>
              <span>元</span>
            </div>
            <div v-if="form.condition==2">
              <span>满</span>
              <el-input v-model="scope.row.min" style="width: 100px" size="mini"></el-input>
              <span>件</span>
            </div>
          </template>
        </el-table-column>
        <el-table-column label="优惠方式（可多选）">
          <template slot-scope="scope">
            <div>
              <label>
                <input v-model="scope.row.type" type="checkbox" value="cut">
                <span>减</span>
                <el-input style="width: 100px" size="mini"></el-input>
                <span>元</span>
              </label>
            </div>
            <div>
              <label>
                <input v-model="scope.row.type" type="checkbox" value="free">
                <span>包邮</span>
              </label>
            </div>
            <div>
              <label>
                <input v-model="scope.row.type" type="checkbox" value="send1">
                <span>送</span>
                <el-input style="width: 100px" size="mini"></el-input>
                <span>积分</span>
              </label>
            </div>
            <div>
              <label>
                <input v-model="scope.row.type" type="checkbox" value="send2">
                <span>送优惠卷</span>
                <el-select v-model="scope.row.coupon" style="width: 150px" size="mini">
                  <el-option label="满50减100" value="1"></el-option>
                </el-select>
                <router-link to="/promotion/coupons_list/add">新建</router-link>
              </label>
            </div>
          </template>
        </el-table-column>
        <el-table-column label="操作">
          <!-- <template slot-scope="scope"></template> -->
        </el-table-column>
      </el-table>
    </div>
    <div style="margin-left: 100px">
      <b>选择活动商品：</b>
      <el-form class="form-box" size="small" label-width="160px">
        <el-form-item label="活动商品：">
          <div>
            <label>
              <input v-model="form.good" value="1" type="radio">
              <span>全部商品参与</span>
              <span style="margin-left:10px">提示：新发布的商品也能适应此规则哦！</span>
            </label>
          </div>
          <div>
            <label>
              <input v-model="form.good" value="2" type="radio">
              <span>部分商品参与</span>
              <span style="margin-left:10px">已选商品（<i style="color: #ff0000">0</i>）件</span>
            </label>
          </div>
        </el-form-item>
      </el-form>
    </div>
    <div class="submit-box-fixed">
      <el-button type="primary" size="small" v-if="form.good == 1">保存</el-button>
      <el-button type="primary" size="small" v-if="form.good == 2" @click="$router.push('/promotion/activity_list/add/good')">下一步，选择宝贝</el-button>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      list: [
        {
          min: '',
          type: [
            // {
            //   name: 'cut',
            //   value: ''
            // },
            // {
            //   name: 'free',
            //   value: ''
            // },
            // {
            //   name: 'send1',
            //   value: '',
            // },
            // {
            //   name: 'send2',
            //   value: '',
            // }
          ],
          coupon: ''
        }
      ],
      form: {
        time: [],
        level: 1,
        joinCondition: 1,
        condition: 1,
        good: 1
      }
    }
  }
}
</script>
