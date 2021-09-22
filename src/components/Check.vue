<template>
  <div>
    <div class="btn-group" role="group" aria-label="Basic checkbox toggle button group">
      <input type="checkbox" class="btn-check" id="filtrarNuevos" autocomplete="off" v-model="checked" @click="filtrar(checked)"/>
      <label class="btn btn-primary" for="filtrarNuevos">{{ checked ? "Ver todos" : "Filtrar nuevos" }}</label>
    </div>
  </div>
</template>

<script>
import { mapMutations, mapActions } from "vuex";
export default {
  name: "Check",
  data() {
    return {
      checked: false,
    };
  },
  methods: {
    ...mapMutations(["filtrarNuevos"]),
    ...mapActions(["obtenerLenguajes"]),

    filtrar(check) {
      if (check) {
        this.$store.dispatch("obtenerLenguajes");
        //localStorage.setItem("datosGuardados", JSON.stringify(this.$store.state.lenguajes))
      } else {
        this.$store.commit("filtrarNuevos");
        //localStorage.setItem("datosGuardados", JSON.stringify(this.$store.state.lenguajes))
      } 
    },
  },
};
</script>

<style scoped lang="scss">
.btn {
  margin-bottom: 1rem;
}
</style>