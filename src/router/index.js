import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Assets from "../views/Assets.vue";
import Markets from "../views/Markets.vue";
import NotFound from "..//views/NotFound.vue";
import NetworkError from "../views/NetworkError";
import Orders from "../views/Orders";
import Parties from "../views/Parties.vue";
import Statistics from "../views/Statistics.vue";
import Trades from "../views/Trades.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/assets",
    name: "Assets",
    component: Assets,
  },
  {
    path: "/markets",
    name: "Markets",
    component: Markets,
  },
  {
    path: "/orders",
    name: "Orders",
    component: Orders,
  },
  {
    path: "/parties",
    name: "Parties",
    component: Parties,
  },
  {
    path: "/statistics",
    name: "Statistics",
    component: Statistics,
  },
  {
    path: "/trades",
    name: "Trades",
    component: Trades,
  },
  {
    path: "/:catchAll(.*)",
    name: "NotFound",
    component: NotFound,
  },
  {
    path: "/404/:resource",
    name: "404Resource",
    component: NotFound,
    props: true,
  },
  {
    path: "/network-error",
    name: "NetworkError",
    component: NetworkError,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
