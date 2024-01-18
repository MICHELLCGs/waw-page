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
      <a>Filtros</a>
        <div class="row container-fluid">
        </div>
      </div>
      </main>
      <footer class="pie-pagina" style="margin-top: auto">
    <Footerprim/>
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

a {
  text-decoration: none;
}
body {
  position: relative;
  font-family: "Montserrat", sans-serif;
  padding-bottom: 9em;
  min-height: 200vh;
}
footer {
  position: absolute;
  bottom: 0;
  width: 100%;
}
</style>
