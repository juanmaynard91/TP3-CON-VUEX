<template>
  <div class="container">
    <div class="row">
      <div class="col-md-4 col-xs-12 centrar">
        <div class="card1 border-dark mb-3">
          <div class="icono">
            <img loading="lazy" src="@/assets/html.png" />
          </div>
          <div class="card-body">
            <h5 class="card-text">{{ cardHtml }}</h5>
          </div>
        </div>
      </div>

      <div class="col-md-4 col-xs-12 centrar">
        <div class="card2 border-dark mb-3">
          <div class="icono"><img loading="lazy" src="@/assets/css.png" /></div>
          <div class="card-body">
            <h5 class="card-text">{{ cardCss }}</h5>
          </div>
        </div>
      </div>

      <div class="col-md-4 col-xs-12 centrar">
        <div class="card3 border-dark mb-3">
          <div class="icono"><img loading="lazy" src="@/assets/js.png" /></div>
          <div class="card-body">
            <h5 class="card-text">{{ cardJs }}</h5>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      cardHtml:
        "Es el lenguaje donde se define la información o el contenido del documento.",
      cardCss:
        "Es el lenguaje donde se especifica el diseño del documento, maneja todo lo relacionado con la parte visual.",
      cardJs:
        "Es el lenguaje que hace que todo sea interactivo, es realmente el lenguaje de programación que nos permite crear sitios web.",
    };
  },
};
</script>

<style scoped lang="scss">
.centrar {
  padding-top: 10px;
  text-align: center;
}

.border-dark {
  border-radius: 5px;
  box-shadow: 1rem 0 1rem rgba(0, 0, 0, 0.5);
}

.icono {
  width: 100%;
  height: 20rem;
  padding: 20px;
  display: flex;
  justify-content: center;
  //align-items: flex-start;
  position: relative;
  z-index: 0;
}

.card-body {
  font-family: "Roboto";
  display: flex;
  align-items: center;
  color: white;
  //background: rgb(55, 55, 55);
  background: linear-gradient(to right, #232526, #414345);
  width: 100%;
  height: 200px;
  position: relative;
  z-index: -1;
  border-radius: 0 0 5px 5px;
  margin-top: -1.3rem;
  transition: all 400ms;
}

.card1 {
  background: #f16529;
  transition: all 300ms;
  &:hover {
    position: relative;
    z-index: 0;
    & .card-body {
      margin-top: 0;
    }
  }
}

.card2 {
  background: #3498db;
  transition: all 300ms;
  &:hover {
    position: relative;
    z-index: 0;
    & .card-body {
      margin-top: 0;
    }
  }
}

.card3 {
  background: #ffde21;
  transition: all 300ms;
  &:hover {
    position: relative;
    z-index: 0;
    & .card-body {
      margin-top: 0;
    }
  }
}

@media (max-width: 988px) {
  h5 {
    font-size: 1rem;
  }
}
</style>