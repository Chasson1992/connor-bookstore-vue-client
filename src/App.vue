<script setup lang="ts">
import { provide } from "vue";
import { RouterView, useRoute } from "vue-router";
import type { CategoryItem } from "@/types";
import TheHeader from "@/components/TheHeader.vue";
import TheFooter from "@/components/TheFooter.vue";
import sourceData from "@/db.json";
const route = useRoute();
const categoryList = sourceData.categories as CategoryItem[];
provide("categoryList", categoryList);
</script>

<template>
  <TheHeader></TheHeader>
  <RouterView :key="route.fullPath"></RouterView>
  <TheFooter></TheFooter>
</template>
