<template>
  <div class="container">
    <Check />
    <table class="table table-dark">
      <thead>
        <tr>
          <th scope="col">Puesto</th>
          <th scope="col">Nombre</th>
          <th scope="col">Año</th>
          <th scope="col">Opciones</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in lenguajes" :key="item.id">
          <td>
            <span v-if="formActualizar && idActualizar == item.id"><input v-model="puestoNuevo" type="number" class="form-control" /></span>
            <span v-else>{{ item.puesto }}</span>
          </td>
          <td>
            <span v-if="formActualizar && idActualizar == item.id"><input v-model="nombreNuevo" type="text" class="form-control" /></span>
            <span v-else>{{ item.nombre }}</span>
          </td>
          <td>
            <span v-if="formActualizar && idActualizar == item.id"><input v-model="fechaNuevo" type="number" class="form-control" /></span>
            <span v-else>{{ item.fecha }}</span>
          </td>
          <td class="separar">
            <span v-if="formActualizar && idActualizar == item.id">
              <button @click="guardarActualizacion(item)" class="btn btn-success">Guardar</button>
            </span>
            <span v-else>
              <button @click="editarLenguaje(item)" class="btn btn-warning">Editar</button>
            </span>
            <button class="btn btn-danger" @click="eliminarLenguaje(item.id)">Eliminar</button>
          </td>
        </tr>
      </tbody>
    </table>

    <div v-if="mostrarBarra" class="progress mb-3">
      <div id="progressBar" :class="{ 'progress-bar': !completarBarra, 'progress-bar': completarBarra }"></div>
    </div>
    <ModalAgregar />
  </div>
</template>

<script>
import Check from "@/components/Check.vue";
import ModalAgregar from "@/components/ModalAgregar.vue";
import { mapState, mapActions, mapMutations } from "vuex";

export default {
  components: { Check, ModalAgregar },
  data() {
    return {
      formActualizar: false,
      idActualizar: 0,
      puestoNuevo: "",
      nombreNuevo: "",
      fechaNuevo: "",
      mostrarBarra: false,
      completarBarra: false,
    };
  },

  computed: {
    ...mapState(["lenguajes"]),
    //lo tengo en el for asi siempre esta orderando
    /* arrayOrdenado(state) {
      return state.lenguajes.sort((a, b) => a.puesto - b.puesto);
    }, */
  },

  methods: {
    ...mapActions(["obtenerLenguajes"]),
    ...mapMutations(["eliminarLenguaje", "editarInfo"]),

    editarLenguaje(item) {
      // Antes de mostrar el formulario de actualizar, rellenamos sus campos
      this.idActualizar = item.id;

      this.puestoNuevo = item.puesto;
      this.nombreNuevo = item.nombre;
      this.fechaNuevo = item.fecha;

      this.$store.commit("editarInfo", item);
      // Mostramos el formulario
      this.formActualizar = true;
    },

    guardarActualizacion(item) {
      this.mostrarBarra = true;
      setTimeout(() => {
        this.completarBarra = true;
      }, 500);
      setTimeout(() => {
        (this.completarBarra = false), (this.mostrarBarra = false);
        // Ocultamos nuestro formulario de actualizar
        this.formActualizar = false;
        // Actualizamos los datos
        item.puesto = this.puestoNuevo;
        item.nombre = this.nombreNuevo;
        item.fecha = this.fechaNuevo;

        this.$store.state.lenguajes.sort((a, b) => a.puesto - b.puesto);
        localStorage.setItem("datosGuardados", JSON.stringify(this.$store.state.lenguajes));
      }, 2000);
    },
  },

  /*mounted() {
    this.$store.dispatch("obtenerLenguajes"); //DISPATCH LLAMO A LA ACTION DE STORE
    localStorage.setItem("datosGuardados", JSON.stringify(this.$store.state.lenguajes))
  },*/ 

  created() {
    //IMPORTANTISIMO EL CREATE (PARA EL LOCALSTORAGE) GUARDA LA INFORMACION DE LA PAGINA AUN CUANDO SE ACTUALICE
    let datosDB = JSON.parse(localStorage.getItem("datosGuardados")); //JSON.PARSE PORQUE DEVUELVE UN ARRAY
    //console.log(datosDB);
    if (datosDB === null) { //NULL ES POR SI HAY INFORMACION GUARDADA
      this.$store.state.lenguajes = this.$store.dispatch("obtenerLenguajes"); // MUESTRO LA DATOS DE LA API
    } else {
      this.$store.state.lenguajes = datosDB; // GUARDO LOS DATOS CON LOS CAMBIOS AUN ACTUALIZANDO LA PAGINA
    }
  },
};
</script>

<style scoped lang="scss">
.table {
  vertical-align: inherit;
  tbody, td, tfoot, th, thead, tr {
    border-width: 0;
  }
  .separar {
    display: flex;
    justify-content: space-around;
  }
  .btn-warning {
    color: white;
  }
}
#progressBar {
  animation-name: progressBar;
  animation-duration: 2s;
  position: relative;
}
@keyframes progressBar {
  0% { width: 0% }
  50% { width: 50% }
  100% { width: 100% }
}
</style>