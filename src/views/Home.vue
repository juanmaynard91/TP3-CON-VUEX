<template>
  <div class="container">
    <HelloWorld :titulo="titulo" v-titulos="'white'" />
    <br />
    <Carrusel />
    <h2 v-titulos="'white'" class="parrafo">{{ parrafo }}</h2>
    <Card />
  </div>
</template>

<script>
import HelloWorld from "@/components/HelloWorld.vue";
import Carrusel from "@/components/Carrusel.vue";
import Card from "@/components/Card.vue";

export default {
  name: "Home",
  components: { HelloWorld, Carrusel, Card },
  data() {
    return {
      titulo: "Qué es",
      parrafo: "Los tres lenguajes que se utilizan para crear aplicaciones web",
    };
  },
};
</script>

<style>
.parrafo {
  letter-spacing: 1px;
  font-family: "Bebas Neue", cursive;
  padding: 3rem 0 3rem 0;
}
</style>