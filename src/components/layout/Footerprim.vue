<template>
<footer style="background-color: #E1C6AB; padding-top: 10px; padding-bottom: 30px; padding-right: 15px;">
    
    <div class="d-flex justify-content-end align-items-center" style="border-radius: 20px; overflow: hidden; background-color: white; max-width: 160px; margin-left: auto; margin-top: 10px;">
      <img src="@/assets/img/facebook.png" alt="face" style="height: 32px; padding-right: 30px; margin-bottom: 10px; margin-top: 15px;">
      <img src="@/assets/img/instagram.png" alt="face" style="height: 32px; padding-right: 30px; margin-bottom: 10px; margin-top: 12px;">
    </div>

    <div class="container-fluid footer-links"> 
  <div class="d-flex">
    <div class="mb-2 mr-4">
      <router-link :to="{ name: 'terminos' }">
        <a class="dropdown-item" :class="{ active: isRouteActive('terminos') }" style="margin-left: 287px; color: #341D16; text-decoration: none; font-size: 25px; font-weight: bold; font-family: 'Montserrat', sans-serif;">
          Términos y condiciones
        </a>
      </router-link>
    </div>

    <div class="mb-2">
      <router-link :to="{ name: 'ayuda' }"> 
        <a class="dropdown-item" :class="{ active: isRouteActive('ayuda') }" style="margin-left: 180px; color: #341D16; text-decoration: none; font-size: 25px; font-weight: bold; font-family: 'Montserrat', sans-serif;">
          Ayuda
        </a>
      </router-link>
    </div>

    <div class="mb-2">
      <router-link :to="{ name: 'contactos' }">
        <a class="dropdown-item" :class="{ active: isRouteActive('contactos') }" style="left: 180px; margin-left: 180px; color: #341D16; text-decoration: none; font-size: 25px; font-weight: bold; font-family: 'Montserrat', sans-serif;">
          Contáctanos
        </a>
      </router-link>
    </div>
  </div>
</div>
</footer>
</template>
<script>
export default {
  name: "Footerprim",
  methods: {
    isRouteActive(routeName) {
      return this.$route.name === routeName;
    },
  },
}
</script>
<style>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&display=swap');

body {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  margin: 0;
}

footer {
  margin-top: auto;
}

/* Evitar resaltado de color para los enlaces activos */
.footer-links a {
  background-color: transparent !important;
}

/* Estilo específico para los enlaces activos si es necesario */
.footer-links a.active {
  color: #341D16 !important;
  /* Otros estilos específicos si es necesario */
}
</style>