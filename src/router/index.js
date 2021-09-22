import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Login from "../views/Login.vue"
import TerceraVista from "../views/TerceraVista.vue"
import store from '../store'//no hace falta el index

Vue.use(VueRouter)

const routes = [
  // NO PONER NOMBRE ASI CARGA LA PAGINA CON EL CONTENIDO PRINCIPAL
  { path: '/login', name: 'Login', component: Login },
  { path: '/', name: 'Home', component: Home },
  { path: '/top', name: 'About', component: About, meta: { rutaProtegida: true } },
  { path: '/info', name: 'SaberMas', component: TerceraVista, meta: { rutaProtegida: true } }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

router.beforeEach((to, from, next) => {
  const RutaEsProtegida = to.matched.some(item => item.meta.rutaProtegida)
  if (RutaEsProtegida && store.state.token === null) {
    next("/")//si es verdadero me manda al login 
  } else {
    next()//si es falso ingreso a la ruta protegida (ESTE NEXT NO LO PUEDO MODIFICAR)
  }
})

// CON ESTO EVITO EL ERROR DE NAVEGACION DUPLICADA CUANDO ME DESLOGEO Y ME VOY A HOME POR EJ
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

export default router