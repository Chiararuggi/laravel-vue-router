import { createRouter, createWebHistory } from "vue-router";

import AppHome from "./pages/AppHome.vue";
import AppAbout from "./pages/AppAbout.vue";
import EventList from "./pages/EventList.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/about",
      name: "About",
      component: AppAbout,
    },
    {
      path: "/",
      name: "Home",
      component: AppHome,
    },
    {
      path: "/events",
      name: "Events",
      component: EventList,
    },
  ],
});

export { router };
