<template>
  <div>
    <h1 v-titulos="'white'">{{ titulo }}</h1>

    <div class="container">
      <div>
        <div class="card mb-3">
          <div class="row g-0">
            <div class="col-md-4">
              <img src="../assets/HTML.gif" alt="ejemplo de html" />
            </div>
            <div class="col-md-8">
              <div class="card-body html">
                <h4 class="card-title">HTML</h4>
                <h5 class="card-text">
                  La primera tecnología de desarrollo web que debe aprenderse es
                  HTML. HTML es para las aplicaciones web lo que los cimientos
                  son para un edificio. HTML nació en la universidad para
                  relacionar documentos entre sí. Facilitó la búsqueda de
                  documentos con contenido similar. Sin embargo, la evolución de
                  la web ha llevado a utilizar HTML como documento base para
                  crear aplicaciones web. Desde la versión 5, este lenguaje de
                  marcado, agregó semántica a las etiquetas. Esto permitió crear
                  documentos que son interpretados por otros sistemas de
                  información. El mayor inconveniente al aprender HTML es el
                  horrible aspecto visual que tendrán tus aplicaciones. Esto
                  puede ser desalentador, ya que puedes tener la sensación de
                  que tu esfuerzo y resultados no están apareciendo. Por lo
                  general, aprendemos HTML al mismo tiempo que CSS. El uso de
                  CSS para agregar estilo a nuestras aplicaciones web ayuda a
                  que el aspecto visual mejora considerablemente.
                </h5>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div>
        <div class="card mb-3">
          <div class="row g-0">
            <div class="col-md-4">
              <img src="../assets/CSS.gif" alt="ejemplo de css" />
            </div>
            <div class="col-md-8">
              <div class="card-body css">
                <h4 class="card-title">CSS</h4>
                <h5 class="card-text">
                  El siguiente paso que debes tomar para ser desarrollador web
                  es aprender CSS. Si HTML es la base CSS es como la pintura,
                  decoracion o personalizacion de la casa. A primera vista
                  parece que no es util, pero esta caracteristica es la que
                  conquista a los clientes y por lo tanto, la que genera dinero.
                  Aquellos que no aprecian la importancia de CSS puede estar
                  interesados en saber que la mayoria de las veces no importa
                  que tecnologia este detras de nuestra aplicacion web si no
                  tiene un buen aspecto visual. La mayoria de las veces, un
                  cliente no pagara por un producto que no encuentre visualmente
                  atractivo. Sin embargo, lo mas probable es que aprendas CSS
                  mientras aprendas otras tecnologias como por ejemplo HTML.
                  Durante esta parte de tu viaje, debes concentrarse en aprender
                  lo suficiente como para diseñar una pagina web. Obviamente no
                  se necesita un conocimiento profundo de CSS en este paso, pero
                  debes ser capaz de defenderte. A medida que avanza tu viaje,
                  tus habilidades de CSS mejoraran gradualmente.
                </h5>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div>
        <div class="card mb-3">
          <div class="row g-0">
            <div class="col-md-4">
              <img src="../assets/JS.gif" alt="ejemplo de javascript" />
            </div>
            <div class="col-md-8">
              <div class="card-body js">
                <h4 class="card-title">JAVASCRIPT</h4>
                <h5 class="card-text">
                  Debes dominar JavaScript / TypeScript, ya que es el lenguaje
                  del presente y el futuro de la Web. JavaScript es el lenguaje
                  que existe ahora en la interfaz y es el que necesitas para
                  poder manejarlo perfectamente. JavaScript es un lenguaje que
                  nació con la intención de convertirse en un lenguaje de
                  secuencias de comandos, sin embargo, hoy en día es un lenguaje
                  que intenta abarcar múltiples paradigmas. La evolución real de
                  este lenguaje ha llegado en los últimos 5 años desde que su
                  expansión ha sido masiva. Es por eso que JavaScript debe
                  estudiarse en profundidad: puedes crear aplicaciones de
                  escritorio, móviles, backend y frontend.
                </h5>
              </div>
            </div>
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
      titulo: "¿Cuáles son los pasos para convertirse en desarrollador web?",
    };
  },
};
</script>

<style scoped lang="scss">
$color-card: linear-gradient(to right, #232526, #414345);

h1 {
  font-family: "Bebas Neue", cursive;
  padding-top: 3rem;
  padding-bottom: 2rem;
  margin: 0;
}

h5 {
  color: white;
}

.col-md-4 {
  overflow: hidden; /* lo que hace es OCULTAR el contenido que sobresale */
}

img {
  margin-left: 1rem;
  height: 23rem;
  transition: transform 0.5s, opacity 0.5s; //velocidad de iluminacion
  opacity: 0.7;
  width: 100%;
  transform: scale(1.15);

  &:hover {
    opacity: 1;
    transform: scale(1.2);
    overflow: hidden;
  }
}

.card {
  margin-bottom: 1rem;
  background-color: black;
  box-shadow: 1rem 0 1rem rgba(0, 0, 0, 0.5);

  .card-title {
    color: white;
    margin-bottom: 1rem;
    font-weight: bold;
    text-align: center;
  }
  .card-body {
    font-family: "Roboto";
    height: 23rem;
    text-align: initial;

    &.html {
      background: $color-card;
    }
    &.css {
      background: $color-card;
    }
    &.js {
      background: $color-card;
    }
  }
}

@media (max-width: 1386px) {
  .card-body {
    overflow: auto;
  }
  @media (max-width: 1200px) {
    .card-body {
      overflow: auto;
    }
    @media (max-width: 988px) {
      .card-body {
        overflow: auto;
      }
    }
    @media (max-width: 640px) {
      h1 {
        padding-top: 3.5rem;
      }
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
      }
    }
    @media (max-width: 360px) {
      h1 {
        padding-top: 5rem;
      }
    }
  }
}
</style>