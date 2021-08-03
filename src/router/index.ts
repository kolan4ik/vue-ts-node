import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import Home from "@/views/Home.vue";
import LoginPage from "@/views/LoginPage.vue";
import PageNotFound from "@/views/PageNotFound.vue";
import Info from "@/views/Info.vue";
import Article from "@/views/Article.vue";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "Home",
    component: Home,
    meta: { requiresAuth: true },
  },
  {
    path: "/login",
    name: "Login",
    component: LoginPage,
  },
  {
    path: "/info",
    name: "Info",
    component: Info,
  },
  {
    path: "/post/:id",
    name: "Article",
    component: Article,
    meta: { requiresAuth: true },
  },
  {
    path: "/about",
    name: "About",
    meta: { requiresAuth: true },
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },

  {
    path: "*",
    name: "404",
    component: PageNotFound,
  },
];

const router = new VueRouter({
  mode: "history",
  routes,
});

router.beforeEach((to, from, next) => {
  let language = to.params.lang;

  if (!language) {
    language = "en";
  }

  //i18n.locale = "en";

  if (to.matched.some((record) => record.meta.requiresAuth)) {
    const authUser = JSON.parse(
      window.localStorage.getItem("currentUser") || "{}"
    );
    if (authUser && authUser.accessToken) {
      next();
    } else {
      next({
        name: "Login",
      });
    }
  } else {
    next(); // всегда так или иначе нужно вызвать next()!
  }
});

export default router;
