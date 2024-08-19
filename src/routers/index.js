import { createWebHistory, createRouter } from "vue-router";

const routes = [
  {
    path: "/",
    redirect: "/demo",
    children: [
      {
        path: "demo",
        name: "DemoView",
        component: () => import("@/views/demo/DemoComponent.vue"),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
