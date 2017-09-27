import Vue from 'vue'
import material from 'vue-material'
import App from './App.vue'
import router from './router'
import VueResource from 'vue-resource'
import injector from 'vue-inject'

require('./constants/constants');
require('./services/artaboefservicedi');

Vue.use(injector)
Vue.use(material)
Vue.use(VueResource)



Vue.mixin({
  data(){
    return{
      username:"ivan"
    }
  }
})

new Vue({
  router,
  el: '#app',
  render: h => h(App)
})
