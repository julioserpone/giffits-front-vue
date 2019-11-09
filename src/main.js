import Vue from 'vue'
import App from './App.vue';
import PersonalList from './components/PersonalList.vue';
import PersonCreate from './components/PersonCreate.vue';
import PersonEdit from './components/PersonEdit.vue';
import VueRouter from 'vue-router'

Vue.config.productionTip = false;
Vue.use(VueRouter)
Vue.prototype.$hostname = 'http://localhost:8000';

const routes = [
  { path: '/', component: PersonalList, name: 'home' },
  { path: '/person/create', component: PersonCreate },
  { path: '/person/edit/:id', component: PersonEdit }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')