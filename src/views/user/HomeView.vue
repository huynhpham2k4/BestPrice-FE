<template>
  <div class="container">
    <h1>Trang Chủ</h1>
    <PriceTable :products="products" />
  </div>
</template>

<script>
import PriceTable from "@/components/user/PriceTable.vue";

export default {
  name: "HomeView",
  components: {
    PriceTable,
  },
  data() {
    return {
      products: [], // Dữ liệu sản phẩm sẽ được lấy từ API hoặc static data
    };
  },
  mounted() {
    // Thay thế bằng việc gọi API nếu cần
    this.fetchProducts();
  },
  methods: {
    async fetchProducts() {
      const response = await fetch("api/products");
      const data = await response.json();
      this.products = data;
    },
  },
};
</script>

<style scoped>
/* Các style cụ thể cho HomeView */
</style>
