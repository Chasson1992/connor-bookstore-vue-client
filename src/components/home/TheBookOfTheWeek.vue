<script setup lang="ts">
import type { BookItem } from "@/types";

const props = defineProps<{
  booksOfTheWeek: BookItem[];
}>();

const bookImageFileName = function (book: BookItem): string {
  let name = book.title.toLowerCase();
  name = name.replace(/ /g, "-");
  name = name.replace(/'/g, "");
  return `${name}.png`;
};

function getImageUrl(name: string) {
  return new URL(`../../assets/images/books/${name}`, import.meta.url).href;
}
</script>

<style scoped>
.book-of-the-week {
  flex-basis: 50%;
  flex-grow: 1;

  gap: 1rem;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.book-of-the-week h2 {
  color: white;
  font-weight: lighter;
}

.book-of-the-week-spinner {
  width: 600px;
  height: 300px;
  border: white solid;
  border-radius: 12px;
  padding: 1rem 4rem;

  display: flex;
  justify-content: space-between;
  align-items: center;
}

.book-of-the-week-spinner i {
  color: white;
  font-size: 1.625rem;
}

.book-of-the-week-spinner button {
  background: none;
  border: none;
  cursor: pointer;
}

.book-of-the-week-spinner img {
  height: 200px;
  width: 135px;
}

@media screen and (max-width: 1000px) {
  .book-of-the-week {
    display: none;
  }
}
</style>

<template>
  <div class="book-of-the-week">
    <h2>Books of the Week!</h2>
    <div class="book-of-the-week-spinner">
      <div v-for="book in props.booksOfTheWeek" :key="book.bookId">
        <router-link to="/">
          <img :src="getImageUrl(bookImageFileName(book))" :alt="book.title" />
        </router-link>
      </div>
    </div>
  </div>
</template>
