<template>
  <div>
    <Headerprim />
    <main>
      <div
        class="container-fluid"
        style="background-color: #ffffff; padding: 60px; margin-top: 60px"
      >
        <div class="row">
          <div class="col-md-6">
            <h1
              style="
                font-size: 50px;
                font-weight: lighter;
                font-family: 'Montserrat', sans-serif;
              "
            >
              Fibra Andina
            </h1>
            <p
              style="
                font-size: 22px;
                margin-left: 30px;
                margin-top: 50px;
                font-family: 'Montserrat', sans-serif;
              "
            >
              En nuestra empresa, nos enorgullecemos de trabajar con la
              exquisita fibra de alpaca, un material natural de alta calidad y
              suavidad incomparable. Producimos prendas exclusivas utilizando
              esta fina fibra andina, conocida por su calidez, durabilidad y
              suavidad al tacto.
              <br /><br />
              La alpaca, animal originario de los Andes, nos provee de una fibra
              altamente valorada en la industria textil por sus propiedades
              únicas.
            </p>
          </div>
          <div class="col-md-6">
            <img
              src="../assets/img/alpaca.png"
              alt="Fibra Andina"
              style="max-width: 80%; height: auto"
            />
          </div>
        </div>
      </div>
      <div
        class="container-fluid"
        style="background-color: #e3e1e3; padding: 60px; margin-top: 30px"
      >
        <div class="row">
          <div class="col-md-6" style="display: flex; flex-direction: column">
            <h1
              style="
                font-size: 50px;
                font-weight: lighter;
                font-family: 'Montserrat', sans-serif;
              "
            >
              Nuestros
            </h1>
            <h1
              style="
                font-size: 50px;
                font-weight: lighter;
                font-family: 'Montserrat', sans-serif;
                margin-top: -20px;
              "
            >
              trabajadores
            </h1>
            <p
              style="
                font-size: 22px;
                margin-left: 30px;
                margin-top: 50px;
                font-family: 'Montserrat', sans-serif;
              "
            >
              En el corazón de nuestra empresa se encuentran nuestros talentosos
              artesanos, quienes con habilidad y pasión dan vida a cada una de
              nuestras prendas. Nuestro equipo está compuesto por hábiles
              artesanos, cuyas manos expertas han perfeccionado el arte de
              trabajar con la exquisita fibra de alpaca.<br /><br />
              Cada prenda que creamos es el resultado de la meticulosidad y
              dedicación de nuestros trabajadores, quienes fusionan técnicas
              tradicionales con innovación, logrando piezas únicas y de alta
              calidad.
            </p>
          </div>
          <div class="col-md-6">
            <img
              src="../assets/img/trabajadores.png"
              alt="Nuestros trabajadores"
              style="max-width: 65%; height: auto; margin-left: 70px"
            />
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
body {
  position: relative;
  font-family: "Montserrat", sans-serif;
  padding-bottom: 9em;
  min-height: 100vh;
}
a {
  text-decoration: none;
}
footer {
  position: absolute;
  bottom: 0;
  width: 100%;
}
</style>
