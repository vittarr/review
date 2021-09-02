import Vue from "vue";
import VueRouter from "vue-router";
import store from "../store";

Vue.use(VueRouter);

function logout(to, from, next) {
  store.dispatch("auth/logout");
  next({ name: "Auth" });
}

const routes = [
  { path: "/", redirect: { name: "Places" } },
  {
    path: "/logout",
    name: "Logout",
    beforeEnter: logout,
  },
  {
    path: "/places",
    name: "Places",
    meta: { requiresAuth: true },
    component: () => import("../views/Places.vue"),
  },
  {
    path: "/codes",
    name: "Codes",
    meta: { requiresAuth: true },
    component: () => import("../views/Codes.vue"),
  },
  {
    path: "/reviews",
    name: "Reviews",
    meta: { requiresAuth: true },
    component: () => import("../views/Reviews.vue"),
  },
  {
    path: "/auth",
    name: "Auth",
    meta: { requiresAuth: false },
    component: () => import("../views/Auth.vue"),
  },
  {
    path: "/about",
    name: "About",
    meta: { requiresAuth: false },
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
  // MOBILE
  {
    path: "/mobile1",
    name: "Mobile1",
    meta: { requiresAuth: false },
    component: () => import("../views/Mobile1.vue"),
  },
  {
    path: "/mobile2",
    name: "Mobile2",
    meta: { requiresAuth: false },
    component: () => import("../views/Mobile2.vue"),
  },
  {
    path: "/mobile3",
    name: "Mobile3",
    meta: { requiresAuth: false },
    component: () => import("../views/Mobile3.vue"),
  },

];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach(async (to, from, next) => {
  const requiresAuth = to.matched.some((x) => x.meta.requiresAuth);
  const authenticated = store.getters["auth/isAuthenticated"];
  console.log(requiresAuth, authenticated)
  if (requiresAuth && !authenticated) {
    next({ path: "Auth", replace: true });
  } else {
    next();
  }
});

export default router;
