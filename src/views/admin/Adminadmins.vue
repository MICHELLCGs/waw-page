<template>
    <div class="main-container">
      <Sidebaradmin />
      <div class="content-container">
        <header>
          <h2>Administradores</h2>
        </header>
        <div class="admins-container">
          <table class="admin-table">
            <thead>
              <tr>
                <th>ID</th>
                <th>Nombre</th>
                <th>Correo</th>
                <th>Acciones</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="admin in admins" :key="admin.id">
                <td>{{ admin.id }}</td>
                <td>{{ admin.name }}</td>
                <td>{{ admin.email }}</td>
                <td>
                  <button
                    @click="editAdmin(admin.id)"
                    style="margin-right: 10px; background-color: #fdc467"
                  >
                    Editar
                  </button>
                  <button
                    @click="deleteAdmin(admin.id)"
                    style="background-color: #f2777a"
                  >
                    Eliminar
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
  
          <button @click="openAddAdminModal" style="background-color: #81b6ea">
            Agregar Administrador
          </button>
        </div>
      </div>
    </div>
    <!-- modal -->
    <div v-if="showEditAdminModal" class="modal">
      <!-- Contenido del modal -->
      <div class="modal-content">
        <h3>Editar Administrador</h3>
        <label for="editedAdminName">Nombre:</label>
        <input type="text" v-model="editedAdminName" id="editedAdminName" />
  
        <label for="editedAdminEmail">Correo:</label>
        <input type="email" v-model="editedAdminEmail" id="editedAdminEmail" />
  
        <label for="editedAdminPassword">Contraseña:</label>
        <input
          type="password"
          v-model="editedAdminPassword"
          id="editedAdminPassword"
        />
  
        <button @click="saveEditedAdmin">Guardar Cambios</button>
        <button @click="closeEditAdminModal">Cerrar Modal</button>
      </div>
    </div>
    <!-- modal -->
    <div v-if="showAddAdminModal" class="modal">
      <!-- Contenido del modal -->
      <div class="modal-content">
        <h3>Agregar Nuevo Administrador</h3>
        <label for="newAdminName">Nombre:</label>
        <input type="text" v-model="newAdminName" id="newAdminName" />
  
        <label for="newAdminEmail">Correo:</label>
        <input type="email" v-model="newAdminEmail" id="newAdminEmail" />
  
        <label for="newAdminPassword">Contraseña:</label>
        <input type="password" v-model="newAdminPassword" id="newAdminPassword" />
  
        <button @click="saveNewAdmin">Guardar Administrador</button>
        <button @click="closeAddAdminModal">Cancelar</button>
      </div>
    </div>
  </template>
  
  <script>
  import Sidebaradmin from "@/components/layout/Sidebaradmin.vue";
  
  export default {
    components: {
      Sidebaradmin,
    },
    data() {
      return {
        admins: [
          { id: 1, name: "Admin 1", email: "admin1@example.com" },
          { id: 2, name: "Admin 2", email: "admin2@example.com" },
        ],
        showEditAdminModal: false,
        editedAdminId: null,
        editedAdminName: "",
        editedAdminEmail: "",
        editedAdminPassword: "",
  
        showAddAdminModal: false,
        newAdminName: "",
        newAdminEmail: "",
        newAdminPassword: "",
      };
    },
    methods: {
      editAdmin(adminId) {
        console.log(`Editar administrador con ID: ${adminId}`);
        this.editedAdminId = adminId;
        const admin = this.admins.find((a) => a.id === adminId);
        this.editedAdminName = admin.name;
        this.editedAdminEmail = admin.email;
        // También puedes establecer la contraseña u otros campos según tus necesidades
        this.openEditAdminModal();
      },
      deleteAdmin(adminId) {
        const confirmDelete = confirm("¿Estás seguro de que deseas eliminar este administrador?");
        if (confirmDelete) {
          console.log(`Eliminar administrador con ID: ${adminId}`);
  
          // Encuentra el índice del administrador en el array
          const adminIndex = this.admins.findIndex((a) => a.id === adminId);
  
          // Elimina el administrador del array
          if (adminIndex !== -1) {
            this.admins.splice(adminIndex, 1);
            console.log(`Administrador con ID ${adminId} eliminado.`);
          }
        }
      },
      openEditAdminModal() {
        this.showEditAdminModal = true;
      },
      closeEditAdminModal() {
        this.showEditAdminModal = false;
      },
      saveEditedAdmin() {
        const editedAdminIndex = this.admins.findIndex(
          (a) => a.id === this.editedAdminId
        );
        this.admins[editedAdminIndex].name = this.editedAdminName;
        this.admins[editedAdminIndex].email = this.editedAdminEmail;
  
        this.closeEditAdminModal();
      },
      openAddAdminModal() {
        this.showAddAdminModal = true;
      },
      closeAddAdminModal() {
        this.showAddAdminModal = false;
        // Limpiar los campos del formulario al cerrar el modal
        this.newAdminName = "";
        this.newAdminEmail = "";
        this.newAdminPassword = "";
      },
      saveNewAdmin() {
        // Lógica para guardar el nuevo administrador en la lista de administradores
        const newAdmin = {
          id: this.admins.length + 1, // Generar un nuevo ID (podrías usar un método más robusto)
          name: this.newAdminName,
          email: this.newAdminEmail,
        };
        this.admins.push(newAdmin);
  
        // Cerrar el modal después de guardar el nuevo administrador
        this.closeAddAdminModal();
      },
    },
  };
  </script>
  
  <style>
  .admins-container {
    background-color: white;
    border-radius: 8px;
    padding: 20px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    margin-top: 20px;
  }
  
  .admin-table {
    width: 100%;
    border-collapse: collapse;
    margin-top: 10px;
  }
  
  .admin-table th,
  .admin-table td {
    border: 1px solid #ddd;
    padding: 8px;
    text-align: left;
  }
  
  .admin-table th {
    background-color: #333;
    color: white;
  }
  
  .admin-table tr:nth-child(even) {
    background-color: #f2f2f2;
  }
  
  /* Estilos para el botón de agregar administrador */
  .admins-container button {
    margin-top: 10px;
    padding: 8px;
    background-color: #4caf50;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }
  
  /* Estilos para la modal de administradores */
  .modal {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  .modal-content {
    background-color: white;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    width: 60%;
    max-width: 600px;
  }
  
  /* Estilos específicos para los campos de entrada en los modales de administradores */
  .modal-content label {
    display: block;
    margin-top: 10px;
  }
  
  .modal-content input {
    width: 100%;
    padding: 8px;
    margin-top: 5px;
    margin-bottom: 10px;
    box-sizing: border-box;
  }
  
  /* Estilos para los botones en los modales de administradores */
  .modal-content button {
    margin-top: 10px;
    padding: 8px;
    background-color: #4caf50;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }
  
  /* Estilo para el botón de cancelar en los modales de administradores */
  .modal-content button.cancel-btn {
    background-color: #f2777a;
  }
  </style>
  