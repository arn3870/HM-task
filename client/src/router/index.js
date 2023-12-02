import { createRouter, createWebHistory } from "vue-router";
import TestPage from "../views/TestPage.vue";
import HomeView from "../views/HomeView.vue";

// function testRouteGaurd(to, from, next) {
//   const id = localStorage.getItem("testId");
//   if (id) {
//     next({ ...to, params: { id } }); // Redirect with the stored id
//   } else {
//     // Handle the case where there is no id in localStorage
//     console.error("No testId found in localStorage");
//     next({ name: "home" }); // Redirect to the home page or another appropriate route
//   }
// }

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
      // beforeEnter: [testRouteGaurd],
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      // component: () => import("../views/TestPage.vue"),
    },
  ],
});

export default router;
