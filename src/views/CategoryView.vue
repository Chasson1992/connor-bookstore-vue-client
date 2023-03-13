<script setup lang="ts">
import type { BookItem } from "@/types";
import TheCategoryNav from "@/components/category/TheCategoryNav.vue";
import TheCategoryBookList from "@/components/category/TheCategoryBookList.vue";

import { useRoute } from "vue-router";
const route = useRoute();

const apiUrl =
  `${location.protocol}//${location.hostname}:` +
  `${location.port === "5173" ? "8080" : location.port}` +
  `${import.meta.env.BASE_URL}/api`;

let response = await fetch(
  `${apiUrl}/categories/name/${route.params.name}/books/`
);
let data = await response.json();
let bookList = data as BookItem[];
</script>

<style scoped>
.category-page {
  display: flex;
  flex-basis: 100%;
}
</style>

<template>
  <div class="category-page">
    <TheCategoryNav></TheCategoryNav>
    <TheCategoryBookList :bookList="bookList"> </TheCategoryBookList>
  </div>
</template>
