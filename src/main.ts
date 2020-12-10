import Vue from 'vue'
import { Button, Input, Form, FormItem } from 'element-ui'
import App from './App.vue'
import './registerServiceWorker'


Vue.config.productionTip = false
Vue.use(Button)
Vue.use(Input)
Vue.use(Form)
Vue.use(FormItem)
new Vue({
  render: h => h(App),
}).$mount('#app')
