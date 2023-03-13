<script setup lang="ts">
import { defineProps } from "vue";
import type { BookItem } from "@/types";

const props = defineProps<{
  book: BookItem;
}>();

const bookImageFileName = function (book: BookItem): string {
  let name = book.title.toLowerCase();
  name = name.replace(/ /g, "-");
  name = name.replace(/'/g, "");
  return `${name}.png`;
};

function getBookImageUrl(name: string) {
  return new URL(`../../assets/images/books/${name}`, import.meta.url).href
}
</script>

<style scoped>
#book-boxes {
  display: flex;
  flex-wrap: wrap;
  padding: 1em;
  gap: 1em;
}

.book-box {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 1em;
  gap: 1.25em;
  width: 200px;
  max-height: 450px;
  min-height: fit-content;

  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
}

.book-box:hover {
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
}

.book-box button {
  background-color: var(--primary-color-dark);
  color: white;
}

.book-image {
  position: relative;
}

.book-image > img {
  height: 200px;
  width: 135px;
}

.book-peek-inside {
  width: 1.25rem;
  height: 1.25rem;
  position: absolute;
  top: 0;
  right: 0;
  background: linear-gradient(
    to bottom left,
    #fff,
    #f3f3f3 45%,
    #ddd 50%,
    #aaa 50%,
    #bbb 56%,
    #ccc 62%,
    #f3f3f3 80%,
    #fff 100%
  );
  transition: all 0.5s ease;
}

.book-peek-inside:hover {
  width: 2rem;
  height: 2rem;
}

.book-title {
  font-weight: bold;
}

.book-author {
  font-style: italic;
}

.book-price {
  font-weight: lighter;
}

.book-title,
.book-author,
.book-price {
  text-align: center;
}
</style>

<template>
  <li class="book-box">
    <div class="book-image">
      <img
        :src="getBookImageUrl(bookImageFileName(props.book))"
        :alt="book.title"
      />
      <router-link to="/">
        <a v-if="book.isPublic" href="#" class="book-peek-inside"/>
      </router-link>
    </div>
    <div class="book-title">{{ book.title }}</div>
    <div class="book-author">{{ book.author }}</div>
    <div class="book-price">${{ (book.price / 100).toFixed(2) }}</div>
    <button class="button">Add to Cart</button>
  </li>
</template>
