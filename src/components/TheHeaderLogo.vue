<script setup lang="ts"></script>

<style scoped>
.text-logo {
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-left: 0.25rem;
  padding-right: 1rem;
  font-family: var(--title-font-family);
  font-size: var(--default-font-size);
}

.bookstore-logo {
  justify-self: left;
  display: flex;
}

#logo {
  height: 3rem;
  width: 3rem;
}

.bookstore-logo > img {
  max-width: 50%;
}
</style>

<template>
  <div class="bookstore-logo">
    <router-link to="/">
      <img
        id="logo"
        src="@/assets/images/site/logo.svg"
        alt="Cam's Used Books Logo"
      />
    </router-link>
    <h1 class="text-logo">Cam's Used Books</h1>
  </div>
</template>
