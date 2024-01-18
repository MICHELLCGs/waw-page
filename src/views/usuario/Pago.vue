<template>
    <div>
      <Headerprim />
      <main>
        <div
          class="container-fluid"
          style="margin-top: 100px; margin-bottom: 60px"
        >
          <div class="row container-fluid">
            <div class="col-md-6">
              <a style="font-size: 20px">Pago</a>
            </div>
            <div class="col-md-5">
              <!-- Recuadro con texto -->
              <div class="recuadro">
                <p>Resumen</p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footerprim />
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
    background-color: white;
  }
  
  footer {
    position: absolute;
    bottom: 0;
    width: 100%;
  }
  
  .recuadro {
    background-color: #D9D9D9; 
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 5px;
    margin-top: 20px;
    margin-left:30px;
  }
  </style>
  