<template>
    <div class="main-container">
      <Sidebaradmin />
      <div class="content-container">
        <header>
          <h2>Pedidos</h2>
        </header>
        <div class="orders-container">
          <table class="order-table">
            <thead>
              <tr>
                <th>ID</th>
                <th>Cliente</th>
                <th>Productos</th>
                <th>Dirección de Envío</th>
                <th>Acciones</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="order in orders" :key="order.id">
                <td>{{ order.id }}</td>
                <td>{{ order.customerName }}</td>
                <td>{{ order.products.join(', ') }}</td>
                <td>{{ order.shippingAddress }}</td>
                <td>
                  <button
                    @click="editOrder(order.id)"
                    style="margin-right: 10px; background-color: #fdc467"
                  >
                    Editar
                  </button>
                  <button
                    @click="deleteOrder(order.id)"
                    style="background-color: #f2777a"
                  >
                    Eliminar
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
  
          <button @click="openAddOrderModal" style="background-color: #81b6ea">
            Agregar Pedido
          </button>
        </div>
      </div>
    </div>
    <!-- modal -->
    <div v-if="showEditOrderModal" class="modal">

      <div class="modal-content">
        <h3>Editar Pedido</h3>
        <label for="editedCustomerName">Cliente:</label>
        <input type="text" v-model="editedCustomerName" id="editedCustomerName" />
  
        <label for="editedProducts">Productos:</label>
        <textarea v-model="editedProducts" id="editedProducts"></textarea>
  
        <label for="editedShippingAddress">Dirección de Envío:</label>
        <textarea v-model="editedShippingAddress" id="editedShippingAddress"></textarea>
  
        <button @click="saveEditedOrder">Guardar Cambios</button>
        <button @click="closeEditOrderModal">Cerrar Modal</button>
      </div>
    </div>
    <!-- modal -->
    <div v-if="showAddOrderModal" class="modal">

      <div class="modal-content">
        <h3>Agregar Nuevo Pedido</h3>
        <label for="newCustomerName">Cliente:</label>
        <input type="text" v-model="newCustomerName" id="newCustomerName" />
  
        <label for="newProducts">Productos:</label>
        <textarea v-model="newProducts" id="newProducts"></textarea>
  
        <label for="newShippingAddress">Dirección de Envío:</label>
        <textarea v-model="newShippingAddress" id="newShippingAddress"></textarea>
  
        <button @click="saveNewOrder">Guardar Pedido</button>
        <button @click="closeAddOrderModal">Cancelar</button>
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
        orders: [
          {
            id: 1,
            customerName: "Cliente 1",
            products: ["Producto 1", "Producto 2"],
            shippingAddress: "Dirección 1",
          },
          {
            id: 2,
            customerName: "Cliente 2",
            products: ["Producto 3", "Producto 4"],
            shippingAddress: "Dirección 2",
          },
        ],
        showEditOrderModal: false,
        editedOrderId: null,
        editedCustomerName: "",
        editedProducts: "",
        editedShippingAddress: "",
  
        showAddOrderModal: false,
        newCustomerName: "",
        newProducts: "",
        newShippingAddress: "",
      };
    },
    methods: {
      editOrder(orderId) {
        console.log(`Editar pedido con ID: ${orderId}`);
        this.editedOrderId = orderId;
        const order = this.orders.find((o) => o.id === orderId);
        this.editedCustomerName = order.customerName;
        this.editedProducts = order.products.join('\n');
        this.editedShippingAddress = order.shippingAddress;
        this.openEditOrderModal();
      },
      deleteOrder(orderId) {
        const confirmDelete = confirm("¿Estás seguro de que deseas eliminar este pedido?");
        if (confirmDelete) {
          console.log(`Eliminar pedido con ID: ${orderId}`);
  
          const orderIndex = this.orders.findIndex((o) => o.id === orderId);
  
          if (orderIndex !== -1) {
            this.orders.splice(orderIndex, 1);
            console.log(`Pedido con ID ${orderId} eliminado.`);
          }
        }
      },
      openEditOrderModal() {
        this.showEditOrderModal = true;
      },
      closeEditOrderModal() {
        this.showEditOrderModal = false;
      },
      saveEditedOrder() {
        const editedOrderIndex = this.orders.findIndex(
          (o) => o.id === this.editedOrderId
        );
        this.orders[editedOrderIndex].customerName = this.editedCustomerName;
        this.orders[editedOrderIndex].products = this.editedProducts.split('\n');
        this.orders[editedOrderIndex].shippingAddress = this.editedShippingAddress;
  
        this.closeEditOrderModal();
      },
      openAddOrderModal() {
        this.showAddOrderModal = true;
      },
      closeAddOrderModal() {
        this.showAddOrderModal = false;
        this.newCustomerName = "";
        this.newProducts = "";
        this.newShippingAddress = "";
      },
      saveNewOrder() {
        const newOrder = {
          id: this.orders.length + 1,
          customerName: this.newCustomerName,
          products: this.newProducts.split('\n'),
          shippingAddress: this.newShippingAddress,
        };
        this.orders.push(newOrder);
  
        this.closeAddOrderModal();
      },
    },
  };
  </script>
  
  <style>
  .orders-container {
    background-color: white;
    border-radius: 8px;
    padding: 20px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    margin-top: 20px;
  }
  
  .order-table {
    width: 100%;
    border-collapse: collapse;
    margin-top: 10px;
  }
  
  .order-table th,
  .order-table td {
    border: 1px solid #ddd;
    padding: 8px;
    text-align: left;
  }
  
  .order-table th {
    background-color: #333;
    color: white;
  }
  
  .order-table tr:nth-child(even) {
    background-color: #f2f2f2;
  }
  
  .orders-container button {
    margin-top: 10px;
    padding: 8px;
    background-color: #81b6ea;
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
  
  /* Estilos para los botones en los modales de pedidos */
  .modal-content button {
    margin-top: 10px;
    padding: 8px;
    background-color: #4caf50;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }
  
  /* Estilo para el botón de cancelar en los modales de pedidos */
  .modal-content button.cancel-btn {
    background-color: #f2777a;
  }
  </style>
  