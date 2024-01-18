<template>
    <div class="admin-page-container no-scrollbar">
      <div class="login-form-container" style="margin-top: 110px;">
        <form @submit.prevent="submitLogin">
            <a><img src="@/assets/img/logo.png" alt="Logo waw" style="height: 40px; padding-left: 5px; margin-bottom: 20px;">
          <span class="logo-text" style="padding-left: 10px; text-decoration: none;">WAW</span></a>
            <a style="font-size: 18px;"><br>Inicia Sesión</a>
          <div class="form-group" style="margin-top: 20px;">
            <label for="username">Nombre:</label>
            <center><input type="text" id="username" v-model="username" required></center>
          </div>
  
          <div class="form-group">
            <label for="password">Contraseña:</label>
            <center><input type="password" id="password" v-model="password" required></center>
          </div>
  
          <center><button type="submit" class="custom-button">Iniciar sesión</button></center>
        </form>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        username: '',
        password: ''
      };
    },
    methods: {
      submitLogin() {
        // Aquí puedes manejar la lógica de inicio de sesión
        console.log('Iniciando sesión con:', this.username, this.password);
      }
    }
  };
  </script>
  
  <style>
  body {
    font-family: 'Montserrat', sans-serif;
    overflow: hidden;
    background-color: #D8E2D5;
  }
  
  .admin-page-container {
    max-width: 1000px;
    margin: 0 auto;
  }
  
  .admin-page-container.no-scrollbar::-webkit-scrollbar {
    display: none;
  }
  
  .login-form-container {
    background-color: white;
    padding: 20px;
    width: 300px;
    height: 400px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 15px; /* Ajusta el valor según tus preferencias */
  }
  
  .form-group {
    margin-bottom: 15px;
  }
  
  input,
button {
  padding: 10px;
  margin-top: 5px;
  border: 1px solid #ccc;
  border-radius: 8px; /* Ajusta el valor según tus preferencias */
}

button.custom-button {
  background-color: transparent;
  color: #000;
  border: 2px solid #000;
  cursor: pointer;
  margin-top: 30px;
  transition: background-color 0.3s, color 0.3s;
}

button.custom-button:hover {
  background-color: #000;
  color: #fff;
}
  </style>
  