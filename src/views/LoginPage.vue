<template>
    <div class="LoginPage">
        <LoginRegister class="CardPos"></LoginRegister>
    </div>
</template>

<script>
    import LoginRegister from "../components/LoginRegister";
    export default {
        name: "LoginPage",
        components: {LoginRegister}
    }
</script>

<style scoped>
    .CardPos {
        position: absolute;
        right: 400px;
        top: 200px;
    }

    .LoginPage {
        background-image: url("../assets/LoginPage_BackGround.png");
        background-size: cover;
        position: absolute;
        top: 0;
        left: 0;
        height: 100%;
        width: 100%;
    }
</style>