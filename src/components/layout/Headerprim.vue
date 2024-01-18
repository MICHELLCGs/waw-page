<template>
  <nav class="navbar navbar-expand-md navbar-white fixed-top bg-white" style="box-shadow: 0 4px 5px #e5e5e5;">
    <div class="container-fluid">
      <router-link :to="{ name: 'index' }">
        <a class="navbar-brand" href="#">
          <img src="@/assets/img/logo.png" alt="Logo waw" style="height: 48px; padding-left: 30px;">
          <span class="logo-text" style="padding-left: 20px; text-decoration: none;">WAW</span>
        </a>
      </router-link>
      <!-- separador -->
      <ul class="nav nav-masthead justify-content-start nav-separator" style="margin-right: 500px; margin-left: -250px;">
        <li class="nav-item dropdown">
          <a class="nav-link py-1 px-0 dropdown-toggle mt-1" style="font-size: 20px; text-decoration: none; color: black; font-weight: normal; font-family: 'Montserrat', sans-serif;" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Shop
          </a>
          <div class="dropdown-menu" aria-labelledby="navbarDropdown" >
            <div class="d-flex">
              <!-- Categoría 1 -->
              <div class="flex-grow-1 p-2">
                <div class="mb-2">
                  <a><b>Prendas</b></a>
                </div>
                <router-link :to="{ name: 'shop' }">
                  <a  :class="{ 'dropdown-item': true, active: isRouteActive('shop') }">Chompas</a>
                </router-link>
                <router-link :to="{ name: 'shop' }">
                  <a class="dropdown-item" :class="{ 'dropdown-item': true, active: isRouteActive('shop1') }">Sacos</a>
                </router-link>
                <router-link :to="{ name: 'shop' }">
                  <a class="dropdown-item" :class="{'dropdown-item': true, active: isRouteActive('shop1') }">Ponchos</a>
                </router-link>
                <router-link :to="{ name: 'shop' }">
                  <a class="dropdown-item" :class="{'dropdown-item': true, active: isRouteActive('shop1') }">Pantalones</a>
                </router-link>
                <router-link :to="{ name: 'shop' }">
                  <a class="dropdown-item" :class="{'dropdown-item': true, active: isRouteActive('shop1') }">Faldas</a>
                </router-link>
              </div>
              <!-- Categoría 2 -->
              <div class="flex-grow-1 p-2">
                <div class="mb-2">
                  <a><b>Accesorios</b></a>
                </div>
                <router-link :to="{ name: 'shop' }">
                  <a class="dropdown-item" :class="{ active: isRouteActive('shop1') }">Gorros</a>
                </router-link>
                <router-link :to="{ name: 'shop' }">
                  <a class="dropdown-item" :class="{ active: isRouteActive('shop1') }">Mitones</a>
                </router-link>
                <router-link :to="{ name: 'shop' }">
                  <a class="dropdown-item" :class="{ active: isRouteActive('shop1') }">Chullos</a>
                </router-link>
                <router-link :to="{ name: 'shop' }">
                  <a class="dropdown-item" :class="{ active: isRouteActive('shop1') }">Pashminas</a>
                </router-link>
                <router-link :to="{ name: 'shop' }">
                  <a class="dropdown-item" :class="{ active: isRouteActive('shop1') }">Guantes</a>
                </router-link>
              </div>

              <div class="flex-grow-1 p-2">
                <div class="mb-2">
                  <a><b>Materiales</b></a>
                </div>
                <router-link :to="{ name: 'shop' }">
                  <a class="dropdown-item" :class="{ active: isRouteActive('shop1') }">Alpaca</a>
                </router-link>
                <router-link :to="{ name: 'shop' }">
                  <a class="dropdown-item" :class="{ active: isRouteActive('shop1') }">Alpaca - Oveja</a>
                </router-link>
                <router-link :to="{ name: 'shop' }">
                  <a class="dropdown-item" :class="{ active: isRouteActive('shop1') }">Alpaca - Seda</a>
                </router-link>
                <router-link :to="{ name: 'shop' }">
                  <a class="dropdown-item" :class="{ active: isRouteActive('shop1') }">Alpaca - Oveja</a>
                </router-link>
              </div>
            </div>
          </div>
        </li>
        <li class="nav-item">
          <router-link :to="{ name: 'marca' }">
            <a class="nav-link fw-bold py-1 px-0" href="#">
              <button :class="{'btn btn-custom rounded-pill':true, selected: isRouteActive('marca'),}" style="font-size: 20px; font-weight: normal; font-family: 'Montserrat', sans-serif;">
          Nuestra marca
        </button>
            </a>
          </router-link>
        </li>
        <li class="nav-item">
          <router-link :to="{ name: 'encuentranos' }">
            <a class="nav-link fw-bold py-1 px-0" href="#">
              <button :class="{'btn btn-custom rounded-pill':true, selected: isRouteActive('encuentranos'),}" style="font-size: 20px;">Encuentranos</button>
            </a>
          </router-link>
        </li>
      </ul>
      <!-- separador -->
      <ul class="nav nav-masthead justify-content-end nav-separator">
        <li class="nav-item">
        <div>
          <a class="navbar-brand" href="#" @click="openModal">
            <img src="@/assets/img/user.png" alt="user" style="height: 32px; padding-left: 30px;">
          </a>
        </div>
      </li>
        <li class="nav-item">
          <router-link :to="{ name: 'carrito' }">
        <a class="navbar-brand" href="#">
          <img src="@/assets/img/carrito.png" alt="user" style="height: 32px; padding-left: 30px;">
        </a>
        </router-link>
        </li>
      </ul>
    </div>
  </nav>
    <!-- Modal -->
    <div id="userModal" class="modal" ref="userModal">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title text-center mb-0">Cuenta</h5>
          <button type="button" class="close" @click="closeModal">&times;</button>
        </div>
        <div class="modal-body" style="margin-bottom: 10px;">
          <p class="text-center" style="color: black; font-weight: lighter; margin-bottom: 20px; font-size: 20px;">Accede a nuevas novedades</p>
          <form>
            <div class="form-group" style="margin-bottom: 40px;">
  <input type="text" class="form-control" id="recipient-name" placeholder="Correo">
