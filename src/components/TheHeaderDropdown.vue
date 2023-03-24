<script setup lang="ts">
import type { CategoryItem } from "@/types";
import { useCategoryStore } from "@/stores/CategoryStore";
import { useCartStore } from "@/stores/CartStore";

const cartStore = useCartStore();
const categoryStore = useCategoryStore();
</script>

<style scoped>
.header-dropdown {
  position: relative;
}

.header-dropdown ul {
  background-color: rgba(250, 250, 250);
  display: none;
}

.header-dropdown li {
  padding: 0.25em 0.5em;
  transition: all 200ms linear;
}

.header-dropdown li:hover {
  color: var(--primary-color);
}

.header-dropdown:hover ul {
  display: block;
  position: absolute;
  min-width: 8em;
  z-index: 1;
  cursor: pointer;
}

.header-dropdown-and-cart {
  display: flex;
  justify-content: flex-end;
}

.header-dropdown-and-cart > * {
  max-height: fit-content;
  margin: auto;
}

.fa-shopping-cart {
  font-size: 1.5rem;
}

.fa-shopping-cart::after {
  content: attr(value);
  background: rgb(255, 255, 255);
  border: var(--default-text-color) solid 1px;
  border-radius: 50%;
  padding: 0.3rem 0.4rem;
  position: relative;
  left: -6px;
  top: -14px;
  font-size: 1rem;
}

.login-button {
  display: flex;
  gap: 0.5rem;
}
</style>

<template>
  <div class="header-dropdown-and-cart">
    <div class="header-dropdown">
      <button class="button">
        <i class="fa-solid fa-caret-down fa-fw"></i> Categories
      </button>
      <ul>
        <div
          v-for="category in categoryStore.categoryList as CategoryItem[]"
          :key="category.categoryId"
        >
          <router-link
            :to="'/category/' + category.name"
            custom
            v-slot="{ navigate, isActive, isExactActive }"
          >
            <li
              role="link"
              @click="navigate"
              :class="{ active: isActive, 'exact-active': isExactActive }"
            >
              {{ category.name }}
            </li>
          </router-link>
        </div>
      </ul>
    </div>
    <button class="button login-button">
      <i class="fa-solid fa-user"></i>
      <div>Hi, Connor!</div>
    </button>
    <router-link to="/cart">
      <i class="fa fa-shopping-cart" :value="cartStore.count"></i>
    </router-link>
  </div>
</template>
