<script setup>
import { ref } from "vue";
/** Components */

/** Hooks */

/** Variables */
const startDt = ref("");
const endDt = ref("");
/** Methods */
</script>
<template>
  <div>
    <VueDatePicker
      :auto-apply="true"
      :year-picker="true"
      v-model="startDt"
      format="yyyy-MM-dd"
    />
    <span>~</span>
    <VueDatePicker
      :auto-apply="true"
      :year-picker="true"
      v-model="endDt"
      format="yyyy-MM-dd"
    />
  </div>
</template>
<style scoped></style>
