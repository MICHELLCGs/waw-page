<template>
  <main>
    <div class="container-fluid" style="margin-top: 20px">
      <a style="font-size: 30px"><center>Personaliza</center></a>
      <div class="row container-fluid" style="margin-top: 20px">
        <div
          class="card col-md-4"
          style="
            padding-left: 100px;
            background-color: transparent;
            border: none;
          "
        >
          <a>COLOR:</a>
          <div class="color-circles" style="margin-bottom: 20px">
            <div
              class="color-circle"
              style="background-color: #231337"
              @click="selectColor('#231337')"
            ></div>
            <div
              class="color-circle"
              style="background-color: white"
              @click="selectColor('white')"
            ></div>
            <div
              class="color-circle"
              style="background-color: gray"
              @click="selectColor('gray')"
            ></div>
          </div>
          <a> <br />LARGO DE MANGA:</a>
          <div class="radio-buttons">
            <label class="radio-label">
              <input
                type="radio"
                name="mangaType"
                value="corta"
                @change="selectMangaType('corta')"
              />
              <span class="radio-custom"></span> Corta
            </label>
            <label class="radio-label">
              <input
                type="radio"
                name="mangaType"
                value="larga"
                @change="selectMangaType('larga')"
              />
              <span class="radio-custom"></span> Larga
            </label>
          </div>
          <a> <br />TIPO DE CUELLO:</a>
          <div class="radio-buttons">
            <label class="radio-label">
              <input type="radio" name="cuelloType" value="redondo" />
              <span class="radio-custom"></span> Redondo
            </label>
            <label class="radio-label">
              <input type="radio" name="cuelloType" value="v-alto" />
              <span class="radio-custom"></span> V Alto
            </label>
            <label class="radio-label">
              <input type="radio" name="cuelloType" value="medio-alto" />
              <span class="radio-custom"></span> Medio Alto
            </label>
            <label class="radio-label">
              <input type="radio" name="cuelloType" value="camisa" />
              <span class="radio-custom"></span> Camisa
            </label>
          </div>
          <a> <br />TIPOS DE MANGA:</a>
          <div class="radio-buttons">
            <label class="radio-label">
              <input type="radio" name="mangaStyle" value="setin" />
              <span class="radio-custom"></span> Setin
            </label>
            <label class="radio-label">
              <input type="radio" name="mangaStyle" value="setin-redonda" />
              <span class="radio-custom"></span> Setin Redonda
            </label>
            <label class="radio-label">
              <input type="radio" name="mangaStyle" value="ranglan" />
              <span class="radio-custom"></span> Ranglan
            </label>
          </div>
        </div>
        <div class="col-md-4" style="height: 700px">
          <iframe
            :src="iframeURL"
            frameborder="0"
            width="100%"
            height="100%"
          ></iframe>
        </div>
        <div class="col-md-4" >
          <a> <br />TIPOS DE PUNTOS:</a>
          <div class="radio-buttons">
            <label class="radio-label">
              <input type="radio" name="puntosType" value="llana" />
              <span class="radio-custom"></span> Llana o Jersey
            </label>
            <label class="radio-label">
              <input
                type="radio"
                name="puntosType"
                value="estructurado-trenzas"
              />
              <span class="radio-custom"></span> Estructurado Trenzas
            </label>
            <label class="radio-label">
              <input type="radio" name="puntosType" value="calado" />
              <span class="radio-custom"></span> Calado
            </label>
          </div>
          <a> <br />BORDADO:</a>
          <div>
            <label>
              <input type="checkbox" v-model="bordadoEnabled" />
              Habilitar bordado
            </label>
            <br />
            <label v-if="bordadoEnabled">
              Costo del bordado: {{ costoBordado }}
            </label>
            <br />
            <label v-if="bordadoEnabled">
              <input
                type="text"
                v-model="textoBordado"
                placeholder="Texto para bordado"
              />
            </label>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  data() {
    return {
      iframeURL:
        "https://my.spline.design/tshirtbodyfemaledarkcopy-692e982f467edfa7140dcab53ea18c8a/",
      selectedColor: null,
      selectedMangaType: null,
      bordadoEnabled: false,
      textoBordado: "",
      costoBordado: 10,
    };
  },
  watch: {
    bordadoEnabled: function () {},
  },
  methods: {
    selectColor(color) {
      this.selectedColor = color;
      this.updateIframeURL();
    },
    selectMangaType(mangaType) {
      this.selectedMangaType = mangaType;
      this.updateIframeURL();
    },
    updateIframeURL() {
      if (this.selectedColor) {
        if (!this.selectedMangaType) {
          this.iframeURL =
            this.selectedColor === "#231337"
              ? "https://my.spline.design/tshirtbodyfemaledarkcopy-692e982f467edfa7140dcab53ea18c8a/"
              : "https://my.spline.design/tshirtbodyfemalecopy-7290e51f4eccb5e3b625c884bdad699b/";
        } else {
          if (this.selectedColor === "#231337") {
            this.iframeURL =
              this.selectedMangaType === "corta"
                ? "https://my.spline.design/tshirtbodyfemaledarkcopy-692e982f467edfa7140dcab53ea18c8a/"
                : "https://my.spline.design/tshirtlongsleevefemaledarkcopy-7693e7c7b5abbbd2eaf031683c85535f/";
          } else if (this.selectedColor === "white") {
            this.iframeURL =
              this.selectedMangaType === "corta"
                ? "https://my.spline.design/tshirtbodyfemalecopy-7290e51f4eccb5e3b625c884bdad699b/"
                : "https://my.spline.design/tshirtlongsleevefemaledarkcopycopy-a9a532e06ba80daaf11f0d5f9681ce01/";
          } else if (this.selectedColor === "gray") {
            this.iframeURL = "DEFAULT_URL_FOR_GRAY_COLOR";
          }
        }
      }
    },
  },
};
</script>

<style>
body {
  background-color: #c5c5c5;
  overflow: hidden;
  font-family: "Montserrat", sans-serif;
}

.color-circles {
  display: flex;
  margin-top: 10px;
}

.color-circle {
  width: 20px;
  height: 20px;
  border-radius: 50%;
  margin-right: 10px;
  cursor: pointer;
}

.radio-buttons {
  margin-top: 10px;
}

.radio-label {
  display: flex;
  align-items: center;
  margin-bottom: 5px;
}

.radio-custom {
  width: 20px;
  height: 20px;
  border: 2px solid #231337;
  border-radius: 50%;
  margin-right: 5px;
  display: inline-block;
}

input[type="radio"] {
  display: none;
}

input[type="radio"]:checked + .radio-custom {
  background-color: #231337;
}
</style>
