<template>
  <nav class="navbar navbar-light bg-light custom-navbar">
    <div class="container-fluid">
      <a class="navbar-brand">BestPrice</a>
      <form class="d-flex w-50 ms-3">
        <input class="form-control" type="search" placeholder="Hi, Bạn tìm sản phẩm gì hôm nay" aria-label="Search">
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'MainHeader'
}
</script>

<style scoped>
.custom-navbar {
  color: #2596be;
}
</style>
