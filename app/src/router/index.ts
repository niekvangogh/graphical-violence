import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import Index from "../views/index.vue";
import Videos from "../views/videos.vue";
import NDA from "../views/nda.vue";
import Help from "../views/help.vue";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "index",
    component: Index
  },
  {
    path: '/videos/:index',
    name: 'videos',
    component: Videos,
  },
  {
    path: '/nda',
    name: 'nda',
    component: NDA,
  },
  {
    path: '/help',
    name: 'help',
    component: Help,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
