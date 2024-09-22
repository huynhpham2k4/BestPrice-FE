<template>
    <div class="catalog-menu">
      <ul>
        <li><a href="#">Danh mục 1</a></li>
        <li><a href="#">Danh mục 2</a></li>
        <li><a href="#">Danh mục 3</a></li>
        <!-- Thêm các danh mục khác ở đây -->
      </ul>
    </div>
  </template>
  
  <script>
  export default {
    name: 'CatalogMenu',
  }
  </script>
  
  <style scoped>
  .catalog-menu {
    position: absolute; /* Đặt vị trí tùy theo cần */
    background-color: white; /* Màu nền của menu */
    border: 1px solid #ddd; /* Đường viền của menu */
    padding: 10px;
    display: none; /* Ẩn menu mặc định */
  }
  .catalog-menu ul {
    list-style-type: none;
    padding: 0;
  }
  .catalog-menu li {
    margin-bottom: 5px;
  }
  