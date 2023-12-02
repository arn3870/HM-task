import { createRouter, createWebHistory } from "vue-router";
import TestPage from "../views/TestPage.vue";
import HomeView from "../views/HomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/test/:id",
      name: "test",
      component: TestPage,
      props: true,
    },
  ],
});

export default router;
