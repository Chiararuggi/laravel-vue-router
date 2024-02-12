import { createRouter, createWebHistory } from "vue-router";

import AppHome from "./pages/AppHome.vue";
import AppAbout from "./pages/AppAbout.vue";
import EventList from "./pages/EventList.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/about",
      name: "about",
      component: AppAbout,
    },
    {
      path: "/",
      name: "home",
      component: AppHome,
    },
    {
      path: "/events",
      name: "events",
      component: EventList,
    },
  ],
});

export { router };
