import { createRouter, createWebHistory } from "vue-router";
import Play from "../views/Play.vue";

const routes = [
  {
    path: "/",
    name: "Play",
    component: Play,
  },
  {
    path: "/about",
    name: "About",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
  {
    path: "/leaderboard",
    name: "Leaderboard",
    component: () =>
      import(/* webpackChunkName: "leaderboard" */ "../views/LeaderboardPage.vue"),
  },
  {
    path: "/login",
    name: "Login",
    component: () =>
      import(/* webpackChunkName: "login" */ "../views/Login.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
