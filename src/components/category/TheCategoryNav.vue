<script setup lang="ts">
import type { CategoryItem } from "@/types";

const apiUrl =
  `${location.protocol}//${location.hostname}:` +
  `${location.port === "5173" ? "8080" : location.port}` +
  `${import.meta.env.BASE_URL}/api`;

let response = await fetch(`${apiUrl}/categories/`);
let data = await response.json();
let categoryList = data as CategoryItem[];
</script>

<style scoped>
.category-nav {
  border-right: 1px solid #eaecef;
  padding: 1.25rem 0rem;
  width: 20rem;
}

.categories-label {
  font-weight: bold;
  color: #000;
  padding: 0.35rem 1.5rem 0.35rem 1.25rem;
}

.category-buttons {
  display: flex;
  flex-direction: column;
  text-align: left;
}

.category-buttons > li {
  flex-grow: 1;
}

.category-button {
  display: inline-block;
  border-left: 0.25rem solid transparent;
  padding: 0.35rem 1rem 0.35rem 2rem;
}

.category-button:active {
  border-left: 0.25rem solid var(--primary-color);
}

.router-link-active {
  border-left: 0.25rem solid var(--primary-color);
  color: var(--primary-color);
}

@media screen and (max-width: 600px) {
  .category-nav {
    display: none;
  }
}
</style>

<template>
  <nav class="category-nav">
    <h3 class="categories-label">Category</h3>
    <ul class="category-buttons">
      <li v-for="category in categoryList" :key="category.categoryId">
        <router-link
          :to="'/category/' + category.name"
          class="button category-button"
        >
          {{ category.name }}
        </router-link>
      </li>
    </ul>
  </nav>
</template>
