<template>
  <div>
    <Headerprim />
    <main>
      <div
        class="container-fluid"
        style="
          background-color: #e3e1e3;
          margin-top: 60px;
          margin-bottom: -60px;
        "
      >
        <div class="row container-fluid">
          <div class="col-md-6">
            <h3 style="margin-left: 160px; margin-top: 190px">
              <span style="font-weight: 300">Mística</span>
              <span style="font-weight: bold">&nbsp; artesanal &nbsp;</span>
              <span style="font-weight: 300">tradición</span>
            </h3>
            <a
              class="highlight"
              style="
                margin-left: 260px;
                font-weight: 400;
                font-style: italic;
                font-size: 18px;
              "
              >Lanzamientos</a
            >
          </div>
          <div class="col-md-5">
            <img
              class="img-fluid mx-auto d-block"
              src="../assets/img/modelo2.png"
              alt="Seccion1"
              style="max-width: 66%; height: auto"
            />
          </div>
        </div>
      </div>
      <div
        class="container-fluid"
        style="background-color: #f4ebe0; margin-top: 60px"
      >
        <div class="row container-fluid">
          <div class="col-md-6">
            <h3 style="margin-left: 160px; margin-top: 190px">
              <span style="font-weight: 400">Ropa</span>
              <span style="font-weight: bold; display: block">
                Flexible y Sedosa. Un Saco Tan Cómodo, que Se Adaptará a
                Cualquier Ocasión.</span
              >
            </h3>
            <a
              class="highlight"
              style="
                margin-left: 160px;
                font-weight: 400;
                font-style: italic;
                font-size: 18px;
              "
              >Ver</a
            >
          </div>
          <div class="col-md-5">
            <img
              class="img-fluid mx-auto d-block"
              src="../assets/img/modelo1.png"
              alt="Seccion1"
              style="max-width: 66%; height: auto"
            />
          </div>
        </div>
      </div>
      <div
        class="container-fluid"
        style="background-color: #ffffff; padding: 60px"
      >
        <div class="row" style="background-color: #e8d5c0">
          <div class="col-md-4">
            <img
              class="img-fluid mx-auto d-block"
              src="../assets/img/modelo3.png"
              alt="modelo3"
              style="max-width: 71%; height: auto"
            />
          </div>
          <div class="col-md-4">
            <img
              class="img-fluid mx-auto d-block"
              src="../assets/img/modelo6.png"
              alt="modelo6"
              style="max-width: 58%; height: auto"
            />
          </div>
          <div
            class="col-md-4"
            style="
              background-color: #e8d5c0;
              padding: 10px;
              box-shadow: 10px 0 10px -10px rgba(0, 0, 0, 0.5);
            "
          >
            <img
              class="img-fluid mx-auto d-block"
              src="../assets/img/modelo7.png"
              alt="modelo7"
              style="max-width: 82%; height: auto"
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
import { useRouter } from "vue-router";
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
  min-height: 200vh;
}
.highlight {
  display: inline-block;
  position: relative;
  color: black;
  text-decoration: none;
}

.highlight::after,
.highlight::before {
  content: "";
  position: absolute;
  bottom: -3px;
  left: 50%;
  width: 50%;
  height: 1px;
  background-color: black;
}

.highlight::before {
  transform-origin: right;
  transform: scaleX(1.6) translateX(-10%);
}

.highlight::after {
  transform-origin: left;
  transform: scaleX(0.5) translateX(-100%);
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
