<template>
  <div>
    <p class="page-title">物流地址管理</p>
    <div class="pannel">
      <el-button size="small" type="success">新增地址</el-button>
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
  </div>
</template>
<script>
export default {
  data () {
    return {
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

<style lang="scss" scoped>
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
</style>
