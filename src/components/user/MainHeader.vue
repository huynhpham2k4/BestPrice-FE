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
                            Bán hàng cùng BestPrice
                        </a>

                        <!-- Nút Đăng nhập -->
                        <a class="btn-login d-flex align-items-center" href="/admin">
                            <span>Đăng nhập</span>
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
                        <i class="fa-solid fa-user ms-2 me-2"></i>
                        <span>Đăng nhập</span>
                    </a>
                </div>
            </div>
        </div>
    </nav>

    <!-- Menu catalog nằm ngang dưới header -->
    <div class="container-fluid justify-content-center" style="background-color:#304c74;">
        <div class="d-flex align-items-center justify-content-start overflow-auto p-2" style="white-space: nowrap; font-size: 1rem; font-family: 'Lato', sans-serif;">
            <a href="/phone" class="category-item text-center mx-4">
                <i class="fa-solid fa-mobile-screen-button d-block" style="font-size: 1.5rem;"></i> <!-- Kích thước icon theo rem -->
                <span style="font-size: 1rem; font-weight: 200;">Điện thoại</span> <!-- Font chữ lớn hơn và mềm mỏng -->
            </a>
            <a href="/tablet" class="category-item text-center mx-4">
                <i class="fa-solid fa-tablet-screen-button d-block" style="font-size: 1.5rem;"></i>
                <span style="font-size: 1rem; font-weight: 200;">Máy tính bảng</span>
            </a>
            <a href="/laptop" class="category-item text-center mx-2">
                <i class="fa-solid fa-laptop d-block" style="font-size: 1.5rem;"></i>
                <span style="font-size: 1rem; font-weight: 300;">Laptop</span>
            </a>
            <a href="/accessory" class="category-item text-center mx-4">
                <i class="fa-solid fa-headphones d-block" style="font-size: 1.5rem;"></i>
                <span style="font-size: 1rem; font-weight: 300;">Phụ kiện</span>
            </a>
            <a href="/medical" class="category-item text-center mx-4">
                <i class="fa-solid fa-kit-medical d-block" style="font-size: 1.5rem;"></i>
                <span style="font-size: 1rem; font-weight: 300;">Thiết bị y tế-sức khoẻ</span>
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
    border-radius: 0;
    /* Loại bỏ bo góc ở phần giao */
    border-top-left-radius: .25rem;
    /* Bo góc trên bên trái */
    border-bottom-left-radius: .25rem;
    /* Bo góc dưới bên trái */
}

.custom-search-button {
    border-radius: 0;
    /* Loại bỏ bo góc ở phần giao */
    border-top-right-radius: .25rem;
    /* Bo góc trên bên phải */
    border-bottom-right-radius: .25rem;
    /* Bo góc dưới bên phải */
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
    background-color: #fc6404;
    /* Màu của gạch chân */
    border-radius: 2px;
    /* Bo góc gạch chân nếu cần */
    bottom: 5px;
}

.logo {
    font-size: 26px;
    font-weight: 800;
}

span {
    font-size: 16px;
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
    background-color: #102c4c;
}

/* Nút tìm kiếm */
.btn-search {
    background-color: #ffffff;
    /* Nền trắng */
    flex: 0 0 10%;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0;
    /* Loại bỏ padding */
    margin: 0;
    border: none;
    /* Loại bỏ viền */
    outline: none;
    /* Loại bỏ outline khi focus */
    box-shadow: none;
    /* Loại bỏ bóng */
    cursor: pointer;
    /* Giữ con trỏ chỉ vào nút */
}

.btn-search:hover,
.btn-search:focus {
    background-color: #ffffff;
    /* Giữ nguyên nền trắng khi hover */
    border: none;
    /* Không viền khi hover */
    box-shadow: none;
    /* Không bóng khi hover */
    outline: none;
    /* Không outline khi focus */
}

/* Nút tìm kiếm */
.btn-search .fa-magnifying-glass {
    color: #fc6404
        /* Thay đổi thành màu bạn muốn, ở đây là màu đỏ */
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
    background-color: #282626;
    border-top: 1px solid #ddd;
    padding: 10px 0;
}

.catalog-menu .nav-link {
    color: #ffffff;
    padding: 5px 10px;
    font-size: 1.1rem;
}

.catalog-menu .nav-link:hover {
    background-color: #242526;
    border-radius: 5px;
}

/* Điều chỉnh cho màn hình nhỏ */
@media (max-width: 767px) {
    .catalog-menu {
        background-color: #102c4c;
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

    .logo {
        font-size: 20px;
        font-weight: 800;
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
