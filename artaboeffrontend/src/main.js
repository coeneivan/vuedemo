import Vue from 'vue'
import material from 'vue-material'
import App from './App.vue'
import router from './router'
import VueResource from 'vue-resource'

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
