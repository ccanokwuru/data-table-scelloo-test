<script setup lang="ts">
import TheHeader from "./components/TheHeader.vue";
</script>

<template>
  <section p="y-50px x-100px">
    <the-header />

    <RouterView />
  </section>
</template>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Inter:wght@500;700&display=swap");

body {
  background: #f2f0f9;
}
* {
  font-family: "Inter", Helvetica, sans-serif;
}
</style>
