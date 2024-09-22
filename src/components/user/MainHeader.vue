<template>
<div class="main-header">
    <nav class="navbar navbar-light bg-color custom-navbar">
        <div class="container-fluid">
            <div class="row w-100 align-items-center">
                <!-- Nút Catalog với biểu tượng Font Awesome -->
                <div class="col-6 col-md-2 d-flex align-items-center pb-2">
                    <a class="navbar-brand logo" href="/">BestPrice</a>
                </div>

                <!-- Nút Catalog cho màn hình nhỏ -->
                <div class="col-6 d-md-none d-flex justify-content-end">
                    <button class="btn-catalog d-flex align-items-center " type="button" data-bs-toggle="collapse" data-bs-target="#catalogMenu" aria-expanded="false" aria-controls="catalogMenu">
                        <i class="fa-solid fa-bars"></i>
                    </button>
                </div>

                <!-- Search -->
                <div class="col-12 col-md-6 pb-2">
                    <form class="d-flex form-container mx-auto mx-md-0" style="width: auto;">
                        <input class="form-control custom-search-input" type="search" placeholder="Hi! Bạn tìm sản phẩm gì hôm nay?" aria-label="Search">
                        <button class="btn btn-search custom-search-button" type="submit">
                            <i class="fa-solid fa-magnifying-glass"></i>
                        </button>
                    </form>
                </div>

                <!-- Menu hiện ra khi bấm vào biểu tượng Catalog -->
                <div class="collapse col-12 d-md-none" id="catalogMenu">
                    <div class="catalog-menu">
                        <!-- Bán hàng cùng BestPrice -->
                        <a href="https://link-to-google-form.com" class="partner d-flex align-items-center gap-2 text-decoration-none">
                            Bán hàng cùng
                            <span class="highlight-text">BestPrice</span>
                        </a>

                        <!-- Nút Đăng nhập -->
                        <a class="btn-login d-flex align-items-center" href="/admin">
                            Đăng nhập
                            <i class="fa-solid fa-user ms-2"></i>
                        </a>
                    </div>
                </div>

                <!-- Hiển thị nút đầy đủ ở màn hình lớn -->
                <div class="col-md-4 d-none d-md-flex justify-content-end">
                    <!-- Bán hàng cùng BestPrice -->
                    <a href="https://link-to-google-form.com" class="partner d-flex flex-wrap align-items-center text-center gap-2 text-decoration-none m-3">
                        <span class="w-100">Bán hàng cùng</span>
                        <span class="highlight-text w-100">BestPrice</span>
                    </a>

                    <!-- Nút Đăng nhập -->
                    <a class="btn-login d-flex align-items-center" href="/admin">
                        Đăng nhập
                        <i class="fa-solid fa-user ms-2"></i>
                    </a>
                </div>
            </div>
        </div>
    </nav>

    <!-- Menu catalog nằm ngang dưới header -->
    <div class="container-fluid justify-content-center">
        <div class="d-flex align-items-center justify-content-start overflow-auto p-3" style="white-space: nowrap;">
            <a href="/phone" class="category-item text-center mx-4">
                <i class="fa-solid fa-mobile-screen-button d-block"></i>
                Điện thoại
            </a>
            <a href="/tablet" class="category-item text-center mx-4">
                <i class="fa-solid fa-tablet-screen-button d-block"></i>
                Máy tính bảng
            </a>
            <a href="/laptop" class="category-item text-center mx-2">
                <i class="fa-solid fa-laptop d-block"></i>
                Laptop
            </a>
            <a href="/accessory" class="category-item text-center mx-4">
                <i class="fa-solid fa-headphones d-block"></i>
                Phụ kiện
            </a>
            <a href="/medical" class="category-item text-center mx-4">
                <i class="fa-solid fa-kit-medical d-block"></i>
                Thiết bị y tế-sức khoẻ
            </a>
            <!-- Thêm các mục khác tương tự -->
        </div>
    </div>
</div>
</template>

<script>
export default {
    name: 'MainHeader',
}
</script>

<style scoped>
/* Để gạch chân chữ BestPrice và thay đổi màu */
.partner {
    color: white;
}

