<template>
  <div class="step1">
    <div class="step-list">
      <ul class="list">
        <li v-for="v in categories" :key="v.id"
          @click="handleList(v, 0)" :class="{active: current_name === v.name}">
          <span>{{v.name}}</span>
          <i v-if="v.hasChildren" class="el-icon-caret-right"></i>
        </li>
      </ul>
      <ul class="list" v-show="hasChildren">
        <li v-for="v in child_list" :key="v.id"
          @click="handleList(v, 1)" :class="{active: current_name === v.name}">
          <span>{{v.name}}</span>
          <i v-if="v.hasChildren" class="el-icon-caret-right"></i>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      categories: [
        {
          name: '新鲜水果',
          hasChildren: true,
          children: [
            {
              name: '苹果',
              hasChildren: false
            },
            {
              name: '香蕉',
              hasChildren: false
            }
          ]
        },
        {
          name: '儿童服饰',
          hasChildren: true,
          children: [
            {
              name: '男童',
              hasChildren: false
            },
            {
              name: '女童',
              hasChildren: false
            }
          ]
        },
        {
          name: '投资理财',
          hasChildren: false
        },
        {
          name: '药材',
          hasChildren: false
        }
      ],
      child_list: [],
      hasChildren: false,
      current_name: '',
      step1Data: {
        str: [],
        continue: false
      }
    }
  },
  methods: {
    handleList (val, level) {
      this.current_name = val.name
      if (level === 0) {
        this.hasChildren = val.hasChildren
        this.child_list = val.children
        this.step1Data.str[0] = val.name
        // this.step1Data.str[1] = ''
        this.step1Data.str.length = 1
        this.step1Data.continue = !val.hasChildren
      } else if (level === 1) {
        this.step1Data.str[1] = val.name
        this.step1Data.continue = !val.hasChildren
      }
      this.$emit('EventGetData', this.step1Data)
    }
  }
}
</script>
<style lang="scss" scoped>
.step1{
  border: 1px solid #C2DAF2;
  background-color: #EFF8FF;
  padding: 5px;
  .step-list{
    height: 250px;
    background-color: #E5F0FF;
    border: 1px solid #B1D2FF;
    display: flex;
    overflow: scroll;
    .list{
      width: 190px;
      background-color: #fff;
      margin-right: 10px;
      padding: 10px;
      border-right: 1px solid #B1D2FF;
      &+.list{
        border-left: 1px solid #B1D2FF;
      }
      li{
        line-height: 22px;
        display: flex;
        justify-content: space-between;
        cursor: pointer;
        padding-left: 10px;
        &.active{
          border: 1px solid #98BBD1;
          background-color: #D6EDF4;
        }
        i{
          line-height: 22px;
        }
      }
    }
  }
}
</style>
