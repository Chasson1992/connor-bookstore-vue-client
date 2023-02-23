<script setup lang="ts"></script>

<style scoped>

#home-icon {
  height: 250px;
  width: auto;

  margin-left: auto;
  margin-right: auto;
}

.cta-area {
  display: block;

  flex-basis: 50%;
  flex-grow: 1;
  align-self: center;

  text-align: center;
}

.cta-content {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 1rem;
}

.cta-content * {
  font: var(--title-font-family);
  color: white;
}

.cta-content h1 {
  font-size: var(--title-font-size);
}

.cta-content h2 {
  font-size: var(--header2-font-size);
}

.enter-store-button {
  display: block;
  margin-left: auto;
  margin-right: auto;
  padding: 1rem;

  font: var(--title-font-family);
  font-size: var(--header2-font-size);

  color: black;
  font-weight: bolder;
  background-color: #fff;
  border: none;
  border-radius: 4px;
}

.enter-store-button:hover {
  background-color: rgba(255, 255, 255, 0.8);
  transition: background-color 0.1s ease;
  color: black;
}
</style>

<template>
  <div class="cta-area">
    <img
      id="home-icon"
      src="@/assets/images/site/logo-white.png"
      alt="Cam's Used Books Logo"
    />
    <div class="cta-content">
      <h1>Cam's Used Books</h1>
      <h2>On a mission to save books from landfills</h2>
      <router-link to="/category/Classics" custom v-slot="{ navigate }">
        <button class="enter-store-button button" role="link" @click="navigate">
          Enter Store &#8594;
        </button>
      </router-link>
    </div>
  </div>
</template>
