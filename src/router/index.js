import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/user/HomeView.vue";
import AdminView from "../views/admin/CrawlView.vue";
import AdminLayout from "@/layouts/AdminLayout.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/admin",
    component: AdminLayout, // Sử dụng AdminLayout cho tất cả các route con
    children: [
      {
        path: "crawl", // Đường dẫn '/admin/crawl'
        component: AdminView, // File AdminView.vue
        name: "adminCrawl",
      },
      // Thêm các route con khác của admin tại đây nếu cần
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
