<template>
  <div class="logistics-addr">
    <p class="page-title">物流地址管理</p>
    <div class="pannel">
      <el-button size="small" type="success" @click="dialogVisible = true">新增地址</el-button>
    </div>
    <ul class="pannel addr-list">
      <li v-for="(v, index) in addr_list" :key="index">
        <p class="user">
          <i class="iconfont icon-user1"></i><span>{{v.name}}</span>
        </p>
        <div class="addr">
          <i class="iconfont icon-location"></i><span>{{v.p}}</span>
          <span>{{v.c}}</span>
          <span>{{v.a}}</span>
          <p>{{v.addr}}</p>
        </div>
        <p class="phone">
          <i class="iconfont icon-phone"></i><span>{{v.phone}}</span>
          <span style="right: 55px" class="mini-btn" type="light">修改</span>
          <span class="mini-btn" type="danger">删除</span>
        </p>
        <span class="addr-type" v-if="v.addr_type == 1">默认退货地址</span>
        <span class="addr-type" v-if="v.addr_type == 2">默认发货地址</span>
      </li>
    </ul>
    <div class="pannel table-footer" style="text-align:center">
      <el-pagination
        :page-size="10"
        layout="sizes, total, prev, next, jumper"
        :total="1000">
      </el-pagination>
    </div>
    <el-dialog title="新增地址" :visible.sync="dialogVisible"
      width="560px">
      <el-form label-width="100px" size="small">
        <el-form-item label="地址类型：" required>
          <label>
            <input type="checkbox">
            <span>默认发货地址</span>
          </label>
          <label>
            <input type="checkbox">
            <span>默认退货地址</span>
          </label>
        </el-form-item>
        <el-form-item label="发货人：" required>
          <el-input class="_300px"></el-input>
        </el-form-item>
        <el-form-item label="发货地址：" required>
          <area-select :level="2" type="text" v-model="area" :data="pcaa" size="small"
            :placeholders="['-请选择省-', '-请选择市-', '-请选择区-']"></area-select>
        </el-form-item>
        <el-form-item label="详细地址：" required>
          <el-input class="_300px"></el-input>
        </el-form-item>
        <el-form-item label="联系电话：" required>
          <el-input class="_300px"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="success" @click="dialogVisible = false" size="small">保&nbsp;存</el-button>
        </el-form-item>
      </el-form>
    </el-dialog>
  </div>
</template>
<script>
import pcaa from 'area-data/pcaa'
export default {
  data () {
    return {
      pcaa,
      area: [],
      dialogVisible: false,
      addr_list: [
        {
          name: 'testUser',
          p: '浙江省',
          c: '杭州市',
          a: '上城区',
          addr: 'XXXX街道XXX路',
          phone: '13712341234',
          addr_type: 1
        },
        {
          name: 'testUser',
          p: '浙江省',
          c: '宁波市',
          a: '江东区',
          addr: 'XXXX街道XXX路',
          phone: '13712341234',
          addr_type: 2
        },
        {
          name: 'testUser',
          p: '浙江省',
          c: '宁波市',
          a: '江东区',
          addr: 'XXXX街道XXX路',
          phone: '13712341234',
          addr_type: 0
        }
      ]
    }
  }
}
</script>

<style lang="scss">
.logistics-addr{
  ._300px{width: 300px}
  .addr-list{
    display: flex;
    li{
      width: 300px;
      height: 160px;
      margin-right: 10px;
      border: 1px solid #aaa;
      box-sizing: border-box;
      position: relative;
      display: flex;
      flex-direction: column;
      .user, .addr, .phone{
        padding: 0 15px;
        i{
          color: #aaa;
        }
      }
      .user{
        line-height: 40px;
        border-bottom: 1px solid #ddd;
      }
      .addr{
        flex: 1;
        padding-top: 10px;
        line-height: 20px;
        span{
          margin-right: 10px;
        }
        p{
          padding-left: 25px;
        }
      }
      .phone{
        line-height: 36px;
        border-top: 1px solid #ddd;
        position: relative;
        .mini-btn{
          transition: all .3s ease;
          position: absolute;
          top: 2px;
          right: 15px;
          height: 0;
        }
      }
      .addr-type{
        position: absolute;
        top: 0;
        right: 10px;
        font-size: 12px;
        color: #fff;
        background-color: #C13FF5;
        line-height: 20px;
        padding: 1px 10px;
        border-bottom-left-radius: 9px;
        border-bottom-right-radius: 9px;
        cursor: pointer;
      }
      &:hover{
        border-color: #C13FF5;
        .phone{
          .mini-btn{
            height: 24px;
            top: 6px;
          }
        }
      }
    }
  }
}
</style>
