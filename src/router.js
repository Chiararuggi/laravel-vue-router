import { createRouter, createWebHistory } from "vue-router";

import AppHome from "./pages/AppHome.vue";
import AppAbout from "./pages/AppAbout.vue";
import EventList from "./pages/EventList.vue";
import EventDetail from './pages/EventDetail.vue';

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
    {
      path: "/event/:id",
      name: "event-detail",
      component: EventDetail,
      props: true,
    },
  ],
});

export { router };
