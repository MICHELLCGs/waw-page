<template>
    <nav class="sidebar">
      <div class="sidebar-header">
        <a>
          <img src="@/assets/img/logo.png" alt="Logo waw" style="height: 40px; margin-bottom: 20px;" class="white-logo">
          <span class="logo-text" style="padding-left: 10px; text-decoration: none; color: white;">WAW</span>
        </a>
      </div>
      <ul class="nav-links">
        <li :class="{ active: isRouteActive('adminprin') }">
          <router-link to="/adminprin">
            <i class="fas fa-tachometer-alt" style="margin-right: 10px;"></i> Dashboard
          </router-link>
        </li>
        <li :class="{ active: isRouteActive('adminusu') }">
          <router-link to="/adminusu">
            <i class="fas fa-users" style="margin-right: 10px;"></i> Usuarios
          </router-link>
        </li>
        <li :class="{ active: isRouteActive('adminproductos') }">
          <router-link to="/adminproductos">
            <i class="fas fa-box" style="margin-right: 10px;"></i> Productos
          </router-link>
        </li>
        <li :class="{ active: isRouteActive('adminpedidos') }">
          <router-link to="/adminpedidos">
            <i class="fas fa-box" style="margin-right: 10px;"></i> Pedidos
          </router-link>
        </li>
        <li :class="{ active: isRouteActive('admiadmins') }">
          <router-link to="/admiadmins">
            <i class="fas fa-user-cog" style="margin-right: 10px;"></i> Administradores
          </router-link>
        </li>
      </ul>

      <ul class="nav-links bottom-links">
        <li :class="{ active: isRouteActive('notificaciones') }">
          <router-link to="/notificaciones">
            <i class="fas fa-bell" style="margin-right: 10px;"></i> Notificaciones
          </router-link>
        </li>
        <li :class="{ active: isRouteActive('config') }">
          <router-link to="/settings">
            <i class="fas fa-cogs" style="margin-right: 10px;"></i> Configuración
          </router-link>
        </li>
      </ul>
    </nav>
    
  </template>
  
  <script>
  export default {
    name: "Sidebaradmin",
    methods: {
      isRouteActive(routeName) {
        return this.$route.name === routeName;
      },
    },
  };
  </script>
  
  <style>
  body {
    font-family: "Montserrat", sans-serif;
    background-color: #E5E5E5;
  }
  
  .sidebar {
    width: 200px;
    height: 100%;
    background-color: #2C2C2C;
    color: white;
    position: fixed;
    top: 0;
    left: 0;
    padding-top: 20px;
    border-top-right-radius: 15px;
    border-bottom-right-radius: 15px;
  }
  
  .sidebar-header {
    text-align: center;
    margin-bottom: 20px;
    border-bottom: 1px solid #555;
  }
  
  .nav-links {
    list-style: none;
    padding: 0;
  }
  
  .nav-links li {
    padding: 10px;
  }
  
  .nav-links li a {
    text-decoration: none;
    color: white;
    display: flex;
    align-items: center;
    transition: background-color 0.3s, color 0.3s;
  }
  
  .nav-links li:hover {
    background-color: #BFB2FF;
  }
  
  .nav-links li.active {
    background-color: #BFB2FF;
  }
  
  .white-logo {
    filter: brightness(0) invert(1);
  }
  
  .nav-links li a:hover {
    color: #2C2C2C;
  }
  
  .nav-links li a:hover i {
    color: #2C2C2C;
  }
  
  .nav-links li.active {
    color: #2C2C2C;
  }
  
  .nav-links li.active i {
    color: #2C2C2C;
  }
  

  .bottom-links {
    position: absolute;
    bottom: 0;
    width: 100%; 
  }

  .bottom-links li {
    padding: 10px;
    transition: background-color 0.3s, color 0.3s;
    width: 100%;
  }

  .bottom-links li a {
    text-decoration: none;
    color: white;
    display: flex;
    align-items: center;
    width: 100%; 
  }

  .bottom-links li:hover {
    background-color: #BFB2FF;
  }

  .bottom-links li.active {
    background-color: #BFB2FF;
  }

  .bottom-links li a:hover {
    color: #2C2C2C;
  }

  .bottom-links li a:hover i {
    color: #2C2C2C;
  }

  .bottom-links li.active {
    color: #2C2C2C;
  }

  .bottom-links li.active i {
    color: #2C2C2C;
  }
  </style>
  