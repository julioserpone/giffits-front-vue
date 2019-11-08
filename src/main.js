import Vue from 'vue'

Vue.config.productionTip = false;

import VueRouter from 'vue-router'
Vue.use(VueRouter)

import PersonalList from './components/PersonalList.vue';

const routes = [
  { path: '/', component: PersonalList },
]

const router = new VueRouter({
  mode: 'history',
  routes
})

new Vue({
  router,
  render: h => h(PersonalList)
}).$mount('#app')