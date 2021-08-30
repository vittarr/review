import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  { path: '/', redirect: { name: 'Places' }},
  {
    path: "/places",
    name: "Places",
    component: () => import("../views/Places.vue"),
  },
  {
    path: "/codes",
    name: "Codes",
    component: () => import("../views/Codes.vue"),
  },
  {
    path: "/reviews",
    name: "Reviews",
    component: () => import("../views/Reviews.vue"),
  },
  {
    path: "/auth",
    name: "Auth",
    component: () => import("../views/Auth.vue"),
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
