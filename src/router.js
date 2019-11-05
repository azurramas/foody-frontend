import Vue from "vue";
import VueRouter from "vue-router";
import store from "./store";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* */ "./views/Home.vue")
  },
  {
    path: "/orders",
    name: "orders",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* */ "./views/Orders.vue")
  },
  {
    path: "/my-orders",
    name: "My orders",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* */ "./views/MyOrders.vue")
  },
  {
    path: "/login",
    name: "login",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* */ "./views/Login.vue")
  },
  {
    path: "/register",
    name: "register",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* */ "./views/Register.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;

router.beforeEach((to, from, next) => {
  // redirect to login page if not logged in and trying to access a restricted page
  const loginProtection = ["/register", "/login"];
  const protectedPages = ["/my-orders"];
  const authRequired = protectedPages.includes(to.path);
  const alreadyAuth = loginProtection.includes(to.path);
  const loggedIn = store.getters.checkCookie;

  if (authRequired && !loggedIn) {
    return next({
      path: "/login"
    });
  } else if (alreadyAuth && loggedIn) {
    return next({
      path: "/"
    });
  } else next();
});
