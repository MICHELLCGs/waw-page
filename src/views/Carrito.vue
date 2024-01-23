<template>
  <div>
    <Headerprim />
    <div
      class="container-fluid"
      style="margin-top: 100px; margin-bottom: -60px"
    >
      <div class="row container-fluid" style="margin-bottom: 100px;">
        <div class="col-md-6">
          <a style="font-size: 20px; font-weight: normal">Carrito de compras</a>
          <!-- Aquí agregamos las cards -->
          <div
            class="card"
            style="width: 40rem; height: 8rem; margin-top: 20px"
          >
            <div class="card-body">
              <p class="card-text">Contenido de la tarjeta 1</p>
            </div>
          </div>
          <div
            class="card"
            style="width: 40rem; height: 8rem; margin-top: 20px"
          >
            <div class="card-body">
              <p class="card-text">Contenido de la tarjeta 2</p>
            </div>
          </div>
          <hr
            style="
              border-top: 1px solid #000;
              margin-top: 20px;
              margin-bottom: 20px;
            "
          />
          <a><br />Subtotal: <a style="margin-left: 100px;"> $176</a></a>
        </div>
        <div class="col-md-5">
          <!-- Contenido de la columna derecha -->
          <a>Datos adicionales</a>
          <form>
            <div class="form-group">
              <label for="direccion">Dirección</label>
              <input
                type="text"
                id="direccion"
                name="direccion"
                placeholder="Ingrese su dirección"
                class="form-control"
              />
            </div>
            <div class="form-group">
              <label for="telefono">Teléfono</label>
              <input
                type="text"
                id="telefono"
                name="telefono"
                placeholder="Ingrese su teléfono"
                class="form-control"
              />
            </div>
            <div class="form-group">
              <label for="correo">Correo</label>
              <input
                type="email"
                id="correo"
                name="correo"
                placeholder="Ingrese su correo"
                class="form-control"
              />
            </div>
          </form>
        </div>
        <router-link :to="{ name: 'pagos' }">
        <div class="row container-fluid">
          <div class="col-md-12 text-center">
            <button class="custom-button" >Siguiente</button>
          </div>
        </div>
    </router-link>
      </div>
    </div>

    <footer class="pie-pagina" style="margin-top: auto">
      <Footerprim />
    </footer>
  </div>
</template>

<script>
import Headerprim from "@/components/layout/Headerprim.vue";
import Footerprim from "@/components/layout/Footerprim.vue";

export default {
  components: {
    Headerprim,
    Footerprim,
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&display=swap");

body {
  display: flex;
  flex-direction: column;
  font-family: "Montserrat", sans-serif;
  min-height: 100vh;
  margin: 0;
  background-color: #ffffff;
}

main {
  flex-grow: 1;
}

footer {
  position: absolute;
  bottom: 0;
  width: 100%;
}

.form-group {
  margin-top: 20px;
}

.form-control {
  width: 100%;
  padding: 10px;
  margin-top: 5px;
  margin-bottom: 10px;
  box-sizing: border-box;
}


.custom-button {
  
  width: 120px;
  height: 40px;
  background-color: transparent; 
  color: #000000; 
  border: 2px solid #000000; 
  border-radius: 5px;
  margin-top: 30px;
  
  margin-left: auto;
  margin-right: auto;
  transition: background-color 0.3s, color 0.3s; 
}

.custom-button:hover {
  background-color: #000000; 
  color: #ffffff; 
}


.col-md-12 {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
}

hr {
  border-top: 1px solid #000; 
  margin-top: 20px;
  margin-bottom: 20px; 
}
</style>
