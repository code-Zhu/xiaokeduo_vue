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
const VeLine = () => import('v-charts/lib/line.common')

Vue.config.productionTip = false
Vue.use(ElementUI)
Vue.component(VeLine.name, VeLine)
Vue.use(AreaSelect)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
