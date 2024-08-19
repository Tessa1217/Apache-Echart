<script setup>
import { useRoute } from "vue-router";
const route = useRoute();
/** Components */

/** Hooks */

/** Variables */
const props = defineProps({
  tabItems: {
    type: Array,
  },
});

/** Methods */
</script>
<template>
  <ul class="nav nav-tabs">
    <li class="nav-item" v-for="(tabItem, index) in tabItems" :key="index">
      <router-link
        :to="tabItem.path"
        class="nav-link"
        :class="{ active: route.fullPath === tabItem.path }"
        >{{ tabItem.pageName }}</router-link
      >
    </li>
  </ul>
</template>
<style scoped></style>
