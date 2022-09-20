import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import router from './router'

Vue.config.productionTip = false

Vue.filter('dot-dot',function(value)
{
  if(value.length>10)
  {
  return value.slice(0,10)+'...'
  }
  else{
    return value
  }
})


Vue.directive('comma', {
  componentUpdated(el, binding,vnode) {
    console.log(binding.value)
    binding.value = binding.value.replace(/\D/g, "")
      .replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    console.log(binding.value)
    vnode.context.data.empid = binding.value
  }
}),
new Vue({

  vuetify,
  router,
  render: h => h(App)
}).$mount('#app')
