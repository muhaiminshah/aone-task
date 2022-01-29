import Vue from "vue";
import VueRouter from "vue-router";
import Users from "@/views/Users.vue";
import About from "@/views/About";
import UserDetail from "@/views/UserDetail";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "About",
    component: About,
  },
  {
    path: "/about",
    redirect: "/",
  },
  {
    path: "/users",
    name: "Users",
    component: Users,
  },
  {
    path: "/users/:id",
    name: "UserDetail",
    component: UserDetail
  }
];

const router = new VueRouter({
  routes,
});

export default router;
