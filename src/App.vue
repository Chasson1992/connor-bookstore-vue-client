<script setup lang="ts">
import { RouterView, useRoute } from "vue-router";

import TheHeader from "@/components/TheHeader.vue";
import TheFooter from "@/components/TheFooter.vue";

import { useCategoryStore } from "@/stores/CategoryStore";
const categoryStore = useCategoryStore();

// Initialize state
categoryStore.fetchCategories();

const route = useRoute();
</script>

<style>
#top {
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  justify-content: space-between;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
</style>

<template>
  <Suspense>
    <div id="top">
      <TheHeader></TheHeader>
      <RouterView :key="route.fullPath"></RouterView>
      <TheFooter></TheFooter>
    </div>
  </Suspense>
</template>
