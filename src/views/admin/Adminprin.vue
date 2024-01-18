<template>
    <div class="main-container">
      <Sidebaradmin />
      <div class="content-container">
        <header>
 
          <h2>Bienvenido</h2>
        </header>
        <div class="dashboard-container">

          <canvas ref="myChart"></canvas>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import Sidebaradmin from "@/components/layout/Sidebaradmin.vue";
  import Chart from "chart.js/auto";
  
  export default {
    components: {
      Sidebaradmin,
    },
    mounted() {

      this.createChart();
    },
    methods: {
      createChart() {
        const ctx = this.$refs.myChart.getContext("2d");
        

        const data = {
          labels: ["Enero", "Febrero", "Marzo", "Abril", "Mayo"],
          datasets: [
            {
              label: "Datos de productos",
              data: [12, 19, 3, 5, 2],
              backgroundColor: "rgba(75, 192, 192, 0.2)",
              borderColor: "rgba(75, 192, 192, 1)",
              borderWidth: 1,
            },
          ],
        };
  
        const options = {
          scales: {
            y: {
              beginAtZero: true,
            },
          },
        };
  
        new Chart(ctx, {
          type: "bar",
          data: data,
          options: options,
        });
      },
    },
  };
  </script>
  
  <style>
  .main-container {
    display: flex;
  }
  
  .content-container {
    margin-left: 200px;
    padding: 20px;
    flex: 1;
  }
  

  header {
    background-color: #333;
    color: white;
    padding: 10px;
  }
  
  .dashboard-container {
    background-color: white;
    border-radius: 8px;
    padding: 20px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    margin-top: 20px;
  }
  
  
  canvas {
    max-width: 80%;
    height: auto;
  }
  </style>
  