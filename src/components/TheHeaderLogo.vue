<script setup lang="ts"></script>

<style scoped>
.bookstore-logo {
  display: flex;
  gap: 0rem 1rem;
}


.text-logo {
  font-family: var(--title-font-family);
  font-size: var(--header2-font-size);
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
    <router-link to="/" class="bookstore-logo">
      <img
        id="logo"
        src="@/assets/images/site/logo.svg"
        alt="Cam's Used Books Logo"
      />
      <h1 class="text-logo">Cam's Used Books</h1>
    </router-link>
  </div>
</template>
