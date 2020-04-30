import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import http from '@/requset/api'
import '@/assets/reset.less'//重置默认样式

Vue.use(store) //全局属性和方法
Vue.use(Element)

Vue.prototype.$http = http; // 将api挂载到vue的原型上复制代码

Vue.config.productionTip = false

new Vue({
	router,
	store,
	render: h => h(App)
}).$mount('#app')
