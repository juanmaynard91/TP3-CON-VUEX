<template>
  <div class="container">
    <h1 v-titulos="'white'">Los mejores lenguajes de la programación</h1>
    <Tabla />
  </div>
</template>

<script>
import Tabla from "@/components/Tabla.vue";
export default {
  components: { Tabla },
};
</script>

<style scoped lang="scss">
h1 {
  font-family: "Bebas Neue", cursive;
  padding-top: 3rem;
  padding-bottom: 2rem;
  margin: 0;
}

@media (max-width: 570px) {
  h1 {
    padding-top: 5rem;
  }
}

@media (max-width: 506px) {
  h1 {
    padding-top: 5rem;
  }
}

@media (max-width: 420px) {
  h1 {
    padding-top: 5rem;
    padding-bottom: 2rem;
    margin: 0;
  }
}

@media (max-width: 360px) {
  h1 {
    padding-top: 5rem;
  }
}
</style>