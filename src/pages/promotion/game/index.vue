<template>
  <div>
    <p class="page-title">{{gameType[type].title}}</p>
    <div class="pannel">
      <el-button type="primary" size="small" @click="$router.push(`/promotion/game/${type}/add`)">新建{{gameType[type].title}}</el-button>
    </div>
    <div class="pannel">
      <tab :asideName="gameType[type].name"/>
    </div>
  </div>
</template>
<script>
import tab from './components/Tab'
export default {
  components: {tab},
  data () {
    return {
      gameType: {
        lucky: {
          title: '幸运大转盘',
          name: 'lucky'
        },
        egg: {
          title: '疯狂砸金蛋',
          name: 'egg'
        },
        flip: {
          title: '好运翻翻看',
          name: 'flip'
        },
        dfw: {
          title: '大富翁',
          name: 'dfw'
        },
        ggl: {
          title: '刮刮乐',
          name: 'ggl'
        }
      }
    }
  },
  computed: {
    type () {
      return this.$route.params.gameType || 'lucky'
    }
  }
}
</script>
