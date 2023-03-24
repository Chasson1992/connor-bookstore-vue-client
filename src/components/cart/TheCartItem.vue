<script setup lang="ts">
import { asDollarsAndCents } from "@/main";
import { useCartStore } from "@/stores/CartStore";
import type { BookItem, ShoppingCartItem } from "@/types";
const cartStore = useCartStore();

const bookImageFileName = function (book: BookItem): string {
  let name = book.title.toLowerCase();
  name = name.replace(/ /g, "-");
  name = name.replace(/'/g, "");
  return `${name}.png`;
};

function getImageUrl(name: string) {
  return new URL(`../../assets/images/books/${name}`, import.meta.url).href;
}
const updateCart = function (book: BookItem, quantity: number) {
  cartStore.updateBookQuantity(book, quantity);
};

const props = defineProps<{
  cartItem: ShoppingCartItem;
}>();
</script>

<style scoped>
.cart-item {
  display: contents;
}

.cart-item > * {
  padding: 0.5rem;
}

.cart-book-image {
  display: inline-flex;
  justify-content: flex-start;
  align-items: center;

  border-left: 1px solid black;
  border-bottom: 1px solid black;

  gap: 0rem 1rem;
}

.cart-book-image img {
  height: 150px;
  width: 100px;
}

.cart-book-title {
  display: block;
}

.square {
  width: 100px;
  height: 100px;
}

.wide-rect {
  width: 125px;
  height: 100px;
}

.cart-book-price {
  display: inline-flex;
  align-items: center;
  justify-content: center;

  padding-left: 1em;

  border-bottom: 1px solid black;
}

.cart-book-subtotal {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding-left: 1em;
  padding-right: 1em;

  border-bottom: 1px solid black;
  border-right: 1px solid black;
}

/* Increment/decrement buttons */
.cart-book-quantity {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;
  border-bottom: 1px solid black;
}

.decrement,
.increment {
  display: inline-flex;
  text-align: center;
  align-self: center;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  width: 24px;
  height: 25px;
  font-size: x-large;
  background-color: var(--primary-color-dark);
  color: white;
}

.decrement:hover,
.increment:hover {
  cursor: pointer;
}
.quantity {
  padding: 1.25rem;
  font-size: large;
}
</style>

<template>
  <li class="cart-item">
    <div class="cart-book-image">
      <img
        :src="getImageUrl(bookImageFileName(props.cartItem.book))"
        :alt="props.cartItem.book.title"
      />
      <div class="cart-book-title">
        <h3>{{ props.cartItem.book.title }}</h3>
        By {{ props.cartItem.book.author }}
      </div>
    </div>
    <div class="cart-book-price">
      {{ asDollarsAndCents(props.cartItem.book.price) }}
    </div>
    <div class="cart-book-quantity">
      <a
        class="decrement"
        @click="updateCart(props.cartItem.book, props.cartItem.quantity - 1)"
      >
        -
      </a>
      <span class="quantity">{{ props.cartItem.quantity }}</span>
      <a
        class="increment"
        @click="updateCart(props.cartItem.book, props.cartItem.quantity + 1)"
      >
        +
      </a>
    </div>
    <div class="cart-book-subtotal">
      {{
        asDollarsAndCents(props.cartItem.quantity * props.cartItem.book.price)
      }}
    </div>
  </li>
</template>
