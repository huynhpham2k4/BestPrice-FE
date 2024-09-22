<template>
    <div class="container">
        <div class="left">
            <img src="https://websosanh.vn/images/logo_websosanh_white.svg"/>
        </div>
        <div class="center">
            <input placeholder="Search product"/>
            <font-awesome-icon :icon="['fas', 'search']" class="icon"/>
        </div>
        <div class="right">
            <div>
                <font-awesome-icon icon="user-secret" />
            </div>
            <span>Bán hàng cùng Chí Thanh</span>
        </div>
    </div>
</template>
<script setup>

</script>
<style lang="scss" scoped>
    .container{
        background-color: #207bc1;
        height: 60px;
        display: flex;
        justify-content: space-between;
        .center{
            width: 40%;
            display: flex;
            align-items: center;
            position:relative;
            input{
                width: 100%;
                padding: 10px;
                border-radius: 20px;
                position: absolute;
                top: 10px;
                left: 0;
            }
            .icon{
                position: absolute;
                top: 20px;
                right: 5px;
            }
        }
    }
</style>