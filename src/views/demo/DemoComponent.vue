<script setup>
import { defineAsyncComponent, markRaw, ref } from "vue";
import _ from "lodash";

/** Components */
import CmmnSrchDate from "@/components/srch/CmmnSrchDate.vue";
import AppTab from "@/components/ui/AppTab.vue";

/** Hooks */

/** Variables */
const component = ref(null);

const appTabs = ref([
  {
    path: "/demo/sketch",
    pageName: "Sketched Line Chart",
    component: markRaw(
      defineAsyncComponent(
        () => import("@/views/chart/SketchedLineChartView.vue")
      )
    ),
  },
  {
    path: "/demo/line",
    pageName: "Line Chart",
    component: defineAsyncComponent(
      () => import("@/views/chart/LineChartView.vue")
    ),
  },
  {
    path: "/demo/pie",
    pageName: "Pie Chart",
    component: defineAsyncComponent(
      () => import("@/views/chart/PieChartView.vue")
    ),
  },
  {
    path: "/demo/bar",
    pageName: "Bar Chart",
    component: defineAsyncComponent(
      () => import("@/views/chart/BarChartView.vue")
    ),
  },
]);

const tabItems = [
  {
    type: "01",
    name: "일간",
    pickerType: "dily",
  },
  {
    type: "02",
    name: "주간",
    pickerType: "wkly",
  },
  {
    type: "03",
    name: "월간",
    pickerType: "mtly",
  },
  {
    type: "04",
    name: "연간",
    pickerType: "yrly",
  },
];

const pickerType = ref(tabItems[0].pickerType);

/** Methods */
const changeTab = (tabValue) => {
  component.value = _.find(appTabs.value, { pageName: tabValue }).component;
};
</script>
<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-12">
        <AppTab
          @changeTab="(tabValue) => changeTab(tabValue)"
          :tabItems="appTabs"
        />
      </div>
    </div>
    <div class="tab-content mt-4">
      <div class="mb-2">
        <template v-for="(tab, tabIndex) in tabItems" :key="tabIndex">
          <button
            class="btn btn-secondary mx-2"
            :class="{ 'btn-primary': pickerType === tab.pickerType }"
            @click="pickerType = tab.pickerType"
          >
            {{ tab.name }}
          </button>
        </template>
      </div>
      <CmmnSrchDate :pickerType="pickerType"></CmmnSrchDate>
      <component :is="component"></component>
    </div>
  </div>
</template>
<style scoped></style>
