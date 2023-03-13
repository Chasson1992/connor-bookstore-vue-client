<script setup lang="ts">
import type { BookItem } from "@/types";
import TheCategoryNav from "@/components/category/TheCategoryNav.vue";
import TheCategoryBookList from "@/components/category/TheCategoryBookList.vue";
import { apiUrl } from "@/api";
import { useRoute } from "vue-router";
const route = useRoute();

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
