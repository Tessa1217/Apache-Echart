<script setup>
import { ref } from "vue";

/** Components */
import AppTab from "@/components/ui/AppTab.vue";

/** Hooks */

/** Variables */
const appTabs = ref([
  {
    path: "/demo/sketch",
    pageName: "Sketched Line Chart",
  },
  {
    path: "/demo/line",
    pageName: "Line Chart",
  },
  {
    path: "/demo/pie",
    pageName: "Pie Chart",
  },
  {
    path: "/demo/bar",
    pageName: "Bar Chart",
  },
]);

/** Methods */
</script>
<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-12">
        <AppTab :tabItems="appTabs" />
      </div>
    </div>
    <div class="tab-content mt-4">
      <router-view></router-view>
    </div>
  </div>
</template>
<style scoped></style>
