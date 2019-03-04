<template>
  <div>
    <p class="page-title">运费模板</p>
    <div class="pannel">
      <label>
        <input type="checkbox">
        <span>全选</span>
      </label>
      <el-button size="small" type="danger">批量删除</el-button>
      <el-button size="small" type="success" @click="$router.push('/settings/shipping_templates/add')">新建运费模板</el-button>
    </div>
    <ul class="temp-list">
      <li v-for="(v, index) in list" :key="index">
        <div class="top">
          <label>
            <input type="checkbox">
            <b>{{v.name}}</b>
          </label>
          <div>
            <span class="mini-btn" type="light">修改</span>
            <span class="mini-btn" type="danger">删除</span>
          </div>
        </div>
        <div class="list-table">
          <div class="list-table-header">
            <b>运送方式</b>
            <b>可运送至</b>
            <b>首（{{unitType[v.unitType]}}）</b>
            <b>运费</b>
            <b>每增加（{{unitType[v.unitType]}}）</b>
            <b>增加运费</b>
          </div>
          <div class="list-table-item" v-for="(item,ind) in v.list" :key="ind">
            <span>{{item.type}}</span>
            <span>{{item.area}}</span>
            <span>{{item.firstOne}}</span>
            <span>{{item.firstCost}}元</span>
            <span>{{item.nextOne}}</span>
            <span>{{item.nextCost}}元</span>
          </div>
        </div>
      </li>
    </ul>
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
export default {
  data () {
    return {
      unitType: ['', '件', 'kg', 'm³'],
      list: [
        {
          name: '测试模板',
          unitType: '1',
          list: [
            {
              type: '快递',
              area: '全国',
              firstOne: '1',
              nextOne: '1',
              firstCost: '1',
              nextCost: '1'
            }
          ]
        },
        {
          name: '测试模板',
          unitType: '2',
          list: [
            {
              type: '快递',
              area: '全国',
              firstOne: '1',
              nextOne: '1',
              firstCost: '1',
              nextCost: '1'
            }
          ]
        },
        {
          name: '测试模板',
          unitType: '3',
          list: [
            {
              type: '快递',
              area: '全国',
              firstOne: '1',
              nextOne: '1',
              firstCost: '1',
              nextCost: '1'
            }
          ]
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.temp-list{
  li{
    border: 1px solid #ddd;
    line-height: 38px;
    margin-top: 10px;
    .top{
      padding: 0 10px;
      display: flex;
      justify-content: space-between;
      border-bottom: 1px solid #ddd;
    }
    .list-table{
      .list-table-header, .list-table-item{
        display: flex;
        text-align: center;
        :not(:nth-child(2)){
          width: 100px
        }
        :nth-child(2){
          flex: 1;
        }
        :not(:last-child){
          border-right: 1px solid #ddd;
        }
      }
      .list-table-item{
        border-top: 1px solid #ddd;
        :nth-child(2){
          text-align: left;
          padding-left: 10px;
        }
      }
    }
  }
}
</style>
