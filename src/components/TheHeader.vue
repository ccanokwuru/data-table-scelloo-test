<script setup lang="ts">
import TheLink from "@/components/TheLink.vue";
</script>
<template>
  <header container-c font="500" flex flex-col text="#6E6893 sm ">
    <h1 font="700" uppercase text-sm leading-none>Table Heading</h1>
    <div flex flex-wrap-reverse justify-between items-center relative>
      <nav capitalize flex overflow-x-auto sm:overflow-visible grow sm shrink>
        <the-link to="/" exact active-bar>all</the-link>
        <the-link to="paid" exact active-bar>paid</the-link>
        <the-link to="unpaid" exact active-bar>unpaid</the-link>
        <the-link to="overdue" exact active-bar>overdue</the-link>
        <hr h=".5px" bg="#C6C2DE" absolute bottom-0 left-0 w-full />
      </nav>
      <div grow min-w="100px"></div>
      <div shrink flex flex-wrap items-baseline gap-x-5>
        Total payable amount:
        <span text="lg">
          <span text="#6D5BD0 " font="700">
            {{
              new Intl.NumberFormat("en-US", {
                style: "currency",
                currency: "USD",
              }).format(900)
            }}
          </span>
          USD
        </span>
      </div>
    </div>
  </header>
</template>
<style scoped>
nav::-webkit-scrollbar,
nav::-webkit-scrollbar-track {
  max-height: 2px !important;
  border-radius: 50px;
  overflow: hidden;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
}

nav::-webkit-scrollbar-thumb {
  background: #6d5bd0;
  border-radius: 50px;
}
.link.router-link-active,
.link.router-link-exact-active {
  color: #25213b !important;
  border-bottom: #25213b;
}
</style>
