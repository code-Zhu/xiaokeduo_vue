// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import './assets/css/reset.css'
import './assets/css/ele.css'
import 'vue-area-linkage/dist/index.css'
import AreaSelect from 'vue-area-linkage'
import VeLine from 'v-charts/lib/line.common'
import VePie from 'v-charts/lib/pie.common'
import VeBar from 'v-charts/lib/bar.common'
import 'animate.css'

Vue.config.productionTip = false
Vue.use(ElementUI)
Vue.component(VeLine.name, VeLine)
Vue.component(VePie.name, VePie)
Vue.component(VeBar.name, VeBar)
Vue.use(AreaSelect)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
