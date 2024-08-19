<script setup>
import { ref, provide } from "vue";
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
const props = defineProps({
  xAxisArray: {
    type: Array,
    default: [],
  },
  series: {
    type: Array,
    default: {},
  },
});

const option = ref({
  title: {
    text: "Sketched Line Chart",
  },
  tooltip: {
    trigger: "axis",
  },
  legend: {
    data: _.map(props.series, "name"),
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
    data: props.xAxisArray,
  },
  yAxis: {
    type: "value",
  },
  series: props.series,
});

/** Methods */
</script>
<template>
  <div class="container">
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
