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
      path: "/home",
      name: "slash-home",
      component: () => import("@/views/HomeView.vue"),
    },
    {
      path: "/index.html",
      name: "index-home",
      component: () => import("@/views/HomeView.vue"),
    },
    {
      path: "/category",
      name: "category-default",
      component: () => import("@/views/CategoryView.vue"),
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
    {
      path: "/confirmation",
      name: "confirmation-view",
      component: () => import("@/views/ConfirmationView.vue"),
    },
    {
      path: "/:pathMatch(.*)*",
      name: "404",
      component: () => import("@/views/404View.vue"),
    },
  ],
});

export default router;
