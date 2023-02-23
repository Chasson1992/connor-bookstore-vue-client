<script setup lang="ts">
import { provide } from "vue";
import sourceData from "@/db.json";
import type { BookItem } from "@/types";
import TheCategoryNav from "@/components/category/TheCategoryNav.vue";
import TheCategoryBookList from "@/components/category/TheCategoryBookList.vue";

const bookList = sourceData.books as BookItem[];
provide("bookList", bookList);
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
