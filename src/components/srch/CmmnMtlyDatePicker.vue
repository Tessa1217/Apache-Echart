<script setup>
import { ref } from "vue";
/** Components */

/** Hooks */

/** Variables */
const startDt = ref();
const endDt = ref();

const startDatepicker = ref(null);
const endDatepicker = ref(null);

const handleStartModelUpdate = (date) => {
  console.log(date);
  return new Date(date.year, date.month, 1);
};

const handleEndModelUpdate = (date) => {
  console.log(date);
  return new Date(date.year, date.month + 1, 0);
};

/** Methods */
</script>
<template>
  <div>
    <VueDatePicker
      :auto-apply="true"
      v-model="startDt"
      @update:model-value="handleStartModelUpdate"
      :month-picker="true"
      format="yyyy-MM-dd"
      id="start"
      ref="startDatepicker"
    >
      <template #action-row="{ internalModelValue, selectDate }">
        <div class="action-row">
          <p class="current-selection">{{ internalModelValue }}</p>
          <button class="select-button" @click="selectDate">Select Date</button>
        </div>
      </template>
    </VueDatePicker>
    <span>~</span>
    <VueDatePicker
      :auto-apply="true"
      v-model="endDt"
      :month-picker="true"
      @update:model-value="handleEndModelUpdate"
      id="end"
      format="yyyy-MM-dd"
      ref="endDatepicker"
    >
      <template #action-row="{ internalModelValue }">
        <div class="action-row">
          <p class="current-selection" @change="selectedDate">
            {{ internalModelValue }}
          </p>
          <button class="select-button" @click="selectedDate">
            Select Date
          </button>
        </div>
      </template>
    </VueDatePicker>
  </div>
</template>
<style scoped></style>
