import Vue from 'vue'
import VueRouter from 'vue-router'
import customerTable from '../components/customerTable.vue'
Vue.use(VueRouter)

const routes = [
  
 {
  path:'/customer',
  name:'customer',
  component:customerTable
 }
  
]

// eslint-disable-next-line no-new
const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
