<template>
  <div>
    <Headerprim />
    <div class="main-content">
      <div
        class="container-fluid"
        style="
          background-color: #f4ebe0;
          margin-top: 60px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
        "
      >
        <div
          style="
            margin-top: 20px;
            background-color: hsl(30, 50%, 98%);
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
          <p style="margin-top: -10px; font-size: 25px">Cuéntanos</p>

          <input
            type="text"
            style="
              padding: 10px;
              border-radius: 5px;
              border: 1px solid #ccc;
              width: 70%;
              margin-top: 10px;
              margin-bottom: 10px;
            "
            placeholder="Nombres y Apellidos"
          />
          <div
            style="display: flex; justify-content: space-between; width: 70%"
          >
            <input
              type="text"
              style="
                padding: 10px;
                border-radius: 5px;
                border: 1px solid #ccc;
                width: 45%;
              "
              placeholder="Correo Electrónico"
            />
            <input
              type="text"
              style="
                padding: 10px;
                border-radius: 5px;
                border: 1px solid #ccc;
                width: 45%;
              "
              placeholder="Teléfono"
            />
          </div>
          <textarea
            style="
              padding: 10px;
              border-radius: 5px;
              border: 1px solid #ccc;
              width: 70%;
              height: 150px;
              margin-top: 10px;
              margin-bottom: 30px;
            "
            placeholder="Mensaje"
          ></textarea>
          <button
            style="
              background-color: #61392d;
              color: white;
              padding: 10px 20px;
              border: none;
              border-radius: 5px;
              font-size: 16px;
            "
          >
            Enviar
          </button>
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
  position: relative;
  font-family: "Montserrat", sans-serif;
  padding-bottom: 9em;
  min-height: 100vh;
}
body,
button,
input,
textarea {
  font-family: "Montserrat", sans-serif;
}
body {
  margin: 0;
  background-color: #f4ebe0;
}
footer {
  position: absolute;
  bottom: 0;
  width: 100%;
}
</style>
