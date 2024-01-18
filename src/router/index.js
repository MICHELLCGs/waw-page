import { createRouter, createWebHistory } from 'vue-router';
import Index from '../views/Index.vue';

const routes = [
  {
    path: '/',
    name: 'index',
    component: Index
  },
  {
    path: "/shop",
    name: "shop",
    component: () => import("@/views/Shop.vue"),
  },
  {
    path: "/marca",
    name: "marca",
    component: () => import("@/views/Nuestramarca.vue"),
  },
  {
    path: "/encuentranos",
    name: "encuentranos",
    component: () => import("@/views/Encuentranos.vue"),
  },
  {
    path: "/perfil",
    name: "perfil",
    component: () => import("@/views/usuario/Perfil.vue"),
  },
  {
    path: "/carrito",
    name: "carrito",
    component: () => import("@/views/Carrito.vue"),
  },
  ,
  {
    path: "/terminos",
    name: "terminos",
    component: () => import("@/views/Terminos.vue"),
  },
  ,
  {
    path: "/ayuda",
    name: "ayuda",
    component: () => import("@/views/Ayuda.vue"),
  },
  ,
  {
    path: "/contactos",
    name: "contactos",
    component: () => import("@/views/Contactos.vue"),
  },
  {
    path: "/pagos",
    name: "pagos",
    component: () => import("@/views/usuario/Pago.vue"),
  },
  {
    path: "/adminlogin",
    name: "adminlogin",
    component: () => import("@/views/admin/AdminLogin.vue"),
  },
  {
    path: "/adminprin",
    name: "adminprin",
    component: () => import("@/views/admin/Adminprin.vue"),
  },
  {
    path: "/adminusu",
    name: "adminusu",
    component: () => import("@/views/admin/Adminusuarios.vue"),
  },
  {
    path: "/adminproductos",
    name: "adminproductos",
    component: () => import("@/views/admin/Adminproductos.vue"),
  },

  {
    path: "/adminpedidos",
    name: "adminpedidos",
    component: () => import("@/views/admin/AdminPedido.vue"),
  },
  {
    path: "/admiadmins",
    name: "admiadmins",
    component: () => import("@/views/admin/Adminadmins.vue"),
  },
 
  
]
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});
export default router;