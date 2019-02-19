<template>
  <div>
    <div class="pannel-content" style="margin-top:0">
      <el-form inline size="mini">
        <el-form-item label="活动名称：">
          <el-input v-model="query.actName"></el-input>
        </el-form-item>
        <el-form-item label="收货人：">
          <el-input v-model="query.reciver"></el-input>
        </el-form-item>
        <el-form-item label="开奖时间：">
          <el-date-picker v-model="query.time"
            type="daterange" range-separator="至"
            start-placeholder="开始日期" end-placeholder="结束日期">
          </el-date-picker>
        </el-form-item>
        <el-form-item label="奖品名称：">
          <el-input v-model="query.prizeName"></el-input>
        </el-form-item>
        <el-form-item label="收货人区域：">
          <area-select :level="2" type="text" v-model="query.area" :data="pcaa" size="small"
            :placeholders="['-请选择省-', '-请选择市-', '-请选择区-']">
          </area-select>
        </el-form-item>
        <el-form-item>
          <span class="mini-btn" type="primary">查询</span>
          <span class="mini-btn" type="primary">导出Excel</span>
        </el-form-item>
      </el-form>
    </div>
    <div class="pannel">
      <div class="table-header" v-if="tabName !== 'first' && tabName !== 'second'">
        <label>
          <input type="checkbox">
          <span>全选</span>
        </label>
        <span class="mini-btn" type="danger">批量删除</span>
        <span class="mini-btn" type="primary" v-if="tabName!=='five'">打印快递单</span>
        <span class="mini-btn" type="primary" v-if="tabName!=='five'">打印发货单</span>
      </div>
      <div class="diy-table">
        <div class="table-header">
          <b class="info">奖品信息</b>
          <b class="name">活动名称</b>
          <b class="reciver">收货人</b>
          <b class="grade">奖品等级</b>
          <b class="ctr">操作</b>
        </div>
        <ul class="table-body">
          <li class="item" v-for="v in 5" :key="v">
            <p class="item-header">
              <input type="checkbox">
              <b>中奖编号：2016-05-03-111</b>
              <b>2016-05-03 17:48:06</b>
              <b style="color:#ED4E1A;margin-left: 230px;">待填写收货地址</b>
            </p>
            <div class="item-body">
              <div class="info">
                <img src="as" style="width:60px;height:60px">
                <a href="javascript:;">iphone</a>
              </div>
              <div class="name">
                <p>大转盘活动开始咯</p>
                <p style="color: #777">[幸运大转盘]</p>
              </div>
              <div class="reciver">
                <p>温柔323人</p>
                <p>13542345443</p>
              </div>
              <span class="grade">四等奖</span>
              <div class="ctr">
                <p>
                  <span class="mini-btn" type="light">查看详情</span>
                </p>
                <p v-if="tabName!=='five'">
                  <span class="mini-btn" type="light" style="margin-top:5px">修改地址</span>
                </p>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <div class="pannel table-footer">
      <el-pagination
        :page-size="10"
        layout="sizes, total, prev, next, jumper"
        :total="1000">
      </el-pagination>
    </div>
  </div>
</template>
<script>
import pcaa from 'area-data/pcaa'
export default {
  props: ['tabName'],
  data () {
    return {
      pcaa,
      query: {
        actName: '',
        prizeName: '',
        reciver: '',
        time: '',
        area: []
      }
    }
  }
}
</script>
<style lang="scss">
.area-select{
  height: 28px;
  padding-top: 0;
}
.area-select-wrap .area-select{
  margin-left: 0!important;
  margin-right: 10px;
}
/* .area-select-wrap{
  margin-top: 5px;
} */
.area-select .area-selected-trigger{
  padding: 0 20px 7px 12px;
  line-height: 30px;
}
.diy-table{
  box-sizing: border-box;
  .table-header{
    display: flex;
    background-color: #F2F8FC;
    line-height: 36px;
    text-align: center;
    border-bottom: 1px solid #ddd;
    margin-bottom: 0;
  }
  .table-body{
    font-size: 12px;
    .item+.item{
      margin-top: 15px;
    }
    .item{
      border: 1px solid #ddd;
      .item-header{
        line-height: 38px;
        background-color: #F2F2F2;
        padding-left: 10px;
        b+b{
          margin-left: 100px;
        }
      }
      .item-body{
        display: flex;
        align-items: center;
        padding: 10px 0;
        a{
          vertical-align: top;
        }
      }
    }
  }
  .info{
    width: 300px;
  }
  .name{
    flex: 1;
    text-align: left;
  }
  .reciver{
    width: 200px;
  }
  .grade{
    width: 100px;
  }
  .ctr{
    width: 130px;
  }
  .ctr,.grade,.reciver{
    text-align: center;
  }
}
</style>
