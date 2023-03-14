<script setup lang="ts">
import { watch } from "vue";
import TheCategoryNav from "@/components/category/TheCategoryNav.vue";
import TheCategoryBookList from "@/components/category/TheCategoryBookList.vue";
import { useRoute } from "vue-router";
import { useBookStore } from "@/stores/BookStore";

const route = useRoute();

const bookStore = useBookStore();

watch(
  () => route.params.name,
  (newName) => {
    bookStore.fetchBooks(newName as string);
  },
  { immediate: true }
);
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
    <TheCategoryBookList></TheCategoryBookList>
  </div>
</template>
