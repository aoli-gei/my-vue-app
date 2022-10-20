import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
// // import './style.css'
import './assets/less/index.less'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import store from './store/index.js'
import './api/mock.js'
const app = createApp(App)
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
}
// import axios from 'axios'

//导航守卫////
// router.beforeEach((to, form, next) => {
//     store.commit('getToken')
//     const token = store.state.user.token
//     if(!token && to.name !== 'login'){
//         next({name:'login'})
//     }
//     else{
//         next()
//     }
// })
// axios.defaults.baseURL = 'http://localhost:3000' //测试
// Vue.prototype.$http = axios

app.use(ElementPlus)
app.use(router).use(store)
app.mount('#app')