<script setup>
import { ref } from "vue";
import _ from "lodash";

/** Components */
import DefaultStatLayout from "@/views/layout/DefaultStatLayout.vue";
import BarChart from "@/components/chart/BarChart.vue";
/** Hooks */

/** Variables */
const productData = ref([
  { month: "January", a: 120, b: 240, c: 300, d: 320 },
  { month: "February", a: 150, b: 120, c: 350, d: 480 },
  { month: "March", a: 170, b: 240, c: 320, d: 203 },
  { month: "April", a: 200, b: 250, c: 310, d: 403 },
  { month: "May", a: 180, b: 260, c: 330, d: 400 },
  { month: "June", a: 160, b: 240, c: 330, d: 500 },
  { month: "July", a: 190, b: 280, c: 340, d: 120 },
  { month: "August", a: 210, b: 300, c: 350, d: 230 },
  { month: "September", a: 230, b: 180, c: 360, d: 430 },
  { month: "October", a: 220, b: 240, c: 370, d: 500 },
  { month: "November", a: 250, b: 120, c: 380, d: 230 },
  { month: "December", a: 240, b: 240, c: 360, d: 320 },
]);

const months = ref(_.map(productData.value, "month"));

const productType = ref(_.keys(_.omit(productData.value[0], "month")));

/** Methods */
const getAvgValue = (productType) => {
  return _.round(_.meanBy(productData.value, productType), 2);
};

const data = ref(_.map(productType.value, (type) => getAvgValue(type)));
</script>
<template>
  <DefaultStatLayout>
    <template #title>Bar Chart Demo</template>
    <template #chart>
      <BarChart title="Bar Chart" :xAxisArray="productType" :data="data" />
    </template>
    <template #table>
      <table class="table table-hover">
        <caption>
          Bar Chart Example Table
        </caption>
        <colgroup>
          <col />
          <col />
          <col />
          <col />
        </colgroup>
        <thead>
          <tr>
            <th>Month</th>
            <th
              scope="col"
              v-for="(type, typeIndex) in productType"
              :key="typeIndex"
            >
              {{ type }}
            </th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(month, index) in months" :key="index">
            <td>{{ month }}</td>
            <td v-for="(type, typeIndex) in productType" :key="typeIndex">
              {{ _.find(productData, { month })[type] }}
            </td>
          </tr>
          <tr class="average">
            <td>Average</td>
            <td v-for="(type, index) in productType" :key="index">
              {{ getAvgValue(type) }}
            </td>
          </tr>
        </tbody>
      </table>
    </template>
  </DefaultStatLayout>
</template>
<style scoped></style>
