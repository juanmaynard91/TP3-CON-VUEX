<template>
  <div>

    <div v-if="mostrarBarra" class="progress mb-3">
      <div id="progressBar" :class="{ 'progress-bar': !completarBarra, 'progress-bar': completarBarra }"></div>
    </div>

    <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#modalSlot">Agregar Lenguaje</button>

    <div class="modal fade" id="modalSlot" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true" data-bs-backdrop="static">
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">Agregar</h5>
          </div>
          <div class="modal-body">
            <form @submit.prevent="agregar">
              <div class="form-group">
                <label for="Puesto" class="form-label">Puesto</label>
                <input type="number" class="form-control" placeholder="Ingrese el puesto del lenguaje" v-model="puesto" />
              </div>
              <div class="form-group">
                <label for="Nombre">Nombre</label>
                <input type="text" class="form-control" placeholder="Ingrese el nombre del lenguaje" v-model.trim="nombre" />
              </div>
              <div class="form-group">
                <label for="Fecha">Fecha</label>
                <input type="number" class="form-control" placeholder="Ingrese la fecha de creación del lenguaje" v-model="fecha" />
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal" @click="limpiarInput">Cerrar</button>
                <button type="submit" class="btn btn-primary" data-bs-dismiss="modal">Enviar</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations } from "vuex";
export default {
  data() {
    return {
      puesto: "",
      nombre: "",
      fecha: "", 
      mostrarBarra: false,
      completarBarra: false,
    };
  },

  methods: {
    ...mapMutations(["agregarLenguaje"]),

    limpiarInput() {
      this.puesto = "", this.nombre = "", this.fecha = "";
    },

    agregar(){
      if (this.puesto !== "" && this.nombre !== "" && this.fecha !== "") {
      this.mostrarBarra = true;
      setTimeout(()=>{ this.completarBarra = true }, 500)
      setTimeout(()=>{ this.completarBarra = false, this.mostrarBarra = false
       if (this.puesto !== "" && this.nombre !== "" && this.fecha !== "") {
       let objeto = {
          id: new Date().toISOString(),  
          puesto: Number(this.puesto),
          nombre: this.nombre,
          fecha: Number(this.fecha),
       }
       this.$store.commit("agregarLenguaje", objeto)
       this.$store.state.lenguajes.sort((a, b) => a.puesto - b.puesto);
       localStorage.setItem("datosGuardados", JSON.stringify(this.$store.state.lenguajes))
      }
      this.limpiarInput()
      }, 2000)
    }
    }
  },
};
</script>

<style scoped lang="scss">
$color-fondo: black;
$color-letra: white;

@mixin coloresModal {
  background-color: $color-fondo;
  color: $color-letra;
}

.modal-content {
  @include coloresModal();
}

#progressBar {
  animation-name: progressBar;
  animation-duration: 2s;
  position: relative;
  color: black;
}
@keyframes progressBar {
  0% { width: 0% }
  50% { width: 50% }
  100% { width: 100% }
}
</style>