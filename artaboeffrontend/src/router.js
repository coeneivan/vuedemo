import Vue from 'vue'
import VueRouter from 'vue-router'
import home from './home/index.vue'
import login from './login/index.vue'

Vue.use(VueRouter)

export default new VueRouter({
    mode: "history",
    routes: [{
        path: "/",
        name: "login",
        component: login
    },{
        path: "/order",
        name: "home",
        component: home
    }]
})