<template>
  <div class="container">
    <h1>{{ titulo }}</h1>
    <ul>
      <li>HTML</li>
      <li>CSS</li>
      <li>JAVASCRIPT</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    titulo: String,
    parrafo: String,
  },
};
</script>

<style scoped lang="scss">
.container {
  width: 29rem;
  height: 6rem;
  display: flex;
  line-height: 2rem;
  overflow: hidden;

  h1 {
    font-family: "Bebas Neue", cursive;
    padding-left: 4rem;
    margin: 0;
    display: flex;
    justify-content: center;
    align-items: flex-end;
    padding-top: 6rem;
  }

  ul {
    font-size: 2.7rem;
    animation: cambiar 7s infinite;
    height: 9rem;
    padding-left: 1rem;

    & li {
      list-style: none;
      display: flex;
      padding-bottom: 1rem;
      //font-weight: bolder;
      font-family: "Bebas Neue", cursive;
    }
  }
}

@keyframes cambiar {
  from {
    transform: translateY(6rem);
  }
  to {
    transform: translateY(-2.3rem);
  }
}

@media (max-width: 1000px) {
  ul {
    font-size: 2.5rem !important;
  }
}

@media (max-width: 700px) {
  ul {
    font-size: 2rem !important;
  }
}
</style>