/* Để làm cho chữ BestPrice to và đậm hơn */

.highlight-text {
    position: relative;
    display: inline-block;
    font-weight: bold;
    /* Optional: làm cho chữ đậm hơn */
}

/* Để làm cho chữ BestPrice to, đậm và có gạch chân */
.logo {
    font-size: 1.rem;
    /* Điều chỉnh kích thước chữ */
    font-weight: bold;
    /* Làm cho chữ đậm */
    text-transform: uppercase;
    /* Biến chữ thành chữ hoa nếu cần */
    position: relative;
    /* Cần để định vị gạch chân */
    color: #fff;
    /* Màu chữ, có thể thay đổi theo ý muốn */
    text-decoration: none;
    /* Bỏ gạch chân mặc định của liên kết */
}
/* CSS */
.form-container {
    display: flex;
}

.custom-search-input {
    border-radius: 0; /* Loại bỏ bo góc ở phần giao */
    border-top-left-radius: .25rem; /* Bo góc trên bên trái */
    border-bottom-left-radius: .25rem; /* Bo góc dưới bên trái */
}

.custom-search-button {
    border-radius: 0; /* Loại bỏ bo góc ở phần giao */
    border-top-right-radius: .25rem; /* Bo góc trên bên phải */
    border-bottom-right-radius: .25rem; /* Bo góc dưới bên phải */
}

/* Để tạo gạch chân màu dưới chữ */
.logo::after {

    content: '';
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 5px;
    /* Độ dày của gạch chân */
    background-color: #FFD43B;
    /* Màu của gạch chân */
    border-radius: 2px;
    /* Bo góc gạch chân nếu cần */
    bottom: 5px;
}

/* Để làm cho biểu tượng lớn hơn */
.icon-large {
    font-size: 1.5rem;
    /* Tùy chỉnh kích thước lớn hơn */
}

/* Căn chỉnh các thành phần trong header */
.btn-icon {
    background: none;
    border: none;
    color: inherit;
    padding: 0;
    cursor: pointer;
    font-size: 1.5rem;
}

/* Điều chỉnh chiều cao và padding của navbar */
.custom-navbar {
    height: 80px;
    padding: 10px 20px;
}

/* Màu nền cho navbar */
.bg-color {
    height: auto;
    background-color: #2596be;
}

/* Nút tìm kiếm */
.btn-search {
    background-color: #906404;
    flex: 0 0 10%;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
}

.category-item {
    color: white;
    text-decoration: none;
    cursor: pointer;
    transition: color 0.3s ease;
}

.category-item.selected {
    color: #007bff;
    /* Màu chữ khi mục được chọn */
}

/* Input tìm kiếm */
.form-control {
    flex: 1;
    height: 40px;
}

/* Điều chỉnh kích thước phần chứa form */
.form-container {
    width: 50%;
    margin: 0 auto;
    box-sizing: border-box;
}

/* Nút đăng nhập */
.btn-login {
    text-decoration: none;
    color: white;
    font-size: 1.2rem;
}

/* Điều chỉnh menu catalog */
.catalog-menu {
    background-color: #fff;
    border-top: 1px solid #ddd;
    padding: 10px 0;
}

.catalog-menu .nav-link {
    color: #333;
    padding: 5px 10px;
    font-size: 1.1rem;
}

.catalog-menu .nav-link:hover {
    background-color: #f8f9fa;
    border-radius: 5px;
}

/* Điều chỉnh cho màn hình nhỏ */
@media (max-width: 767px) {
    .catalog-menu {
        background-color: #fff;
        padding: 10px;
    }

    .partner,
    .btn-login {
        display: block;
        padding: 10px;
    }

    .custom-navbar {
        height: auto;
        padding: 10px;
    }

    .form-container {
        width: 100%;
        margin: 0;
    }

    .btn-login {
        margin-top: 10px;
        width: 100%;
        text-align: center;
    }
}

/* Điều chỉnh cho màn hình lớn */
@media (min-width: 768px) {
    .form-container {
        width: 50%;
    }

    .container-fluid {
        display: flex;
    }

    .btn-login {
        width: auto;
        text-align: left;
    }
}
</style>
