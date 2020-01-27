import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  { path: "/", component: () => import("../views/Home.vue") },
  { path: "/help", component: () => import("../views/Help.vue") },
  { path: '/complete-profile', component: () => import("../views/CompleteProfile.vue") },
  { path: '/search', component: () => import("../views/SearchPage.vue"), props: true },
  { path: '/professional-detail/:id', component: () => import('../views/ProfessionalDetail.vue') }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
