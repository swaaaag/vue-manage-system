import {createApp} from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import installElementPlus from './plugins/element'
import './assets/css/icon.css'
//import request from './api/index.js'

const app = createApp(App)
//app.config.globalProperties.$request = request;

installElementPlus(app)
app
    .use(store)
    .use(router)
    .mount('#app')