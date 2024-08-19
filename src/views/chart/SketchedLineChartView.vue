<script setup>
import { ref, onBeforeMount } from "vue";
import _ from "lodash";
/** Components */
import DefaultStatLayout from "@/views/layout/DefaultStatLayout.vue";
import SketchedLineChart from "@/components/chart/SketchedLineChart.vue";

/** Hooks */
onBeforeMount(() => {
  for (let x = 0; x < categories.value.length; x++) {
    for (let i = 0; i < months.value.length; i++) {
      dataList.value.push(_.random(0, 100));
    }
  }
});

/** Variables */

/** Methods */
const monthlyData = ref([
  { month: "January", Drink: 30, Food: 50, NonConsumable: 20 },
  { month: "February", Drink: 40, Food: 60, NonConsumable: 25 },
  { month: "March", Drink: 35, Food: 55, NonConsumable: 30 },
  { month: "April", Drink: 45, Food: 65, NonConsumable: 28 },
  { month: "May", Drink: 50, Food: 70, NonConsumable: 22 },
  { month: "June", Drink: 55, Food: 75, NonConsumable: 27 },
  { month: "July", Drink: 60, Food: 80, NonConsumable: 32 },
  { month: "August", Drink: 65, Food: 85, NonConsumable: 35 },
  { month: "September", Drink: 70, Food: 90, NonConsumable: 40 },
  { month: "October", Drink: 75, Food: 95, NonConsumable: 38 },
  { month: "November", Drink: 80, Food: 100, NonConsumable: 33 },
  { month: "December", Drink: 85, Food: 105, NonConsumable: 30 },
]);

const months = ref(_.map(monthlyData.value, "month"));

const categories = ref(["Drink", "Food", "NonConsumable"]);

const series = ref(
  categories.value.map((category) => ({
    name: category,
    type: "line",
    stack: "Total",
    data: _.map(monthlyData.value, category),
  }))
);

const dataList = ref([]);
</script>
<template>
  <DefaultStatLayout>
    <template #pageTitle>Sketched Line Chart Demo</template>
    <template #chart>
      <SketchedLineChart :xAxisArray="months" :series="series" />
    </template>
    <template #table>
      <table class="table table-hover">
        <caption>
          Sketched Line Chart Data Table
        </caption>
        <colgroup>
          <col />
          <col />
          <col />
          <col />
        </colgroup>
        <thead>
          <tr>
            <th scope="col" rowspan="2">Month</th>
            <th
              v-for="(category, index) in categories"
              :key="index"
              scope="col"
            >
              {{ category }}
            </th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(data, index) in monthlyData" :key="index">
            <td>{{ data.month }}</td>
            <td v-for="category in categories" :key="category">
              {{ data[category] }}
            </td>
          </tr>
        </tbody>
      </table>
    </template>
  </DefaultStatLayout>
</template>
<style scoped></style>
