<script setup lang="ts">
import TheHeader from "./components/TheHeader.vue";
</script>

<template>
  <section p="2 md:5 lg:y-50px lg:x-100px">
    <the-header />

    <RouterView />
  </section>
</template>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&display=swap");

body {
  background: #f2f0f9;
}
* {
  font-family: "Inter", sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  color: #25213b;
}
</style>
