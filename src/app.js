/* 启动文件 */
import Vue from 'vue'
import router from './router/'
import App from 'COMPONENT/App'
import {store} from 'STORE'

router.start(App, '#app')

Vue.config.debug = true
