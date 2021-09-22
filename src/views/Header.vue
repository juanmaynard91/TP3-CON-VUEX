<template>
  <div>
    <nav id="header" class="navbar navbar-expand-lg navbar-light">
      <div class="container-fluid">
        <a class="navbar-brand">VUEX</a>
        <div>
          <ul>
            <li class="nav-item"><router-link class="nav-link active" to="/">Home</router-link></li>
            <li class="nav-item"><router-link class="nav-link active" to="/top">Top Lenguajes</router-link></li>
            <li class="nav-item"><router-link class="nav-link active" to="/info">Saber Mas</router-link></li>
          </ul>
        </div>
      </div>
      <Tema />
      <button v-if="isLogged" class="btn btn-danger" @click="cerrar">Salir</button>
      <button v-else class="btn btn-success" @click="registrarse">Registrarse</button>
    </nav>
  </div>
</template>

<script>
import Tema from "@/components/Tema";
import { mapActions } from "vuex";

export default {
  components: { Tema },
   computed: {
    isLogged() {
      return this.$store.getters.isLogged;
    },
  },
  methods: {
    ...mapActions(["cerrarSesion"]),

    cerrar(){
      this.$store.dispatch("cerrarSesion")
      this.$router.push('/')
    }, 
    registrarse(){
      this.$router.push("/login")
    }
  },
};
</script>

<style scoped lang="scss">
#header {
  display: flex;
  flex-wrap: nowrap;
  background-color: black;
  a {
    color: white;
  }
}
nav {
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 1;
  padding: 2px;

  a {
    font-weight: bold;
    color: #2c3e50;
  }
  &#header a.router-link-exact-active {
    color: #42b983;
  } 

  .container-fluid {
    display: flex;
    flex-wrap: inherit;
    align-items: center;
    justify-content: flex-start;
    ul {
      display: flex;
      list-style: none;
      margin-bottom: 0;
      padding-left: 0;
    }
  }
}
</style>