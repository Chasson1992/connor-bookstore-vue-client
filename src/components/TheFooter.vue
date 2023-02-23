<script setup lang="ts"></script>

<style scoped>
footer {
  background: var(--secondary-background-color);
  display: flex;
  justify-content: space-between;
  gap: 1em;
  border-top: 1px solid #eaecef;
}

.copyright {
  justify-content: flex-start;
}

.links {
  justify-content: center;
}

.links > a {
  margin-left: 1em;
  margin-right: 1em;
}

.social-media-icons {
  display: flex;
  justify-content: flex-end;
  text-align: center;
  gap: 0.25em;
}
</style>

<template>
  <footer class="container">
    <section class="copyright">
      <i class="fa-regular fa-copyright fa-fw"></i> 2023 Cam's Used Books
    </section>
    <section class="links">
      <router-link to="/"> Our Story </router-link>
      |
      <router-link to="/"> Directions </router-link>
      |
      <router-link to="/"> Contact Us! </router-link>
    </section>
    <section class="social-media-icons">
      <a href="">
        <i class="fa-brands fa-facebook fa-lg" style="color: #4267b2"></i
      ></a>
      <a href="">
        <i class="fa-brands fa-twitter fa-lg" style="color: #1da1f2"></i
      ></a>
      <a href="">
        <i class="fa-brands fa-instagram fa-lg" style="color: #8a3ab9"></i
      ></a>
      <a href="">
        <i class="fa-brands fa-github fa-lg" style="color: #171515"> </i
      ></a>
    </section>
  </footer>
</template>
