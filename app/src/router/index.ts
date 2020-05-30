import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import Index from "../views/index.vue";
import Video from "../views/video.vue";
import NDA from "../views/nda.vue";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "index",
    component: Index
  },
  {
    path: '/video/:id',
    name: 'video',
    component: Video,
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
