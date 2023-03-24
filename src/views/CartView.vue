<script setup lang="ts">
import TheCartTable from "@/components/cart/TheCartTable.vue";
import type router from "@/router";
import { useCartStore } from "@/stores/CartStore";
const cartStore = useCartStore();
</script>
<style scoped>
.cart-view {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex-basis: 100%;
  padding: 1rem 1rem 4rem 1rem;
}

.cart-buttons {
  display: grid;
  grid-template-columns: minmax(10em, 20em) minmax(10em, 20em) minmax(
      10em,
      20em
    );
  justify-items: center;
  justify-content: center;
}

.cart-button:hover {
  color: unset;
}

.cart-button {
  width: fit-content;
}

.cart-checkout-button {
  background-color: var(--primary-color-dark);
  transition: background-color 0.1s ease;
  color: white;
}

h1 {
  margin: 1em auto;
  text-align: center;
}
</style>

<template>
  <span class="cart-view">
    <span class="cart-table">
      <h1 v-if="!cartStore.cart.empty && cartStore.cart.numberOfItems === 1">
        Your Cart ({{ cartStore.cart.numberOfItems }} item)
      </h1>
      <h1 v-else-if="!cartStore.cart.empty && cartStore.cart.numberOfItems > 1">
        Your Cart ({{ cartStore.cart.numberOfItems }} items)
      </h1>
      <h1 v-else>Your Cart is empty</h1>
      <TheCartTable></TheCartTable>
    </span>
    <div class="cart-buttons">
      <button class="cart-button button" @click="cartStore.clearCart()">
        Clear Cart
      </button>
      <button class="cart-button button" @click="$router.back()">
        Continue Shopping
      </button>
      <RouterLink to="/checkout" class="cart-checkout-button button">
        Proceed To Checkout &#8594;
      </RouterLink>
    </div>
  </span>
</template>
