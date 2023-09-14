import Vue from 'vue'
import App from './App.vue'
import VueResource from 'vue-resource'
import VueRouter from 'vue-router'
import Routes from './routes'

Vue.use(VueResource)
Vue.use(VueRouter)

//router
const router = new VueRouter({
  routes:Routes,
  mode:'history'
  //this mode is used to remove # from url
})



//custom directive  

Vue.directive('theme',{
  bind(el,binding,vnode){
    if(binding.value == 'wide'){
      el.style.maxWidth = '1200px'
    }else if (binding.value == 'narrow'){
      el.style.maxWidth = "560px"
    }
    if(binding.arg == 'column'){
      el.style.background ='###d'
      el.style.padding ='20px'
    }

  }
})

//filters


Vue.filter('snippet',function(value){
  return value.slice(0,100) + "...";  
})


// export const bus = new Vue()
new Vue({
  el: '#app',
  render: h => h(App),
  router:router
})
