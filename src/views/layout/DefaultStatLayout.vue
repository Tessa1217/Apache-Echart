<script setup>
/** Components */

/** Hooks */

/** Variables */

/** Methods */
</script>
<template>
  <div>
    <h3>
      <slot name="pageTitle"></slot>
    </h3>
    <div class="chart-container">
      <slot name="chart"></slot>
    </div>
    <div class="table-container mt-3">
      <slot name="table"></slot>
    </div>
  </div>
</template>
<style scoped></style>
