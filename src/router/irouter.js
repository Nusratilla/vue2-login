import { createRouter, createWebHistory } from "vue-router";
import {
  LoginView,
  RegisterView,
  HomeView,
  ArticleDetailView,
} from "@/views/iviews";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/register",
      name: "register",
      component: RegisterView,
    },
    {
      path: "/login",
      name: "login",
      component: LoginView,
    },
    {
      path: "/article/:slug",
      name: "article-details",
      component: ArticleDetailView,
    },
  ],
});

export default router;
