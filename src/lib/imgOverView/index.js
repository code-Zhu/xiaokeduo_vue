import ImgView from './imgView'

let $vm

export default {
  install (Vue, options) {
    if (!$vm) {
      const ImgViewPlugin = Vue.extend(ImgView)
      $vm = new ImgViewPlugin({
        el: document.createElement('div')
      })
    }
    $vm.show = false
    let imgView = {
      show (index, list) {
        $vm.show = true
        $vm.index = index
        $vm.list = list
        document.body.appendChild($vm.$el)
      },
      hide () {
        $vm.show = false
      }
    }
    if (!Vue.$imgView) {
      Vue.$imgView = imgView
    }
    Vue.mixin({
      created () {
        this.$imgView = Vue.$imgView
      }
    })
  }
}
