<template>
  <div class="main-container">
    <Sidebaradmin />
    <div class="content-container">
      <header>
        <h2>Usuarios</h2>
      </header>
      <div class="users-container">
        <table class="user-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Nombre</th>
              <th>Email</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="user in users" :key="user.id">
              <td>{{ user.id }}</td>
              <td>{{ user.name }}</td>
              <td>{{ user.email }}</td>
              <td>
                <button
                  @click="editUser(user.id)"
                  style="margin-right: 10px; background-color: #fdc467"
                >
                  Editar
                </button>
                <button
                  @click="deleteUser(user.id)"
                  style="background-color: #f2777a"
                >
                  Eliminar
                </button>
              </td>
            </tr>
          </tbody>
        </table>

        <button @click="openAddUserModal" style="background-color: #81b6ea">
          Agregar Usuario
        </button>
      </div>
    </div>
  </div>
  <!-- modal -->
  <div v-if="showEditModal" class="modal">
    <!-- Contenido del modal -->
    <div class="modal-content">
      <h3>Editar Usuario</h3>
      <label for="editedUserName">Nombre:</label>
      <input type="text" v-model="editedUserName" id="editedUserName" />

      <label for="editedUserEmail">Correo:</label>
      <input type="email" v-model="editedUserEmail" id="editedUserEmail" />

      <label for="editedUserPassword">Contraseña:</label>
      <input
        type="password"
        v-model="editedUserPassword"
        id="editedUserPassword"
      />

      <button @click="saveEditedUser">Guardar Cambios</button>
      <button @click="closeEditModal">Cerrar Modal</button>
    </div>
  </div>
  <!-- modal 2-->
  <div v-if="showAddUserModal" class="modal">
    <!-- Contenido del modal -->
    <div class="modal-content">
      <h3>Agregar Nuevo Usuario</h3>
      <label for="newUserName">Nombre:</label>
      <input type="text" v-model="newUserName" id="newUserName" />

      <label for="newUserEmail">Correo:</label>
      <input type="email" v-model="newUserEmail" id="newUserEmail" />

      <label for="newUserPassword">Contraseña:</label>
      <input type="password" v-model="newUserPassword" id="newUserPassword" />

      <button @click="saveNewUser">Guardar Usuario</button>
      <button @click="closeAddUserModal">Cancelar</button>
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
      users: [
        { id: 1, name: "Usuario 1", email: "usuario1@example.com" },
        { id: 2, name: "Usuario 2", email: "usuario2@example.com" },
      ],
      showEditModal: false,
      editedUserId: null,
      editedUserName: "",
      editedUserEmail: "",
      editedUserPassword: "",

      showAddUserModal: false,
      newUserName: "",
      newUserEmail: "",
      newUserPassword: "",
    };
  },
  methods: {
    editUser(userId) {
      console.log(`Editar usuario con ID: ${userId}`);
      this.editedUserId = userId;
      const user = this.users.find((u) => u.id === userId);
      this.editedUserName = user.name;
      this.editedUserEmail = user.email;
     
      this.openEditModal();
    },
    deleteUser(userId) {
      console.log(`Eliminar usuario con ID: ${userId}`);
    },
    addUser() {
      console.log("Agregar nuevo usuario");
    },
    openEditModal() {
      this.showEditModal = true;
    },

    closeEditModal() {
      this.showEditModal = false;
    },
    saveEditedUser() {
      const editedUserIndex = this.users.findIndex(
        (u) => u.id === this.editedUserId
      );
      this.users[editedUserIndex].name = this.editedUserName;
      this.users[editedUserIndex].email = this.editedUserEmail;

      this.closeEditModal();
    },
    openAddUserModal() {
      this.showAddUserModal = true;
    },
    closeAddUserModal() {
      this.showAddUserModal = false;
  
      this.newUserName = "";
      this.newUserEmail = "";
      this.newUserPassword = "";
    },
    saveNewUser() {
     
      const newUser = {
        id: this.users.length + 1, 
        name: this.newUserName,
        email: this.newUserEmail,
      };
      this.users.push(newUser);

   
      this.closeAddUserModal();
    },

    deleteUser(userId) {
      const confirmDelete = confirm("¿Estás seguro de que deseas eliminar este usuario?");
      if (confirmDelete) {
        console.log(`Eliminar usuario con ID: ${userId}`);


        const userIndex = this.users.findIndex((u) => u.id === userId);

 
        if (userIndex !== -1) {
          this.users.splice(userIndex, 1);
          console.log(`Usuario con ID ${userId} eliminado.`);
        }
      }
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

.users-container {
  background-color: white;
  border-radius: 8px;
  padding: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  margin-top: 20px;
}
.user-table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 10px;
}

.user-table th,
.user-table td {
  border: 1px solid #ddd;
  padding: 8px;
  text-align: left;
}

.user-table th {
  background-color: #333;
  color: white;
}

.user-table tr:nth-child(even) {
  background-color: #f2f2f2;
}


.users-container button {
  margin-top: 10px;
  padding: 8px;
  background-color: #4caf50;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}
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


.modal-content label {
  display: block;
  margin-top: 10px;
}

.modal-content input,
.modal-content textarea {
  width: 100%;
  padding: 8px;
  margin-top: 5px;
  margin-bottom: 10px;
  box-sizing: border-box;
}


.modal-content button {
  margin-top: 10px;
  padding: 8px;
  background-color: #4caf50;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}


.modal-content button.cancel-btn {
  background-color: #f2777a;
}

</style>
