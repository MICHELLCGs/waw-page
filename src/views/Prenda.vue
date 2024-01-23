<template>
    <div>
      <Headerprim />
      <main>
        <div class="container-fluid" style="margin-top: 90px">
          <div class="row" style="margin-left: 130px">
            <div class="col-md-4">
              <a style="margin-left: 60px; font-size: 30px">Lacy collar sweater<br /></a>
              <img src="@/assets/img/ropa2.png" alt="Imagen 2" style="width: 90%; margin-top: 20px" />
            </div>
            <div class="col-md-4" style="margin-top: 150px; margin-left: 300px">
              <a style="font-weight: 100;">Lacy collar sweater <br>50% baby alpaca <br>50% merino wool <br><br><br>Hand-knitted <br>Hand-dyed yarn<br> Limited edition of 14</a>
              <div style="display: flex; align-items: center; margin-top: 10px;">
                <a style="margin-right: 10px;">Color: </a>
                <div style="width: 20px; height: 20px; background-color: #789c63; margin-right: 10px; border: 1px solid black;"></div>
                <a>gris verdoso</a>
              </div>
              <a> <br>Talla:  </a>
              <div class="size-options">
                <a :class="{ 'selected': selectedSize === 'XXS' }" @click="selectSize('XXS')">XXS</a>
                <a :class="{ 'selected': selectedSize === 'XS' }" @click="selectSize('XS')">XS</a>
                <a :class="{ 'selected': selectedSize === 'S' }" @click="selectSize('S')">S</a>
                <a :class="{ 'selected': selectedSize === 'M' }" @click="selectSize('M')">M</a>
                <a :class="{ 'selected': selectedSize === 'L' }" @click="selectSize('L')">L</a>
                <a :class="{ 'selected': selectedSize === 'XL' }" @click="selectSize('XL')">XL</a>
                <a :class="{ 'selected': selectedSize === '1X' }" @click="selectSize('1X')">1X</a>
              </div>
              <a style="margin-top: 80px;" type="button" class="btn btn-outline-dark"> Añade al carrito</a>
            </div>
          </div>
        </div>
      </main>
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
        selectedSize: null,
      };
    },
    methods: {
      selectSize(size) {
        this.selectedSize = size;
      },
    },
  };
  </script>
  
  <style>
  @import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&display=swap");
  
  body {
    position: relative;
    font-family: "Montserrat", sans-serif;
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
  
  .size-options {
    display: flex;
    gap: 10px;
    margin-top: 5px;
  }
  
  .size-options a {
    display: inline-block;
    width: 30px;
    height: 30px;
    background-color: #fff;
    color: #000;
    border: 1px solid black;
    border-radius: 5px; 
    text-align: center;
    line-height: 30px;
    cursor: pointer;
  }
  
  .size-options a:hover {
    background-color: #f0f0f0; 
  }
  .size-options a.selected {
    background-color: #f0f0f0; 
  }
  </style>
  