<template>
    <div class="container">
      <table class="table table-striped">
        <thead>
          <tr>
            <th>Tên Sản Phẩm</th>
            <th>Giá Rẻ Nhất</th>
            <th>Bảng Giá Các Web</th>
          </tr>
        </thead>
        <tbody>
          <!-- Dữ liệu bảng giá sẽ được hiển thị ở đây -->
        </tbody>
      </table>
    </div>
  </template>
  
  <script>
  export default {
    name: 'PriceTable',
    props: {
      products: Array // Nhận dữ liệu từ parent component
    }
  }
  </script>
  
  <style scoped>
  /* Các style cụ thể cho bảng giá */
  </style>
  