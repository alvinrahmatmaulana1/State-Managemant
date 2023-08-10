import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ProductsViews from '../views/ProductsViews.vue'
import login from '../views/LoginView.vue'
import categori from '../views/CategoriView.vue'
import singleProduct from '../views/SingleProduct.vue'

 const routes = [
    {
      path: '/home',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/produk',
      name: 'Products',
      component: ProductsViews
    },
    {
      path: '/login',
      name: 'Login',
      component: login,
      meta: { requiresGuest: true },
    },
    {
      path: '/categori',
      name: 'Category',
      component: categori
    },
    {
      path: "/product/:id",
      name: "SingleProduct",
      component: singleProduct,
    },
  ];
  const router =  createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    
  routes,
  
});


export default router
