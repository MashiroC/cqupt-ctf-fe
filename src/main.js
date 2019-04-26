import Vue from 'vue'
import router from './router.js'
import VueRouter from "vue-router";
import VueResource from "vue-resource";

import App from './App'
import Home from './pages/zhuye/Home'
import Test from './pages/Test'
import Teams from './pages/zhuye/Teams'

import ElementUI from 'element-ui'
// import './element-variables.scss'
import '../theme/index.css'

Vue.config.productionTip = false;

Vue.use(VueRouter);
Vue.use(VueResource);
Vue.use(ElementUI);

new Vue({
    el: '#app',
    router,
    render: h => h(App),
    data: {msg: 'hello world', color: 'color:aqua',username:null},
    components: {App, Home, Test, Teams},
    methods: {
        test: function () {
            this.msg = 'welcome';
            this.color = 'color:red';

        }
    }
});
