import Vue from 'vue'
import { Input, Checkbox, CheckboxGroup, Tag} from 'element-ui'
import App from './App.vue'
import './registerServiceWorker'


Vue.config.productionTip = false
Vue.use(Input)
Vue.use(Checkbox)
Vue.use(CheckboxGroup)
Vue.use(Tag)

new Vue({
  render: h => h(App),
}).$mount('#app')
