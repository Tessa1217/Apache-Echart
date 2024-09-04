<script setup>
import { ref, computed, watch } from "vue";
/** Components */

/** Hooks */

/** Variables */
const props = defineProps({
  pickerType: {
    type: String,
    default: "dily",
  },
});

const monthPicker = computed(() => {
  return props.pickerType === "mtly";
});

const weekPicker = computed(() => {
  return props.pickerType === "wkly";
});

const yearPicker = computed(() => {
  return props.pickerType === "yrly";
});

const startDt = ref("");
const endDt = ref("");

const startDtStr = computed(() => {
  return format(startDt.value);
});

const endDtStr = computed(() => {
  return format(endDt.value);
});

const startDatepicker = ref(null);
const endDatepicker = ref(null);

const handleStartModelUpdate = (date) => {
  if (monthPicker.value) {
    startDt.value = new Date(date.year, date.month, 1);
    return new Date(date.year, date.month, 1);
  } else if (yearPicker.value) {
    console.log(date);
    startDt.value = new Date(date, 0, 1);
    return new Date(date.year, 0, 1);
  } else if (weekPicker.value) {
  } else {
    startDt.value = new Date(date);
    return new Date(date);
  }
};

const handleEndModelUpdate = (date) => {
  if (monthPicker.value) {
    endDt.value = new Date(date.year, date.month + 1, 0);
    return new Date(date.year, date.month + 1, 0);
  } else if (yearPicker.value) {
    endDt.value = new Date(date.year, 11, 31);
    return new Date(date, 11, 31);
  } else if (weekPicker.value) {
  } else {
    endDt.value = new Date(date);
    return new Date(date);
  }
};

const format = (date) => {
  console.log(date);
  if (date) {
    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const year = date.getFullYear();
    return `${year}-${month}-${day}`;
  }
};

const selectDate = (date) => {
  console.log(date);
};

const formatDate = (date) => {
  console.log(date);
};

/** Methods */
</script>
<template>
  <div>
    <VueDatePicker
      :auto-apply="true"
      v-model="startDt"
      :month-picker="monthPicker"
      :enable-time-picker="false"
      :year-picker="yearPicker"
      :week-picker="weekPicker"
      @update:model-value="handleStartModelUpdate"
      format="yyyy-MM-dd"
      ref="startDatepicker"
      :max-date="new Date()"
      week-start="5"
      :year-range="[new Date().getFullYear() - 11, new Date().getFullYear()]"
      prevent-min-max-navigation
    >
      <template #trigger>
        <input
          type="text"
          class="dp__pointer dp__input_readonly dp__input dp__input_icon_pad dp__input_reg"
          v-model="startDtStr"
        />
      </template>
    </VueDatePicker>
    <span>~</span>
    <VueDatePicker
      :auto-apply="true"
      v-model="endDt"
      :month-picker="monthPicker"
      :enable-time-picker="false"
      :year-picker="yearPicker"
      :week-picker="weekPicker"
      @update:model-value="handleEndModelUpdate"
      :format="format"
      ref="endDatepicker"
    />
  </div>
</template>
<style scoped></style>
