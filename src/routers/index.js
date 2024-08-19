import { createWebHistory, createRouter } from "vue-router";

const routes = [
  {
    path: "/",
    redirect: "/demo",
    children: [
      {
        path: "demo",
        name: "DemoView",
        redirect: "/demo/sketch",
        component: () => import("@/views/demo/DemoComponent.vue"),
        children: [
          {
            path: "sketch",
            name: "SketchedLineChart",
            component: () => import("@/views/chart/SketchedLineChartView.vue"),
          },
          {
            path: "bar",
            name: "BarChartView",
            component: () => import("@/views/chart/BarChartView.vue"),
          },
          {
            path: "pie",
            name: "PieChartView",
            component: () => import("@/views/chart/PieChartView.vue"),
          },
          {
            path: "line",
            name: "LineChartView",
            component: () => import("@/views/chart/LineChartView.vue"),
          },
        ],
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
