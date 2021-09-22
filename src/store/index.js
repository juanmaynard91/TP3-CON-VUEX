import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    lenguajes: [],
    token: null,
  },

  mutations: {
    llenarTabla(state, payload) {
      state.lenguajes = payload
    },
    agregarLenguaje(state, payload) {
      state.lenguajes.push(payload)
      //localStorage.setItem("datosGuardados", JSON.stringify(state.lenguajes))//SET = GUARDAR / STRINGIFY DE {} A STRING
    },
    eliminarLenguaje(state, payload) {
      state.lenguajes = state.lenguajes.filter((item) => item.id !== payload)
      localStorage.setItem("datosGuardados", JSON.stringify(state.lenguajes))//SET = GUARDAR / STRINGIFY DE {} A STRING
    },
    filtrarNuevos(state, payload) {
      if (payload !== true) { state.lenguajes = state.lenguajes.filter((elem) => elem.fecha >= 2000) }
      //localStorage.setItem("datosGuardados", JSON.stringify(state.lenguajes))//SET = GUARDAR / STRINGIFY DE {} A STRING
    },
    editarInfo(state, item) {
      let index = state.lenguajes.findIndex((i) => i.id == item.id);
      if (index != -1) {
        state.lenguajes[index] = item;
      }
    },
    setToken(state, payload) {
      state.token = payload
    },
  },

  getters: {
    isLogged(state) {
      return !!state.token; //!! lo que hace es transformarlo a un booleano
    }
  },

  actions: {
    async obtenerLenguajes({ commit }) { //para llamar a la mutacion dentro del action se usa COMMIT
      try {
        const res = await fetch("https://602549ce36244d001797bed6.mockapi.io/Lenguajes");
        const data = await res.json();
        commit("llenarTabla", data);
      }
      catch (error) {
        console.log(error)
      }
    },
    async login({ commit }, payload) {
      //console.log(payload) // son los datos del usuario
      try {
        const res = await fetch(`https://test-login-1caae-default-rtdb.firebaseio.com/token.json`, {
          method: "POST", //post porque estoy agregando datos
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload) //de objeto a json
        })
        const resDB = await res.json() // esto es lo que viene del backend (FIREBASE)
        //console.log(resDB.name) //token o id
        commit("setToken", resDB.name)
        localStorage.setItem("token", resDB.name) //lo guardo en el navegador 
      } catch (e) {
        console.log(e)
      }
    },
    leerToken({ commit }) {
      if (localStorage.getItem("token")) {
        commit("setToken", localStorage.getItem("token"))
      } else {
        commit("setToken", null)
      }
    },
    cerrarSesion({ commit }) {
      localStorage.removeItem("token")
      commit("setToken", null)
    },
  },
})
