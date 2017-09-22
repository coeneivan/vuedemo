import Vue from 'vue'
import VueRouter from 'vue-router'
import home from './home/index.vue'
import login from './login/index.vue'
import bestellingen from './bestellingen/index.vue'

Vue.use(VueRouter)

export default new VueRouter({
    mode: "history",
    routes: [{
        path: "/",
        component: login
    },{
        path: "/home",
        component: home
    },{
        path: "/bestellingen",
        component: bestellingen
    }]
})