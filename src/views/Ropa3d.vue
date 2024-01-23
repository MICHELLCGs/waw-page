<template>
    <main>
      <div class="container-fluid" style="margin-top: 5px;">
        <div class="row container-fluid">
          <div class="col-md-4" style="margin-top: 20px;">
            <a>COLOR:</a>
            <div class="color-circles" style="margin-bottom: 20px;">
              <div class="color-circle" style="background-color: #231337;" @click="selectColor('#231337')"></div>
              <div class="color-circle" style="background-color: white;" @click="selectColor('white')"></div>
              <div class="color-circle" style="background-color: gray;" @click="selectColor('gray')"></div>
            </div>
            <a>MANGA:</a>
            <div class="radio-buttons">
            <label class="radio-label">
              <input type="radio" name="mangaType" value="corta" @change="selectMangaType('corta')">
              <span class="radio-custom"></span> Corta
            </label>
            <label class="radio-label">
              <input type="radio" name="mangaType" value="larga" @change="selectMangaType('larga')">
              <span class="radio-custom"></span> Larga
            </label>
          </div>
          </div>
          <div class="col-md-4" style="height: 700px;">
            <iframe :src="iframeURL" frameborder="0" width="100%" height="100%"></iframe>
          </div>
          <div class="col-md-4">
            
          </div>
        </div>
      </div>
    </main>
  </template>
  
  <script>
  export default {
    data() {
      return {
        iframeURL: 'https://my.spline.design/tshirtbodyfemaledarkcopy-692e982f467edfa7140dcab53ea18c8a/',
        selectedColor: null,
        selectedMangaType: null
      };
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
            
            this.iframeURL = this.selectedColor === '#231337'
              ? 'https://my.spline.design/tshirtbodyfemaledarkcopy-692e982f467edfa7140dcab53ea18c8a/'
              : 'https://my.spline.design/tshirtbodyfemalecopy-7290e51f4eccb5e3b625c884bdad699b/';
          } else {
         
            if (this.selectedColor === '#231337') {
              this.iframeURL = this.selectedMangaType === 'corta'
                ? 'https://my.spline.design/tshirtbodyfemaledarkcopy-692e982f467edfa7140dcab53ea18c8a/'
                : 'https://my.spline.design/tshirtlongsleevefemaledarkcopy-7693e7c7b5abbbd2eaf031683c85535f/';
            } else if (this.selectedColor === 'white') {
              this.iframeURL = this.selectedMangaType === 'corta'
                ? 'https://my.spline.design/tshirtbodyfemalecopy-7290e51f4eccb5e3b625c884bdad699b/'
                : 'https://my.spline.design/tshirtlongsleevefemaledarkcopycopy-a9a532e06ba80daaf11f0d5f9681ce01/';
            } else if (this.selectedColor === 'gray') {
            
              this.iframeURL = 'DEFAULT_URL_FOR_GRAY_COLOR';
            }
          }
        }
      }
    }
  };
  </script>
  
  <style>
  body {
    background-color: #c5c5c5;
    overflow: hidden;
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
  