<script setup lang="ts">
import TheHeaderLogo from "@/components/TheHeaderLogo.vue";
import TheHeaderSearchBar from "@/components/TheHeaderSearchBar.vue";
import TheHeaderDropdown from "@/components/TheHeaderDropdown.vue";
</script>

<style scoped>
header {
  background: var(--secondary-background-color);
  display: flex;
  flex-shrink: 0;
  justify-content: space-between;
  border-bottom: 1px solid #eaecef;

  width: 100%;
  z-index: 10;
}

@media screen and (max-width: 600px) {
  header {
    flex-direction: column;
    align-items: center;
  }
}
</style>

<template>
  <header class="container" id="header">
    <TheHeaderLogo />
    <TheHeaderSearchBar />
    <TheHeaderDropdown />
  </header>
</template>
