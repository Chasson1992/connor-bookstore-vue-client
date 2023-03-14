import { defineStore } from "pinia";
import type { CategoryItem } from "@/types";
import { apiUrl } from "@/api";

export const useCategoryStore = defineStore("category", {
  state: () => ({
    categoryList: [] as CategoryItem[],
  }),

  actions: {
    async fetchCategories() {
      this.categoryList = (await fetch(`${apiUrl}/categories/`).then(
        (response) => response.json()
      )) as CategoryItem[];
    },
  },
  // getters
});
