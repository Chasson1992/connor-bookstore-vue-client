import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: () => import("@/views/HomeView.vue"),
    },
    {
      path: "/category/:name",
      name: "category-view",
      component: () => import("@/views/CategoryView.vue"),
    },
    {
      path: "/cart",
      name: "cart-view",
      component: () => import("@/views/CartView.vue"),
    },
    {
      path: "/checkout",
      name: "checkout-view",
      component: () => import("@/views/CheckoutView.vue"),
    },
  ],
});

export default router;
