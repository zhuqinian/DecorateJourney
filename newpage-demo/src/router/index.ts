import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

// @ts-ignore
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/Indexpage",
      name: "Indexpage",
      component: () => import("../views/IndexJump.vue"),
    },
    {
      path: "/PartOne",
      name: "PartOne",
      component: () => import("../views/PartOne.vue"),
    },
    {
      path: "/Parttwo",
      name: "Parttwo",
      component: () => import("../views/PartTwo.vue"),
    },
    {
      path: "/Partthree",
      name: "Partthree",
      component: () => import("../views/Partthree.vue"),
    },
    {
      path: "/Partfour",
      name: "Partfour",
      component: () => import("../views/Partfour.vue"),
    },
  ],
});

export default router;
