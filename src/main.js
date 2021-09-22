import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import Vuelidate from "vuelidate"
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDnKl8oa4qScBviJSy8CCFRdpCYI1-4nhY",
  authDomain: "test-login-1caae.firebaseapp.com",
  databaseURL: "https://test-login-1caae-default-rtdb.firebaseio.com",
  projectId: "test-login-1caae",
  storageBucket: "test-login-1caae.appspot.com",
  messagingSenderId: "488807273157",
  appId: "1:488807273157:web:5443602d1f13ca5da4d6ac"
};

const app = initializeApp(firebaseConfig);

Vue.config.productionTip = false

Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.use(Vuelidate)

Vue.directive("titulos", {
  bind(elem, binding) {
    elem.style.color = binding.value;
  }
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
