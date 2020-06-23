<template>
    <div class="LoginPage">
        <el-row>
            <el-col :xl="{span: 6, offset:4}" :lg="{span: 6, offset:4}" :md="{span: 6, offset:4}" :sm="{span:6, offset:4}" :xs="{span:16, offset:4}" class="ProjectDes">
                <h1>错影时光</h1>
                <h2>回味电影，珍惜时光</h2>
            </el-col>
            <el-col :xl="{span: 6, offset:14}" :lg="{span: 6, offset:14}" :md="{span: 9, offset:10}" :sm="{span:10, offset:10}" :xs="{span:16, offset:4}">
                <LoginRegister class="CardPos"></LoginRegister>
            </el-col>

        </el-row>
    </div>
</template>

<script>
    import LoginRegister from "../components/LoginRegister";
    export default {
        name: "LoginPage",
        components: {LoginRegister},
    }
</script>

<style scoped>
    .CardPos {
        margin-top:150px;
    }

    .ProjectDes {
        margin-top: 150px;
        position: absolute;
    }
    .ProjectDes h1{
        text-align: left;
    }

    .ProjectDes h2 {
        text-align: left;
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

    @media screen and (max-width: 768px){
        .ProjectDes {
            position: absolute;
            margin-top: 150px;
        }


        .CardPos {
            margin-top: 300px;
        }
    }
</style>