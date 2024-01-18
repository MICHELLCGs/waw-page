<template>
  <div>
    <Headerprim />
    <div class="main-content" style="min-height: 100%">
      <div
        class="container-fluid"
        style="
          background-color: #f4ebe0;
          margin-top: 60px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          min-height: 100%;
        "
      >
        <a style="font-size: 40px; text-decoration: none; margin-top: 25px"
          >AYUDA</a
        >
        <div
          style="
            margin-top: 20px;
            background-color: #fcf9f6;
            border: 2px solid #fcf9f6;
            border-radius: 20px;
            width: 800px;
            height: 450px;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            margin-bottom: 20px;
          "
        >
          <p style="margin-top: -40px; font-size: 25px">Contáctanos</p>
          <hr style="width: 80%; border: 1px solid black; margin: 10px 0" />
          <p style="margin: 0; font-size: 18px">
            <br /><b>Correo:</b> correo@gmailcom
          </p>
          <br />
          <p style="margin: 0; font-size: 18px">
            <b>Teléfono:</b> +51 xxxxxxxxx
          </p>
          <br />
          <p style="margin: 0; font-size: 18px"><b>Horarios de atención:</b></p>
          <br />
          <div
            class="card-container"
            style="
              display: flex;
              justify-content: space-around;
              width: 80%;
              margin-top: 40px;
            "
          >
            <div
              class="card"
              style="background-color: #f4ebe0; border: #f4ebe0"
            >
              <p style="margin: 0; font-size: 18px">
                <b>Lunes - Viernes </b> <br />8:00 am a 14:00 pm
              </p>
            </div>
            <div
              class="card"
              style="background-color: #f4ebe0; border: #f4ebe0"
            >
              <p style="margin: 0; font-size: 18px">
                <b>Sábado </b><br />
                8:00 am a 11:00 pm
              </p>
            </div>
            <div
              class="card"
              style="background-color: #f4ebe0; border: #f4ebe0"
            >
              <p style="margin: 0; font-size: 18px">
                <b>Domingo </b><br />
                Cerrado
              </p>
            </div>
          </div>
        </div>
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
  min-height: 100vh;
  margin: 0;
  background-color: #f4ebe0;
}
.card-container {
  display: flex;
  justify-content: space-between;
  width: 100%;
}

.card {
  background-color: #ffffff;
  border: 1px solid #ccc;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 10px;
  width: 30%;
  margin-bottom: 10px;
}
footer {
  position: absolute;
  bottom: 0;
  width: 100%;
}
</style>
