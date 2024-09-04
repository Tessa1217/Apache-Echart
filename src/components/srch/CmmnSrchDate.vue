<script setup>
import { ref, watch } from "vue";
import _ from "lodash";

/** Components */
import CmmnDatePicker from "@/components/srch/CmmnDatePicker.vue";

/** Hooks */

/** Variables */

/** Methods */
const props = defineProps({
  pickerType: {
    type: String,
    default: "02",
  },
});
</script>
<template>
  <CmmnDatePicker :pickerType="pickerType"></CmmnDatePicker>
</template>
<style scoped></style>
