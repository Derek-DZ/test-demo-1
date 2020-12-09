import Vue from 'vue'
import { Button, Input } from 'element-ui'
import App from './App.vue'
import './registerServiceWorker'

Vue.config.productionTip = false
Vue.use(Button)
Vue.use(Input)

new Vue({
  render: h => h(App),
}).$mount('#app')
