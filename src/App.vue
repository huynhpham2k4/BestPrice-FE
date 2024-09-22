<template>
  <div id="app">
    <!-- Hiển thị MainHeader nếu route hiện tại thuộc folder user -->
    <MainHeader v-if="isUserView" />
    <router-view />
  </div>
</template>

<script>
import MainHeader from "./components/user/MainHeader.vue";

export default {
  name: "App",
  components: {
    MainHeader,
  },
  computed: {
    isUserView() {
      // Lấy tên route hiện tại
      const currentRouteName = this.$route.name;
      // Danh sách tên route thuộc thư mục user
      const userRoutes = ["home", "otherUserRoute1", "otherUserRoute2"]; // Thêm các route khác nếu cần
      return userRoutes.includes(currentRouteName);
    },
  },
};
</script>

<style>
@import "~bootstrap/dist/css/bootstrap.min.css";
@import "./assets/styles/main.css";
</style>
