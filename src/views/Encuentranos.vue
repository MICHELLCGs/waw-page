<template>
  <div>
    <Headerprim />
    <main>
      <div
        class="container-fluid"
        style="background-color: #e3e1e3; padding: 60px; margin-bottom: -20px"
      >
        <div class="row">
          <div
            class="container-fluid"
            style="background-color: #ffffff; margin-top: 60px"
          >
            <div class="row">
              <div class="col-md-6">
                <a
                  style="
                    font-size: 50px;
                    font-weight: lighter;
                    font-family: 'Montserrat', sans-serif;
                    margin-left: 25px;
                  "
                >
                  Módulo 1
                </a>
                <div style="text-align: center; margin: 20px">
                  <a style="font-size: 18px">
                    <br />Desde nuestros inicios con módulos en hoteles, hemos
                    llevado la calidad de nuestras prendas de alpaca al mercado
                    turístico, estableciendo relaciones sólidas con viajeros.
                    <br /><br /><br /><br />
                    Dirección: xxxxxxxxxxxxxxxxxxxxx <br /><br /><br /><br />
                    Atención: <br />
                    Lunes - Viernes <br />
                    08:00 am a 04:00 pm
                  </a>
                </div>
              </div>
              <div class="col-md-6">
                <img
                  class="img-fluid mx-auto d-block"
                  src="../assets/img/modulo1.png"
                  alt="Seccion1"
                  style="max-width: 100%; height: auto"
                />
              </div>
            </div>
          </div>
          <!-- Separador -->
          <div class="container-fluid" style="background-color: #ffffff">
            <div class="row" style="margin-top: 30px">
              <div class="col-md-6">
                <a
                  style="
                    font-size: 50px;
                    font-weight: lighter;
                    font-family: 'Montserrat', sans-serif;
                    margin-left: 25px;
                  "
                >
                  Módulo 2
                </a>
                <div style="text-align: center; margin: 20px">
                  <a style="font-size: 18px">
                    <br />Nos enorgullecemos de llevar la elegancia y la calidad
                    de nuestras prendas de alpaca directamente a los visitantes
                    a través de nuestros exclusivos módulos ubicados en selectos
                    hoteles. Estos espacios son mucho más que puntos de venta;
                    representan un encuentro entre la tradición andina y los
                    viajeros que buscan experiencias auténticas.
                    <br /><br /><br /><br />
                    Dirección: xxxxxxxxxxxxxxxxxxxxx <br /><br /><br /><br />
                    Atención: <br />
                    Lunes - Viernes <br />
                    08:00 am a 04:00 pm
                  </a>
                </div>
              </div>
              <div class="col-md-6">
                <img
                  class="img-fluid mx-auto d-block"
                  src="../assets/img/modulo2.png"
                  alt="Seccion1"
                  style="max-width: 100%; height: auto; margin-top: 10px"
                />
              </div>
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
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&display=swap");

body {
  position: relative;
  font-family: "Montserrat", sans-serif;
  padding-bottom: 9em;
  min-height: 100vh;
}

footer {
  position: absolute;
  bottom: 0;
  width: 100%;
}
</style>
