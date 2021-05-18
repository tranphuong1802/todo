import Vue from "vue";
import VueRouter from "vue-router";
import Test from "@/components/Test.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/test",
    component: Test,
  },
 
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
