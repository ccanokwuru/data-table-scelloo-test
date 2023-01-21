import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  linkActiveClass: "link-active",
  linkExactActiveClass: "exact-link-active",
  scrollBehavior(to, from, savedPosition) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve({
          left: 0,
          top: 0,
          behavior: "smooth",
          el: to.hash ? to.hash : `body`,
        });
      }, 100);
    });
  },

  routes: [
    {
      path: "/",
      name: "all",
      component: () => import("../views/HomeView.vue"),
    },
    {
      path: "/paid",
      name: "paid",
      component: () => import("../views/AboutView.vue"),
    },
    {
      path: "/unpaid",
      name: "unpaid",
      component: () => import("../views/AboutView.vue"),
    },
    {
      path: "/overdue",
      name: "overdue",
      component: () => import("../views/AboutView.vue"),
    },
  ],
});

export default router;
