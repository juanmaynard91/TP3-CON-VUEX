<template>
  <div id="app">
    <Header />
    <router-view />
    <Footer />
  </div>
</template>

<script>
import Header from "./views/Header.vue";
import Footer from "./views/Footer.vue";
import { mapActions } from "vuex";

export default {
  components: { Header, Footer },

  methods: {
    ...mapActions(["leerToken"]),
  },

  created() {
    this.$store.dispatch("leerToken"); //CREATED EN APP PORQUE INDEPENDIENTEMENTE SI ESTA EN HOME O ABOUT SIEMPRE GUARDA EL TOKEN EN EL LOCALSTORAGE
  },
};
</script>

<style>
#app {
  height: 115rem;
  text-align: center;
  word-spacing: 5px;
  color: #2c3e50;
}

@media (max-width: 766px) {
  #app {
    height: 155rem !important;
  }
  @media (max-width: 500px) {
    #app {
      width: 29.6rem;
    }
  }
}
</style>