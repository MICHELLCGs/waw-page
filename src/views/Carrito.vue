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
  flex-grow: 1; /* Esto permite que el contenido del main ocupe el espacio restante */
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

/* Estilos personalizados para el botón Siguiente */
.custom-button {
  /* Agrega aquí tus estilos personalizados */
  width: 120px;
  height: 40px;
  background-color: transparent; /* Cambiado a transparente */
  color: #000000; /* Color del texto negro */
  border: 2px solid #000000; /* Contorno negro */
  border-radius: 5px;
  margin-top: 30px;
  /* Elimina el margen izquierdo fijo y centra el botón horizontalmente */
  margin-left: auto;
  margin-right: auto;
  transition: background-color 0.3s, color 0.3s; /* Agregado efecto de transición */
}

.custom-button:hover {
  background-color: #000000; /* Color de fondo negro al pasar el ratón */
  color: #ffffff; /* Color del texto blanco al pasar el ratón */
}

/* Asegúrate de que el contenedor (.col-md-12) ocupe el 100% del ancho */
.col-md-12 {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
}

hr {
  border-top: 1px solid #000; /* Color y grosor de la línea */
  margin-top: 20px; /* Espaciado superior */
  margin-bottom: 20px; /* Espaciado inferior */
}
</style>
