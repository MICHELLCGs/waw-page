<template>
  <Headerprim />
  <div>
    <main >
        
      <div
        class="container-fluid"
        style="
          background-color: #f4ebe0;
          margin-top: 60px;
          margin-bottom: 60px;
        "
      >
        <div class="row container-fluid">
          <p
            style="
              color: #000;
              font-size: 30px;
              font-weight: lighter;
              margin-top: 30px;
            "
          >
            Bienvenido, <a>Usuario</a>
          </p>
          <div class="dashed-line"></div>
          <a style="margin-top: 40px; font-weight: normal; font-size: 20px"
            >Información personal</a
          >
          <div class="col-md-6">
            <form>
              <div class="form-group">
                <label for="nombre">Nombre</label>
                <input
                  type="text"
                  id="nombre"
                  name="nombre"
                  placeholder="Nombre"
                  class="form-control"
                />
              </div>
              <div class="form-group">
                <label for="apellido">Apellido</label>
                <input
                  type="text"
                  id="apellido"
                  name="apellido"
                  placeholder="Apellido"
                  class="form-control"
                />
              </div>
              <div class="form-group">
                <label for="correo">Correo</label>
                <input
                  type="email"
                  id="correo"
                  name="correo"
                  placeholder="Correo"
                  class="form-control"
                />
              </div>
              <button
                type="button"
                class="perso btn-square"
                @click="guardarInformacion"
              >
                Guardar
              </button>
            </form>
          </div>
          <div class="col-md-5">
            <a>Historial de ordenes</a>
            <div
              class="recuadro"
              style="
                background-color: #fff;
                padding: 20px;
                border: 2px solid #000;
              "
            >
              <!-- imagen y recuadro -->
              <img
                src="tu-imagen.jpg"
                alt="Imagen"
                style="max-width: 100%; height: auto"
              />
              <p>Texto dentro del recuadro</p>
            </div>
          </div>
        </div>
      </div>
    </main>

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
  methods: {
    guardarInformacion() {
      // Lógica para guardar datos
      alert("Información guardada");
    },
  },
};
</script>

<style>
body {
  position: relative;
  font-family: "Montserrat", sans-serif;
  padding-bottom: 9em;
  min-height: 100vh;
  background-color: #f4ebe0;
}

footer {
  position: absolute;
  bottom: 0;
  width: 100%;
}

.dashed-line {
  width: 100%;
  margin-top: 20px;
  margin-left: 15px;
  margin-right: 15px;
  background-image: repeating-linear-gradient(
    180deg,
    #000,
    #000 1px,
    transparent 1px,
    transparent 5px
  );
  height: 5px;
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

.perso {
  background-color: transparent;
  color: #000;
  border: 2px solid #000;
}

.perso:hover {
  background-color: #000;
  color: #fff;
}

.recuadro {
  margin-top: 20px;
}
</style>
