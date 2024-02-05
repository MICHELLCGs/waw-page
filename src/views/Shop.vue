<template>
  <div>
    <Headerprim />
    <main>
      <div
        class="container-fluid"
        style="
          margin-top: 80px;
        "
      >
      <label for="filterDropdown" style="margin-left: 40px; margin-top: 20px; margin-right: 20px;">Filtros:</label>
        <div class="custom-dropdown">
          <select id="filterDropdown" v-model="selectedFilter">
            <option value="mayorMenor">Mayor a menor precio</option>
            <option value="menorMayor">Menor a mayor precio</option>
            <option value="tendencia">Tendencia</option>
          </select>
          
        </div>
        <a style="margin:20px; font-size:40px"><center>Chompas</center></a>
        <div class="row container-fluid">
          
          <div class="col-md-4" style="padding:65px">
            <router-link to="/prenda">
            <img src="@/assets/img/ropa1.png" alt="Imagen 1" style="width: 100%;">
            <p>Lacy collar sweater</p>
            <p style="font-weight: normal; font-size: 1.2em;">Easy Fit</p>
            <p style="font-size: 0.8em;">Basic Length</p>
            <p style="color: black; font-weight: bold;">$88.00</p>
          </router-link>
          </div>
        
          <div class="col-md-4" style="padding:65px; margin-top: 35px;">
            <img src="@/assets/img/ropa2.png" alt="Imagen 2" style="width: 100%;">
            <p>Lacy collar sweater</p>
            <p style="font-weight: normal; font-size: 1.2em;">Easy Fit</p>
            <p style="font-size: 0.8em;">Basic Length</p>
            <p style="color: black; font-weight: bold;">$88.00</p>
          </div>
          <div class="col-md-4" style="padding:65px; " >
            <img src="@/assets/img/ropa3.png" alt="Imagen 3" style="width: 100%;">
            <p>Lacy collar sweater</p>
            <p style="font-weight: normal; font-size: 1.2em;">Easy Fit</p>
            <p style="font-size: 0.8em;">Basic Length</p>
            <p style="color: black; font-weight: bold;">$88.00</p>
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
  data() {
    return {
      selectedFilter: null, //No hay filtros
    };
  },
};
</script>

<style>
a {
  text-decoration: none;
}
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
.custom-dropdown {
  position: relative;
  display: inline-block;
}
p{
  color: black !important;
}

</style>
