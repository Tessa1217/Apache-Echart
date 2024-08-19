<script setup>
import { ref, provide } from "vue";
import _ from "lodash";
import { use } from "echarts/core";
import { CanvasRenderer } from "echarts/renderers";
import { BarChart } from "echarts/charts";
import {
  TitleComponent,
  GridComponent,
  TooltipComponent,
} from "echarts/components";
import VChart, { THEME_KEY } from "vue-echarts";
use([
  CanvasRenderer,
  BarChart,
  GridComponent,
  TitleComponent,
  TooltipComponent,
]);
provide(THEME_KEY, "dark");

/** Components */

/** Hooks */

/** Variables */
const props = defineProps({
  title: {
    type: String,
    default: "",
  },
  xAxisArray: {
    type: Array,
    default: [],
  },
  data: {
    type: Array,
    default: [],
  },
});

const option = ref({
  title: {
    text: props.title,
  },
  xAxis: {
    type: "category",
    data: props.xAxisArray,
  },
  yAxis: {
    type: "value",
  },
  series: [
    {
      data: props.data,
      type: "bar",
    },
  ],
});
/** Methods */
</script>
<template>
  <div class="container">
    <v-chart class="chart" :option="option" autoresize></v-chart>
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
