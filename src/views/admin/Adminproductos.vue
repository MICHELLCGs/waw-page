<template>
    <div class="main-container">
      <Sidebaradmin />
      <div class="content-container">
        <header>
          <h2>Productos</h2>
        </header>
        <div class="products-container">
          <table class="product-table">
            <thead>
              <tr>
                <th>ID</th>
                <th>Nombre</th>
                <th>Descripción</th>
                <th>Precio</th>
                <th>Categorías</th>
                <th>Imagen</th>
                <th>Acciones</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="product in products" :key="product.id">
                <td>{{ product.id }}</td>
                <td>{{ product.name }}</td>
                <td>{{ product.description }}</td>
                <td>{{ product.price }}</td>
                <td>{{ product.categories.join(', ') }}</td>
                <td>
                  <img :src="getProductImageUrl(product.id)" alt="Product Image" style="max-width: 100px; max-height: 100px;" />
                </td>
                <td>
                  <button @click="editProduct(product.id)" style="margin-right: 10px; background-color: #fdc467">
                    Editar
                  </button>
                  <button @click="deleteProduct(product.id)" style="background-color: #f2777a">
                    Eliminar
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
  
          <button @click="openAddProductModal" style="background-color: #81b6ea">
            Agregar Producto
          </button>
        </div>
      </div>
    </div>
  
    <div v-if="showEditProductModal" class="modal">
      <div class="modal-content">
        <h3>Editar Producto</h3>
        <label for="editedProductName">Nombre:</label>
        <input type="text" v-model="editedProductName" id="editedProductName" />
  
        <label for="editedProductDescription">Descripción:</label>
        <textarea v-model="editedProductDescription" id="editedProductDescription"></textarea>
  
        <label for="editedProductPrice">Precio:</label>
        <input type="number" v-model="editedProductPrice" id="editedProductPrice" />
  
        <label for="editedProductCategories">Categorías:</label>
        <input type="text" v-model="editedProductCategories" id="editedProductCategories" />
  
        <label for="editedProductImage">Imagen URL:</label>
        <input type="text" v-model="editedProductImage" id="editedProductImage" />
        <div class="button-container">
        <button @click="saveEditedProduct">Guardar Cambios</button>
        <button @click="closeEditProductModal" class="cancel-btn">Cerrar</button>
    </div>
      </div>
    </div>
  
    <div v-if="showAddProductModal" class="modal">
      <div class="modal-content">
        <h3>Agregar Nuevo Producto</h3>
        <label for="newProductName">Nombre:</label>
        <input type="text" v-model="newProductName" id="newProductName" />
  
        <label for="newProductDescription">Descripción:</label>
        <textarea v-model="newProductDescription" id="newProductDescription"></textarea>
  
        <label for="newProductPrice">Precio:</label>
        <input type="number" v-model="newProductPrice" id="newProductPrice" />
  
        <label for="newProductCategories">Categorías:</label>
        <input type="text" v-model="newProductCategories" id="newProductCategories" />
  
        <label for="newProductImage">Imagen URL:</label>
        <input type="text" v-model="newProductImage" id="newProductImage" />
        <div class="button-container">
        <button @click="saveNewProduct">Guardar Producto</button>
        <button @click="closeAddProductModal" class="cancel-btn">Cancelar</button>
    </div>  
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
        products: [
          { id: 1, name: "Producto 1", description: "Descripción del Producto 1", price: 50, categories: ["Chompas", "Alpaca"], image: "ropa1.png" },
          { id: 2, name: "Producto 2", description: "Descripción del Producto 2", price: 75, categories: ["Sacos", "Ponchos", "Alpaca - Oveja"], image: "ropa2.png" },
        ],
        showEditProductModal: false,
        editedProductId: null,
        editedProductName: "",
        editedProductDescription: "",
        editedProductPrice: 0,
        editedProductCategories: "",
        editedProductImage: "",
  
        showAddProductModal: false,
        newProductName: "",
        newProductDescription: "",
        newProductPrice: 0,
        newProductCategories: "",
        newProductImage: "",
      };
    },
    methods: {
      editProduct(productId) {
        this.editedProductId = productId;
        const product = this.products.find((p) => p.id === productId);
        this.editedProductName = product.name;
        this.editedProductDescription = product.description;
        this.editedProductPrice = product.price;
        this.editedProductCategories = product.categories.join(', ');
        this.editedProductImage = product.image;
        this.openEditProductModal();
      },
      deleteProduct(productId) {
        const confirmDelete = confirm("¿Estás seguro de que deseas eliminar este producto?");
        if (confirmDelete) {
          const productIndex = this.products.findIndex((p) => p.id === productId);
  
          if (productIndex !== -1) {
            this.products.splice(productIndex, 1);
          }
        }
      },
      openAddProductModal() {
        this.showAddProductModal = true;
      },
      closeAddProductModal() {
        this.showAddProductModal = false;
        this.newProductName = "";
        this.newProductDescription = "";
        this.newProductPrice = 0;
        this.newProductCategories = "";
        this.newProductImage = "";
      },
      saveNewProduct() {
        if (!this.newProductImage.toLowerCase().endsWith('.png')) {
          alert('La URL de la imagen debe tener la extensión PNG.');
          return;
        }
  
        const newProduct = {
          id: this.products.length + 1,
          name: this.newProductName,
          description: this.newProductDescription,
          price: this.newProductPrice,
          categories: this.newProductCategories.split(',').map(category => category.trim()),
          image: this.newProductImage,
        };
        this.products.push(newProduct);
        this.closeAddProductModal();
      },
      openEditProductModal() {
        this.showEditProductModal = true;
      },
      closeEditProductModal() {
        this.showEditProductModal = false;
        this.editedProductName = "";
        this.editedProductDescription = "";
        this.editedProductPrice = 0;
        this.editedProductCategories = "";
        this.editedProductImage = "";
      },
      saveEditedProduct() {
        if (!this.editedProductImage.toLowerCase().endsWith('.png')) {
          alert('La URL de la imagen debe tener la extensión PNG.');
          return;
        }
  
        const editedProductIndex = this.products.findIndex(
          (p) => p.id === this.editedProductId
        );
        this.products[editedProductIndex].name = this.editedProductName;
        this.products[editedProductIndex].description = this.editedProductDescription;
        this.products[editedProductIndex].price = this.editedProductPrice;
        this.products[editedProductIndex].categories = this.editedProductCategories.split(',').map(category => category.trim());
        this.products[editedProductIndex].image = this.editedProductImage;
        this.closeEditProductModal();
      },
      getProductImageUrl(productId) {
        const product = this.products.find((p) => p.id === productId);
        return require(`@/assets/img/${product.image}`);
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

.products-container {
  background-color: white;
  border-radius: 8px;
  padding: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  margin-top: 20px;
}

.product-table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 10px;
}

.product-table th,
.product-table td {
  border: 1px solid #ddd;
  padding: 8px;
  text-align: left;
}

.product-table th {
  background-color: #333;
  color: white;
}

.product-table tr:nth-child(even) {
  background-color: #f2f2f2;
}


.products-container button {
  margin-top: 10px;
  margin-right: 10px;
  padding: 8px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}


.products-container button.add-product-btn {
  background-color: #81b6ea;
  color: white;
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
  margin-right: 10px; 
  padding: 8px;
  background-color: #4caf50;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.modal-content button.cancel-btn {
  background-color: #f2777a;
  margin-right: 0; 
}
.modal-content .button-container {
  display: flex;
  justify-content: space-between;
}
</style>