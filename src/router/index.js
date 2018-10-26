import Vue from 'vue'
import Router from 'vue-router'
import City from '../components/city/City'
import Home from '../components/home/Home'

Vue.use(Router);

export default new Router({
  routes: [
    {
      path:'/',
      name:'Home',
      component:Home
    },
    {
      path:'/city',
      name:'City',
      component:City
    }
  ]
})
