<template>
    <div class="LoginPage">
        <el-row>
            <el-col :span="8" :offset="13">
                <LoginRegister class="CardPos"></LoginRegister>
            </el-col>

        </el-row>
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
        margin-top:25%;
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