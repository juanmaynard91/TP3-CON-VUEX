<template>
  <div class="home">
    <div class="wrapper fadeInDown">
      <div id="formContent">
        <div class="fadeIn first">
          <img src="@/assets/logo.png" id="icon" alt="User Icon" />
        </div>

        <form @submit.prevent="Login(usuario)">
          <div class="container">
            <div class="separar" :class="{ invalid: $v.usuario.email.$error }">
              <input type="email" class="form-control" placeholder="Email" v-model="usuario.email" @change="$v.usuario.email.$touch()" />
            </div>
            <p v-if="!$v.usuario.email.email"> Debes ingresar un correo electrónico válido</p>

            <div class="separar" :class="{ invalid: $v.usuario.password.$error }">
              <input id="contraseña" type="password" class="form-control" placeholder="Contraseña" v-model="usuario.password" @change="$v.usuario.password.$touch()" />
            </div>
            <p v-if="!$v.usuario.password.minLength">Debes ingresar 6 caracteres como mínimo</p>

            <div class="d-flex justify-content-between">
              <div>
                <input class="form-check-input" type="checkbox" @click="mostrarOcultar" />{{ this.ver ? " Ocultar" : " Mostrar" }}
              </div>

              <div>
                <button type="submit" class="btn btn-primary">Entrar</button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import { required, email, minLength } from "vuelidate/lib/validators";
import { mapActions } from "vuex";
export default {
  components: {},
  data() {
    return {
      usuario: {
        email: "",
        password: "",
      },
      ver: false,
    };
  },

  validations: {
    usuario: {
      email: {
        required,
        email,
      },
      password: {
        required,
        minLength: minLength(6),
      },
    },
  },

  methods: {
    ...mapActions(["login"]),

    Login(usuario) {
      if (!this.$v.$invalid) {
        this.$store.dispatch("login", usuario);
        this.$router.push("/");
      } else {
        this.$v.$touch(); //muestra los errores
      }
    },

    mostrarOcultar() {
      this.ver = !this.ver;
      const contra = document.getElementById("contraseña");
      if (contra.type === "password") {
        contra.type = "text";
      } else {
        contra.type = "password";
      }
    },
  },
};
</script>

<style scoped lang="css">
.invalid .form-control {
  background-color: white;
}

.d-flex {
  align-items: flex-end;
  padding-top: 1rem;
}

.container {
  padding-bottom: 1rem;
}

.separar {
  padding-bottom: 1rem;
}

a {
  color: #92badd;
  display: inline-block;
  text-decoration: none;
  font-weight: 400;
}

h2 {
  text-align: center;
  font-size: 16px;
  font-weight: 600;
  text-transform: uppercase;
  display: inline-block;
  margin: 40px 8px 10px 8px;
  color: #cccccc;
}

.wrapper {
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  min-height: 100%;
  padding: 20px;
}

#formContent {
  -webkit-border-radius: 10px 10px 10px 10px;
  border-radius: 10px 10px 10px 10px;
  /*background: #fff;*/
  padding: 30px;
  width: 90%;
  /*height: 33rem;*/
  max-width: 450px;
  position: relative;
  padding: 0px;
  -webkit-box-shadow: 0 30px 60px 0 rgba(0, 0, 0, 0.3);
  box-shadow: 0 30px 60px 0 rgba(0, 0, 0, 0.3);
  text-align: center;
}

.form-control {
  text-align: center;
}

#formFooter {
  background-color: #f6f6f6;
  border-top: 1px solid #dce8f1;
  padding: 25px;
  text-align: center;
  -webkit-border-radius: 0 0 10px 10px;
  border-radius: 0 0 10px 10px;
}

h2.inactive {
  color: #cccccc;
}

h2.active {
  color: #0d0d0d;
  border-bottom: 2px solid #5fbae9;
}

.fadeInDown {
  padding-top: 20rem;
  -webkit-animation-name: fadeInDown;
  animation-name: fadeInDown;
  -webkit-animation-duration: 1s;
  animation-duration: 1s;
  -webkit-animation-fill-mode: both;
  animation-fill-mode: both;
}

@-webkit-keyframes fadeInDown {
  0% {
    opacity: 0;
    -webkit-transform: translate3d(0, -100%, 0);
    transform: translate3d(0, -100%, 0);
  }
  100% {
    opacity: 1;
    -webkit-transform: none;
    transform: none;
  }
}

@keyframes fadeInDown {
  0% {
    opacity: 0;
    -webkit-transform: translate3d(0, -100%, 0);
    transform: translate3d(0, -100%, 0);
  }
  100% {
    opacity: 1;
    -webkit-transform: none;
    transform: none;
  }
}

@-webkit-keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
@-moz-keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

.fadeIn {
  opacity: 0;
  -webkit-animation: fadeIn ease-in 1;
  -moz-animation: fadeIn ease-in 1;
  animation: fadeIn ease-in 1;

  -webkit-animation-fill-mode: forwards;
  -moz-animation-fill-mode: forwards;
  animation-fill-mode: forwards;

  -webkit-animation-duration: 1s;
  -moz-animation-duration: 1s;
  animation-duration: 1s;
}

.fadeIn.first {
  -webkit-animation-delay: 0.4s;
  -moz-animation-delay: 0.4s;
  animation-delay: 0.4s;
}

.fadeIn.second {
  -webkit-animation-delay: 0.6s;
  -moz-animation-delay: 0.6s;
  animation-delay: 0.6s;
}

.fadeIn.third {
  -webkit-animation-delay: 0.8s;
  -moz-animation-delay: 0.8s;
  animation-delay: 0.8s;
}

.fadeIn.fourth {
  -webkit-animation-delay: 1s;
  -moz-animation-delay: 1s;
  animation-delay: 1s;
}

.underlineHover:after {
  display: block;
  left: 0;
  bottom: -10px;
  width: 0;
  height: 2px;
  background-color: #56baed;
  content: "";
  transition: width 0.2s;
}

.underlineHover:hover {
  color: #0d0d0d;
}

.underlineHover:hover:after {
  width: 100%;
}

*:focus {
  outline: none;
}

#icon {
  padding-bottom: 2rem;
  width: 60%;
}
</style>