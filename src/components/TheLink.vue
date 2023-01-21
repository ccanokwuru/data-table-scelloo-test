<script setup lang="ts">
import type { RouterLinkProps } from "vue-router";
interface Props extends RouterLinkProps {
  activeBar?: boolean;
}
const props = defineProps<Props>();
</script>
<template>
  <router-link
    v-bind="props"
    v-slot="{ href, navigate, isActive, isExactActive }"
    custom
  >
    <a
      relative
      transition-all
      duration-500
      :class="{
        'router-link-active': isActive,
        'router-link-exact-active': isExactActive,
      }"
      :href="href"
      @click="navigate"
      class="link"
    >
      <hr
        v-show="activeBar && (isExactActive || isActive)"
        class="bg-[#25213B] h-[2px] absolute w-full bottom-0 left-0 transition-all duration-700" />
      <slot></slot
    ></a>
  </router-link>
</template>
