<script setup lang="ts">
import { asDollarsAndCents } from "@/main";
import { useCartStore } from "@/stores/CartStore";
import TheCartBook from "./TheCartItem.vue";
import type { ShoppingCartItem } from "@/types";
const cartStore = useCartStore();

function subtotal(): string {
  let subtotal: number = 0;

  cartStore.cart.items.forEach((item) => {
    subtotal += item.book.price * item.quantity;
  });

  return asDollarsAndCents(subtotal);
}
</script>

<style scoped>
.cart-table {
  display: grid;
  grid-template-columns:
    minmax(20em, 35em) minmax(3em, 10em) minmax(3em, 10em)
    minmax(1em, 6em);
  width: fit-content;
  margin: 0 auto;
  padding: 1rem 1rem 3rem 1rem;
}

ul {
  display: contents;
}

ul > li {
  display: contents;
}

.table-heading {
  background-color: #000000;
  color: white;
}

.table-heading > * {
  background-color: #000000;
  padding: 0.5em;
  text-align: center;
}

.heading-book {
  text-align: left;
}

.total {
  padding: 2rem 1rem;
  text-align: right;
}
</style>

<template>
  <div class="cart-table" v-if="!cartStore.cart.empty">
    <ul>
      <li class="table-heading">
        <div class="heading-book">Book</div>
        <div class="heading-price">Price</div>
        <div class="heading-quantity">Quantity</div>
        <div class="heading-subtotal">Amount</div>
      </li>
    </ul>
    <template
      v-for="item in cartStore.cart.items as ShoppingCartItem[]"
      :key="item.book.bookId"
    >
      <TheCartBook :cartItem="item"></TheCartBook>
    </template>
    <ul>
      <h3 class="total">Total {{ subtotal() }}</h3>
    </ul>
  </div>
</template>
