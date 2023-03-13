<script setup lang="ts"></script>

<style scoped>
.search-bar-and-icon {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-grow: 1;

  max-width: 500px;

  margin: 0rem 2rem;
  padding: 0.25rem;
  background-color: white;
  border: 1px solid lightgrey;
  border-radius: 5px;
}

.search-bar-and-icon > * {
  margin: 1px;
}

.search-bar {
  border: none;
  background: transparent;
  margin: 0;
  padding: 0.5rem 0.55rem;
  font-size: var(--default-font-size);
  color: inherit;
  border: 1px solid transparent;
  border-radius: inherit;
  width: 100%;
}

@media (max-width: 959px) {
  .search-bar-and-icon {
    display: none;
  }
}

.search-bar:focus {
  outline: none;
}

.search-button {
  border-radius: inherit;
  background: transparent
    url("@/assets/images/icons/magnifying-glass-solid.svg") center no-repeat;
  overflow: hidden;
  width: auto;
  height: 1.125rem;
  opacity: 0.7;
}
</style>

<template>
  <form action="category.html" class="search-bar-and-icon">
    <button type="submit" class="button search-button"></button>
    <input type="text" class="search-bar" placeholder="Search..." /><br />
  </form>
</template>
