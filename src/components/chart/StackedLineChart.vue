<script setup>
import { ref, watch, reactive, provide } from "vue";
import _ from "lodash";
import { use } from "echarts/core";
import { CanvasRenderer } from "echarts/renderers";
import { LineChart } from "echarts/charts";
import {
  TitleComponent,
  LegendComponent,
  TooltipComponent,
  GridComponent,
} from "echarts/components";
import VChart, { THEME_KEY } from "vue-echarts";
use([
  CanvasRenderer,
  GridComponent,
  LineChart,
  TitleComponent,
  TooltipComponent,
  LegendComponent,
]);

provide(THEME_KEY, "dark");

/** Components */

/** Hooks */

/** Variables */
// const props = defineProps({
//   xAxisArray: {
//     type: Array,
//     default: [],
//   },
//   series: {
//     type: Array,
//     default: {},
//   },
// });

const monthlyData = ref([
  { month: "January", Drink: 30, Food: 50, NonConsumable: 20 },
  { month: "February", Drink: 40, Food: 60, NonConsumable: 25 },
  { month: "March", Drink: 35, Food: 55, NonConsumable: 30 },
  { month: "April", Drink: 45, Food: 65, NonConsumable: 28 },
  { month: "May", Drink: 50, Food: 70, NonConsumable: 22 },
  { month: "June", Drink: 55, Food: 75, NonConsumable: 27 },
]);

const changingData = [
  { month: "July", Drink: 60, Food: 80, NonConsumable: 32 },
  { month: "August", Drink: 65, Food: 85, NonConsumable: 35 },
  { month: "September", Drink: 70, Food: 90, NonConsumable: 40 },
  { month: "October", Drink: 75, Food: 95, NonConsumable: 38 },
  { month: "November", Drink: 80, Food: 100, NonConsumable: 33 },
  { month: "December", Drink: 85, Food: 105, NonConsumable: 30 },
];

const changeData = () => {
  monthlyData.value = [...changingData];
};

const checkReactivity = ref(monthlyData.value);

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

watch(
  monthlyData,
  (newData) => {
    months.value = _.map(monthlyData.value, "month");
    series.value = categories.value.map((category) => ({
      name: category,
      type: "line",
      stack: "Total",
      data: _.map(monthlyData.value, category),
    }));
  },
  { deep: true }
);

const option = ref({
  title: {
    text: "Sketched Line Chart",
  },
  tooltip: {
    trigger: "axis",
  },
  legend: {
    data: _.map(series.value, "name"),
  },
  grid: {
    left: "3%",
    right: "4%",
    bottom: "3%",
    containLabel: true,
  },
  xAxis: {
    type: "category",
    boundaryGap: false,
    data: months.value,
  },
  yAxis: {
    type: "value",
  },
  series: series.value,
});

watch(
  () => [months, series],
  ([newMonths, newSeries]) => {
    console.log("blah");
    option.value = {
      ...option.value,
      xAxis: {
        type: "category",
        boundaryGap: false,
        data: months.value,
      },
      series: series.value,
      legend: {
        data: _.map(series.value, "name"),
      },
    };
  },
  { deep: true }
);

/** Methods */
</script>
<template>
  <div class="container">
    <button @click="changeData()">change data</button>
    <v-chart class="chart" :option="option" autoresize />
  </div>
</template>
<style scoped>
.chart {
  height: 100%;
  position: relative;
}
.container {
  height: 350px;
  width: 100%;
}
</style>
