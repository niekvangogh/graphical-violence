import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import Index from "../views/index.vue";
import Videos from "../views/videos.vue";
import NDA from "../views/nda.vue";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "index",
    component: Index
  },
  {
    path: '/videos',
    name: 'videos',
    component: Videos,
  },
  {
    path: '/nda',
    name: 'nda',
    component: NDA,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
