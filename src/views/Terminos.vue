<template>
  <div>
    <Headerprim />
    <main>
      <div
        class="container-fluid"
        style="background-color: #e3e1e3; padding: 160px"
      >
        <div>
          <a style="font-size: 38px"> TÉRMINOS Y CONDICIONES </a>
          <a>
            <br /><br />
            Bienvenido/a a WAW, a continuación se detallan los términos y
            condiciones de uso que rigen nuestra relación con respecto al uso de
            este sitio web. Al acceder a este sitio y utilizar nuestros
            servicios, aceptas estos términos y condiciones en su totalidad. Por
            favor, lee detenidamente esta sección antes de utilizar este sitio
            web.<br />
            <br /><b>Uso Aceptable:</b> <br />
            <br />
            Este sitio web es proporcionado para tu uso personal y no comercial.
            No debes utilizar este sitio de ninguna manera que cause, o pueda
            causar, daño al sitio web o afecte su disponibilidad o
            accesibilidad. <br /><br /><b> Privacidad:</b> <br />
            <br />
            La privacidad de nuestros usuarios es importante para nosotros. Lee
            nuestra Política de Privacidad para comprender cómo recopilamos,
            utilizamos y protegemos tu información personal. <br /><br /><b>
              Propiedad Intelectual:</b
            >
            <br />
            <br />
            Todo el contenido presente en este sitio, incluyendo textos,
            gráficos, logotipos, imágenes, audio, video y software, es propiedad
            exclusiva de WAW o de nuestros licenciantes, y está protegido por
            leyes de propiedad intelectual. <br />
            <br /><b> Enlaces Externos:</b> <br />
            <br />
            Nuestro sitio web puede contener enlaces a otros sitios web que no
            son controlados por [Nombre de la Empresa]. No asumimos
            responsabilidad alguna por el contenido o prácticas de privacidad de
            dichos sitios. <br /><br /><b> Modificaciones de los Términos:</b>
            <br />
            <br />Nos reservamos el derecho de revisar estos términos y
            condiciones en cualquier momento. Las revisiones serán efectivas tan
            pronto como se publiquen en este sitio web. El uso continuado del
            sitio después de dichas modificaciones constituye la aceptación de
            las mismas. <br /><br /><b> Limitación de Responsabilidad:</b>
            <br />
            <br /><br />WAW no será responsable ante ti en relación con el
            contenido, uso o de cualquier manera en conexión con este sitio web
            por cualquier pérdida directa, indirecta, especial, incidental o
            consecuente. <br /><br /><b> Legislación Aplicable:</b> <br />
            <br />Estos términos y condiciones se rigen e interpretan de acuerdo
            con las leyes vigentes. Cualquier disputa relacionada con estos
            términos y condiciones estará sujeta a la jurisdicción exclusiva de
            los tribunales correspondientes.
          </a>
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
a {
  text-decoration: none;
}

footer {
  position: absolute;
  bottom: 0;
  width: 100%;
}
</style>
