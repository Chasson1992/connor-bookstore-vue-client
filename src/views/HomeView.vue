<script setup lang="ts">
import type { BookItem } from "@/types";
import TheCTA from "@/components/home/TheCTA.vue";
import TheBookOfTheWeek from "@/components/home/TheBookOfTheWeek.vue";

let response = await fetch("http://localhost:8080/ConnorBookstoreFetch/api/booksoftheweek");
let data = await response.json();
let booksOfTheWeek = data as BookItem[];
</script>

<style scoped>
.home-page {
  display: flex;
  background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),
  url("@/assets/images/site/hero-image.jpg");
  flex-grow: 1;
  flex-direction: column;
  justify-content: space-between;

  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}

.hero-area {
  display: flex;
  flex-basis: 100%;
  justify-content: space-evenly;
  margin: 0rem 1rem;
}

#home-icon {
  margin-left: auto;
  margin-right: auto;
  width: 25%;
  height: auto;
  max-width: 100%;
}
</style>

<template>
  <div class="home-page">
    <section class="hero-area">
      <TheCTA />
      <TheBookOfTheWeek :booksOfTheWeek="booksOfTheWeek"/>
    </section>
  </div>
</template>
