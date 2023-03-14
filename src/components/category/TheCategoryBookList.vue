<script setup lang="ts">
import type { BookItem } from "@/types";
import CategoryBookListItem from "@/components/category/TheCategoryBookListItem.vue";
import { useBookStore } from "@/stores/BookStore";

const bookStore = useBookStore();
</script>

<style scoped>
ul {
  display: flex;
  flex-wrap: wrap;
  padding: 1em;
  gap: 1em;
}
</style>

<template>
  <ul>
    <template
      v-for="book in bookStore.bookList as BookItem[]"
      :key="book.bookId"
    >
      <category-book-list-item :book="book"></category-book-list-item>
    </template>
  </ul>
</template>