</div>
<div class="form-group">
  <input type="text" class="form-control" id="recipient-name" placeholder="Contraseña">
</div>
          </form>
        </div>
        <div class="btn-login-container" >
          <button type="button" class="btn btn-outline-dark btn-square" @click="closeModal" >Iniciar sesión</button>
        </div>
        <p style="font-weight: lighter;">
  ¿No tienes cuenta? <a href="#" @click="openCreateAccountModal" style="color:#341D16; font-weight:480;">Create una</a>
</p>
      </div>
    </div>
  </div>
  <div id="createAccountModal" class="modal" ref="createAccountModal">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title text-center mb-0">Crear</h5>
        <button type="button" class="close" @click="closeCreateAccountModal">&times;</button>
      </div>
      <div class="modal-body" style="margin-bottom: 10px;">
        <div class="modal-body" style="margin-bottom: 10px;">
          <p class="text-center" style="color: black; font-weight: lighter; margin-bottom: 20px; font-size: 20px;">Accede a nuevas novedades</p>
          <form>
            <div class="form-group" style="margin-bottom: 40px;">
  <input type="text" class="form-control" id="recipient-name" placeholder="Correo">
</div>
<div class="form-group">
  <input type="text" class="form-control" id="recipient-name" placeholder="Contraseña">
</div>
          </form>
        </div>
         <div class="btn-login-container" >
          <button type="button" class="btn btn-outline-dark btn-square" @click="closeModal" >Registrarse</button>
        </div>
        <p style="font-weight: lighter;">
    ¿Ya tienes cuenta? <a href="#" @click="signInFromCreateAccountModal" style="color:#341D16; font-weight:480;">Inicia Sesión</a>
  </p>
      </div>

    </div>
  </div>
</div>
</template>
<script>
export default {
  name: "Headerprim",
  methods: {
    isRouteActive(routeName) {
      return this.$route.name === routeName;
    },
    openModal() {
      this.$refs.userModal.style.display = 'block';
    },
    closeModal() {
      this.$refs.userModal.style.display = 'none';
    },
    openCreateAccountModal() {
      this.closeModal();
      this.$refs.createAccountModal.style.display = 'block';
    },
    closeCreateAccountModal() {
      this.$refs.createAccountModal.style.display = 'none';
    },
    signInFromCreateAccountModal() {
      this.closeCreateAccountModal();
      this.openModal();
    },
  },
  beforeRouteLeave(to, from, next) {
  
    if (this.$refs.userModal.style.display === 'block') {
      this.closeModal();
    }
    next();
  },
};
</script>
<style>

@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&display=swap');


body
{
  font-family: 'Montserrat', sans-serif;
}
a{
  text-decoration: none!important;
}
.modal {
  display: none;
  position: fixed;
  z-index: 999;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgba(0,0,0,0.4);
}

.modal-dialog {
  margin: 10% auto;
  /* width: 40% !important;  */
  max-width: 600px;
}

.modal-content {
  background-color: #fefefe;
  margin: 4% auto;
  padding: 20px;
  border: none;
  border-radius: 8px;
  width: 80%;
  box-shadow: 0px 0px 20px 0px rgba(0,0,0,0.5);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-height: 80vh;
}

.modal-header {
  border-bottom: none;
}
/* #userModal {
  display: flex;
  align-items: center;
  justify-content: center;
} */
.modal-title {
  width: 100%;
  text-align: center;
  margin-bottom: 15px;
  font-size: 30px;
}

#userModal .form-control {
  width: 100%;
  border: 1px solid #ced4da;
  border-radius: 0.25rem;
  margin-left: 0;
  margin-right: 0;
  padding: 0.5rem 1rem;
}


#userModal .form-control::placeholder {
  font-style: italic;
  opacity: 0.7;
}
.btn-login-container {
  text-align: center;
}

.btn-square {
  width: 100%;
  padding: 0.75rem 1rem;
  border: 2px solid #000;
  border-radius: 8px;
  text-align: center;
  font-size: 20px;
  cursor: pointer;
  display: inline-block;
  margin-top: 20px;
  margin-bottom: 20px;
}

.btn-square:hover {
  background-color: #000;
  color: #fff;
}
.close {
  position: absolute;
  top: 10px;
  right: 10px;
  font-size: 1.5rem;
  color: #000;
  cursor: pointer;
  transition: color 0.3s ease, background-color 0.3s ease;
  background-color: transparent;
  border: none;
  outline: none;
  padding: 0;
}


.close:hover {
  color: #9a9a9a;

}
body::-webkit-scrollbar {
  width: 12px; 
}

body::-webkit-scrollbar-thumb {
  background-color: #83746f;
  border-radius: 10px; 
}

body::-webkit-scrollbar-track {
  background-color: transparent; 
}
.active {
  background-color: black !important;
  color: white !important;
}
</style>