import Vue from 'vue'
import Dzhyun from 'dzhyun-vue-data'
import App from './App.vue'
import router from './router'

import StockChart from '../packages/index'

// 注册组件库
Vue.use(StockChart)

Vue.config.productionTip = false

Vue.use(Dzhyun, {
  // eslint-disable-next-line no-undef
  address: 'ws://10.15.144.131/ws',
  dataType: 'json',
  compresser: 'snappy',
  token: '0000003c:1562034580:06fddb425a2c9998bb42a3b083d54ca04562601b'
})

// Vue.use(Dzhyun, {
//   // eslint-disable-next-line no-undef
//   address: 'ws://gw.yundzh.com/ws',
//   dataType: 'json',
//   compresser: 'snappy',
//   token: '00000055:1565245395:77139da6b26c38d79dd82b00eaca1d29cb5119c0'
// })

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
